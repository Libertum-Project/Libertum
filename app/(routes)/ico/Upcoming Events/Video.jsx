// import Image from "next/image";
// import heavyImage from "./heavyImage.svg";
// import lightImage from "./lightImage.png";
// import { useState } from "react";

// export function Video() {
//   const [heavyImageLoaded, setHeavyImageLoaded] = useState(false);

//   const handleHeavyImageLoad = () => {
//     setHeavyImageLoaded(true);
//   };

//   return (
//     <>
//       <Image
//         src={lightImage}
//         alt="Loading video..."
//         width={300}
//         height={206}
//         style={{ display: heavyImageLoaded ? "none" : "block" }}
//       />
//       <Image
//         src={heavyImage}
//         alt="video"
//         id="video"
//         width={300}
//         height={206}
//         priority
//         onLoad={handleHeavyImageLoad}
//         style={{ display: heavyImageLoaded ? "block" : "none" }}
//       />
//     </>
//   );
// }

// import React from "react";
// import styles from "./Video.module.css"; 

// export function Video() {
//   return (
//     <div className={styles.videoContainer}>
//       <video
//         controls
//         className={styles.video}
//       >
//         <source src="./howtobuyVideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }
