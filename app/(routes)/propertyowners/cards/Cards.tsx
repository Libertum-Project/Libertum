import Image from 'next/image';

import css from './Cards.module.css';
import firstImage from './assets/firstImage.svg';
import checkbox from './assets/checkbox.svg';

const Cards = () => {
  const litleCards = [
    {
      title: 'Tokenization',
      items: [
        'A cost effective way to raise finance',
        '£50,000 – No Maximum',
        'Rental Yield Based',
        'No Transfer of Ownership',
      ],
    },
    {
      title: 'Cost Effective',
      items: [
        'Terms up to 30 years',
        'Up to 90% Loan to Value available ',
        'Adverse Credit – no problem ',
        'Individual arrangements tailored to your circumstances',
      ],
    },
    {
      title: 'Flexible',
      items: [
        'Funds against any commercial properties ',
        'Repayments geared to your rental yield ',
        'Effective funding for growth ',
        'Peer-to-Peer funding available for property development and existing commercial properties ',
      ],
    },
  ];

  return (
    <div className={css.container}>
      {/* first card */}
      <div className={css.cardContainer}>
        <div className={css.information}>
          <div className={css.informationTitle}>
            <h2>Flexibility that Designed for you</h2>
          </div>

          <p>
            Repay your rental monthly, over 12 months to 30 years for what your property is worth and without the need
            to transfer the ownership.
          </p>

          <p>
            Fixed rental yield-based funding linked to the existing lease. Allowing you to be sure of the amount of your
            repayments for the full term of the loan.
          </p>

          <p>Be part of Tokenization of real world assets and the RWA revolution.</p>
        </div>
        <div className={css.imageContainer}>
          <Image src={firstImage} width="232" height="371" alt="buildings" />
        </div>
      </div>

      {/* litle cards */}
      <div className={css.litleCardsContainer}>
        {litleCards.map((card, index) => (
          <div key={index} className={css.litleCards}>
            <h2>{card.title}</h2>
            <div className={css.tokenOptions}>
              {card.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <Image src={checkbox} alt="checkbox" width={24} height={24} /> <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
