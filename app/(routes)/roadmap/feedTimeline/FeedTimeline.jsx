import Image from 'next/image';

import thumb from './thumb.svg';

function Item({ title, date, paragraphs }) {
  return (
    <section className="flex justify-end lg:justify-center items-center mb-24 last:mb-0 lg:ml-0 ml-16">
      <div className="flex relative flex-col lg:flex-row max-w-full lg:w-[38rem] h-fit lg:justify-between">
        <article className="relative lg:sticky top-5 lg:w-20 h-20 m-0 p-0 mr-4" id="progress">
          <p className="text-xl lg:text-lg font-bold font-space_grotesk text-libertumGreen lg:whitespace-nowrap">
            {title} <span className="text-black font-bold text-xl lg:text-lg font-space_grotesk">{date}</span>
          </p>
        </article>
        <ul className="lg:w-[23rem] space-y-4 mt-8 lg:mt-0 lg:ml-16">
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
    <div className="relative after:gridContainerFeed">
      <div className="flex flex-col relative lg:w-fit mx-auto pt-32 lg:pt-60 px-4 justify-center">
        <div className="absolute top-40 left-[2.4rem] h-[140rem] lg:top-60 lg:left-40 rounded bg-slate-300 lg:h-[100rem] w-2"></div>
        <div className="sticky left-28 top-7">
          <Image
            src={thumb}
            alt="thumb"
            height={180}
            width={52}
            className="absolute lg:top-[-9.5rem] lg:left-[7.6rem] left-0 top-[-7.6rem] "
          />
        </div>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeedTimeLine;
