import Background from "../components/background";
import ICONavbar from "../components/icoNavbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getCurrentSaleStage } from "../utils/smartContracts/pLBM/getCurrentSaleStage";
import { getRemainingTokens } from "../utils/smartContracts/pLBM/getRemainingTokens";
import PresaleGrid from "../components/IcoPage/PresaleGrid";
import AllocationChart from "../components/IcoPage/AllocationChart";
import GridInfoSection from "../components/gridInfoSection";
import Roadmap from "../components/IcoPage/Roadmap";
import Faq from "../components/IcoPage/Faq";
import BuyBtn from "../components/pLBM/BuyBtn";
import Footer from "../components/footer";
import { Web3ModalProvider } from "../context/Web3Modal";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";
import Timer from "../components/timer";
import Contact from "../components/IcoPage/Contact";
import SaleProgressBar from "../components/SaleProgressBar";
import MessageBox from "../components/MessageBox/MessageBox";

const ICO = () => {
  const web3signer = useWeb3ModalSigner().signer;
  const [currentStage, setCurrentStage] = useState(null);
  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });

  const [conversionRate, setConversionRate] = useState(0.06);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [usdcSelectedValue, setUsdcSelectedValue] = useState(100);
  const [lbmReceivedValue, setLbmReceivedValue] = useState(1000);
  const remainingTokenCount = 10000;
  const isValidStage =
    currentStage === "seed" ||
    currentStage === "whitelist" ||
    currentStage === "public";

  useEffect(() => {
    if (web3signer?.provider) {
      setProvider(web3signer.provider);
    }
  }, [web3signer]);

  useEffect(() => {
    async function fetchContractData() {
      const stage = await getCurrentSaleStage();
      setCurrentStage(stage);

      const tokens = await getRemainingTokens();
      setRemainingTokens(tokens);
    }

    fetchContractData();
  }, []);

  useEffect(() => {
    if (currentStage === "seed") {
      setConversionRate(0.06);
    } else if (currentStage === "whitelist") {
      setConversionRate(0.072);
    } else if (currentStage === "public") {
      setConversionRate(0.08);
    }

    const newLbmValue = usdcSelectedValue / conversionRate;

    setLbmReceivedValue(newLbmValue);
  }, [usdcSelectedValue, currentStage]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Web3ModalProvider>
      <>
        <MessageBox />
        <Head>
          <title>Libertum</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Background></Background>
        <ICONavbar signer={signer} setSigner={setSigner} />
        <div className="min-h-screen">
          <div className="container mx-auto justify-between lg:mt-16 flex flex-nowrap flex-col lg:flex-row ">
            <div className="lg:ml-10 py-8 md:mx-auto md:max-w-5xl lg:max-w-7xl">
              <h2 className="tracking-wide text-gray-800 text-center lg:text-left font-bold px-4 md:px-16 lg:px-0 text-4xl md:text-5xl xl:text-7xl">
                Transforming an{" "}
                <span className="md:hidden px-1 text-white bg-gradient-to-r from-[#2128f2cc] via-[#4092e9cc] to-[#6ec6dccc] extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
                  exclusive
                </span>{" "}
                <div className="hidden md:block my-4">
                  <span className="px-5 text-white bg-gradient-to-r from-[#2128f2cc] via-[#4092e9cc] to-[#6ec6dccc] extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
                    exclusive
                  </span>{" "}
                </div>
                market into an{" "}
                <span className="md:hidden px-1 text-white bg-gradient-to-r from-[#c88648cc] via-[#e9c440cc] to-[#ffed4bcc] extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
                  inclusive
                </span>{" "}
                <div className="hidden md:block my-4">
                  <span className="px-4 text-white bg-gradient-to-r from-[#c88648cc] via-[#e9c440cc] to-[#ffed4bcc] extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
                    inclusive
                  </span>{" "}
                </div>
                opportunity for everyone
              </h2>
            </div>

            <div className="my-auto py-12 md:py-8 w-full md:w-auto md:mx-32 md:px-16 lg:px-8 lg:mx-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#2128f2cc] to-[#4092e9cc]  mx-auto md:rounded-2xl drop-shadow-[0_8px_4px_rgba(0,0,0,.4)]">
              <h2 className="pt-4 text-4xl px-8 text-center font-logo uppercase font-bold tracking-wide text-gray-800">
                Current Stage:{" "}
                <span style={{ display: "inline" }}>
                  {currentStage !== null ? currentStage : "Loading..."}
                </span>
              </h2>
              <div className="px-4 md:px-0 py-8 lg:py-8">
                <div className="pb-8 lg:pb-8">
                  <Timer />
                </div>
                <SaleProgressBar
                  currentStage={currentStage}
                  remainingTokens={remainingTokens}
                  isValidStage={isValidStage}
                />
                <div className="mx-auto text-center text-xl py-2 text-gray-800 lg:text-2xl">
                  {isValidStage && (
                    <h2>
                      Remaining Tokens:
                      <span>
                        {" "}
                        {remainingTokens[`${currentStage}TokensRemaining`]}
                      </span>
                    </h2>
                  )}
                  <span className="text-">1 USDC = {conversionRate} LBM</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="mx-auto col-span-1">
                    <div className="container items-center relative flex py-4">
                      <img
                        src="/img/ico/usdc.png"
                        width={40}
                        className="lg:mx-2 mx-1"
                      ></img>
                      <div className="flex items-center w-full">
                        <div className="w-48">
                          <input
                            type="number"
                            min="0"
                            max="2000"
                            step="50"
                            value={usdcSelectedValue}
                            className="px-3 py-2 rounded-xl text-gray-800 font-semibold bg-slate-100 "
                            onChange={(e) => {
                              // Update the usdcSelectedValue with the input value, but also ensure it doesn't exceed the max range value
                              setUsdcSelectedValue(e.target.value);
                              setLbmReceivedValue(e.target.value * 100);
                            }}
                            onBlur={(e) => {
                              const value = Math.min(
                                Math.max(e.target.value, 0),
                                2000,
                              );
                              setUsdcSelectedValue(value);
                              setLbmReceivedValue(value * 100);
                            }}
                          />
                          <span className="pl-2 text-gray-800 text-xl font-semibold ">
                            USD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:mt-0 col-span-1">
                    <div className="flex px-4 py-4">
                      <div className="flex items-center mx-auto">
                        <img
                          className="bg-gray-100 p-2 rounded-3xl"
                          src="/img/logo.svg"
                          width={40}
                        ></img>
                        <div className="ml-2 w-48">
                          <input
                            type="number"
                            min="0"
                            max="2000"
                            step="50"
                            value={parseInt(lbmReceivedValue)}
                            className="px-4 py-2 rounded-xl text-gray-800 font-semibold bg-slate-100 "
                            onChange={(e) => {
                              setLbmReceivedValue(e.target.value);
                              setUsdcSelectedValue(e.target.value / 100);
                            }}
                            onBlur={(e) => {
                              const value = Math.min(
                                Math.max(e.target.value, 0),
                                remainingTokenCount,
                              );
                              setLbmReceivedValue(value);
                              setUsdcSelectedValue(value / 100);
                            }}
                          />
                          <span className="pl-2 text-gray-800 text-xl font-semibold ">
                            LBM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pt-2">
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={50}
                    className="w-full"
                    onChange={(e) => {
                      setUsdcSelectedValue(e.target.value);
                      setLbmReceivedValue(e.target.value * 100);
                    }}
                  ></input>
                </div>
              </div>
              <div className="lg:mx-auto relative flex w-full">
                <BuyBtn
                  isValidStage={isValidStage}
                  amount={lbmReceivedValue}
                  provider={provider}
                />
              </div>
            </div>
          </div>
          <h3 className="hidden lg:block lg:mt-16 mt-3 mx-auto text-center text-gray-500 uppercase font-logo  font-light lg:text-4xl">
            Get your LBM tokens now!
          </h3>
        </div>

        <div className="pb-10 bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8f1] min-w-screen-2xl to-10%">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className=" pt-32 text-4xl text-center font-bold text-gray-800">
              Upcoming Events
            </h2>
            <div className="">
              <PresaleGrid onScrollToTop={handleScrollToTop} />
            </div>

            <div className="mx-[8rem] lg:mx-24 2xl:mx-auto 2xl:max-w-[1536px]">
              <GridInfoSection />
            </div>

            <AllocationChart />

            <h2 className="text-4xl text-center font-bold text-gray-800 pb-2 pt-10">
              FAQs
            </h2>
            <Faq />

            <Roadmap />

            {/* <Join onScrollToTop={handleScrollToTop} /> */}

            <div className="mx-[8rem] lg:mx-24 2xl:mx-auto 2xl:max-w-[1536px]">
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Web3ModalProvider>
  );
};

export default ICO;
