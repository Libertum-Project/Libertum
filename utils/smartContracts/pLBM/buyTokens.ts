import { Contract } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import USDC_ABI from "../ABI/USDC.json";

async function buyTokens(
  pLBM_address: string,
  USDC_address: string,
  correctChainId: number,
  provider: any,
  lbmAmount: number,
  setIsLoading: (value: boolean) => void,
  setShowPendingMessage: (value: boolean) => void,
  setShowFailMessage: (value: boolean) => void,
  setErrorMessage: (value: string) => void,
  setNetworkScanURL: (value: string) => void,
  scanURL:string,
  setShowSuccessMessage: (value: boolean) => void,
  setUpdateContractInfo: (value: boolean) => void,
  setShowConnectToNetworkMessage: (value: boolean) => void,
  isConnected: boolean,
  chainId: number | undefined,
): Promise<void> {
  let transactionHash;
  setErrorMessage("");
  setNetworkScanURL("");
  try {
    if (isConnected && chainId !== correctChainId) {
      setShowConnectToNetworkMessage(true);
      return;
    }
    setIsLoading(true);

    const signer: any = await provider.getSigner();
    const pLBM_contract: any = new Contract(pLBM_address, pLBM_ABI.abi, signer);
    const USDC_contract: any = new Contract(USDC_address, USDC_ABI.abi, signer);

    const currentStage = await pLBM_contract.currentStage();
    let price: number = 0;

    if (currentStage == 1) {
      price = 66_000;
    } else if (currentStage == 3) {
      price = 72_000;
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
      setNetworkScanURL("");
    } else if (transactionHash) {
      setNetworkScanURL(`${scanURL}${transactionHash}`);
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
