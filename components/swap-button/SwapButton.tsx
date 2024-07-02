import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useSigner,
  useBalance,
} from '@thirdweb-dev/react';

import { exchangeProxy, MAX_ALLOWANCE } from '@/constants';
import { toast } from '../ui/use-toast';
import { cn } from '@/lib/utils';
import { ConnectWalletButton } from '@/components/Navbar/WalletComponents/ConnectWalletButton';

interface Props {
  sellTokenAmount?: string;
  sellToken?: any;
  quote?: any;
  selectedToken?: string;
}

export const SwapButton = ({ sellTokenAmount, sellToken, quote, selectedToken }: Props) => {
  const walletAddress = useAddress();
  const { data: balance, isLoading: isBalanceLoading } = useBalance(sellToken.address);
  const { contract: sellTokenContract } = useContract(sellToken.address);
  const { data: tokenAllowance, isLoading: isContractReadLoading } = useContractRead(
    sellTokenContract as any,
    'allowance',
    [walletAddress, exchangeProxy],
  );

  const { mutateAsync } = useContractWrite(sellTokenContract as any, 'approve');
  const signer = useSigner();

  const handleSwap = async () => {
    const tx = await signer?.sendTransaction({
      to: quote?.to,
      data: quote?.data,
    });
    await tx?.wait();
  };

  const getButtonText = () => {
    if (balance?.displayValue && +balance.displayValue > 0) {
      if (tokenAllowance && tokenAllowance._hex === '0x00') {
        return `Approve ${selectedToken} Allowance`;
      }
      return 'Swap';
    }
    return `Insufficient ${selectedToken} balance`;
  };

  return (
    <div className="connetWalletButton w-full">
      {walletAddress ? (
        <Web3Button
          isDisabled={!sellTokenAmount || isContractReadLoading || isBalanceLoading}
          className="bg-[#7E54E8] hover:bg-[#7E54E8] w-full text-white uppercase rounded-[30px] disabled:pointer-events-none disabled:opacity-50"
          contractAddress={sellToken.address as any}
          action={
            tokenAllowance && tokenAllowance._hex == '0x0'
              ? () =>
                  mutateAsync({
                    args: [exchangeProxy, MAX_ALLOWANCE],
                  })
              : handleSwap
          }
          style={{
            width: '100%',
          }}
          onSuccess={() =>
            toast({
              title: 'Success',
              description: 'Transaction Completed!',
              className: cn(
                'top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0 bg-[#05844a] sm:top-0 text-white',
              ),
            })
          }
          onError={() =>
            toast({
              title: 'Error',
              description: 'There was an error, please try again!',
              variant: 'destructive',
              className: cn('top-[50px] right-0 flex fixed md:max-w-[420px] md:top-[120px] md:right-4 border-0'),
            })
          }
        >
          {getButtonText()}
        </Web3Button>
      ) : (
        <ConnectWalletButton />
      )}
    </div>
  );
};
