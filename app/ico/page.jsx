"use client";
import { useState } from "react";
import { Web3ModalProvider } from "../context/Web3Modal";
import ICONavbar from "./IcoNavbar.jsx";
import Presale from "./Presale/Presale.jsx";
import AllocationChart from "./AllocationChart/AllocationChart.jsx";
//import GridInfoSection from "../(home)/GridInfoSection.jsx";
import WhyNow from "./WhyNow.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import Faq from "./Faq/Faq.jsx";
import MessageBox from "./MessageBox/MessageBox.jsx";
import MessageBoxProvider from "../context/MessageBoxProvider.js";
import Header from "../(home)/Header.jsx";
import TokenPurchaseSection from "./TokenPurchaseSection.jsx";

const ICO = () => {
  const [updateUserBalance, setUpdateUserBalance] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Web3ModalProvider>
      <MessageBoxProvider>
        <>
          <MessageBox />
          <Header />
          <ICONavbar updateUserBalance={updateUserBalance} />
          <div className="min-h-screen mt-10 sm:mt-0">
            <div className="container mx-auto justify-between lg:mt-16 flex flex-nowrap flex-col lg:flex-row ">
              <div className="lg:ml-10 py-8 md:mx-auto md:max-w-5xl lg:max-w-7xl">
                <h2 className="tracking-wide text-center lg:text-left font-bold px-4 md:px-16 lg:px-0 text-4xl md:text-5xl xl:text-7xl">
                  Transforming an{" "}
                  <span className="md:hidden px-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 extrabold ">
                    exclusive
                  </span>{" "}
                  <div className="hidden md:block my-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 ">
                      exclusive
                    </span>{" "}
                  </div>
                  market into an{" "}
                  <span className="md:hidden px-1 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 extrabold ">
                    inclusive
                  </span>{" "}
                  <div className="hidden md:block my-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 extrabold">
                      inclusive
                    </span>{" "}
                  </div>
                  opportunity for everyone
                </h2>
              </div>
              <TokenPurchaseSection
                setUpdateUserBalance={setUpdateUserBalance}
              />
            </div>
          </div>

          <div className="pb-10 bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8f1] to-10%">
            <div className="max-w-screen-2xl mx-auto">
              <h2 className="mx-auto px-6 md:px-24  first-line:mt-12 marker:my-8 text-2xl font-bold text-gray-800 md:text-4xl">
                Upcoming Events
              </h2>
              <div className="">
                <Presale onScrollToTop={handleScrollToTop} />
              </div>

              {/* <div className="min-w-screen-2xl">
                <GridInfoSection />
              </div> */}
              <WhyNow />

              <div className="hidden md:block min-w-screen-2xl">
                <AllocationChart />
              </div>

              <h2 className="text-4xl text-center font-bold text-gray-800 pb-2 pt-10">
                FAQs
              </h2>
              <Faq />

              <Roadmap />
            </div>
          </div>
        </>
      </MessageBoxProvider>
    </Web3ModalProvider>
  );
};

export default ICO;
