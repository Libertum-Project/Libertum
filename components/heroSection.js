import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="h-screen-60 animate-slide-right pt-12 px-8 lg:px-0 lg:pr-8 lg:py-6 rounded-3xl drop-shadow-xl flex justify-center lg:justify-end m-auto align-middle lg:max-w-screen-2xl">
        <div className="max-w-4xl text-center md:text-right">
          <p className="hidden md:block text-sm lg:text-xl font-light mb-4 tracking-tight text-black capitalize">
            Fractionalized Rental Income Tokenisation
          </p>
          <p className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight text-black">
            Real Estate Accessible To Everyone
          </p>
          <p className="pt-4 md:pt-8 md:px-24 md:pr-0 mt-8 text-sm lg:text-2xl tracking-tight text-gray-600">
            Participants in the Fractionalized rental income ecosystem benefit
            from a reliable source of monthly passive income generated through
            secure property rental yield.
          </p>
          <div className="pt-8 lg:pr-0 lg:pt-16">
            <Link
              href="/ico"
              className="font-logo font-bold text-2xl lg:text-4xl uppercase text-red-400 tracking-wide hover:text-white"
            >
              B U Y <span className="whitespace-pre"> </span> L I B E R T U M
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="px-10 lg:px-0 lg:mt-8">
            <img
              className="animate-slide-right object-cover rounded-3xl object-center lg:mx-auto lg:mr-16 bg-gray-300"
              alt="hero"
              src="../img/image-hand.png"
            ></img>
          </div> */
}
