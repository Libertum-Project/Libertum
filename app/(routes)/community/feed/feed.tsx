import { type ReactElement } from "react";
import css from "./feed.module.css"
import { Socials } from "./socials/socials";
import { TwitterFeed } from "./twitter/twitter";

export function Feed(): ReactElement {

  return(
    <div className={css.container}>      
    <Socials />
    <TwitterFeed />
    </div>
  )
}