'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import css from './Tags.module.css';
import inactiveArrow from './assets/inactiveArrow.svg';
import activeArrow from './assets/activeArrow.svg';
import Link from 'next/link';
import { ContactForm } from '../contactForm/contactFrom';

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

export function Tags() {
  const [activeOption, setActiveOption] = useState('realEstate');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactButtonArrowDown, setContactButtonArrowDown] = useState(false); 
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (optionId: string) => {
    setActiveOption(optionId);
  };

  const handleOptionHover = (optionId: string) => {
    if (activeOption !== optionId) {
      setActiveOption(optionId);
    }
  };

  const handleContactButtonClick = () => {
    setShowContactForm((prevState) => !prevState); 
    setContactButtonArrowDown((prevState) => !prevState);
  };

  const options: Option[] = [
    {
      id: 'realEstate',
      name: 'Indefinite Delivery/Indefinite Quantity (IDIQ)',
      information: {
        title: 'Indefinite Delivery/Indefinite Quantity (IDIQ)',
        paragraphs: [
          'Libertum is currently seeking proposals for an <b>Indefinite Delivery/Indefinite Quantity</b> contract to provide engagement tools for our community. The solutionpartner will be required to develop and deploy sophisticated software Infrastructure for Decentralized Tokenized RWA real estate markets.',
          'The solution provider should have a proven ability to provide          community engagement solutions such as staking pools for both           liquidity and funding, and community engagement and transparency tools for Libertums LBM token and the subsequent Rental Income Token (RIT).',
          'Proposals will be evaluated using the best value trade-off method,    with non-price factors being significantly more important than price.',
          '📅 <b> Applications </b> are due by <i>April 5, 2024</i>, and <b>proposals</b> are due by <i>April 10, 2024</i>.',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '#',
    },
    {
      id: 'ambassadors',
      name: 'Interoperability Protocol (UIP)',
      information: {
        title: ' Interoperability Protocol (UIP)',
        paragraphs: [
          'Libertum is currently seeking proposals for an Indefinite Delivery contract to provide <b>Interoperability Protocol (UIP)</b> tools for our community.',
          'The solution partner will be required to develop and deploy sophisticated software Infrastructure to compliment the Decentralized Tokenized #RWA real estate Market Libertum provides.',
          'The solution provider should have a proven ability to provide Liquidity Distribution Mechanisms solutions to enable the Libertum community to navigate on-chain data across multiple blockchains seemlessly. Ultimately the solution should simplify the users ability to interact with $LBM.',
          'As always proposals will be evaluated using the best value trade-off method, with non-price factors being significantly more important than price.',
          '📅 <b>Applications</b> are due by  <i>April 5, 2024</i>, and <b>proposals</b> are due by <i>April 10, 2024.</i>'
        ],
        buttonLabel: 'Contact Us',
      },
      href: '#',
    },
  ];

  return (
    <div className={css.container}>
      <h2 className={css.title}>
        Request For Proposal:
        <span className={css.paragraph}>
          <br />
          Libertum is currently seeking proposals. Check them out, fill the form
          below, and we will get in touch with you!
        </span>
      </h2>
      <div className={css.tabAccordion}>
        <section className={css.options}>
          {options.map((option) => (
            <div
              key={option.id}
              className={`${css.tabPanel} ${
                activeOption === option.id ? css.active : ''
              }`}
              onClick={() => handleOptionClick(option.id)}
              onMouseEnter={() => handleOptionHover(option.id)}
            >
              <div
                className={`${css.frameTitle} ${
                  activeOption !== option.id ? css.inactive : ''
                }`}
              >
                <h2>{option.name}</h2>
                <Image
                  alt="left arrow"
                  src={activeOption === option.id ? activeArrow : inactiveArrow}
                  width="40"
                  height="40"
                />
              </div>
            </div>
          ))}
        </section>

        <section className={css.information}>
          <div className={showContactForm ? css.contentShifted : ''} ref={contentRef}>
            <div>
            <h2>
              {
                options.find((opt) => opt.id === activeOption)?.information
                  .title
              }
            </h2>
            {options
              .find((opt) => opt.id === activeOption)
              ?.information.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
            <button
            className={css.buttonInformation}
            onClick={handleContactButtonClick}
          >
            {
              options.find((opt) => opt.id === activeOption)?.information
                .buttonLabel
            }
            <Image
              alt="left arrow"
              src={contactButtonArrowDown ? "/assets/arrowDown.svg" : "/assets/leftArrowBLACK.svg"} 
              width={13.207}
              height={8.708}
            />
          </button>
          <div className={css.contactFormDiv}>
            {showContactForm && <ContactForm />}
          </div>  
          </div>
        </section>
      </div>
    </div>
  );
}