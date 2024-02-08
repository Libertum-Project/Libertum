'use client'
import { type ReactElement, useState, useEffect } from "react";
import css from "./talkToLibertum.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "./image.svg"

export function TalkToLibertum(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 950px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className={css.whyNowContainer}>
      {isMobile ? 
        <div className={css.backgroundNoVideo}></div> 
        : 
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-2.mp4" type="video/mp4" />
        </video> 
      }
      <div className={css.whyNow} id="getPadding">

        <div className={css.frameText}>
            <h2 className={css.whyNowHeading}>Talk to Libertum</h2>
            <div className={css.bodyTextContainer}>
            <p className={css.whyNowBodyText}>
            The home of commercial property Tokenization.
            </p>
            <p className={css.whyNowBodyText}>
            Your property could provide the funding for your most ambitious plans. We know Tokenization can help you unlock your hidden wealth - and offer interest-free capital for what your property is worth.
            </p>
            </div>

            <Link href="/" className={css.button1}>            
                <p>
                   Submit Property Details
                </p>
                
                <Image
                alt="left arrow"
                src="/assets/leftArrow.svg"
                width={13.207}
                height={8.708}
            />          
            </Link>

            <Link href="/community" className={css.button2}>            
                <p>
                   Chat with  us
                </p>
                
                <Image
                alt="left arrow"
                src="/assets/leftArrow.svg"
                width={13.207}
                height={8.708}
            />          
            </Link>
        </div>

        <div className={css.image}>
        <Image
            alt="left arrow"
            src={image}
            width="300"
            height="376"
        />          
      </div>

      </div>
      
    </section>
  );
}
