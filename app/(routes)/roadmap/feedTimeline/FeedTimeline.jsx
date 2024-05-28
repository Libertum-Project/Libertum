import { useRef } from 'react';
import Image from 'next/image';

import css from './FeedTimeline.module.css';
import thumb from './thumb.svg';

function Item({ title, date, paragraphs }) {
  const ref = useRef(null);

  return (
    <section className={css.section}>
      <div ref={ref} className="flex flex-col lg:flex-row">
        <article className={css.progress} id="progress">
          <p className="text-xl lg:text-lg font-bold font-space_grotesk text-libertumGreen">
            {title} <span className="text-black font-bold text-xl lg:text-lg font-space_grotesk">{date}</span>
          </p>
        </article>

        <ul className="w-fit space-y-4 mt-8 lg:mt-0 ml-[4rem] ">
          {paragraphs.map((paragraph, index) => (
            <li key={index} className="mb-2 w-fit font-semibold flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="w-[12px]"
              >
                <path
                  d="M6 0L4.93875 1.06125L9.1275 5.25H0V6.75H9.1275L4.93875 10.9387L6 12L12 6L6 0Z"
                  fill="#00B3B5"
                  fillOpacity="0.8"
                />
              </svg>
              <p className="ml-2">{paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const FeedTimeLine = () => {
  const items = [
    {
      title: 'Q1',
      date: '- 2024',
      paragraphs: [
        'Libertum Market Launch',
        'Secondary Marketplace Launch v1.0',
        'Ambassador Program Begins',
        'Launch on Plume Test Net',
        'Introduce Social Login and Account Abstraction',
        'Regulatory Compliance',
        '$LBM Public Sale',
        ' Solid Proof Audits',
      ],
    },
    {
      title: 'Q2',
      date: '- 2024',
      paragraphs: [
        ' 1st Tokenized Property and Rental Rewards Begins',
        'Expand Properties (Dubai, Mexico, Brazil & the EU) 10 -15',
        'Launch Secondary Marketplace ',
        'Launch “View” Libertums Token Analytics and Staking Poolsl',
        ' Launch on CoinWeb Cross Chain Test  Infrastructure',
        '2xDEX listings',
        ' Launch of “Get” Liquidity and Swap Tool',
      ],
    },
    {
      title: 'Q3',
      date: '- 2024',
      paragraphs: [
        'Lending and Borrowing Protocol Launched',
        'Launch  “Choose” - our Governance and Voting Protocol',
        'Introduce a Second Tokenisation Methodology',
        'Secondary Market Supports 3rd Party Properties',
        ' STO Licence x 2',
        'Tokenization of Parking Lots',
        ' Introduction of “Stay” - On-chain AirBnB for Token Holders',
      ],
    },
    {
      title: 'Q4',
      date: '- 2024',
      paragraphs: [
        'Global Expansion',
        'CEX Launches',
        ' Community Owned Digital Nomad Properties ',
        'Expand Blockchain Networks',
        ' Gamification of Marketplace',
        'White Labelled Solution for Real Estate Companies and RWA Partners',
      ],
    },
    {
      title: '2025',
      paragraphs: [
        'Libertums AI Property Valuation Tool',
        'Enhanced Token Utilities',
        'Launch Libertums Grant Scheme',
        'Dubai Property for Events and Remote Office for Token Holders',
        ' Libertums AI investment Strategy Tool',
      ],
    },
  ];

  return (
    <div className="flex flex-col relative">
      {/* <div className="absolute h-[110.5rem] lg:h-[81rem] lg:max-h-[81rem] w-2 bg-gray-200 top-0 left-40  rounded"></div> */}
      <div className={css.progressBar}></div>
      <div className={css.imageContainer}>
        <Image src={thumb} alt="thumb" height={180} width={52} className={css.image} />
      </div>

      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default FeedTimeLine;
