import { Contract, Provider, getDefaultProvider, formatUnits } from "ethers";
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
const contract = new Contract(pLBM_address, pLBM_ABI.abi, provider);

export async function getRemainingTokens(stage: string): Promise<string> {
  try {
    const remainingTokens = await contract[`${stage}TokensRemaining`]();
    const parsedRemainingTokens = parseFloat(formatUnits(remainingTokens, 18));
    return parsedRemainingTokens.toFixed(1);
  } catch (error) {
    console.error(`Error fetching remaining tokens for stage ${stage}:`, error);
    throw new Error(`Failed to fetch remaining tokens for stage: ${stage}`);
  }
}
