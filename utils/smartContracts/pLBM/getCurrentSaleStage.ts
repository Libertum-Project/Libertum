import { Contract, getDefaultProvider, Provider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const pLBM_address: string | undefined = process.env.NEXT_PUBLIC_pLBM_address;
const provider: Provider = getDefaultProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG",
);
const stageTextMap: Record<number, string> = {
  0: "inactive",
  1: "seed",
  2: "postSeed",
  3: "whitelist",
  4: "postWhitelist",
  5: "public",
  6: "ended",
};

export async function getCurrentSaleStage(): Promise<string | undefined> {
  try {
    const contract: Contract = new Contract(
      pLBM_address!,
      pLBM_ABI.abi,
      provider,
    );

    const currentStageNumber: number = await contract.currentStage();
    const currentStageText: string = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error("Error fetching current sale stage:", error);
  }
}
