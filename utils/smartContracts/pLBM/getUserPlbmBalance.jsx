import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;

export async function getUserPlbmBalance(provider, address) {
  try {
    const plbmContract = new ethers.Contract(
      pLBM_address,
      pLBM_ABI.abi,
      provider
    );

    const balanceInWei = await plbmContract.balanceOf(address);
    const userFriendlyBalance = ethers.utils.formatUnits(balanceInWei, 6);

    return userFriendlyBalance;
  } catch (error) {
    console.error('Error fetching user balance:', error);
    return null;
  }
}
