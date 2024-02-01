import { Hero } from "./hero/hero";
import { Feed } from "./feed/feed";
import { ContactForm } from "../community/hero/contactForm/contactFrom";
import { GetReady } from "./getReady/getReady";
import css from "./page.module.css"

export default function page()  {

    const handleClose = () => {
        // Implement the logic for closing the ContactForm
        console.log("Closing the form");
      };

return(
    <div>
    <Hero />
    <Feed />
    <GetReady />

    <div className={css.ContactFormcontainer}>
        <div className={css.contactForm}>
            <ContactForm   onClose={handleClose}/>
        </div>
    </div>
    

    </div>
)
}