import { Contract, getDefaultProvider, Provider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const pLBM_address: string = process.env.NEXT_PUBLIC_pLBM_address!;
const provider: Provider = getDefaultProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG",
);

export async function isPaused(): Promise<boolean> {
  try {
    return await new Contract(pLBM_address, pLBM_ABI.abi, provider).paused();
  } catch (error: any) {
    console.error("Error fetching SmartContract info:", error);
    throw new Error(`Failed to check contract pause status: ${error.message}`);
  }
}
