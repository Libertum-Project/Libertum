import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import '../components/IcoPage/Presale.scss'; 
import '../components/IcoPage/Join.scss'
import '../components/IcoPage/HowToBuy.scss'
import '../components/IcoPage/HowToClaim.scss'

import '../components/IcoPage/Roadmap.scss'
import '../components/IcoPage/AllocationChart.scss'
import '../components/IcoPage/WhyLBM.scss'
import '../components/IcoPage/Faq.scss'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
