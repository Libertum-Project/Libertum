import css from "./cards.module.css"; 
import Link from "next/link";
import Image from "next/image";
import firstImage from "./assets/firstImage.svg";
import secondImage from "./assets/secondImage.svg";
import thirdImage from "./assets/thirdImage.svg"

export default function Cards () {
    const cards = [
        {
            image: firstImage,
            title: "Invest in RIT",
            text: "Premium Real estate are listed on a the Libertum market place. You choose which one to invest in. Each investment represents your right to the rental income from the property you choose.",
            button: "Learn More",
            href: "/comingsoon"
        },
        {
            image: secondImage,
            title: "Yield Generation",
            text: "Commercial properties have long leases and professionally managed, producing consistent cash flow while appreciating in value over time. The right to the rental income from these properties are passed on to the Rental Income Token (RIT) holders.",
            button: "Learn More",
            href: "/comingsoon"
        },
        {
            image: thirdImage,
            title: "Hold and Earn",
            text: "Premium Real estate are listed on a the Libertum market place. You choose which one to invest in. Each investment represents your right to the rental income from the property you choose.",
            button: "Learn More",
            href: "/comingsoon"
        },

    ]


    return(
        <div className={css.cardsContainer}>
            {cards.map((card, index) => (
        <div key={index} className={css.card}>
            <div className={css.cardFrame}>
                <Image
                    src={card.image}
                    alt={card.title}
                    width="260"
                    height= "260"
                />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
            </div>         
          <Link className={css.cardButton} href={card.href}>
            <p>{card.button}</p>
            <Image
                alt="left arrow"
                src="/assets/leftArrow.svg"
                width={13.207}
                height={8.708}
            /> 
          </Link>
        </div>
      ))}
        </div>
    )
}

