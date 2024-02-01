import { Contract, getDefaultProvider, formatUnits } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const pLBM_address: string = process.env.NEXT_PUBLIC_pLBM_address!;
const provider = getDefaultProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG",
);
const contract = new Contract(pLBM_address, pLBM_ABI.abi, provider);

export async function getPrice(stage: string): Promise<string> {
  try {
    const price = await contract[`${stage}Price`]();
    return formatUnits(price, 6);
  } catch (error) {
    console.error(`Error fetching price for stage ${stage}:`, error);
    throw new Error(`Failed to fetch price for stage: ${stage}`);
  }
}
