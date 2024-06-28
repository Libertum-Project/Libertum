import Image from 'next/image';

type Brand = {
  name: string;
  url: string;
};

type BrandCarouselProps = {
  brands: Brand[];
  speed: number;
  gradientWidth: number;
  width: number;
  height: number;
};

const BrandCarrousel = ({ brands, speed, gradientWidth, width, height }: BrandCarouselProps) => {
  const animationSpeed = `marquee ${speed}s linear infinite`;

  const doubledBrands = [...brands, ...brands, ...brands];
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full z-10 bg-gradient-to-r from-white to-transparent"
        style={{ width: `${gradientWidth}px` }}
      />
      <div
        className="absolute top-0 right-0 h-full z-10 bg-gradient-to-l from-white to-transparent"
        style={{ width: `${gradientWidth}px` }}
      />
      <div className="flex items-center gap-12 py-14 pl-12 animate-marquee" style={{ animation: animationSpeed }}>
        {doubledBrands.map((brand, index) => (
          <Image src={brand.url} key={index} alt={`Brand ${brand.name}`} width={width} height={height} />
        ))}
      </div>
    </div>
  );
};

export default BrandCarrousel;
