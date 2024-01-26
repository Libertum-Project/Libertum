'use client'

import { createContext } from "react";

interface MessageBoxContextProps {
  showFailMessage: boolean;
  setShowFailMessage: (value: boolean) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
  polyScanURL: string;
  setPolyScanURL: (value: string) => void;
  showPendingMessage: boolean;
  setShowPendingMessage: (value: boolean) => void;
  showSuccessMessage: boolean;
  setShowSuccessMessage: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  showConnectToPolygonMessage: boolean;
  setShowConnectToPolygonMessage: (value: boolean) => void;
}

const MessageBoxContext = createContext<MessageBoxContextProps>({
  showFailMessage: false,
  setShowFailMessage: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  polyScanURL: "",
  setPolyScanURL: () => {},
  showPendingMessage: false,
  setShowPendingMessage: () => {},
  showSuccessMessage: false,
  setShowSuccessMessage: () => {},
  isLoading: false,
  setIsLoading: () => {},
  showConnectToPolygonMessage: false,
  setShowConnectToPolygonMessage: () => {},
});

export default MessageBoxContext;
