import { ecosystemCarrousel } from '@/constants/carrousel';
import { BrandCarrousel } from '@/components/BrandCarrousel';

import { Hero } from './hero/hero';
import { TechStack } from './techStack/TechStack';
import { LibertumEcosystem } from './thelibertum/theLibertumEcosystem';

export default function Ecosystem() {
  return (
    <div>
      <Hero />
      <div className="mt-[-6rem] z-10">
        <BrandCarrousel brands={ecosystemCarrousel} speed={25} gradientWidth={0} width={115} height={115} />
      </div>
      <LibertumEcosystem />

      <TechStack />
    </div>
  );
}
