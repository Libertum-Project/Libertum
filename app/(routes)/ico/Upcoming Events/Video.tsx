"use client";
import { type ReactElement } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import lightImage from "./lightImage.png";
import heavyImage from "./heavyImage.svg";

export function Video(): ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);
  return (
    <>
      <Image
        src={isLoaded ? heavyImage : lightImage} 
        alt="video"
        width={300}
        height={206}
        priority
      />
    </>
  );
}
