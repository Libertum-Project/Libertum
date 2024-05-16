'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useTokenBalance,
  useSigner,
} from '@thirdweb-dev/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { BigNumber } from '@ethersproject/bignumber';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { exchangeProxy, MAX_ALLOWANCE } from '@/constants';
import { createLookup } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { tokens } from '../../../constants/tokens';
import { useBlockchainSelection } from '../../providers/ThirdWebContextProvider';

const DEX_AGGREGATORS: any = {
  1: '0xd3f64BAa732061F8B3626ee44bab354f854877AC',
  56: '0x880E0cE34F48c0cbC68BF3E745F17175BA8c650e',
  137: '0x07d0ac7671D4242858D0cebcd34ec03907685947',
  43114: '0x1C7F7e0258c81CF41bcEa31ea4bB5191914Bf7D7',
  250: '0xBE2A77399Cde40EfbBc4e89207332c4a4079c83D',
  42161: '0x1C7F7e0258c81CF41bcEa31ea4bB5191914Bf7D7',
  10: '0xad1D43efCF92133A9a0f33e5936F5ca10f2b012E',
  8453: '0x4F68248ecB782647D1E5981a181bBe1bfFee1040',
};

const Swap = () => {
  const walletAddress = useAddress();
  const signer = useSigner();

  const [openSell, setOpenSell] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  const [quote, setQuote] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [txnHash, setHash] = useState('');

  const [exchangeProxy, setExchangeProxy] = useState<any>(DEX_AGGREGATORS[8453]);

  const [tokensToSet, setTokens] = useState([]);
  const [filteredTokens, setFilteredTokens] = useState([]);
  const { TOKENS_BY_SYMBOL } = createLookup(tokensToSet);
  const [sellToken, setSellToken] = useState(tokens[0]);
  const [sellTokenAmount, setSellTokenAmount] = useState('');
  const [buyToken, setBuyToken] = useState(tokens[1]);
  const [buyTokenAmount, setBuyTokenAmount] = useState('');
  const selectBlockchain = useBlockchainSelection();

  const { contract: sellTokenContract } = useContract(sellToken?.address);
  const { contract: buyTokenContract } = useContract(buyToken?.address);
  const { contract: dexContract } = useContract(exchangeProxy);
  const { data: sellTokenBalance, isLoading: sellTokenBalanceLoading } = useTokenBalance(
    sellTokenContract,
    walletAddress,
  );
  const { data: buyTokenBalance, isLoading: buyTokenBalanceLoading } = useTokenBalance(buyTokenContract, walletAddress);
  const { data: tokenAllowance, isLoading: contractReadLoading } = useContractRead(
    sellTokenContract as any,
    'allowance',
    [walletAddress, exchangeProxy],
  );

  const [chainId, setChainId] = useState(8453);
  const [selectedChainId, setSelectedChainId] = useState(8453);

  const fetchPriceData = async () => {
    setLoading(true);
    try {
      const formattedAmount = ethers.utils.parseUnits(sellTokenAmount, sellToken.tokenDecimals).toString();

      const response = await fetch(
        `/api/quote?srcToken=${sellToken.address}&destToken=${buyToken.address}&sellAmount=${formattedAmount}&chainId=${sellToken.chainId}&destChainId=${buyToken.chainId}&sender=${walletAddress}`,
      );
      const data = await response.json();

      if (data.status == 500 || data.length == 0) {
        toast({
          title: 'Error',
          description: 'Currently, no quotes availbable for this pair',
          className: cn(
            'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#ff5252] sm:top-0 text-white rounded-[5px]',
          ),
        });
        setSellTokenAmount('');
        setBuyTokenAmount('');
      }

      if (data.length > 0) {
        if (buyToken.chainId == sellToken.chainId) {
          setBuyTokenAmount(ethers.utils.formatUnits(data[0].toTokenAmount, buyToken.decimals));
        } else {
          setBuyTokenAmount(ethers.utils.formatUnits(data[0].srcTrade.toTokenAmount, buyToken.decimals));
        }
        setQuote(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const executeSwap = async () => {
    setLoading(true);
    try {
      let body;
      if (sellToken.chainId !== buyToken.chainId) {
        body = {
          transactionData: quote?.transactionData,
          nativeValue: quote?.nativeValue,
          account: walletAddress,
        };
      } else {
        body = {
          transactionData: quote?.transactionData,
          nativeValue: quote?.nativeValue,
          account: walletAddress,
          receiver: walletAddress,
          tradeType: quote?.tradeType,
        };
      }
      const response = await fetch(
        `/api/swap?chainId=${chainId}&destChainId=${buyToken.chainId}&contractVersion=${quote?.contractVersion}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );
      const data = await response.json();

      const tx = await signer?.sendTransaction({
        from: walletAddress,
        to: exchangeProxy,
        data: data.data,
        gasPrice: data.estimateGas,
      });
      const transaction = await tx?.wait();

      if (transaction?.transactionHash) {
        setHash(transaction.transactionHash);
        toast({
          title: 'Success',
          description: 'Your transaction was successful',
          className: cn(
            'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#00b3b5] sm:top-0 text-white rounded-[5px]',
          ),
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again',
        className: cn(
          'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#ff5252] sm:top-0 text-white rounded-[5px]',
        ),
      });
    } finally {
      setLoading(false);
      setSellTokenAmount('');
      setBuyTokenAmount('');
    }
  };

  const switchTokens = () => {
    const one = sellToken;
    const two = buyToken;
    setSellToken(two);
    setBuyToken(one);
    fetchPriceData();
  };

  useEffect(() => {
    if (buyToken && sellToken && sellTokenAmount.length > 0) {
      const timer = setTimeout(() => {
        fetchPriceData();
      }, 500);

      return () => clearTimeout(timer);
    }

    if (sellTokenAmount.length == 0) {
      setBuyTokenAmount('0.0');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellToken, buyToken, sellTokenAmount]);

  const { mutateAsync: approveTokenSpending } = useContractWrite(sellTokenContract, 'approve');

  function determineButtonState(
    sellToken: any,
    sellTokenAmount: any,
    sellTokenBalance: any,
    tokenAllowance: any,
    contractReadLoading: any,
  ) {
    let action = '';
    let isDisabled = true;

    if (!sellTokenAmount) {
      return {
        action: 'Set an amount',
        isDisabled: true,
      };
    }

    if (sellTokenAmount > +sellTokenBalance?.displayValue) {
      action = `Insufficient ${sellToken.symbol} balance`;
      isDisabled = true;
    } else if (tokenAllowance && (tokenAllowance as BigNumber).gte(BigNumber.from(sellTokenAmount))) {
      action = 'Swap';
      isDisabled = false;
    } else if (tokenAllowance == undefined || (tokenAllowance as BigNumber).lt(BigNumber.from(sellTokenAmount))) {
      action = `Approve ${sellToken.symbol}`;
      isDisabled = false;
    } else if (!sellTokenAmount) {
      action = 'Swap';
      isDisabled = true;
    }

    return { action, isDisabled };
  }

  const { action, isDisabled } = determineButtonState(
    sellToken,
    sellTokenAmount,
    sellTokenBalance,
    tokenAllowance,
    contractReadLoading,
  );

  const handleAction = () => {
    if (action === `Approve ${sellToken.symbol}`) {
      return approveTokenSpending({
        args: [exchangeProxy, MAX_ALLOWANCE],
      });
    } else if (action === 'Swap') {
      return executeSwap();
    }
  };

  const fetchTokens = async (chainId: any) => {
    try {
      const response = await fetch(
        `https://api.zcx.com/trade/v1/info/token/popular?from=0&to=100&chain_id=${chainId}`,
        {
          headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_UNIZEN_API_KEY as string,
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setTokens(data.tokens);
      } else {
        throw new Error('Failed to fetch tokens');
      }
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };
  const filterTokens = (chainId: any) => {
    const filtered = tokensToSet.filter((token: any) =>
      token.contracts.some((contract: any) => contract.chain_id === chainId),
    );
    setFilteredTokens(filtered);
  };
  const handleSelectBlockchain = (chainId: number) => {
    selectBlockchain(chainId);
    filterTokens(chainId);
    setChainId(chainId);
    setSelectedChainId(chainId);
    setExchangeProxy(DEX_AGGREGATORS[chainId]);
  };

  useEffect(() => {
    fetchTokens(chainId);
  }, [chainId]);

  return (
    <>
      <section className="relative">
        <Card className={`w-[360px] md:w-[480px] bg-[#fff] border-0`}>
          <CardHeader className="border-b-2 mb-2 p-2">
            <CardTitle className="text-black flex justify-between">
              <Image src="/assets/get-icon.png" alt="Get" width={150} height={150} />
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-montserrat mb-2">Sell</p>
                <Dialog open={openSell} onOpenChange={setOpenSell}>
                  <DialogTrigger asChild>
                    <div
                      className="assetOne text-white bg-[#00b3b5] cursor-pointer text-sm assetTwo p-2 rounded-full shadow flex gap-3 items-center font-semibold"
                      onClick={() => filterTokens(chainId)}
                    >
                      <Image src={sellToken?.logo} width={20} height={20} alt="Token image" />
                      {sellToken?.symbol}

                      <ChevronDownIcon className="font-semibold" />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-white max-h-72 rounded-[5px] min-h-[500px] overflow-hidden"
                    style={{
                      zIndex: 99,
                    }}
                    onEscapeKeyDown={() => setOpenSell(false)}
                  >
                    <div className="flex justify-between border-b-2 pb-3">
                      {[
                        { id: 1, icon: '/assets/chains/eth.svg' },
                        { id: 10, icon: '/assets/chains/op.svg' },
                        { id: 56, icon: '/assets/chains/bsc.svg' },
                        { id: 137, icon: '/assets/chains/polygon.svg' },
                        { id: 250, icon: '/assets/chains/fantom.svg' },
                        { id: 8453, icon: '/assets/chains/base.svg' },
                        { id: 42161, icon: '/assets/chains/arbitrum.svg' },
                        { id: 43114, icon: '/assets/chains/avax.svg' },
                      ].map((blockchain) => (
                        <Button
                          key={blockchain.id}
                          onClick={() => handleSelectBlockchain(blockchain.id)}
                          className="p-0"
                        >
                          <span
                            className={`shadow-md rounded-[5px] w-[30px] h-[30px] flex justify-center items-center ${
                              selectedChainId === blockchain.id ? 'bg-[#00b3b5]' : 'bg-white'
                            }`}
                          >
                            <Image src={blockchain.icon} width={20} height={20} alt="chain" />
                          </span>
                        </Button>
                      ))}
                    </div>

                    <div className="overflow-auto max-h-[500px]">
                      {filteredTokens
                        .filter((token: any) => token?.symbol !== buyToken?.symbol)
                        .map((token: any) => {
                          return (
                            <button
                              key={token?.name}
                              className="text-black px-2 py-4 cursor-pointer text-left flex items-center gap-2 hover:bg-[#e4e7eb] rounded-[5px] w-full"
                              onClick={() => {
                                const matchedContract = token.contracts.find((c: any) => c.chain_id === chainId);
                                const sellTokenData = {
                                  ...token,
                                  tokenDecimals: matchedContract && matchedContract.decimals,
                                  chainId: matchedContract && matchedContract.chain_id,
                                  address: matchedContract ? matchedContract.contract_address : 'No address found',
                                };
                                setSellToken(sellTokenData);
                                setOpenSell(false);
                              }}
                            >
                              <Image src={token?.logo} width={20} height={20} alt="Token" />
                              {token?.symbol}
                            </button>
                          );
                        })}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-montserrat text-[#9299a6] flex items-center">
                  Balance:-{' '}
                  {sellTokenBalanceLoading ? (
                    <Skeleton className="h-3 w-[50px] bg-black bg-opacity-5 rounded-[48px]" />
                  ) : (
                    sellTokenBalance?.displayValue.slice(0, 10)
                  )}
                </div>
              </div>
            </div>

            <div>
              <Input
                placeholder="0.0"
                className="bg-white border-0 text-black text-[36px] font-montserrat placeholder:text-gray-400 p-0 mt-3 mb-3"
                value={sellTokenAmount}
                onChange={(e) => setSellTokenAmount(e.target.value)}
              />
            </div>

            <button
              className="absolute top-[50%] left-[0] right-0 m-auto w-[30px] cursor-pointer p-2 bg-white rounded-full flex items-center justify-center"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                zIndex: 10,
                transform: 'translateY(-100%)',
              }}
              onClick={switchTokens}
            >
              <Image src="/assets/arrow-down-black.svg" width={20} height={20} alt="Token image" />
            </button>

            <hr />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm font-montserrat mb-2 mt-2">Buy</p>
                <Dialog open={openBuy} onOpenChange={setOpenBuy}>
                  <DialogTrigger asChild>
                    <div className="assetOne text-white bg-[#00b3b5] cursor-pointer text-sm assetTwo p-2 rounded-full shadow flex gap-3 items-center font-semibold">
                      <Image src={buyToken?.logo} width={20} height={20} alt="Token image" />
                      {buyToken?.symbol}

                      <ChevronDownIcon className="font-semibold" />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-white max-h-72 overflow-auto rounded-[5px] min-h-[400px]"
                    style={{
                      zIndex: 99,
                    }}
                    onEscapeKeyDown={() => setOpenBuy(false)}
                  >
                    <div className="flex justify-between border-b-2 pb-3">
                      {[
                        { id: 1, icon: '/assets/chains/eth.svg' },
                        { id: 10, icon: '/assets/chains/op.svg' },
                        { id: 56, icon: '/assets/chains/bsc.svg' },
                        { id: 137, icon: '/assets/chains/polygon.svg' },
                        { id: 250, icon: '/assets/chains/fantom.svg' },
                        { id: 8453, icon: '/assets/chains/base.svg' },
                        { id: 42161, icon: '/assets/chains/arbitrum.svg' },
                        { id: 43114, icon: '/assets/chains/avax.svg' },
                      ].map((blockchain) => (
                        <Button
                          key={blockchain.id}
                          onClick={() => handleSelectBlockchain(blockchain.id)}
                          className="p-0"
                        >
                          <span
                            className={`shadow-md rounded-[5px] w-[30px] h-[30px] flex justify-center items-center ${
                              selectedChainId === blockchain.id ? 'bg-[#00b3b5]' : 'bg-white'
                            }`}
                          >
                            <Image src={blockchain.icon} width={20} height={20} alt="chain" />
                          </span>
                        </Button>
                      ))}
                    </div>
                    <div className="overflow-auto max-h-[400px]">
                      {filteredTokens
                        .filter((token: any) => token?.symbol !== sellToken?.symbol)
                        .map((token: any) => {
                          return (
                            <button
                              key={token?.name}
                              className="text-black px-2 py-4 cursor-pointer text-left flex items-center gap-2 hover:bg-[#e4e7eb] rounded-[5px] w-full"
                              onClick={() => {
                                const matchedContract = token.contracts.find((c: any) => c.chain_id === chainId);
                                const buyTokenData = {
                                  ...token,
                                  chainId: matchedContract && matchedContract.chain_id,
                                  tokenDecimals: matchedContract && matchedContract.decimals,
                                  address: matchedContract ? matchedContract.contract_address : 'No address found',
                                };
                                setBuyToken(buyTokenData);
                                setOpenBuy(false);
                              }}
                            >
                              <Image src={token?.logo} width={20} height={20} alt="Token" />
                              {token?.symbol}
                            </button>
                          );
                        })}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-montserrat text-[#9299a6] mb-2 mt-2 flex items-center">
                  Balance:-{' '}
                  {buyTokenBalanceLoading ? (
                    <Skeleton className="h-3 w-[50px] bg-black bg-opacity-5 rounded-[48px]" />
                  ) : (
                    buyTokenBalance?.displayValue.slice(0, 10)
                  )}
                </div>
              </div>
            </div>

            <div className="inputs">
              {loading ? (
                <div className="h-10 w-full mt-3 mb-3 flex items-center">
                  <Skeleton className="h-5 w-[50%] bg-black bg-opacity-5 rounded-[48px]" />
                </div>
              ) : (
                <Input
                  placeholder="0.0"
                  className="bg-white border-0 text-black text-[36px] font-montserrat placeholder:text-gray-400 p-0 mt-3 mb-3"
                  value={buyTokenAmount}
                  disabled
                />
              )}
            </div>
            <hr />
          </CardContent>
          <CardFooter>
            <div className="connetWalletButton w-full mb-2">
              {walletAddress ? (
                <Web3Button
                  isDisabled={isDisabled}
                  className="bg-[#00b3b5] hover:bg-[#00b3b5] w-full text-white uppercase rounded-[30px] disabled:pointer-events-none disabled:opacity-50"
                  contractAddress={sellToken?.address}
                  action={handleAction}
                  style={{ width: '100%' }}
                >
                  {action}
                </Web3Button>
              ) : (
                <Link
                  href="/login"
                  className="flex justify-center items-center px-4 py-2 bg-libertumGreen rounded-[5px] border border-libertumGreen backdrop-blur-[10px] text-white gap-3 override-link"
                >
                  Connect Wallet
                </Link>
              )}
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Swap;
