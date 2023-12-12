import Image from "next/image";

export default function MarketplaceGraph() {
  const stepsInvestor = [
    {
      title: 'Explore the marketplace',
      icon: '/assetsLanding/iconsMarketplaceGraph/market.svg',
    },
    {
      title: 'Discover your preferred Rental Income Token',
      icon: '/assetsLanding/iconsMarketplaceGraph/discover.svg',
    },
    {
      title: 'Buy Token with USDC',
      icon: '/assetsLanding/iconsMarketplaceGraph/buy.svg',
    },
    {
      title: 'Claim Rental Income Monthly',
      icon: '/assetsLanding/iconsMarketplaceGraph/claim.svg',
    },
  ];

  const stepsOwner = [
    {
      title: 'List Your Real Estate',
      icon: '/assetsLanding/iconsMarketplaceGraph/house.svg',
    },
    {
      title: 'Pay rent to Owners',
      icon: '/assetsLanding/iconsMarketplaceGraph/pay.svg',
    },
    {
      title: 'Rent Income Deposited into Contract',
      icon: '/assetsLanding/iconsMarketplaceGraph/contract.svg',
    },
    {
      title: 'Claim Rental Income Monthly',
      icon: '/assetsLanding/iconsMarketplaceGraph/claim.svg',
    },
  ];

  return (
    <div className="lg:pt-16 pt-8 lg:px-8">
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              The Libertum platform is Designed with Simplicity at its Core.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8"></p>
          </div>

          <p className="text-lg mt-12 font-bold uppercase tracking-widest text-gray-700">Are you an investor? </p>
            <section className="relative overflow-hidden">
        <div className="mt-2 md:mt-0 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#7C7C7E"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                {stepsInvestor.map((step, index) => (
                  <div key={index} className="relative group">
                  <div className={`inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${index === 3 ? 'bg-orange-400' : 'bg-blue-500'} text-white`}>                    
                  <span className="text-xl font-light">
                    <Image
                      src={step.icon}
                      alt={`Step ${index + 1}`}
                      className="mx-autoh-16 w-16"
                      width={64}
                      height={64}
                    />
                    </span>
                    </div>
                    
                    <h3 className="mt-4 text-xl font-medium text-gray-900">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
            </section>

          <p className="text-lg mt-24 font-bold uppercase tracking-widest text-gray-700">Are you a property owner? </p>
            <section className="relative overflow-hidden">
            <div className="mt-2 md:mt-0 lg:pb-24 overflow-hidden">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                  <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                      <svg
                        className="w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="875"
                        height="48"
                        viewBox="0 0 875 48"
                        fill="none"
                      >
                        <path
                          d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                          stroke="#7C7C7E"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-dasharray="1 12"
                        />
                      </svg>
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                      {stepsOwner.map((step, index) => (
                       <div key={index} className="relative group">
                        <div className={`inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${index === 3 ? 'bg-orange-500' : 'bg-blue-500'} text-white`}>
                       <span className="text-xl font-light">
                       <Image
                         src={step.icon}
                         alt={`Step ${index + 1}`}
                         className="mx-autoh-16 w-16"
                         width={64}
                         height={64}
                       />
                       </span>
                       </div>
                       
                       <h3 className="mt-4 text-xl font-medium text-gray-900">{step.title}</h3>
                     </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </section>



    </div>
  );
}
