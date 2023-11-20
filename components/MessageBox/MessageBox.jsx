import { useContext } from "react";
import MessageBoxContext from "../../contexts/MessageBoxContext";
import Loading from "./Loading";
import PendingMessage from "./PendingMessage";
import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";

const MessageBox = () => {
  const {
    isLoading,
    showFailMessage,
    setShowFailMessage,
    errorMessage,
    polyScanURL,
    showPendingMessage,
    showSuccessMessage,
    setShowSuccessMessage,
  } = useContext(MessageBoxContext);

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showFailMessage ? (
        <FailMessage
          setShowFailMessage={setShowFailMessage}
          message={errorMessage}
          url={polyScanURL}
        />
      ) : null}

      {showPendingMessage ? (
        <PendingMessage messagge="Processing your investment..." />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          messagge="Success! Your investment has been processed. Exciting times ahead!"
          textBtn="Go to Dashboard"
          redirectURL="https://www.marketplace.libertum.io/mydashboard"
        />
      ) : null}
    </>
  );
};

export default MessageBox;
