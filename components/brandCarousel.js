import Image from "next/image";
export default function BrandCarousel() {
  return (
    <div className="flex-col justify-center max-w-7xl lg:pt-36 lg:mx-auto">
      <div className="text-xl text-center capitalize text-gray-700">
        Partnered with technology and traditional businesses worldwide
      </div>

      <div className="px-4 lg:px-0 mix-blend-darken rounded-xl last:py-5 flex flex-wrap justify-center gap-4 lg:gap-1 mt-16 md:justify-around lg:max-w-screen-2xl">
        <div className=" text-gray-400 dark:text-gray-400 ">
          <Image src="/img/brands/aldarlogo.png" width={50} height={50} />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/algorand.png" width={90} height={100} />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/aptos.png" width={97} height={200} />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/coinfluence.png" width={100} height={200} />
        </div>
        <div className="mt-2 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/hotelscollection.png"
            width={80}
            height={100}
          />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/marhaba.png" width={120} height={200} />
        </div>
        <div className=" text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/mubadala.png" width={75} height={100} />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/polygon.png" width={100} height={200} />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/msstartups.png" width={100} height={100} />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/hubspot.png" width={100} height={100} />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 mx-10 scale-125 lg:scale-100 lg:mx-0 dark:text-gray-400">
          <Image src="/img/brands/awsstartups.png" width={80} height={100} />
        </div>
        <div className="lg:hidden text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/googlestartup.png" width={50} height={100} />
        </div>
      </div>
      <div className="hidden lg:flex mix-blend-darken rounded-xl last:py-5 flex-wrap justify-center gap-4 lg:gap-1 mt-10 md:justify-around">
        <div className="mt-4 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/msstartups.png" width={200} height={100} />
        </div>
        <div className="mt-4 text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/hubspot.png" width={200} height={100} />
        </div>
        <div className="mt-4 text-gray-400 mx-10 scale-125 lg:scale-100 lg:mx-0 dark:text-gray-400">
          <Image src="/img/brands/awsstartups.png" width={200} height={100} />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image src="/img/brands/googlestartup.png" width={100} height={100} />
        </div>
      </div>

      <div className="mt-16 text-xl text-center capitalize text-gray-700">
        As Seen On:
      </div>
      <div className="px-16 md:px-8 lg:px-0 flex-wrap flex flex-row md:flex-nowrap justify-center gap-4 md:gap-8 space-y-4 lg:gap-16 mt-8 lg:max-w-screen-2xl">
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto mix-blend-multiply"
            src="/img/brands/ap.svg"
            width={100}
            height={100}
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/yahoofinance.png"
            width={100}
            height={100}
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/benzinga.png"
            width={100}
            height={100}
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-10 w-auto"
            src="/img/brands/bloomberg.svg"
            width={100}
            height={100}
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex mix-blend-multiply items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/marketwatch.png"
            width={100}
            height={100}
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto mix-blend-multiply"
            src="/img/brands/coinmarketcap.png"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
