import Link from "next/link";
import Background from "../components/background";
import ICONavbar from "../components/icoNavbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const ICO = () => {
  const [provider, setProvider] = useState(null);
  const [isUserConnected, setIsUserConnected] = useState(false);
  const usdcTokenCount = "$1340 USDC";
  const [usdcSelectedValue, setUsdcSelectedValue] = useState(100);
  const [lbmReceivedValue, setLbmReceivedValue] = useState(1000);
  const lbmTokenCount = "48000 LBM";
  const currentStageSale = "Seed";
  const seedProgress = 45;
  const remainingTokenCount = "10,000";

  useEffect(() => {
    // For every 1 USDC, you get 100 LBM.
    const newLbmValue = usdcSelectedValue * 100;
    setLbmReceivedValue(newLbmValue);
  }, [usdcSelectedValue]); // Only re-run the effect if usdcSelectedValue changes

  return (
    <>
      <Head>
        <title>Libertum</title>
        <meta name="description" content="Libertum.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background></Background>
      <ICONavbar provider={provider} setProvider={setProvider} />
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="pt-8 lg:pt-8 text-2xl px-8 lg:text-6xl mx-auto text-center font-bold text-black">
          Current Stage Sale: {currentStageSale}
        </h2>
        <div className="mx-8 lg:mx-16 py-12 lg:py-24 ">
          <div className="flex justify-between mb-1"></div>
          <div className="w-full lg:mx-auto lg:max-w-7xl bg-gray-200 border-8 border-gray-400 rounded-3xl h-18 dark:bg-gray-700">
            <div
              className="bg-primary-300 h-16 py-3 text-gray-800 rounded-2xl text-4xl font-medium text-center"
              style={{ width: `${seedProgress}%` }}
            >
              {seedProgress}%
            </div>
          </div>
          <div className="mx-auto text-center text-xl py-4 text-gray-800 lg:text-2xl">
            Remaining Tokens: ${remainingTokenCount}
          </div>

          <div className="pt-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-2">
            <div className="mx-auto col-span-1">
              <h2 className="text-4xl text-center font-bold text-gray-800">
                Invest
              </h2>
              <div className="container items-center relative flex lg:py-16 py-4">
                <img
                  src="/img/ico/usdc.png"
                  width={32}
                  className="lg:mx-2 mx-1"
                ></img>
                <div className="flex items-center w-full">
                  <input
                    id="usdc-range"
                    type="range"
                    min="0"
                    max="2000"
                    value={usdcSelectedValue}
                    step="50"
                    className="range px-4 rounded-xl w-32 lg:w-full bg-gray-200 cursor-pointer appearance-none dark:bg-gray-700"
                    onChange={(e) => setUsdcSelectedValue(e.target.value)}
                  ></input>
                  <div className="ml-4 w-48">
                    <input
                      type="number"
                      min="0"
                      max="2000"
                      step="50"
                      value={usdcSelectedValue}
                      className="input px-4 py-2 rounded-xl bg-gray-700 "
                      onChange={(e) => {
                        // Update the usdcSelectedValue with the input value, but also ensure it doesn't exceed the max range value
                        setUsdcSelectedValue(e.target.value);
                      }}
                      onBlur={(e) => {
                        const value = Math.min(
                          Math.max(e.target.value, 0),
                          2000
                        );
                        setUsdcSelectedValue(value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 mt-8 col-span-1">
              <h2 className="text-4xl text-center font-bold text-gray-800">
                Receive
              </h2>
              <div className="flex py-8 lg:py-16">
                <div className="flex items-center mx-auto">
                  <img
                    className="bg-gray-700 p-2 rounded-3xl"
                    src="/img/logo.svg"
                    width={40}
                  ></img>
                  <div className="text-2xl mx-3 w-16 whitespace-nowrap text-gray-800 font-semibold">
                    {lbmReceivedValue.toLocaleString()} LBM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-16 mt-4  lg:px-16 relative flex w-full">
            <button className="p-5 rounded-xl text-2xl font-bold text-white hover:opacity-80 bg-gray-700 mx-auto">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICO;
