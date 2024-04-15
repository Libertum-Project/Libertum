'use client';
import css from './UpcomingEvents.module.css';
import Link from 'next/link';

export function UpcomingEvents() {
  const scrollToTop = () => {
    if (window.innerWidth > 1250) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const tokenPurchaseSection = document.getElementById(
        'tokenPurchaseSection'
      );
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
            {/* <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}> LIVE • Public Round 1</p>
                <span>MONDAY 19 FEB 2024</span>
              </div>
              <div className={css.eventInfo}>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Tokens for sale:</p>
                  <span className={css.infoValue}>4.000.000</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Starting price:</p>
                  <span className={css.infoValue}>$0.066</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Raise:</p>
                  <span className={css.infoValue}>$264,000</span>
                </div>
              </div>
              <button className={css.buyButton} onClick={scrollToTop}>
                Buy Now
              </button>
            </div> */}
            <div className={css.eventItem}>
              {/* <div className={css.soldOut}>
                <div className={css.soldOutSign}>
                  <p>Sold Out</p>
                  <span>Get ready for LBM token launch</span>
                </div>
              </div> */}
              <div className={css.eventTitle}>
                <p className={css.tittle}>Fjord Listing</p>
                <span>Wednesday 10th April to Friday 12th April</span>
              </div>
              {/* <div className={css.eventInfo}>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Tokens for sale:</p>
                  <span className={css.infoValue}>6,000,000</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Starting price:</p>
                  <span className={css.infoValue}>$0.072</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Raise:</p>
                  <span className={css.infoValue}>$432,000</span>
                </div>
              </div> */}
              <Link href="https://app.v2.fjordfoundry.com/pools/0xa1E599f65bA9F2BFfA934B8b61e4086e3f4bCb1E" target='_blank'>
              <button className={css.buyButton}>              
                Fjord Foundry
              </button>
              </Link>

            </div>

            <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}> Uniswap Listing</p>
                <span>Monday 15th April</span>
              </div>
              {/* <div className={css.eventInfo}>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Price:</p>
                  <span className={css.infoValue}>$0.08</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>FDV:</p>
                  <span className={css.infoValue}>$16,000,000</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Market Capital:</p>
                  <span className={css.infoValue}>TBC</span>
                </div>
              </div> */}
              <button className={css.buyButton} onClick={scrollToTop}>
                Get ready!
              </button>
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
}
