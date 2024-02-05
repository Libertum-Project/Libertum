import { Contract, getDefaultProvider, Provider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const isTest: boolean = process.env.NEXT_PUBLIC_IS_TEST === "true" || false;

let pLBM_address: string;
let alchemy_node: string;

if (isTest) {
  pLBM_address = process.env.NEXT_PUBLIC_TEST_pLBM_address!;
  alchemy_node = process.env.NEXT_PUBLIC_TEST_ALCHEMY_NODE!;
} else {
  pLBM_address = process.env.NEXT_PUBLIC_pLBM_address!;
  alchemy_node = process.env.NEXT_PUBLIC_ALCHEMY_NODE!;
}

const provider: Provider = getDefaultProvider(alchemy_node);

export async function isPaused(): Promise<boolean> {
  try {
    const contract = new Contract(pLBM_address, pLBM_ABI.abi, provider);
    const isPaused = await contract.paused();
    return isPaused;
  } catch (error: any) {
    console.error("Error fetching SmartContract info:", error);
    throw new Error(`Failed to check contract pause status: ${error.message}`);
  }
}
