import { useState } from "react";
const TokenInput = ({ conversionRate, lbmReceivedValue, setLbmReceivedValue }) => {
  const [maxUSDCValue, setMaxUSDCValue] = useState(10000);
  const [minUSDCValue, setMinUSDCValue] = useState(50);
  const [usdcSelectedValue, setUsdcSelectedValue] = useState(100);
  const remainingTokenCount = 10000;

  return (
    <div>
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
                  max={10000}
                  min={50}
                  step="50"
                  value={usdcSelectedValue}
                  className="px-3 py-2 rounded-xl text-gray-800 font-semibold bg-slate-100 "
                  onChange={(e) => {
                    setUsdcSelectedValue(e.target.value);
                    setLbmReceivedValue(e.target.value / conversionRate);
                  }}
                  onBlur={(e) => {
                    const value = Math.min(
                      Math.max(e.target.value, 0),
                      maxUSDCValue,
                    );
                    setUsdcSelectedValue(value);
                    setLbmReceivedValue(value / conversionRate);
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
                  max={Math.round(maxUSDCValue / conversionRate)}
                  step={50 * 2}
                  value={parseInt(lbmReceivedValue)}
                  className="px-4 py-2 rounded-xl text-gray-800 font-semibold bg-slate-100 "
                  onChange={(e) => {
                    setLbmReceivedValue(e.target.value);
                    setUsdcSelectedValue(e.target.value * conversionRate);
                  }}
                  onBlur={(e) => {
                    const value = Math.min(
                      Math.max(e.target.value, 0),
                      remainingTokenCount,
                    );
                    setLbmReceivedValue(value);
                    setUsdcSelectedValue(value * conversionRate);
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
          min={minUSDCValue}
          max={maxUSDCValue}
          step={50}
          value={usdcSelectedValue}
          className="w-full"
          onChange={(e) => {
            setUsdcSelectedValue(e.target.value);
            setLbmReceivedValue(e.target.value / conversionRate);
          }}
        ></input>
      </div>
    </div>
  );
};

export default TokenInput;
