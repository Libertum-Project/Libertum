import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="h-[80vh] items-center animate-slide-right pt-12 px-8 lg:px-0 lg:pr-24 2xl:pr-10 rounded-3xl drop-shadow-xl flex justify-center lg:justify-end m-auto align-middle lg:max-w-screen-2xl">
        <div className="max-w-4xl text-center md:text-right">
          <p className="hidden md:block text-sm lg:text-xl font-light mb-4 tracking-tight text-stone-900 capitalize ">
            Fractionalized Rental Income Tokenisation
          </p>
          <p className="text-4xl md:text-5xl lg:text-8xl font-extrabold tracking-tight text-stone-900 ">
            Real Estate Accessible To Everyone
          </p>
          <p className="pt-4 md:pt-8 md:px-24 md:pr-0 mt-8 text-sm lg:text-2xl tracking-tight text-gray-600">
            Participants in the Fractionalized rental income ecosystem benefit
            from a reliable source of monthly passive income generated through
            secure property rental yield.
          </p>

          <div className="flex h-full justify-center sm:justify-end gap-4 pt-8 lg:pr-0 lg:pt-16">
            
            <Link
              href="/subscribe"
              className= "flex items-center uppercase py-4 px-6 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue hover:bg-blue-500 hover:text-white text-md"
            >
            WAITLIST
            </Link>

            <Link
             href="/ico"
             className="uppercase py-4 px-6 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md  hover:bg-blue-400"
            >
              BUY LIBERTUM            
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
