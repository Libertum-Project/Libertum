"use client";
import { type ReactElement, useContext } from "react";
import MessageBoxContext from "@/context/MessageBoxContext";
import ContractContext from "@/context/ContractContext";
import { buyTokens } from "@/utils/smartContracts/pLBM/buyTokens";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";

interface BuyButtonProps {
  lbmAmount: number;
  usdAmount: number;
}

export function BuyButton({
  lbmAmount,
  usdAmount,
}: BuyButtonProps): ReactElement {
  const {
    setShowPendingMessage,
    setShowFailMessage,
    setShowSuccessMessage,
    setIsLoading,
    setErrorMessage,
    setPolyScanURL,
    setShowConnectToPolygonMessage,
  } = useContext(MessageBoxContext);

  const { setUpdateContractInfo } = useContext(ContractContext);

  const { isConnected, chainId } = useWeb3ModalAccount();
  const { walletProvider }: any = useWeb3ModalProvider();
  const provider = new BrowserProvider(walletProvider);

  const handleBuyTokens = async () => {
    if (usdAmount >= 50) {
      await buyTokens(
        provider,
        lbmAmount,
        setIsLoading,
        setShowPendingMessage,
        setShowFailMessage,
        setErrorMessage,
        setPolyScanURL,
        setShowSuccessMessage,
        setUpdateContractInfo,
        setShowConnectToPolygonMessage,
        isConnected,
        chainId,
      );
    }
  };

  return (
    <button
      onClick={handleBuyTokens}
      title={
        usdAmount <= 50
          ? "To participate, the USDC Amount must be at least $50. Please enter a valid amount."
          : undefined
      }
    >
      Buy Now
    </button>
  );
}
