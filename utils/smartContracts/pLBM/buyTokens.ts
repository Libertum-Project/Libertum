import { Contract } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import USDC_ABI from "../ABI/USDC.json";

const isTest: boolean = process.env.NEXT_PUBLIC_IS_TEST === "true" || false;

let pLBM_address: string;
let USDC_address: string;

let correctChainId: number;

if (isTest) {
  USDC_address = process.env.NEXT_PUBLIC_TEST_USDC_address!;
  pLBM_address = process.env.NEXT_PUBLIC_TEST_pLBM_address!;
  correctChainId = 80001;
} else {
  USDC_address = process.env.NEXT_PUBLIC_USDC_address!;
  pLBM_address = process.env.NEXT_PUBLIC_pLBM_address!;
  correctChainId = 137;
}

async function buyTokens(
  provider: any,
  lbmAmount: number,
  setIsLoading: (value: boolean) => void,
  setShowPendingMessage: (value: boolean) => void,
  setShowFailMessage: (value: boolean) => void,
  setErrorMessage: (value: string) => void,
  setPolyScanURL: (value: string) => void,
  setShowSuccessMessage: (value: boolean) => void,
  setUpdateContractInfo: (value: boolean) => void,
  setShowConnectToPolygonMessage: (value: boolean) => void,
  isConnected: boolean,
  chainId: number | undefined,
): Promise<void> {
  let transactionHash;
  setErrorMessage("");
  setPolyScanURL("");
  try {
    if (isConnected && chainId !== correctChainId) {
      setShowConnectToPolygonMessage(true);
      return;
    }
    setIsLoading(true);

    const signer: any = await provider.getSigner();
    const pLBM_contract: any = new Contract(pLBM_address, pLBM_ABI.abi, signer);
    const USDC_contract: any = new Contract(USDC_address, USDC_ABI.abi, signer);

    const currentStage = await pLBM_contract.currentStage();
    let price: number = 0;

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
      BigInt(lbmAmount * price),
    );

    const tx = await pLBM_contract
      .connect(signer)
      .buy(BigInt(lbmAmount * 10 ** 18), { gasLimit: 2000000 });

    transactionHash = tx.hash;

    setIsLoading(false);
    setShowPendingMessage(true);

    const transaction = await provider.getTransaction(transactionHash);
    await transaction.wait();
    setShowPendingMessage(false);
    setShowSuccessMessage(true);
    setUpdateContractInfo(true);
  } catch (error: any) {
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
    throw new Error(`Failed to buy pLBM: ${error}`);
  }
}

export { buyTokens };
