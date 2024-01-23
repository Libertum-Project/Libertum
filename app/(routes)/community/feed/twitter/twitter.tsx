import { type ReactElement } from "react";
import css from "./twitter.module.css"

export function TwitterFeed(): ReactElement {

  return(
    <div className={css.twitterContainer}>
      <section>
        <h2 className={css.twitterTitle}> X (Twitter) Feed </h2>
        <p className={css.hashtag}>#LIBERTUM #LBM</p>
      </section>


  

    </div>

  )
}