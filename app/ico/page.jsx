import ICONavbar from "./IcoNavbar.jsx";
import Presale from "./Presale/Presale.jsx";
import AllocationChart from "./AllocationChart/AllocationChart.jsx";
import WhyNow from "./WhyNow.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import Faq from "./Faq/Faq.jsx";
import MessageBox from "./MessageBox/MessageBox.jsx";
import ContractProvider from "../context/ContractProvider.js";
import Header from "../(home)/Header.jsx";
import TokenPurchaseSection from "./TokenPurchaseSection/TokenPurchaseSection.jsx";
import Link from "next/link.js";

const ICO = () => {
  return (
    <ContractProvider>
      <>
        <MessageBox />
        <Header />
        <ICONavbar />
        <div className="h-[80vh] mt-20 sm:mt-0">
          <div className="container mx-auto justify-between lg:mt-16 flex flex-nowrap flex-col lg:flex-row ">
            <div className="lg:ml-10 md:mx-auto md:max-w-5xl lg:max-w-7xl flex flex-col justify-between">
              <h2 className="tracking-wide text-center lg:text-left font-bold px-4 md:px-16 lg:px-0 text-4xl md:text-5xl xl:text-7xl">
                Transforming an{" "}
                <span className="md:hidden px-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 extrabold ">
                  exclusive
                </span>{" "}
                <div className="hidden md:block my-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 ">
                    exclusive
                  </span>{" "}
                </div>
                market into an{" "}
                <span className="md:hidden px-1 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 extrabold ">
                  inclusive
                </span>{" "}
                <div className="hidden md:block my-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 extrabold">
                    inclusive
                  </span>{" "}
                </div>
                opportunity for everyone
              </h2>


            <Link
              href="/subscribe"
              target="_blank"  
              rel="noopener noreferrer"  
              className= "flex items-center w-fit mt-8 uppercase py-4 px-6 rounded-2xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#2128f2cc] to-[#4092e9cc] border-2 border-transparent text-white text-md  hover:bg-blue-900"
              >                
              Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z">                    
                  </path>
                </svg>
            </Link>






            </div>
            <TokenPurchaseSection />
          </div>
        </div>

        <div className="py-10 bg-gradient-to-b from-transparent lg:mx-auto to-[#cfdde8f1] to-10%">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-4xl text-center font-bold text-gray-800 pb-2 pt-10">
              Upcoming Events
            </h2>
            <Presale />

            <h2 className="text-4xl text-center font-bold text-gray-800 pb-2 pt-24">
              Why Now?
            </h2>
            <WhyNow />

            <div className="hidden md:block min-w-screen-2xl">
              <AllocationChart />
            </div>

            <h2 className="text-4xl text-center font-bold text-gray-800 pb-2 pt-20">
              Roadmap
            </h2>
            <Roadmap />

            <h2 className="text-4xl text-center font-bold text-gray-800 pb-8 pt-12">
              FAQs
            </h2>
            <Faq />
          </div>
        </div>
      </>
    </ContractProvider>
  );
};

export default ICO;
