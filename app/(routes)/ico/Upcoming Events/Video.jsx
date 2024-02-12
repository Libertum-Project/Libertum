import Image from "next/image";
import heavyImage from "./heavyImage.svg";
import lightImage from "./lightImage.png";
import { useState } from "react";

export function Video() {
  const [heavyImageLoaded, setHeavyImageLoaded] = useState(false);

  const handleHeavyImageLoad = () => {
    setHeavyImageLoaded(true);
  };

  return (
    <>
      <Image
        src={lightImage}
        alt="Loading video..."
        width={300}
        height={206}
        style={{ display: heavyImageLoaded ? "none" : "block" }}
      />
      <Image
        src={heavyImage}
        alt="video"
        id="video"
        width={300}
        height={206}
        priority
        onLoad={handleHeavyImageLoad}
        style={{ display: heavyImageLoaded ? "block" : "none" }}
      />
    </>
  );
}
