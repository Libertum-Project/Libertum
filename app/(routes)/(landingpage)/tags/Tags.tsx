'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './Tags.module.css';
import inactiveArrow from './assets/inactiveArrow.svg';
import activeArrow from './assets/activeArrow.svg';
import realEstateACTIVE from './assets/realEstateActive.svg';
import realEstateINACTIVE from './assets/realEstateInactive.svg';
import ambassadorsACTIVE from './assets/ambassadorsActive.svg';
import ambassadorsINACTIVE from './assets/ambassadorsInactive.svg';
import investingINACTIVE from './assets/investingInactive.svg';
import investingACTIVE from './assets/investingActive.svg';
import partnersACTIVE from './assets/partnersActive.svg';
import partnersINACTIVE from './assets/partnersInactive.svg';

interface Option {
  id: string;
  icon: { active: string; inactive: string };
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

  const handleOptionClick = (optionId: string) => {
    setActiveOption(optionId);
  };

  const handleOptionHover = (optionId: string) => {
    if (activeOption !== optionId) {
      setActiveOption(optionId);
    }
  };

  const options: Option[] = [
    {
      id: 'realEstate',
      icon: { active: realEstateACTIVE, inactive: realEstateINACTIVE },
      name: 'Real-World Asset Owners',
      information: {
        title: 'Tokenize your Assets',
        paragraphs: [
          'Forward thinking real estate owners and agencies can be part of the Libertum evolution.',
          '$35 trillion worth of assets will be tokenized within the next decade according to the World Economic Forum.',
          'Don’t be left behind.',
        ],
        buttonLabel: 'Learn More',
      },
      href: '/comingsoon',
    },
    {
      id: 'ambassadors',
      icon: { active: ambassadorsACTIVE, inactive: ambassadorsINACTIVE },
      name: 'Libertum Ambassadors',
      information: {
        title: 'Libertum Ambassadors',
        paragraphs: [
          'Get rewarded by contributing to the growth of the LIbertum network.  Collaborate with Libertum to help drive global adoption.',
          'We want to speak to influencers and marketers who understand the RWA landscape and want to contribute to the evolution happening in real estate tokenisation.  You will be eligible for various reward programmes designed to accelerate asset tokenisation globally ',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '/community',
    },
    {
      id: 'investors',
      icon: { active: investingACTIVE, inactive: investingINACTIVE },
      name: 'Smart Investors',
      information: {
        title: 'Smart Investors',
        paragraphs: [
          'We are currently considering additional investors in Libertum. If you have experience in blockchain and real estate excite, if you understand the step-change that is taking place in real estate we want to partner with you.',
          'Our to goal in collaborating is ensure to ensure mutual success - help us scale faster and leverage the cross network platform we have been building.',
        ],
        buttonLabel: 'Reach Out',
      },
      href: '/comingsoon',
    },
    {
      id: 'partners',
      icon: { active: partnersACTIVE, inactive: partnersINACTIVE },
      name: 'Technology Partners',
      information: {
        title: 'Technology Partners',
        paragraphs: [
          'We aim to always be at the forefront of emerging technology.',
          'If you are a technology provider that knows RWA tokenisation is the future evolution of investment contact us about how our community can benefit from integrating with your technology. ',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '/community',
    },
  ];

  return (
    <div className={css.container}>
      <h2 className={css.title}>Be part of the RWA Evolution. Today.</h2>

      <div className={css.tabAccordion}>
        <section className={css.options}>
          {options.map((option) => (
            <div
              key={option.id}
              className={`${css.tabPanel} ${activeOption === option.id ? css.active : ''}`}
              onClick={() => handleOptionClick(option.id)}
              onMouseEnter={() => handleOptionHover(option.id)}
            >
              <div className={css.optionsIcon}>
                <Image
                  alt="left arrow"
                  src={activeOption === option.id ? option.icon.active : option.icon.inactive}
                  width="24"
                  height="24"
                />
              </div>

              <div className={`${css.frameTitle} ${activeOption !== option.id ? css.inactive : ''}`}>
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
          <div>
            <h2>{options.find((opt) => opt.id === activeOption)?.information.title}</h2>
            {options
              .find((opt) => opt.id === activeOption)
              ?.information.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>

          <Link href={options.find((opt) => opt.id === activeOption)?.href || '/'} className={css.buttonInformation}>
            {options.find((opt) => opt.id === activeOption)?.information.buttonLabel}
            <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
          </Link>
        </section>
      </div>
    </div>
  );
}
