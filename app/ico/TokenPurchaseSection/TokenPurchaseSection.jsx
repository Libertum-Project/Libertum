"use client";
import { useEffect, useState } from "react";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import { getCurrentSaleStage } from "utils/smartContracts/pLBM/getCurrentSaleStage";
import { getRemainingTokens } from "utils/smartContracts/pLBM/getRemainingTokens";
import Timer from "./Timer.jsx";
//import SaleProgressBar from "./SaleProgressBar.jsx";
//import RemainingTokens from "./RemainingTokens.jsx";
import TokenInput from "./TokenInput.jsx";
import BuyBtn from "./BuyBtn.jsx";

const TokenPurchaseSection = ({ setUpdateUserBalance }) => {
  const web3signer = useWeb3ModalSigner().signer;
  const [provider, setProvider] = useState(null);
  const [currentStage, setCurrentStage] = useState(null);
  const [conversionRate, setConversionRate] = useState(0.06);

  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });

  const [lbmReceivedValue, setLbmReceivedValue] = useState(1000);
  const isValidStage =
    currentStage === "seed" ||
    currentStage === "whitelist" ||
    currentStage === "public";

  //Set Convertion Rate
  useEffect(() => {
    if (currentStage === "seed") {
      setConversionRate(0.06);
    } else if (currentStage === "whitelist") {
      setConversionRate(0.072);
    } else if (currentStage === "public") {
      setConversionRate(0.08);
    }
  }, [currentStage]);

  //Set Provider
  useEffect(() => {
    if (web3signer?.provider) {
      setProvider(web3signer.provider);
    }
  }, [web3signer]);

  // Fetch Contract Info
  useEffect(() => {
    async function fetchContractData() {
      const stage = await getCurrentSaleStage();
      setCurrentStage(stage);

      const tokens = await getRemainingTokens();
      setRemainingTokens(tokens);
    }

    fetchContractData();
  }, []);

  return (
    <div className="my-auto py-12 md:py-8 w-full md:w-auto md:mx-32 md:px-16 lg:px-8 lg:mx-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#2128f2cc] to-[#4092e9cc]  mx-auto md:rounded-2xl drop-shadow-[0_8px_4px_rgba(0,0,0,.4)]">
      <h2 className="pt-4 text-4xl px-8 text-center font-logo uppercase font-bold tracking-wide text-gray-800">
        Current Stage:{" "}
        <span style={{ display: "inline" }}>
          {currentStage !== null ? currentStage : "Loading..."}
        </span>
      </h2>

      <div className="px-4 md:px-0 py-8 lg:py-8">
        <Timer />
        {/*
        <SaleProgressBar
          currentStage={currentStage}
          remainingTokens={remainingTokens}
          isValidStage={isValidStage}
        />
        */}
        <div className="mx-auto text-center text-xl py-2 text-gray-800 lg:text-2xl">
          {/*
          <RemainingTokens
            currentStage={currentStage}
            remainingTokens={remainingTokens}
            isValidStage={isValidStage}
          />
        */}
          <span className="text-">1 LBM = {conversionRate} USDC</span>
        </div>
        <TokenInput
          conversionRate={conversionRate}
          lbmReceivedValue={lbmReceivedValue}
          setLbmReceivedValue={setLbmReceivedValue}
        />
      </div>
      <BuyBtn
        isValidStage={isValidStage}
        amount={lbmReceivedValue}
        provider={provider}
        setUpdateUserBalance={setUpdateUserBalance}
      />
    </div>
  );
};

export default TokenPurchaseSection;
