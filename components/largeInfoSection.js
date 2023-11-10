import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function LargeInfoSection() {
  return (
    <>
      <div className="lg:pt-32 relative isolate border-solid min-w-screen overflow-hidden lg:overflow-visible px-6 lg:px-0 ">
        <div className="py-10 grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-xl lg:mt-48">
                <h1 className="mt-2 text-3xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Discover the ease of accessing real estate yields
                </h1>
                <p className="lg:mt-10 lg:text-3xl lg:py-10 mt-6 text-xl lg:leading-10 text-gray-700">
                  We provide a cutting-edge platform to fractionalize rental
                  income. Our system streamlines peer-to-peer borrowing and
                  investing, alleviating financial burdens.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="rounded-xl bg-transparent shadow-md sm:w-[57rem]"
              src="/img/info1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-16 relative isolate border-solid min-w-screen overflow-hiddenlg:overflow-visible px-6 lg:px-0">
        <div className="py-10 grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:col-start-2 lg:pr-4">
              <div className="lg:mt-40 lg:ml-16 lg:max-w-xl">
                <h1 className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Simplifying Real Estate Investment
                </h1>
                <p className="lg:mt-10 lg:text-3xl lg:py-10 mt-6 text-xl lg:leading-10 text-gray-700">
                  Bid farewell to the complexities of ownership transfers and the burden of
                  unforeseen expenses including insurance, repairs, and leaks.
                  Instead, seize the opportunity to earn the right to rental
                  income from a diverse range of premium properties across the globe.
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:ml-auto lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="rounded-xl p-16 top-0 right-0 lg:col-start-2 ring-gray-400/10 sm:w-[57rem]"
              src="/img/info2.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-32 relative isolate border-solid min-w-screen overflow-hidden lg:overflow-visible px-6 lg:px-0 ">
        <div className="py-10 grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-xl lg:py-4">
                <h1 className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Staking Pool
                </h1>
                <p className="lg:text-3xl lg:py-10 text-xl lg:leading-10 text-gray-700">
                  From day one, 5% of our investment earnings will be allocated
                  to a continuous buyback and burn program, enhancing the value
                  of our tokens and for the early stakes.
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  FRIT
                </h1>
                <p className=" lg:text-3xl lg:py-10 text-xl lg:leading-10 text-gray-700">
                  $LBM, like many other tokens, can be used to participate in
                  the fractionalised rental income ecosystem. Let the future
                  invest in you!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="rounded-3xl shadow-md sm:w-[57rem]"
              src="/img/token1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
