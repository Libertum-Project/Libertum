import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function LargeInfoSection() {
  return (
    <>
      <div className="my-12 lg:my-0 lg:px-12 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center sm:max-w-xs">
        <div className="px-8 lg:px-0 flex-1 order-2 lg:order-1">
          <h1 className="mt-2 text-3xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover the ease of accessing real estate yields
          </h1>
          <p className="lg:mt-10 lg:text-3xl lg:py-10 mt-6 text-xl lg:leading-10 text-gray-700">
            We provide a cutting-edge platform to fractionalize rental income.
            Our system streamlines peer-to-peer borrowing and investing,
            alleviating financial burdens.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:flex-1">
          <img
            className="rounded-xl bg-transparent w-full h-auto"
            src="/img/info1.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-12 lg:my-0 lg:mt-32 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:flex-1">
          <img
            className="rounded-xl bg-transparent w-full h-auto"
            src="/img/info2.gif"
            alt=""
          />
        </div>
        <div className="px-8 lg:px-12 flex-1 lg:mt-16 lg:ml-8">
          <h1 className="mt-12 lg:mt-2 text-3xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simplifying Real Estate Investment
          </h1>
          <p className="lg:mt-10 lg:text-3xl lg:py-10 mt-6 text-xl lg:leading-10 text-gray-700">
            Bid farewell to the complexities of ownership transfers and the
            burden of unforeseen expenses including insurance, repairs, and
            leaks. Instead, seize the opportunity to earn the right to rental
            income from a diverse range of premium properties across the globe.
          </p>
        </div>
      </div>
      <div className="my-16 lg:my-64 lg:px-12 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="mt-8 lg:mt-0 px-8 lg:px-0 flex-1 order-2 lg:order-1 ">
          <h1 className="mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Staking Pool
          </h1>
          <p className="mt-6 lg:mt-0 lg:text-3xl lg:py-5 text-xl lg:leading-10 text-gray-700">
            From day one, 5% of our investment earnings will be allocated to a
            continuous buyback and burn program, enhancing the value of our
            tokens and for the early stakes.
          </p>
          <h1 className="mt-8 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FRIT
          </h1>
          <p className="mt-6 lg:mt-0 lg:text-3xl lg:py-5 text-xl lg:leading-10 text-gray-700">
            $LBM, like many other tokens, can be used to participate in the
            fractionalised rental income ecosystem. Let the future invest in
            you!
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:flex-1">
          <img
            className="rounded-xl bg-transparent w-full h-auto"
            src="/img/token1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
