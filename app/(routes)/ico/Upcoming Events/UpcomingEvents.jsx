"use client";
import css from "./UpcomingEvents.module.css";

export function UpcomingEvents() {
  const scrollToTop = () => {
    if (window.innerWidth > 1250) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const tokenPurchaseSection = document.getElementById("tokenPurchaseSection");
      if (tokenPurchaseSection) {
        tokenPurchaseSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className={css.upcomingEventsContainer}>
      <section className={css.upcomingEvents}>
        <div className={css.eventContainer}>
          <p className={css.h2}>Upcoming Events</p>
          <div className={css.eventDetails}>
            <div className={css.eventItem}>
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
            </div>
            <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}>Public Round 2</p>
                <span>11 - 29 MARCH 2024</span>
              </div>
              <div className={css.eventInfo}>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Tokens for sale:</p>
                  <span className={css.infoValue}>6.000.000</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Starting price:</p>
                  <span className={css.infoValue}>$0.072</span>
                </div>
                <div className={css.infoItem}>
                  <p className={css.infoLabel}>Raise:</p>
                  <span className={css.infoValue}>$432.000</span>
                </div>
              </div>
              <button className={css.buyButton}>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={css.videoContainer}>
          <video controls className={css.video} poster="./howtobuyView.png">
            <source src="./howtobuyVideo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}
