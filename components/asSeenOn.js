import Image from "next/image";

export default function asSeenOn() {
  return (
    <div className="flex-col justify-center max-w-7xl lg:pt-30 lg:mx-auto">

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
            src="/img/brands/benzinga.webp"
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
