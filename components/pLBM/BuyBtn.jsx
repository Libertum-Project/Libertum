import { buyTokens } from '../../utils/smartContracts/pLBM/buyTokens';

const BuyBtn = ({
  isValidStage,
  amount,
  provider,
  setShowPendingMessage,
  setShowFailMessage,
  setShowSuccessMessage,
  setIsLoading,
  setErrorMessage,
  setPolyScanURL,
}) => {
  const handleBuyTokens = async () => {
    await buyTokens(
      amount,
      setIsLoading,
      setShowPendingMessage,
      setShowFailMessage,
      setErrorMessage,
      setPolyScanURL,
      setShowSuccessMessage,
      provider,
    );
  };

  return (
    <>
      <button
        className="p-5 drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] rounded-2xl text-2xl font-bold text-gray-800 hover:opacity-80 bg-slate-100 mx-auto"
        onClick={handleBuyTokens}
        disabled={!isValidStage}
        style={{ cursor: isValidStage ? 'pointer' : 'not-allowed' }}
      >
        Purchase
      </button>
    </>
  );
};

export default BuyBtn;
