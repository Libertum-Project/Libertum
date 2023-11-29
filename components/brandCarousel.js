import Image from "next/image";

export default function BrandCarousel() {
  return (
    <div className="flex-col justify-center max-w-7xl lg:pt-32 lg:mx-auto">
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

    </div>
  );
}
