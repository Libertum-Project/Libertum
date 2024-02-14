import { Contract, getDefaultProvider, Provider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
import { getEnvironmentVariables } from "./getEnvironmentVariables";

const { pLBM_address, node } = getEnvironmentVariables();
const provider: Provider = getDefaultProvider(node);
const stageTextMap: Record<number, string> = {
  0: "inactive",
  1: "publicOne",
  2: "postPublicOne",
  3: "publicTwo",
  4: "Ended",
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
