import css from "./ico.module.css"
import { Hero } from "./Hero/Hero";
import { UpcomingEvents } from "./Upcoming Events/UpcomingEvents";
import { WhyNow } from "./Why Now/WhyNow";
import { Tokenomics } from "./Tokenomics/Tokenomics";
import { Roadmap } from "./Roadmap/Roadmap";
import { FaqSection } from "./FaqSection/FaqSection";
import MessageBox from "../../components/MessageBox/MessageBox";

export default function page() {
  return (
    <div className={css.ico}>
      <MessageBox />
      <Hero />
      <UpcomingEvents />
      <WhyNow />
      <Tokenomics />
      <Roadmap />
      <FaqSection />
    </div>
  );
}
