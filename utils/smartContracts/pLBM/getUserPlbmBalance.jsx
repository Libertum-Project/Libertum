import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;

export async function getUserPlbmBalance(provider) {
  try {
    const [userAddress] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const balanceWei = await contract.balanceOf(userAddress);
    const balanceUserFriendly = parseInt(balanceWei / BigInt(10 ** 18));
    return balanceUserFriendly;
  } catch (error) {
    console.error('Error fetching user balance:', error);
    return null;
  }
}
