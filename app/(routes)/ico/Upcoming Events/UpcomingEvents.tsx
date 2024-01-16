import { type ReactElement } from "react";
import Image from "next/image";
import css from "./UpcomingEvents.module.css";
import video from "./video.svg";

export function UpcomingEvents(): ReactElement {
  return (
    <section className={css.upcomingEvents}>
      <div className={css.eventContainer}>
        <h2>Upcoming Events</h2>
        <div className={css.eventDetails}>
          <div className={css.eventItem}>
            <div className={css.eventTitle}>
              <h4>Public Round 1</h4>
              <span>MIDNIGHT 19 FEB 2024</span>
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
                <span className={css.infoValue}>$432.000</span>
              </div>
            </div>
            <button className={css.buyButton}>Buy Now</button>
          </div>
          <div className={css.eventItem}>
            <div className={css.eventTitle}>
              <h4>Public Round 2</h4>
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
      <Image src={video} alt="video" />
    </section>
  );
}
