'use client';
import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export function HeroSplineLanding() {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const canvas = splineRef.current?.querySelector('canvas');
      if (canvas) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={splineRef} className="w-full h-screen flex justify-center items-center max-w-[1260px] max-h-[550px]">
      <Spline scene="https://prod.spline.design/1YVyhj7Fm5h7mO5Y/scene.splinecode" />
    </div>
  );
}
