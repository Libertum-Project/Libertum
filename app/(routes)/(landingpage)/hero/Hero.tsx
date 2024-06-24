'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeroSplineLanding } from '../HeroSpline';

export function Hero(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="relative pt-20 overflow-hidden">
      {isMobile ? (
        <div className="absolute top-0 z-10 bg-gradient-to-b from-[#000041] to-[#0E0E1E] mix-blend-multiply w-full h-full"></div>
      ) : (
        <video autoPlay muted loop className="absolute top-0 z-10 min-w-full min-h-full">
          <source src="/bg-video-1.webm" type="video/webm" />
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      )}

      <div className="py-12 px-4 lg:px-0 lg:py-24 max-w-[75.125rem] mx-auto flex items-center justify-start gap-12 relative box-border z-20 overflow-visible">
        <section className="hidden lg:block absolute top-0 left-0 z-20">
          <HeroSplineLanding />
        </section>
        <section className="flex items-start flex-col justify-start gap-8 lg:max-w-2xl box-border z-30">
          <h1 className=" text-white font-space_grotesk text-5xl font-semibold my-0">
            Tokenization Technology
            <br className="h-2" />
            for Real World Assets
          </h1>

          <article className="flex flex-col items-center justify-center gap-4 text-white font-helvetica font-normal self-stretch">
            <p>
              Libertum is the all-in-one tokenization technology, marketplace, and community. Libertum enables anyone to
              tokenize, trade and access liquidity with any Real World Asset.
            </p>
            <p>
              We’re more than an investment platform. Our end-to-end technology allows millions of investors to connect,
              buy and sell, lend and borrow, leveraging assets such as real estate, commodities, precious metals and
              gems, royalties, art, securities and more, all across the globe.
            </p>
          </article>

          <section className="flex flex-col lg:flex-row items-start gap-8 w-full">
            <Link
              href="/subscribe"
              className="flex px-4 py-3 justify-between items-center border border-libertumGreen rounded-[.3rem] bg-[#ffffff03] backdrop-filter backdrop-blur-sm text-white font-space_grotesk font-bold cursor-pointer whitespace-nowrap text-xs hover:bg-[#00b3b54d] h-[3rem] w-full"
            >
              <article className="flex justify-center items-center gap-4">
                <Image src="/assets/rocket.svg" alt="N" width={21} height={21} />
                <p>Start Tokenizing</p>
              </article>

              <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
            </Link>

            <Link
              href="https://earn.libertum.io/"
              target="_blank"
              className="flex px-4 py-3 justify-between items-center border border-libertumGreen rounded-[.3rem] bg-[#ffffff03] backdrop-filter backdrop-blur-sm text-white font-space_grotesk font-bold cursor-pointer whitespace-nowrap text-xs hover:bg-[#00b3b54d] h-[3rem] w-full"
            >
              <div className="flex justify-center items-center gap-4">
                <Image src="/assets/icons/earn.svg" alt="earn" width={36} height={36} />
                <p>Stake LBM</p>
              </div>

              <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
            </Link>

            <Link
              href="/get"
              className="flex px-4 py-3 justify-between items-center border border-libertumGreen rounded-[.3rem] bg-[#ffffff03] backdrop-filter backdrop-blur-sm text-white font-space_grotesk font-bold cursor-pointer whitespace-nowrap text-xs hover:bg-[#00b3b54d] h-[3rem] w-full"
            >
              <div className="flex justify-center items-center gap-4">
                <Image src="/assets/icons/get.svg" alt="N" width={36} height={36} />
                <p>Get LBM</p>
              </div>

              <Image alt="left arrow" src="/assets/leftArrow.svg" width={13.207} height={8.708} />
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
}
