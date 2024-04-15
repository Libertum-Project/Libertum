import { Contract, getDefaultProvider } from 'ethers';
import { fetchEnvironmentVariables } from '@/utils/fetchEnvironmentVariables';
import ABI from '../ABI/USDC.json';

export async function getUserUSDTBalance(userAddress: string) {
  const { USDC_address, node } = await fetchEnvironmentVariables();
  try {
    const usdcContract = new Contract(USDC_address, ABI.abi);

    const balanceInWei = await usdcContract.balanceOf(userAddress);

    return null;
  } catch (error) {
    console.error('Error fetching user USDT balance:', error);
    return null;
  }
}
