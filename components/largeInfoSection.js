import Image from "next/image";

export default function LargeInfoSection() {
  return (
    <>
      <div className="my-12 lg:my-0 lg:px-12 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center sm:max-w-xs md:max-w-full">
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
          <Image
            className="rounded-xl bg-transparent w-full h-auto md:ml-8 lg:ml-0"
            src="/img/info1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="my-12 lg:my-0 lg:mt-32 lg:max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:flex-1">
          <video
            className="rounded-xl bg-transparent w-full h-auto"
            src="/video/info2.webm"
            type="video/webm"
            autoPlay
            loop
            muted
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
            We are different. 5% of our investment returns will be dedicated to
            an ongoing buyback and burn strategy, aimed at increasing the value
            of our tokens and benefiting early stakeholders.
          </p>
          <h1 className="mt-8 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rental Income Token (RIT)
          </h1>
          <p className="mt-6 lg:mt-0 lg:text-3xl lg:py-5 text-xl lg:leading-10 text-gray-700">
            $LBM can be used to participate in Libertum fractionalised rental
            income ecosystem. Use $LBM to purchase RITs and sit back and enjoy
            rental income from premium properties. Let the future invest in you!
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full lg:flex-1">
          <Image
            className="rounded-xl bg-transparent w-full px-8 md:px-32 lg:px-16 xl:px-16 h-auto"
            src="/img/token1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
