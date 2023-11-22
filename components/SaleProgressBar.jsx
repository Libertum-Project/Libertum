import { useState, useEffect } from "react";

const SaleProgressBar = ({ currentStage, remainingTokens, isValidStage }) => {
  const [progress, setProgress] = useState(0);

  const total = {
    Seed: 6000000,
    Whitelist: 10000000,
    Public: 46000000,
  };

  const {
    seedTokensRemaining,
    whitelistTokensRemaining,
    publicTokensRemaining,
  } = remainingTokens;

  const calculateProgress = () => {
    if (!isValidStage) {
      return 0;
    }

    switch (currentStage) {
      case "seed":
        return ((total.Seed - seedTokensRemaining) / total.Seed) * 100;
      case "whitelist":
        return (
          ((total.Whitelist - whitelistTokensRemaining) / total.Whitelist) * 100
        );
      case "public":
        return ((total.Public - publicTokensRemaining) / total.Public) * 100;
      default:
        return 0;
    }
  };

  useEffect(() => {
    setProgress(calculateProgress());
  }, [currentStage, total, remainingTokens, isValidStage]);

  return (
    isValidStage && (
      <div className="flex mb-5 h-8 rounded-3xl w-full  bg-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,.4)]">
        <div
          className="h-8 rounded-3xl bg-gradient-to-r from-[#c88648cc] via-[#e9c440cc] to-[#ffed4bcc]"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="text-red-800 font-semibold py-1 px-2">
          {progress.toFixed(2)}%
        </span>
      </div>
    )
  );
};

export default SaleProgressBar;
