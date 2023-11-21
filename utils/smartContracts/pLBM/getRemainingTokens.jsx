import { ethers } from "ethers";
import pLBM_ABI from "../ABI/pLBM.json";
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;

export async function getRemainingTokens() {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/1MGoef4uSxJ3hjS0wszW_hmrScMeLq6B",
    );
    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const seedTokensRemaining = await contract.seedTokensRemaining();
    const whitelistTokensRemaining = await contract.whitelistTokensRemaining();
    const publicTokensRemaining = await contract.publicTokensRemaining();

    const seedTokensRemainingUserFriendly = ethers.utils.formatUnits(
      seedTokensRemaining,
      18,
    );

    const whitelistTokensRemainingUserFriendly = ethers.utils.formatUnits(
      whitelistTokensRemaining,
      18,
    );

    const publicTokensRemainingUserFriendly = ethers.utils.formatUnits(
      publicTokensRemaining,
      18,
    );
    return {
      seedTokensRemaining: seedTokensRemainingUserFriendly,
      whitelistTokensRemaining: whitelistTokensRemainingUserFriendly,
      publicTokensRemaining: publicTokensRemainingUserFriendly,
    };
  } catch (error) {
    console.error("Error fetching remaining tokens:", error);
    return {
      error: "Error fetching remaining tokens",
    };
  }
}
