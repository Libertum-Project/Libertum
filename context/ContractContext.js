'use client'
import { createContext } from "react";

const ContractContext = createContext({
  updateContractInfo: false,
  setUpdateContractInfo: () => {},
  switchToPolygonMainnet: () => {},
});

export default ContractContext;
