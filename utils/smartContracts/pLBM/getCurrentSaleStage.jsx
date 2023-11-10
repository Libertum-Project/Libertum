import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;
const stageTextMap = {
  0: 'inactive',
  1: 'seed',
  2: 'postSeed',
  3: 'whitelist',
  4: 'postWhitelist',
  5: 'public',
  6: 'ended',
};

export async function getCurrentSaleStage() {
  try {
    const provider = new ethers.JsonRpcProvider(
      'https://polygon-mumbai.g.alchemy.com/v2/1MGoef4uSxJ3hjS0wszW_hmrScMeLq6B',
    );

    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const currentStageNumber = await contract.currentStage();
    const currentStageText = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error('Error fetching current sale stage:', error);
  }
}
