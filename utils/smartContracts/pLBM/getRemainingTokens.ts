import { Contract, getDefaultProvider, formatUnits } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const pLBM_address: string = process.env.NEXT_PUBLIC_pLBM_address!;
const provider = getDefaultProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG",
);
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
