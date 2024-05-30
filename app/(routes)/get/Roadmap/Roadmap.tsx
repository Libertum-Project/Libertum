'use client';
import React, { type ReactElement, useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import leftArrow from '@/public/assets/vector.svg';

import css from './Roadmap.module.css';

export function Roadmap(): ReactElement {
  // Add Padding Inline
  const [paddingValue, setPaddingValue] = useState<number | null>(null);

  useEffect(() => {
    const myDiv: HTMLElement | null = document.getElementById('getPadding');

    const updatePaddingLeft = () => {
      if (myDiv) {
        const offsetLeftValue = myDiv.offsetLeft;
        setPaddingValue(offsetLeftValue);
      }
    };

    updatePaddingLeft();

    window.addEventListener('resize', updatePaddingLeft);

    return () => {
      window.removeEventListener('resize', updatePaddingLeft);
    };
  }, []);

  const padding = {
    paddingInline: paddingValue && window.innerWidth >= 1250 ? `${paddingValue}px` : undefined,
  };

  // Add Slider Functionality

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: globalThis.MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // video
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 950px)');
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
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
    <section className={css.roadmapContainer}>
      {isMobile ? (
        <div className={css.backgroundNoVideo}></div>
      ) : (
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-2.mp4" type="video/mp4" />
        </video>
      )}
      <div className={css.roadmap}>
        <h3 style={padding}>Roadmap</h3>
        <div className={css.cardContainer} style={padding} ref={sliderRef}>
          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 01</p>
              <div className={css.arrowContainer}>
                <Image src={leftArrow} alt="left arrow" width={20} height={13} />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Project Concept
                <br />
                UK Company Registration
                <br />
                Tokenomics
                <br />
                MVP 1.0
                <br />
                Smart Contract Development
                <br />
                Private Sale
                <br />
                Community Building
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 02</p>
              <div className={css.arrowContainer}>
                <Image src={leftArrow} alt="left arrow" width={20} height={13} />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Licencing
                <br />
                Smart Contract Audit
                <br />
                Geo Growth
                <br />
                Commercialize Marketplace
                <br />
                Tokenise First Real Estate
                <br />
                Community Events Launch
                <br />
                Giveaway & Airdrops Launch
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 03</p>
              <div className={css.arrowContainer}>
                <Image src={leftArrow} alt="left arrow" width={20} height={13} />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Whitelist presale
                <br />
                Public PreSale
                <br />
                LBM Launch
                <br />
                DEX Listing
                <br />
                Token Staking Pool Launch
                <br />
              </p>
            </div>
          </div>

          <div className={css.card}>
            <div className={css.header}>
              <p>Phase 04</p>
              <div className={css.arrowContainer}>
                <Image src={leftArrow} alt="left arrow" width={20} height={13} />
              </div>
            </div>
            <div className={css.content}>
              <p>
                Acquisition of the first Real Estate
                <br />
                Consider CEX Listing
                <br />
                Targeted to tokenise 20 Real Estates
                <br />
                Expansion & Geo Growth
                <br />
                Feasibility of Valuator AI
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
