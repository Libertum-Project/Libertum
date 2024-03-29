"use client";
import { type ReactElement, useContext, useEffect, useState } from "react";
/*
import Image from "next/image";
import coin from "@/public/assets/coin.svg";
import arrow from "@/public/assets/leftArrow.svg";
 */
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

export function BuyWithCryptoButton({
  lbmAmount,
  usdAmount,
}: BuyButtonProps): ReactElement {
  const {
    setShowPendingMessage,
    setShowFailMessage,
    setShowSuccessMessage,
    setIsLoading,
    setErrorMessage,
    setNetworkScanURL,
    setShowConnectToNetworkMessage,
    setShowNotEnoughUSDT,
    setShowConnectWallet,
  } = useContext(MessageBoxContext);

  const { setUpdateContractInfo } = useContext(ContractContext);
  const [buttonReason, setButtonReason] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { isConnected, chainId } = useWeb3ModalAccount();
  const { walletProvider }: any = useWeb3ModalProvider();
  const provider = new BrowserProvider(walletProvider);

  const handleBuyTokens = async () => {
    if (usdAmount >= 50) {
      const fetchEnvironmentVariables = async () => {
        try {
          const response = await fetch(
            "/api/smartcontract?function=getEnvironmentVariables",
            {
              method: "GET",
              cache: "no-store",
            },
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();

          return result;
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      };

      const { pLBM_address, USDC_address, correctChainId, scanURL } =
        await fetchEnvironmentVariables();

      await buyTokens(
        pLBM_address,
        USDC_address,
        correctChainId,
        provider,
        lbmAmount,
        setIsLoading,
        setShowPendingMessage,
        setShowFailMessage,
        setErrorMessage,
        setNetworkScanURL,
        scanURL,
        setShowSuccessMessage,
        setUpdateContractInfo,
        setShowConnectToNetworkMessage,
        isConnected,
        chainId,
        setShowNotEnoughUSDT,
        setShowConnectWallet,
      );
    }
  };

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await fetch(
          `/api/smartcontract?function=arePurchaseRequirementsSatisfied&amount=${usdAmount}`,
          {
            method: "GET",
            cache: "no-store",
          },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setButtonReason(result.reason);
        setIsButtonDisabled(!result.arePurchaseRequirementsSatisfied);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchRequirements();
  }, [usdAmount]);

  return (
    <button
      onClick={handleBuyTokens}
      title={buttonReason}
      disabled={isButtonDisabled}
    >
      Buy Now
      {/*
      <div>
        <Image src={coin} alt="wallet" width={24} height={24} />
        <p>Buy With Crypto</p>
      </div>
      <Image src={arrow} alt="coin" width={24} height={24} />
        */}
    </button>
  );
}
