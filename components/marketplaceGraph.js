import { marketplaceGraph } from '../public/img/marketplaceGraph.svg';

export default function MarketplaceGraph() {
  return (
    <div className="lg:pt-16 pt-8">
      <h2 className="lg:py-12 py-4 text-center lg:text-6xl md:text-4xl text-2xl font-bold tracking-tight text-gray-900">
        Invest in Your Future
      </h2>
      <img
        className="mix-blend-normal px-1 pt-0 pb-4 lg:py-16 lg:mx-auto lg:max-w-screen-2xl w-full"
        // src="/img/marketplace.png"
        src="/img/marketplaceGraph.svg"
      ></img>
    </div>
  );
}
