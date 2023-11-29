import "./Join.scss";
const Join = ({ onScrollToTop }) => {
  return (
    <div className="join-container">
      <section>
        <h2>Join the $LBM presale</h2>
        <button
          className="p-5 rounded-xl text-2xl font-bold text-white hover:opacity-80 bg-gray-700 mx-auto"
          onClick={onScrollToTop}
        >
          Buy
        </button>
      </section>
      <section>
        <p>
          Participate effortlessly using BTC, ETH, BNB, USDC, USDT, XRP or ADA
          from your web3 compatible wallet. After the public sale, easily claim
          your $LBM tokens through our dedicated claim page. Don&apos;t pass up
          this incredible chance to get involved in fractionalized rental income
          tokenisation.
        </p>
      </section>
    </div>
  );
};

export default Join;
