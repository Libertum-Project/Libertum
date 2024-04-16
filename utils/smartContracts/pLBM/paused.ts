import { Contract, getDefaultProvider } from 'ethers';
import { getEnvironmentVariables } from './getEnvironmentVariables';
import pLBM_ABI from '../ABI/pLBM.json';

const { pLBM_address, node } = getEnvironmentVariables();

export async function isPaused(): Promise<boolean> {
  try {
    const contract = new Contract(pLBM_address, pLBM_ABI.abi);
    const isPaused = await contract.paused();
    return isPaused;
  } catch (error: any) {
    console.error('Error fetching SmartContract info:', error);
    throw new Error(`Failed to check contract pause status: ${error.message}`);
  }
}
