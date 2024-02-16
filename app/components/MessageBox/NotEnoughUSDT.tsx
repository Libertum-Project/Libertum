import css from "./MessageBox.module.css";
import USDT from "@/public/assets/USDT.png";
import Image from "next/image";

const NotEnoughUSDT = ({ setShowNotEnoughUSDT }: any) => {
  const handleContinue = (event: any) => {
    event.preventDefault();
    setShowNotEnoughUSDT(false);
  };

  const handleErrorBoxClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      className={css.notEnoughContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.notEnough} onClick={handleErrorBoxClick}>
        <div className={css.header}>
          <Image src={USDT} alt="error" width={32} height={32} />
          <h2>Insufficient Balance</h2>
        </div>
        <div>
          <p>You do not have enough USDT to complete this transaction.</p>
        </div>
        <div className={css.URL}>
          <a href="#" target="_blank">
            Click here to buy some USDT
          </a>
        </div>
        <button
          onClick={(event) => {
            handleContinue(event);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NotEnoughUSDT;
