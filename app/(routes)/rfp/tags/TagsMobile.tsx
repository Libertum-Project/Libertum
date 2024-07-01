'use client';
import { useState } from 'react';
import Image from 'next/image';

import ContactForm from '../contactForm/contactFrom';

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

const TagsMobile = () => {
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
          '📅 <b>Applications</b> are due by  <i>April 5, 2024</i>, and <b>proposals</b> are due by <i>April 10, 2024.</i>',
        ],
        buttonLabel: 'Contact Us',
      },
      href: '#',
    },
  ];

  const [expandedOptions, setExpandedOptions] = useState<string[]>([options[0].id]);
  const [activeContactForm, setActiveContactForm] = useState<string | null>(null);

  const handleOptionClick = (optionId: string) => {
    const newExpandedOptions = expandedOptions.includes(optionId)
      ? expandedOptions.filter((id) => id !== optionId)
      : [...expandedOptions, optionId];

    setExpandedOptions(newExpandedOptions);
    setActiveContactForm(null); // Cerrar el formulario de contacto cuando se cambia de panel
  };

  const handleContactButtonClick = (optionId: string) => {
    setActiveContactForm(optionId === activeContactForm ? null : optionId); // Alternar el estado del formulario de contacto
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Be part of the RWA Evolution. Today.</h2>
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
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>

                <button className={css.buttonInformation} onClick={() => handleContactButtonClick(option.id)}>
                  {option.id === activeContactForm ? 'Close' : option.information.buttonLabel}{' '}
                  {/* Cambiar la etiqueta del botón si el formulario está activo */}
                  <Image
                    alt="left arrow"
                    src={
                      option.id === activeContactForm
                        ? '/assets/arrowUp.svg' // Cambiar la flecha hacia arriba si el formulario está activo
                        : '/assets/arrowDown.svg'
                    }
                    width={13.207}
                    height={8.708}
                  />
                </button>
                {option.id === activeContactForm && <ContactForm />}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsMobile;
