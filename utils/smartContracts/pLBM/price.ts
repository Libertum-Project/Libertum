import { Contract, Provider, getDefaultProvider, formatUnits } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import { getEnvironmentVariables } from "./getEnvironmentVariables";

const { pLBM_address, alchemy_node } = getEnvironmentVariables();
const provider: Provider = getDefaultProvider(alchemy_node);

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
