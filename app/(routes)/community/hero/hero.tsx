'use client'

import { type ReactElement,  useState, useEffect } from "react";
import Image from "next/image";
import css from "./hero.module.css";
import Link from "next/link";
import SocialMedia from "./socials/SocialMedia";
import { ContactForm } from "./contactForm/contactFrom";


export function Hero(): ReactElement {

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 950px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
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
    <div className={css.heroContainer}>
      {isMobile ? 
        <div className={css.backgroundNoVideo}></div> 
        : 
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video> 
      }
      <div className={css.heroCommunity}>
        <div className={css.textCommunity}>
          <h1>Community</h1>
          <div className={css.paragraphsCommunity}>
            <p>
            Connect, engage, and grow with us on platforms like Discord and Telegram, where vibrant discussions and valuable insights bring our web3 real estate vision to life.            </p>          
          </div>
            <SocialMedia />
        </div>

        <div>
        <ContactForm/>
        </div>
      </div>
    </div>
  );
}