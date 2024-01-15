import css from "./ico.module.css"
import { Hero } from "./Hero/Hero";
import { UpcomingEvents } from "./Upcoming Events/UpcomingEvents";
import { WhyNow } from "./Why Now/WhyNow";
import { Tokenomics } from "./Tokenomics/Tokenomics";
import { Roadmap } from "./Roadmap/Roadmap";
import { Faq } from "./FAQ/Faq";

export default function page() {
  return (
    <div className={css.ico}>
      <Hero />
      <UpcomingEvents />
      <WhyNow />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </div>
  );
}
