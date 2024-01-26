"use client";
import { useState } from "react";
import ContractContext from "./ContractContext.js";
import MessageBoxProvider from "./MessageBoxProvider.js";
import { Web3ModalProvider } from "./Web3Modal.tsx";

const ContractProvider = ({ children }) => {
  const [updateContractInfo, setUpdateContractInfo] = useState(false);

  const value = {
    updateContractInfo,
    setUpdateContractInfo,
  };

  return (
    <Web3ModalProvider>
      <MessageBoxProvider>
        <ContractContext.Provider value={value}>
          {children}
        </ContractContext.Provider>
      </MessageBoxProvider>
    </Web3ModalProvider>
  );
};

export default ContractProvider;
