import { Contract } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import USDC_ABI from "../ABI/USDC.json";
import { getUserUSDTBalance } from "./getUserUSDTBalance";

/**
 * Function to facilitate the purchase of pLBM tokens with USDC.
 * @param pLBM_address - The address of the pLBM token contract.
 * @param USDC_address - The address of the USDC token contract.
 * @param correctChainId - The correct chain ID for the network.
 * @param provider - The ethers provider object.
 * @param lbmAmount - The amount of pLBM tokens to buy.
 * @param setIsLoading - Function to set loading state.
 * @param setShowPendingMessage - Function to show pending transaction message.
 * @param setShowFailMessage - Function to show failed transaction message.
 * @param setErrorMessage - Function to set error message.
 * @param setNetworkScanURL - Function to set URL for transaction scan.
 * @param scanURL - The base URL for transaction scan.
 * @param setShowSuccessMessage - Function to show success message.
 * @param setUpdateContractInfo - Function to update contract information.
 * @param setShowConnectToNetworkMessage - Function to show connect to correct network message.
 * @param isConnected - Boolean indicating if the user is connected to a wallet.
 * @param chainId - The current chain ID.
 * @param setShowNotEnoughUSDT - Function to show message when user has insufficient USDT balance.
 * @returns Promise<void>
 */

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
  scanURL: string,
  setShowSuccessMessage: (value: boolean) => void,
  setUpdateContractInfo: (value: boolean) => void,
  setShowConnectToNetworkMessage: (value: boolean) => void,
  isConnected: boolean,
  chainId: number | undefined,
  setShowNotEnoughUSDT: (value: boolean) => void,
  setShowConnectWallet: (value: boolean) => void,
): Promise<void> {
  let transactionHash;
  setErrorMessage("");
  setNetworkScanURL("");
  try {
    if (!isConnected) {
      setShowConnectWallet(true);
      return;
    }
    // Check if user is connected to the correct Network.
    if (chainId !== correctChainId) {
      setShowConnectToNetworkMessage(true);
      return;
    }
    setIsLoading(true);

    const signer: any = await provider.getSigner();
    const pLBM_contract: any = new Contract(pLBM_address, pLBM_ABI.abi, signer);
    const USDC_contract: any = new Contract(USDC_address, USDC_ABI.abi, signer);

    // Determine price based on current stage.
    const currentStage = await pLBM_contract.currentStage();
    let price: any = 0;
    if (currentStage == 1) {
      price = (66 * 10 ** 18) / 1000;
    } else if (currentStage == 3) {
      price = (72 * 10 ** 18) / 1000;
    } else {
      console.error("Invalid current stage");
    }

    // Check if the user has enough USDT balance to buy pLBM tokens.
    const userAddress = signer.address;
    const userUsdtBalance: number | null =
      await getUserUSDTBalance(userAddress);
    const usdAmount = (lbmAmount * price) / 10 ** 18;
    console.log(`User USDT Balance: ${userUsdtBalance} USDT`);
    console.log(`Required USD Amount to Buy pLBM Tokens: ${usdAmount} USD`);
    if (usdAmount > userUsdtBalance!) {
      setShowNotEnoughUSDT(true);
      setIsLoading(false);
      return;
    }

    // Approve USDC transfer to pLBM contract.
    await USDC_contract.connect(signer).approve(
      pLBM_address,
      BigInt(lbmAmount * price) + BigInt(0.1 * 10 ** 18),
    );

    // Execute buy transaction for pLBM tokens.
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
