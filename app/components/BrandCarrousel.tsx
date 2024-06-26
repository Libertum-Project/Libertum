import Image from 'next/image';
import Marquee from 'react-fast-marquee';

type Brand = {
  name: string;
  url: string;
};

type BrandCarouselProps = {
  brands: Brand[];
  speed: number;
  gradient: boolean;
  width: number;
  height: number;
};

const BrandCarrousel = ({ brands, speed, width, height, gradient }: BrandCarouselProps) => {
  const doubledBrands = [...brands, ...brands];

  return (
    <Marquee speed={speed} gradient={gradient} gradientWidth={100}>
      <div className={'flex items-center gap-12 py-10 pl-12 overflow-hidden'}>
        {doubledBrands.map((brand, index) => (
          <Image src={brand.url} key={index} alt={`Brand ${brand.name}`} width={width} height={height} />
        ))}
      </div>
    </Marquee>
  );
};

export default BrandCarrousel;
