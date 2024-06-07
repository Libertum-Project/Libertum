import { type ReactElement } from 'react';
import Image from 'next/image';

import css from './techStack.module.css';
import azure from './assets/azure.svg';
import docker from './assets/docker.svg';
import kubernetes from './assets/kubernettes.svg';
import next from './assets/next.svg';
import postgres from './assets/postgres.svg';
import solidity from './assets/solidity.svg';

const brands: string[] = [azure, docker, kubernetes, next, postgres, solidity];

export function TechStack(): ReactElement {
  return (
    <div className={css.container}>
      <h2>Our tech stack</h2>
      <div className={css.brandContainer}>
        {brands.map((brand: string, index: number) => (
          <div key={index} className={css.slide}>
            <Image src={brand} alt={`Brand ${index}`} width="99" height="36" />
          </div>
        ))}
      </div>
    </div>
  );
}
