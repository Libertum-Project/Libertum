import { type ReactElement } from "react";
import telegram from "./icons/telegram.svg";
import linkedin from "./icons/linkedin.svg";
import discord from "./icons/discord.svg";
import twitter from "./icons/twitter.svg"; 
import Link from "next/link";
import Image from "next/image";
import css from "./socials.module.css"

export function Socials(): ReactElement {

  const socials = [
    {
      name: "X (Twitter)",
      icon: twitter,
      info: "Keep up to date with our latest Libertum announcements.",
      buttonLink: "https://twitter.com/libertum_token"
    },
    {
      name: "Discord",
      icon: discord,
      info: "Watch all of our live updates in a growth-minded community.",
      buttonLink: "https://discord.gg/AyGNmQx3KB"
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      info: "Network with Libertum and our trusted partners.",
      buttonLink: "https://www.linkedin.com/company/libertum1"
    },
    {
      name: "Telegram",
      icon: telegram,
      info: "Join our community of likeminded investors.",
      buttonLink: "https://t.me/libertum1"
    },
  ]

  return(
    <div className={css.socialContainer}>
       {socials.map((social, index) => (
        <div key={index} className={css.socialCard}>
          <Image 
          src={social.icon} 
          alt={social.name}
          height="86"
          width="86" 
          />
          <h2 className={css.socialCardName}>{social.name}</h2>
          <p className={css.socialCardInfo}> {social.info}</p>
          <Link 
          className={css.socialCardButton}
          href={social.buttonLink}
          >
            CONNECT
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.854 0.645996L13.207 5L8.854 9.354L8.146 8.646L11.293 5.5H0V4.5H11.293L8.146 1.354L8.854 0.645996Z" fill="#080915"/>
            </svg>
          </Link>
        </div>
      ))}
    </div>
  )
}