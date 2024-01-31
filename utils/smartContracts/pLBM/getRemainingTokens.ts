import { Contract, getDefaultProvider, formatUnits } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";

const pLBM_address: string | undefined = process.env.NEXT_PUBLIC_pLBM_address;
const provider = getDefaultProvider(
  "https://polygon-mainnet.g.alchemy.com/v2/eYoj2pyMsQV15pjd0WADpjpY5TRJmucG",
);
const contract = new Contract(pLBM_address!, pLBM_ABI.abi, provider);

async function getSeedTokensRemaining(): Promise<string> {
  const seedTokensRemaining = await contract.seedTokensRemaining();
  return formatUnits(seedTokensRemaining, 18);
}

async function getWhitelistTokensRemaining(): Promise<string> {
  const whitelistTokensRemaining = await contract.whitelistTokensRemaining();
  return formatUnits(whitelistTokensRemaining, 18);
}

async function getPublicTokensRemaining(): Promise<string> {
  const publicTokensRemaining = await contract.publicTokensRemaining();
  return formatUnits(publicTokensRemaining, 18);
}

export async function getRemainingTokens(
  stage: string,
): Promise<string | undefined> {
  try {
    switch (stage) {
      case "seed":
        const seedTokensRemaining = await getSeedTokensRemaining();
        return parseFloat(seedTokensRemaining).toFixed(1);
      case "whitelist":
        const whitelistTokensRemaining = await getWhitelistTokensRemaining();
        return parseFloat(whitelistTokensRemaining).toFixed(1);
      case "public":
        const publicTokensRemaining = await getPublicTokensRemaining();
        return parseFloat(publicTokensRemaining).toFixed(1);
      default:
        console.error(`Invalid stage: ${stage}`);
        throw new Error(`Invalid stage: ${stage}`);
    }
  } catch (error) {
    console.error("Error fetching public tokens:", error);
    throw Error;
  }
}
