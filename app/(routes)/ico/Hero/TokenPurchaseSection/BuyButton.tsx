"use client";
import { type ReactElement, useContext, useEffect, useState } from "react";
import MessageBoxContext from "@/context/MessageBoxContext";
import { arePurchaseRequirementsSatisfied } from "@/utils/smartContracts/pLBM/areConditionsMetForPurchase";
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
  const [buttonReason, setButtonReason] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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

  useEffect(() => {
    const fetchRequirements = async () => {
      const purchaseRequirementsResult =
        await arePurchaseRequirementsSatisfied(usdAmount);
      setButtonReason(purchaseRequirementsResult.reason);
      setIsButtonDisabled(
        !purchaseRequirementsResult.arePurchaseRequirementsSatisfied,
      );
    };

    fetchRequirements();
  }, []);

  return (
    <button
      onClick={handleBuyTokens}
      title={buttonReason}
      disabled={isButtonDisabled}
    >
      Buy Now
    </button>
  );
}
