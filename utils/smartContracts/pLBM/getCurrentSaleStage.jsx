import { Contract, getDefaultProvider } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;
const stageTextMap = {
  0: "inactive",
  1: "seed",
  2: "postSeed",
  3: "whitelist",
  4: "postWhitelist",
  5: "public",
  6: "ended",
};

export async function getCurrentSaleStage() {
  try {
    const provider = new getDefaultProvider(
      "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG"
    );
    const contract = new Contract(pLBM_address, pLBM_ABI.abi, provider);

    const currentStageNumber = await contract.currentStage();
    const currentStageText = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error("Error fetching current sale stage:", error);
  }
}
