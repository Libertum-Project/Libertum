"use client";
import { useState } from "react";
import ContractContext from "./ContractContext.js";
import MessageBoxProvider from "./MessageBoxProvider.js";
import { Web3ModalProvider } from "./Web3Modal.tsx";

const ContractProvider = ({ children }) => {
  const [updateContractInfo, setUpdateContractInfo] = useState(false);

  const switchToPolygonMainnet = async () => {
    const polygonMainnetData = {
      chainId: "0x89", // 137
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    };

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: polygonMainnetData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [polygonMainnetData],
          });
        } catch (addError) {
          console.error("Error adding Polygon Mainnet:", addError);
        }
      } else {
        console.error("Error switching to Polygon Mainnet:", error);
      }
    }
  };

  const switchToPolygonTestnet = async () => {
    const polygonTestnetData = {
      chainId: "0x13881", //80001 
      chainName: "Polygon Mumbai",
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-mumbai.g.alchemy.com/v2/ePeu2ooFujhSUo_Pqf5NS2uVDnz6ZiOO"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    };

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: polygonTestnetData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [polygonTestnetData],
          });
        } catch (addError) {
          console.error("Error adding Polygon Testnet:", addError);
        }
      } else {
        console.error("Error switching to Polygon Testnet:", error);
      }
    }
  };

  const value = {
    updateContractInfo,
    setUpdateContractInfo,
    switchToPolygonMainnet,
    switchToPolygonTestnet,
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
