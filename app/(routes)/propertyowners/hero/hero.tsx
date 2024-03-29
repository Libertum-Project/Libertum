'use client'
import { type ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import css from "./hero.module.css";
import Link from "next/link";
import { Calculator } from "./calculator/calculator";
import ContactModal from "@/app/components/Contact/ContactModal";


export function Hero(): ReactElement {

  const [modalVisible, setModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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

      <div className={css.heroOwners} id="getPadding">
        <div className={css.textOwners}>
          <h1>Property Tokenization</h1>
          <div className={css.paragraphsOwners}>
            <p>
            Unlock the wealth in your business property and put it to work for you. Get the funds you need with rental yield-based interest-free capital. Discover the possibilities of property tokenization funding through our peer-to-peer ecosystem, that’s meets all your financial needs.  
            </p>        
            <div className={css.frameButton}>
              <p>Ready to Tokenize your property?</p>
              <button className={css.buttonOwners} onClick={openModal}>
                Get in touch
              </button>
              {modalVisible && <ContactModal onClose={closeModal} />}
            </div>
          </div>
        </div>

        <div>
        <Calculator />
        </div>
      </div>
    </div>
  );
}
