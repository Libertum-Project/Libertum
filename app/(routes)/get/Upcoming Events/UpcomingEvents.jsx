'use client';
import Link from 'next/link';

import css from './UpcomingEvents.module.css';

export const UpcomingEvents = () => {
  const scrollToTop = () => {
    if (window.innerWidth > 1250) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const tokenPurchaseSection = document.getElementById('tokenPurchaseSection');
      if (tokenPurchaseSection) {
        tokenPurchaseSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div className={css.upcomingEventsContainer}>
      <section className={css.upcomingEvents}>
        <div className={css.eventContainer}>
          <p className={css.h2}>DEX Listing</p>
          <div className={css.eventDetails}>
            <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}>Fjord Listing</p>
                <span className={css.sold}>Sold out</span>
              </div>
              <Link
                href="https://app.v2.fjordfoundry.com/pools/0xa1E599f65bA9F2BFfA934B8b61e4086e3f4bCb1E"
                target="_blank"
              >
                <button className={css.buyButton}>Fjord Foundry</button>
              </Link>
            </div>

            <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}> Uniswap Listing</p>
                <span>Available Now</span>
              </div>
              <Link
                href="https://app.uniswap.org/swap?outputCurrency=0x56A38E7216304108E841579041249fEb236C887b&chain=base"
                target="_blank"
              >
                <button className={css.buyButton} onClick={scrollToTop}>
                  Trade Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={css.videoContainer}>
          <video controls className={css.video} poster="./roadmapView.png">
            <source src="./roadmap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};
