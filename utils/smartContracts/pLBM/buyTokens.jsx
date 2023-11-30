import { ethers } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import USDC_ABI from "../ABI/USDC.json";
const USDC_address = process.env.NEXT_PUBLIC_USDC_address;
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;

async function buyTokens(
  provider,
  amount,
  setIsLoading,
  setShowPendingMessage,
  setShowFailMessage,
  setErrorMessage,
  setPolyScanURL,
  setShowSuccessMessage,
  setUpdateContractInfo,
) {
  let transactionHash;
  setErrorMessage(null);
  setPolyScanURL(null);
  try {
    if (window.ethereum) {
      setIsLoading(true);
      const signer = await provider.getSigner();
      const pLBM_contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        signer,
      );
      const USDC_contract = new ethers.Contract(
        USDC_address,
        USDC_ABI.abi,
        signer,
      );

      const [userAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // await window.ethereum.enable();
      // await USDC_contract.mint(userAddress, BigInt(amount * 10 ** 6));

      const currentStage = await pLBM_contract.currentStage();
      let price = null;

      if (currentStage == 1) {
        price = 60_000;
      } else if (currentStage == 3) {
        price = 72_000;
      } else if (currentStage == 5) {
        price = 80_000;
      } else {
        console.error("Invalid current stage");
      }

      await USDC_contract.connect(signer).approve(
        pLBM_address,
        BigInt(amount * price),
      );

      const tx = await pLBM_contract
        .connect(signer)
        .buy(BigInt(amount * 10 ** 18), { gasLimit: 2000000 });

      transactionHash = tx.hash;

      setIsLoading(false);
      setShowPendingMessage(true);

      const transaction = await provider.getTransaction(transactionHash);
      await transaction.wait();
      setShowPendingMessage(false);
      setShowSuccessMessage(true);
      setUpdateContractInfo(true);
    } else {
      console.error(
        "Please connect your wallet using MetaMask or a similar provider.",
      );
    }
  } catch (error) {
    if (
      error.message.includes("user rejected action") ||
      error.message.includes("user rejected transaction")
    ) {
      setErrorMessage(
        "It looks like you rejected this transaction. Don't miss out on the opportunity to buy pLBM!",
      );
      setPolyScanURL("");
    } else if (transactionHash) {
      setPolyScanURL(`https://mumbai.polygonscan.com/tx/${transactionHash}`);
      setErrorMessage("An error occurred while processing your request.");
      transactionHash = null;
    } else {
      setErrorMessage("Please Connect Your Wallet.");
    }

    console.error("Error buying tokens:", error);
    setIsLoading(false);
    setShowPendingMessage(false);
    setShowFailMessage(true);
  }
}

export { buyTokens };
