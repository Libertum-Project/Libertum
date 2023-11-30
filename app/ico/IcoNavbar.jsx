'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { getUserPlbmBalance } from 'utils/smartContracts/pLBM/getUserPlbmBalance';
import { getUserUSDCBalance } from 'utils/smartContracts/pLBM/getUserUsdcBalance';
import { useWeb3ModalSigner, useWeb3ModalAccount } from '@web3modal/ethers5/react';
import ContractContext from '../context/ContractContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ICONavbar = () => {
  const { updateContractInfo } = useContext(ContractContext);
  const [userPLBM, setUserPLBM] = useState(null);
  const [userUSDC, setUserUSDC] = useState(null);
  const web3signer = useWeb3ModalSigner().signer;
  const { address, isConnected } = useWeb3ModalAccount();

  // Whenever the web3modal account changes, fetch balances for current user
  useEffect(() => {
    if (isConnected) {
      switchToPolygonMumbai();
      fetchBalances(web3signer, address);
    } else {
      // Clear balances if user is disconnected
      setUserPLBM(null);
      setUserUSDC(null);
    }
  }, [isConnected, address, updateContractInfo]);

  const fetchBalances = async (signer, address) => {
    const userUSDCBalance = await getUserUSDCBalance(signer.provider, address);
    if (userUSDCBalance) {
      setUserUSDC(parseFloat(userUSDCBalance).toFixed(2));
    }
    const userPLBMBalance = await getUserPlbmBalance(signer.provider, address);
    if (userPLBMBalance) {
      setUserPLBM(parseFloat(userPLBMBalance).toFixed(2));
    }
  }

  const switchToPolygonMumbai = async () => {
    const polygonMumbaiData = {
      chainId: '0x13881',
      chainName: 'Polygon Mumbai Testnet',
      nativeCurrency: {
        name: 'Mumbai Matic',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    };
  
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: polygonMumbaiData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [polygonMumbaiData],
          });
        } catch (addError) {
          console.error('Error adding Polygon Mumbai:', addError);
        }
      } else {
        console.error('Error switching to Polygon Mumbai:', error);
      }
    }
  };
 
  return (
    <div className="absolute w-full top-22 sm:top-7 sm:right-52 z-10 md:py-4 2xl:right-64">
          <div className="flex  relative flex-wrap space-x-4  justify-center sm:justify-end">
            <div suppressHydrationWarning>
              <w3m-button />
              {userUSDC !== null && userPLBM !== null && (
                <div className="flex justify-center mt-2 space-x-4 items-center">
                  <div className="flex items-center space-x-2">
                    <Image src="/img/ico/usdc.png" alt="USDC" width={20} height={20} />
                    <span className="text-md font-semibold text-custom-blue">{userUSDC} USDC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src="/img/logo.svg" alt="Libertum" width={20} height={20} />
                    <span className="text-md font-semibold text-custom-blue">{userPLBM} pLBM</span>
                  </div>
                </div>
              )}
            </div>           
          </div>
    </div>
  );
};

export default ICONavbar;
