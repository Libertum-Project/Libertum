'use client'
import { createContext } from "react";

const ContractContext = createContext({
  updateContractInfo: false,
  setUpdateContractInfo: () => {},
  switchToPolygonMainnet: () => {},
  switchToPolygonTestnet: () => {},
});

export default ContractContext;
