import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface Brand {
  name: string;
  url: string;
}

interface BrandCarouselProps {
  brands: Brand[];
  speed: number;
  gradient: boolean;
  width: number;
  height: number;
}

export function BrandCarrousel({ brands, speed, width, height, gradient }: BrandCarouselProps) {
  return (
    <Marquee speed={speed} gradient={gradient} gradientWidth={100}>
      <div className={'flex items-center gap-12 py-10 overflow-hidden'}>
        {brands.map((brand, index) => (
          <Image src={brand.url} key={index} alt={`Brand ${brand.name}`} width={width} height={height} />
        ))}
      </div>
    </Marquee>
  );
}
