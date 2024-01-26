import { type ReactElement } from "react";
import css from "./UpcomingEvents.module.css";
import { Video } from "./Video";

export function UpcomingEvents(): ReactElement {

  return (
    <div className={css.upcomingEventsContainer}>
      <section className={css.upcomingEvents}>
        <div className={css.eventContainer}>
          <p className={css.h2}>Upcoming Events</p>
          <div className={css.eventDetails}>
            <div className={css.eventItem}>
              <div className={css.eventTitle}>
                <p className={css.tittle}>Public Round 1</p>
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
        <Video /> 
      </section>
    </div>
  );
}
