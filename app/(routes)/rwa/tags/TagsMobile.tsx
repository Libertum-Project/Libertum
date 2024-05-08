'use client';
import { type ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './TagsMobile.module.css';

interface Option {
  id: string;
  name: string;
  information: {
    title: string;
    paragraphs: string[];
    buttonLabel: string;
  };
  href: string;
}

export function TagsMobile() {
  const options: Option[] = [
    {
      id: 'assets',
      name: 'Real World Assets',
      information: {
        title: 'Real World Assets',
        paragraphs: [
          'These are tangible or intangible assets like real estate, art, stocks, bonds, and even commodities. Tokenization enables these assets to become more divisible, tradable, and accessible to a broader range of investors.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'realTokenization',
      name: 'Real Estate Tokenization',
      information: {
        title: 'Real Estate Tokenization',
        paragraphs: [
          'One of the most prominent use cases for tokenization. It allows real estate assets or the right to the rental income they generate to be divided into tokens, making it easier for people to invest in properties without buying the entire asset. This enables fractional ownership and access to lucrative investment opportunities that are more typically restricted. Tokenization is great for real estate owners as their properties can access more liquidity. ',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'utility',
      name: 'Utility Tokens',
      information: {
        title: 'Utility Tokens',
        paragraphs: [
          'These are a type of digital asset token and are  being deemed by many as a coupon or a pre- paid gift card, or a coupon.  This kind of token is basically a contract for provision of goods or services, to be redeemed by the token holder, once or continuously. ',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'liquidity',
      name: 'Liquidity',
      information: {
        title: 'Liquidity',
        paragraphs: [
          'Liquidity refers to how “liquid” an asset is which simply means how easy it is to buy or sell at any given time because you always require someone on the other side willing to trade with you. Tokenized assets can be traded 24/7 on the Libertum  marketplaces, improving liquidity compared to traditional illiquid assets like real estate. Increasing liquidity is positive because it increases financial flexibility of an asset, allowing individuals and companies to respond quickly to any price changes.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'tokenization',
      name: 'Tokenization',
      information: {
        title: 'Tokenization',
        paragraphs: [
          'Tokenization is the core concept of RWAs. It’s the process of creating digital tokens that represent ownership, value, or rights for any asset that exists in the physical world. The Libertum Tokenization Platform  enables the trading and investment of real estate assets not typically accessible in certain markets, geographic or demographic regions and increases liquidity and accessibility for them. ',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      information: {
        title: 'Blockchain',
        paragraphs: [
          'The underlying technology behind tokenization. Blockchain provides the security, transparency, and immutability required to ensure the integrity of tokenized assets.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'ownership',
      name: 'Fractional Ownership',
      information: {
        title: 'Fractional Ownership',
        paragraphs: [
          'Tokenization allows assets to be divided into smaller units, enabling fractional ownership. Just like how cryptocurrencies can be purchased in small increments as a whole, Investors can purchase tokens representing a fraction of an expensive asset, making the experience overall more accessible.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'smartcontracts',
      name: 'Smart Contracts',
      information: {
        title: 'Smart Contracts',
        paragraphs: [
          'These self-executing contracts with the terms of the agreement directly written into code automate processes like dividend distribution, making ownership of tokenized assets efficient as many operational burdens typically relying on real-world middlemen can be automated in a transparent and fair way.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
  ];

  const [activeOption, setActiveOption] = useState('realEstate');
  const [expandedOptions, setExpandedOptions] = useState<string[]>([options[0].id]);

  const handleOptionClick = (optionId: string) => {
    // Toggle the selected option
    const newExpandedOptions = expandedOptions.includes(optionId)
      ? expandedOptions.filter((id) => id !== optionId)
      : [...expandedOptions, optionId];

    setActiveOption(optionId);
    setExpandedOptions(newExpandedOptions);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Key Terms & Phrases</h2>
      <div className={css.options}>
        {options.map((option) => (
          <div key={option.id} className={css.tabPanel}>
            <div
              className={`${css.frameTitle} ${expandedOptions.includes(option.id) ? css.active : css.inactive}`}
              onClick={() => handleOptionClick(option.id)}
            >
              <h2>{option.name}</h2>
            </div>

            {expandedOptions.includes(option.id) && (
              <div className={css.information}>
                <div>
                  <h2>{option.information.title}</h2>
                  {option.information.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <Link href={option.href} className={css.buttonInformation}>
                  {option.information.buttonLabel}
                  <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
