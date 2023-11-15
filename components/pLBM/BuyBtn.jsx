import { buyTokens } from "../../utils/smartContracts/pLBM/buyTokens";
import FailMessage from "../MessageBox/FailMessage.jsx";
import PendingMessage from "../MessageBox/PendingMessage.jsx";
import SuccessMessage from "../MessageBox/SuccessMessage.jsx";
import Loading from "./Loading";
import { useState } from "react";

const BuyBtn = ({ isValidStage, amount }) => {
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [polyScanURL, setPolyScanURL] = useState("");
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyTokens = async () => {
    await buyTokens(
      amount,
      setIsLoading,
      setShowPendingMessage,
      setShowFailMessage,
      setErrorMessage,
      setPolyScanURL,
      setShowSuccessMessage
    );
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showFailMessage ? (
        <FailMessage
          setShowFailMessage={setShowFailMessage}
          message={errorMessage}
          url={polyScanURL}
        />
      ) : null}

      {showPendingMessage ? (
        <PendingMessage messagge="Processing your investment..." />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          messagge="Success! Your investment has been processed. Exciting times ahead!"
          textBtn="Go to Dashboard"
          redirectURL="https://www.marketplace.libertum.io/mydashboard"
        />
      ) : null}
      <button
        className="p-5 drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] rounded-2xl text-2xl font-bold text-gray-800 hover:opacity-80 bg-slate-100 mx-auto"
        onClick={handleBuyTokens}
        disabled={!isValidStage}
        style={{ cursor: isValidStage ? "pointer" : "not-allowed" }}
      >
        Purchase
      </button>
    </>
  );
};

export default BuyBtn;
