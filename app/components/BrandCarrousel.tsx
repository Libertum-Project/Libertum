'use client';
import { ReactElement, useMemo } from 'react';
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
  gap: number;
}

export function BrandCarrousel({ brands, speed, width, height, gap, gradient }: BrandCarouselProps): ReactElement {
  const combinedBrands = useMemo(() => [...brands, ...brands, ...brands], [brands]);

  return (
    <Marquee speed={speed} gradient={gradient} gradientWidth={100}>
      <div className={`flex items-center gap-${gap} py-10 overflow-hidden`}>
        {combinedBrands.map((brand, index) => (
          <Image src={brand.url} key={index} alt={`Brand ${brand.name}`} width={width} height={height} />
        ))}
      </div>
    </Marquee>
  );
}
