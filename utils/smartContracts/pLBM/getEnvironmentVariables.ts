export function getEnvironmentVariables() {
  const isTest: boolean = process.env.IS_TEST === "true" || false;

  let pLBM_address: string;
  let USDC_address: string;
  let correctChainId: number;
  let alchemy_node: string;

  if (isTest) {
    pLBM_address = process.env.TEST_pLBM_address!;
    USDC_address = process.env.TEST_USDC_address!;
    correctChainId = 80001;
    alchemy_node = process.env.TEST_ALCHEMY_NODE!;
  } else {
    pLBM_address = process.env.pLBM_address!;
    USDC_address = process.env.USDC_address!;
    correctChainId = 137;
    alchemy_node = process.env.ALCHEMY_NODE!;
  }
  const variables = {
    isTest,
    pLBM_address,
    USDC_address,
    correctChainId,
    alchemy_node,
  };

  return variables;
}
