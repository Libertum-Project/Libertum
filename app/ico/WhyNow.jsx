import Image from 'next/image';

const cardsData = [
  {
    imageUrl: '/assetsIco/tokenization.svg',
    title: 'RWA Tokenization',
    description: 'Tokenization is projected to experience tremendous growth, and we are determined to capitalize on our early start.',
  },
  {
    imageUrl: '/assetsIco/market.svg',
    title: 'Favorable Market',
    description: 'Predictions suggest a possible crypto bull market in 2024, with a focus on highlighting the significance of RWA projects​',
  },
  {
    imageUrl: '/assetsIco/costLiving.svg',
    title: 'Rising Cost of Living​',
    description: 'The escalating global cost of living is posing challenges for individuals looking to invest in real estate​',
  },
  {
    imageUrl: '/assetsIco/highInterest.svg',
    title: 'High Interest Rates',
    description: 'The prevailing high interest rate increases the cost of borrowing money, especially within the commercial sector.',
  },
];

const WhyNow = () => {
  return (
      <div className="max-w-8xl mt-6 mx-auto px-6 sm:px-0 sm:mx-24 2xl:px-12">
        <div className="md:w-2/3 first-line:mt-12 text-gray-800">
          <p className="text-gray-600 text-xl">
            Hard work always catches up with perfect timing
            </p>
          <p className="text-gray-600 text-xl mt-6">
          <span className='text-orange-400'>Libertum </span>
            is positioned to reshape the real estate investment landscape and unlock new possibilities for investors worldwide
          </p>
        </div>

        <div className="mt-8 mb-20 grid divide-x divide-y divide-gray-300 overflow-hidden rounded-3xl border text-gray-800 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10
              animate-slide-right"
            >
              <div className="relative space-y-8 py-12 p-8">
                {/* Usamos el componente Image de Next.js */}
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="w-12 h-12"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-800 transition group-hover:text-secondary">
                    {card.title}
                  </h5>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default WhyNow;
