import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import stay from './assets/stay.svg';
import market from './assets/market.svg';
import tokenise from './assets/tokenise.svg';
import earn from './assets/earn.svg';
import trade from './assets/trade.svg';
import borrow from './assets/borrow.svg';
import choose from './assets/choose.svg';
import get from './assets/get.svg';
import Image from 'next/image';
import Link from 'next/link';
import css from './theLibertumEcosystem.module.css';

export default function EcosystemTabs() {
  const ecosystem = [
    {
      logo: tokenise,
      name: 'tokenise',
      description:
        "Our groundbreaking Tokenisation Engine, known as 'Tokenise', empowers property owners to convert real-world assets into digital tokens. With flexibility at its core, Tokenise offers two distinct tokenisation methods: fractional ownership of property yields without transferring ownership and full property tokenisation, catering to the unique needs of every property owner."
    },
    {
      logo: market,
      name: 'market',
      description:
        "Welcome to 'Market', Libertum's vibrant Real Estate Marketplace! Here, property owners and real estate agents can showcase their properties to a global audience of investors. But 'Market' isn't just a listing platform—it's a dynamic hub of activity, featuring unique gamification functions designed to reward our community for their engagement."
    },
    {
      logo: trade,
      name: 'trade',
      description:
        "'Trade' opens up a world of possibilities for real estate assets. As Libertum's Secondary Marketplace, it facilitates the seamless trading of property tokens, enhancing accessibility, liquidity, transparency, and efficiency compared to traditional markets. Get ready to unleash your potential and explore new financial opportunities with 'Trade'!"
    },
    {
      logo: borrow,
      name: 'borrow',
      description:
        "Harness your potential with Libertum's 'Borrow' protocol. By providing your real estate as collateral, you gain access to borrowing opportunities, enabling you to expand your horizons and unlock new financial possibilities. Take control of your future with 'Borrow'!"
    },
    {
      logo: earn,
      name: 'earn',
      description:
        "Elevate your investment game with 'Earn', Libertum's revolutionary Staking Protocol. By staking your tokens, you not only earn rewards but also contribute to the stability and transparency of our ecosystem. 'Earn' isn't just a protocol; it's a pathway to prosperity and empowerment for our community."
    },
    {
      logo: stay,
      name: 'stay',
      description:
        "Prepare for an unparalleled experience with Libertum's 'Stay' protocol. As web3's answer to Airbnb, 'Stay' offers exclusive discounts to LBM token holders for premium property bookings. Whether you're attending a conference or embarking on a getaway, unlock adventure and luxury with 'Stay'!"
    },
    {
      logo: choose,
      name: 'choose',
      description:
        "The power of choice lies in your hands with Libertum's Governance Protocol, 'Choose'. As a participant in our ecosystem, you have the opportunity to shape the future of real estate investment by casting your vote on key decisions. Join us in charting the course for success with 'Choose'!"
    },
    {
      logo: get,
      name: 'get',
      description:
        "Seamlessly swap tokens across different blockchain networks with Libertum's Cross-Chain Swapping protocol, 'Get'. Whether you're diversifying your portfolio or exploring new investment opportunities, 'Get' provides a frictionless experience, unlocking the power of decentralized finance at your fingertips."
    }
  ];
  return (
    <div>
      <div className="hidden lg:flex my-20 justify-center">
        <Tabs defaultValue="tokenise" className="w-full gap-52">
          <TabsList className="w-full flex justify-between">
            {ecosystem.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name}>
                <div className="flex items-center justify-between space-x-2 rounded-[5px] bg-white data-[state=active]:border-none">
                  <Image
                    src={tab.logo}
                    alt={tab.name}
                    width={120}
                    height={80}
                    className="h-[50px] w-auto"
                  />
                </div>
                {/* <span className="uppercase font-[#000041] text-lg">
                    {tab.name}
                  </span> */}
              </TabsTrigger>
            ))}
          </TabsList>
          {ecosystem.map((tab) => (
            <TabsContent
              key={tab.name}
              value={tab.name}
              className="bg-white border rounded-[5px] mt-6"
            >
              <div className="py-6 px-4 flex flex-col justify-center items-center font-ubuntu">
                {tab.description}

                <div className="mt-6">
                  <Link href="#form" className={css.applyButton}>
                    <p>GO TO APP</p>
                    <Image
                      alt="left arrow"
                      src="/assets/leftArrowBLACK.svg"
                      width={13.207}
                      height={8.708}
                    />
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="lg:hidden  flex flex-col my-4 px-2 gap-4">
        {ecosystem.map((tab) => (
          <div key={tab.name} className=' border rounded-[5px]'>
            <Image
              src={tab.logo}
              alt={tab.name}
              width={120}
              height={80}
              className="h-[60px] w-auto"
            />
            <div className="py-6 px-4 flex flex-col justify-center items-center font-ubuntu">
              {tab.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
