"use client";
import { type ReactElement, useState } from "react";
import Image from "next/image";
import css from "./TagsMobile.module.css";
import Link from "next/link";
import { ContactForm } from "../contactForm/contactFrom";

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
      id: 'realEstate',
      name: 'Indefinite Delivery/Indefinite Quantity (IDIQ)',
      information: {
        title: 'Indefinite Delivery/Indefinite Quantity (IDIQ)',
        paragraphs: [
          'Libertum is currently seeking proposals for an <b>Indefinite Delivery/Indefinite Quantity</b> contract to provide engagement tools for our community. The solutionpartner will be required to develop and deploy sophisticated software Infrastructure for Decentralized Tokenized RWA real estate markets.',
          'The solution provider should have a proven ability to provide          community engagement solutions such as staking pools for both           liquidity and funding, and community engagement and transparency tools for Libertums LBM token and the subsequent Rental Income Token (RIT).',
          'Proposals will be evaluated using the best value trade-off method,    with non-price factors being significantly more important than price.',
          '<b> Applications </b> are due by <i>April 5, 2024</i>, and <b>proposals</b> are due by <i>April 10, 2024</i>.',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '#',
    },
    {
      id: 'ambassadors',
      name: 'Other Proposal',
      information: {
        title: 'Other Proposal',
        paragraphs: [
          'Get rewarded by contributing to the growth of the LIbertum network.  Collaborate with Libertum to help drive global adoption.',
          'We want to speak to influencers and marketers who understand the RWA landscape and want to contribute to the evolution happening in real estate tokenisation.  You will be eligible for various reward programmes designed to accelerate asset tokenisation globally ',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '#',
    },
  ];

  const [activeOption, setActiveOption] = useState("realEstate");
  const [expandedOptions, setExpandedOptions] = useState<string[]>([
    options[0].id,
  ]);
  const [showContactForm, setShowContactForm] = useState(false); 
  const [contactButtonArrowDown, setContactButtonArrowDown] = useState(false); 

  const handleOptionClick = (optionId: string) => {
    // Toggle the selected option
    const newExpandedOptions = expandedOptions.includes(optionId)
      ? expandedOptions.filter((id) => id !== optionId)
      : [...expandedOptions, optionId];

    setActiveOption(optionId);
    setExpandedOptions(newExpandedOptions);
  };

  const handleContactButtonClick = () => {
    setShowContactForm((prevState) => !prevState); 
    setContactButtonArrowDown((prevState) => !prevState); 
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Be part of the RWA Evolution. Today.</h2>
      <div className={css.options}>
        {options.map((option) => (
          <div key={option.id} className={css.tabPanel}>
            <div
              className={`${css.frameTitle} ${
                expandedOptions.includes(option.id) ? css.active : css.inactive
              }`}
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

                <button
                  className={css.buttonInformation}
                  onClick={handleContactButtonClick}
                >
                  {option.information.buttonLabel}
                  <Image
                    alt="left arrow"
                    src={contactButtonArrowDown ? "/assets/arrowDown.svg" : "/assets/leftArrowBLACK.svg"} 
                    width={13.207}
                    height={8.708}
                  />
                </button>

                {showContactForm && <ContactForm />} 
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
