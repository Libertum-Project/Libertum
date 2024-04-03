import { type ReactElement } from 'react';
import Image from 'next/image';
import css from './Tokenomics.module.css';
import graph from './graph.svg';

export function Tokenomics(): ReactElement {
  const tokenomicsData = [
    {
      color: '#CB61C7',
      title: 'Token Sale',
      percentage: '29%',
    },
    {
      color: '#FFA143',
      title: 'Team Token',
      percentage: '25%',
    },
    {
      color: '#2840EA',
      title: 'Ecosystem & Partners',
      percentage: '15%',
    },
    {
      color: '#FF5252',
      title: 'Staking Reward',
      percentage: '4%',
    },
    {
      color: '#00B3B5',
      title: 'Treasury Reserve',
      percentage: '25%',
    },
    {
      color: '#87E12C',
      title: 'Marketing & Advisory',
      percentage: '4%',
    },
  ];

  return (
    <section className={css.tokenomicsContainer}>
      <div className={css.tokenomics}>
        <div className={css.graphContainer}>
          <div>
            <div className={css.text}>
              <h3>Tokenomics</h3>
              <p className={css.bodyText}>
                We believe in a conservative approach to ensure price stability.
                Only a small - but significant - percentage of $LBM will be
                unlocked at the token generation event. This means that $LBM
                will enjoy stability and reputational excellence.
              </p>
            </div>

            <div className={css.graphDescription}>
              {tokenomicsData.map((item, index) => (
                <div className={css.tokenomicsItem} key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <circle cx="8" cy="8.81836" r="8" fill={item.color} />
                  </svg>
                  <p>{item.title}</p>
                  <span>{item.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          <Image src={graph} alt="graph" width={328} height={137} />
        </div>
      </div>
    </section>
  );
}
