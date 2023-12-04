import { useContext } from "react";
import { buyTokens } from "utils/smartContracts/pLBM/buyTokens";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
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
    setShowConnectToPolygonMessage,
  } = useContext(MessageBoxContext);

  const { isConnected, chainId } = useWeb3ModalAccount();
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
      setShowConnectToPolygonMessage,
      isConnected,
      chainId,
    );
  };

  return (
    <div className="lg:mx-auto relative flex flex-col items-center justify-center w-full">
      <button
        className="p-5 drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] rounded-2xl text-2xl font-bold text-gray-800 hover:opacity-80 bg-slate-100 mx-auto"
        onClick={handleBuyTokens}
        disabled={!isValidStage}
        style={{ cursor: isValidStage ? "pointer" : "not-allowed" }}
      >
        Purchase
      </button>

      <a
        href="https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&swapIndex=0"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-white-500 text-white underline-offset-4 cursor-pointer mt-4"
      >
        Buy UDSC.e
      </a>
    </div>
  );
};

export default BuyBtn;
