import { ethers } from 'ethers';
import USDC_ABI from '../ABI/USDC.json';
const USDC_address = process.env.NEXT_PUBLIC_USDC_address;

export async function getUserUSDCBalance(provider, address) {
  try {
    const usdcContract = new ethers.Contract(
      USDC_address,
      USDC_ABI.abi,
      provider,
    );

    const balanceInWei = await usdcContract.balanceOf(address);
    const userFriendlyBalance = ethers.utils.formatUnits(balanceInWei, 6);

    return userFriendlyBalance;
  } catch (error) {
    console.error('Error fetching user USDC balance:', error);
    return null;
  }
}
