import { Contract, getDefaultProvider, Provider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import { getEnvironmentVariables } from "./getEnvironmentVariables";

const { pLBM_address, alchemy_node } = getEnvironmentVariables();
const provider: Provider = getDefaultProvider(alchemy_node);
const stageTextMap: Record<number, string> = {
  0: "inactive",
  1: "seed",
  2: "postSeed",
  3: "whitelist",
  4: "postWhitelist",
  5: "public",
  6: "ended",
};

export async function getCurrentSaleStage(): Promise<string> {
  try {
    const contract: Contract = new Contract(
      pLBM_address,
      pLBM_ABI.abi,
      provider,
    );

    const currentStageNumber: number = await contract.currentStage();
    const currentStageText: string = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error("Error fetching current sale stage:", error);
    throw new Error("Failed to fetch current sale stage");
  }
}
