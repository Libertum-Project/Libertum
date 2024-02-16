import { Contract, getDefaultProvider, Provider, formatUnits } from "ethers";
import { fetchEnvironmentVariables } from "@/utils/fetchEnvironmentVariables";
import ABI from "../ABI/USDC.json";

export async function getUserUSDTBalance(userAddress: string) {
  const { USDC_address, node } = await fetchEnvironmentVariables();
  try {
    const provider: Provider = getDefaultProvider(node);
    const usdcContract = new Contract(USDC_address, ABI.abi, provider);

    const balanceInWei = await usdcContract.balanceOf(userAddress);
    const userFriendlyBalance = parseFloat(formatUnits(balanceInWei, 6));
    return userFriendlyBalance;
  } catch (error) {
    console.error("Error fetching user USDT balance:", error);
    return null;
  }
}
