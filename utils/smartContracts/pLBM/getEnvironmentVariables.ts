export function getEnvironmentVariables() {
  const isTest: boolean = process.env.IS_TEST === "true" || false;
  const transakApiKey: string = process.env.TRANSAK_API_KEY!;

  let pLBM_address: string;
  let USDC_address: string;
  let correctChainId: number;
  let node: string;
  let scanURL: string;

  if (isTest) {
    pLBM_address = process.env.TEST_pLBM_address!;
    USDC_address = process.env.TEST_USDC_address!;
    correctChainId = 97;
    node = process.env.TEST_BLOCKCHAIN_NODE!;
    scanURL = "https://testnet.bscscan.com/tx/";
  } else {
    pLBM_address = process.env.pLBM_address!;
    USDC_address = process.env.USDC_address!;
    correctChainId = 56;
    node = process.env.BLOCKCHAIN_NODE!;
    scanURL = "https://bscscan.com";
  }

  const variables = {
    isTest,
    pLBM_address,
    USDC_address,
    correctChainId,
    node,
    transakApiKey,
    scanURL,
  };

  return variables;
}
