import Image from "next/image";
export default function BrandCarousel() {
  return (
    <div className="flex-col justify-center max-w-7xl lg:pt-30 lg:mx-auto">
      <div className="text-xl text-center capitalize text-gray-700">
        Partnered with technology and traditional businesses worldwide
      </div>

      <div className="px-4 lg:px-0 mix-blend-darken rounded-xl last:py-5 flex flex-wrap justify-center gap-4 lg:gap-1 mt-16 md:justify-around lg:max-w-screen-2xl">
        <div className=" text-gray-400 dark:text-gray-400 ">
          <Image
            src="/img/brands/aldarlogo.webp"
            width={50}
            height={50}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/algorand.webp"
            width={90}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/aptos.webp"
            width={97}
            height={200}
            alt="Brand"
          />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/coinfluence.webp"
            width={100}
            height={200}
            alt="Brand"
          />
        </div>
        <div className="mt-2 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/hotelscollection.webp"
            width={80}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/marhaba.webp"
            width={120}
            height={200}
            alt="Brand"
          />
        </div>
        <div className=" text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/mubadala.webp"
            width={75}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="mt-3 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/polygon.webp"
            width={100}
            height={200}
            alt="Brand"
          />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/msstartups.webp"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/hubspot.webp"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="lg:hidden mt-4 text-gray-400 mx-10 scale-125 lg:scale-100 lg:mx-0 dark:text-gray-400">
          <Image
            src="/img/brands/awsstartups.webp"
            width={80}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="lg:hidden text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/googlestartup.webp"
            width={50}
            height={100}
            alt="Brand"
          />
        </div>
      </div>
      <div className="hidden lg:flex mix-blend-darken rounded-xl last:py-5 flex-wrap justify-center gap-4 lg:gap-1 mt-10 md:justify-around">
        <div className="mt-4 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/msstartups.webp"
            width={200}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="mt-4 text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/hubspot.webp"
            width={200}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="mt-4 text-gray-400 mx-10 scale-125 lg:scale-100 lg:mx-0 dark:text-gray-400">
          <Image
            src="/img/brands/awsstartups.webp"
            width={200}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400">
          <Image
            src="/img/brands/googlestartup.webp"
            width={100}
            height={100}
            alt="Brand"
          />
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
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/yahoofinance.webp"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/benzinga.png"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-10 w-auto"
            src="/img/brands/bloomberg.svg"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex mix-blend-multiply items-center">
          <Image
            className="h-12 w-auto"
            src="/img/brands/marketwatch.webp"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
        <div className="text-gray-400 dark:text-gray-400 flex items-center">
          <Image
            className="h-12 w-auto mix-blend-multiply"
            src="/img/brands/coinmarketcap.webp"
            width={100}
            height={100}
            alt="Brand"
          />
        </div>
      </div>
    </div>
  );
}
