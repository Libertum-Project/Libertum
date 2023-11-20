import { useState } from "react";
import MessageBoxContext from "./MessageBoxContext";

const MessageBoxProvider = ({ children }) => {
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [polyScanURL, setPolyScanURL] = useState("");
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    showFailMessage,
    setShowFailMessage,
    errorMessage,
    setErrorMessage,
    polyScanURL,
    setPolyScanURL,
    showPendingMessage,
    setShowPendingMessage,
    showSuccessMessage,
    setShowSuccessMessage,
    isLoading,
    setIsLoading,
  };

  return (
    <MessageBoxContext.Provider value={value}>
      {children}
    </MessageBoxContext.Provider>
  );
};

export default MessageBoxProvider;
