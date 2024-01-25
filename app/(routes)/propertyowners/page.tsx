import { Hero } from "./hero/hero"; 
import { Cards } from "./cards/Cards";
import { TalkToLibertum } from "./talkToLibertum/talktToLibertum";
import InfoSection from "./infoSection/infoSection";

export default function PropertyOwners() {
    return(
        <>
            <Hero />
            <Cards />
            <TalkToLibertum />
            <InfoSection />
        </>
    )
}
