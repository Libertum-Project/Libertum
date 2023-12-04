import css from "./MessageBox.module.css";
import polygon from "public/icons/polygon.svg";
import Image from "next/image";

const ConnectToPolygonMessage = ({ setShowConnectToPolygonMessage }) => {
  const handleContinue = (event) => {
    event.preventDefault();
    setShowConnectToPolygonMessage(false);
  };
  return (
    <div
      className={css.messageBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.messageBox}>
        <div className={css.header}>
          <Image src={polygon} alt="polygon network" width={50} height={50} />
          <h2>Connect To Polygon.</h2>
        </div>
        <div>
          <p>
            Looks like you're not connected to Polygon yet! To buy $LBM, just
            connect your wallet to the Polygon network.
          </p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ConnectToPolygonMessage;
