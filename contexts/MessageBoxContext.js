import React, { createContext, useState } from "react";

const MessageBoxContext = createContext({
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
});

export default MessageBoxContext;
