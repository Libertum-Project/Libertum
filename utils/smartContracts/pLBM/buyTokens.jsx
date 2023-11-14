import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
import USDC_ABI from '../ABI/USDC.json';
const USDC_address = process.env.NEXT_PUBLIC_USDC_address;
const pLBM_address = process.env.NEXT_PUBLIC_pLBM_address;

async function buyTokens(
  amount,
  setIsLoading,
  setShowPendingMessage,
  setShowFailMessage,
  setErrorMessage,
  setPolyScanURL,
  setShowSuccessMessage,
) {
  let transactionHash;
  try {
    if (window.ethereum) {
      setIsLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const pLBM_contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        signer,
      );
      const USDC_contract = new ethers.Contract(
        USDC_address,
        USDC_ABI.abi,
        signer,
      );

      const [userAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      await window.ethereum.enable();
      await USDC_contract.mint(userAddress, BigInt(amount * 10 ** 6));
      await USDC_contract.connect(signer).approve(
        pLBM_address,
        BigInt(amount * 10 ** 6),
      );

      const tx = await pLBM_contract
        .connect(signer)
        .buy(BigInt(amount * 10 ** 18), { gasLimit: 2000000 });

      transactionHash = tx.hash;

      setIsLoading(false);
      setShowPendingMessage(true);
      await tx.wait();
      setShowPendingMessage(false)
      setShowSuccessMessage(true)
    } else {
      console.error(
        'Please connect your wallet using MetaMask or a similar provider.',
      );
    }
  } catch (error) {
    if (error.message.includes('user rejected action')) {
      setErrorMessage(
        "It looks like you rejected this transaction. Don't miss out on the opportunity to buy pLBM!",
      );
      setPolyScanURL('')
    } else if (transactionHash) {
      setPolyScanURL(`https://mumbai.polygonscan.com/tx/${transactionHash}`);
      setErrorMessage('An error occurred while processing your request.');
    }

    console.error('Error buying tokens:', error);
    setIsLoading(false);
    setShowPendingMessage(false);
    setShowFailMessage(true);
  }
}

export { buyTokens };
