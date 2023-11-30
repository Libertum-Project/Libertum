import { useContext } from "react";
import { buyTokens } from "utils/smartContracts/pLBM/buyTokens";
import MessageBoxContext from "app/context/MessageBoxContext";
import ContractContext from "../../context/ContractContext";

const BuyBtn = ({ isValidStage, amount, provider }) => {
  const {
    setShowPendingMessage,
    setShowFailMessage,
    setShowSuccessMessage,
    setIsLoading,
    setErrorMessage,
    setPolyScanURL,
  } = useContext(MessageBoxContext);

  const { setUpdateContractInfo } = useContext(ContractContext);

  const handleBuyTokens = async () => {
    await buyTokens(
      provider,
      parseInt(amount),
      setIsLoading,
      setShowPendingMessage,
      setShowFailMessage,
      setErrorMessage,
      setPolyScanURL,
      setShowSuccessMessage,
      setUpdateContractInfo,
    );
  };

  return (
    <div className="lg:mx-auto relative flex w-full">
      <button
        className="p-5 drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] rounded-2xl text-2xl font-bold text-gray-800 hover:opacity-80 bg-slate-100 mx-auto"
        onClick={handleBuyTokens}
        disabled={!isValidStage}
        style={{ cursor: isValidStage ? "pointer" : "not-allowed" }}
      >
        Purchase
      </button>
    </div>
  );
};

export default BuyBtn;
