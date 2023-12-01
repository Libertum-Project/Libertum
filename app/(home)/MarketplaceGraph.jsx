import Image from "next/image";

export default function MarketplaceGraph() {
  return (
    <div className="lg:pt-16 pt-8">
      <h2 className="lg:pt-24 px-12 pt-4 text-center items-end lg:text-6xl md:text-4xl text-2xl font-bold tracking-tight text-gray-900">
        The Libertum platform is Designed with Simplicity at its Core.
      </h2>
      <Image
        className="mix-blend-normal px-1 pt-0 pb-4 lg:mx-auto lg:max-w-screen-2xl w-full"
        src="/img/marketplaceGraph.svg"
        width={100}
        height={100}
        alt="Graph"
      />
    </div>
  );
}
