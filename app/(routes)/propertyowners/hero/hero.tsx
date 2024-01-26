import { type ReactElement } from "react";
import Image from "next/image";
import css from "./hero.module.css";
import Link from "next/link";
import { Calculator } from "./calculator/calculator";


export function Hero(): ReactElement {
  return (
    <div className={css.heroContainer}>
      <video autoPlay muted loop className={css.video}>
        <source src="./bg-video-1.mp4" type="video/mp4" />
      </video>
      <div className={css.heroOwners} id="getPadding">
        <div className={css.textOwners}>
          <h1>Property Tokenization</h1>
          <div className={css.paragraphsOwners}>
            <p>
            Unlock the wealth in your business property and put it to work for you. Get the funds you need with rental yield-based interest-free capital. Discover the possibilities of property tokenization funding through our peer-to-peer ecosystem, that’s meets all your financial needs.  
            </p>        
            <div className={css.frameButton}>
              <p>Ready to Tokenize your property?</p>
              <button className={css.buttonOwners}>
                Get in touch
              </button>
            </div>
          </div>
        </div>

{/*         <div>
        <Calculator />
        </div> */}
      </div>
    </div>
  );
}
