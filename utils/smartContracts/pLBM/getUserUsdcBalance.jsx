import { ethers } from 'ethers';
import USDC_ABI from '../ABI/USDC.json';
const USDC_address = process.env.NEXT_PUBLIC_USDC_address;

export async function getUserUSDCBalance(provider) {
  try {
    const [userAddress] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    const usdcContract = new ethers.Contract(
      USDC_address,
      USDC_ABI.abi,
      provider,
    );

    const balanceWei = await usdcContract.balanceOf(userAddress);
    const balanceUserFriendly = parseInt(
        balanceWei / BigInt(10 ** 6),
      );

    return balanceUserFriendly;
  } catch (error) {
    console.error('Error fetching user USDC balance:', error);
    return null;
  }
}
