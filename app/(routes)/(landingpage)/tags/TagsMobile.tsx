'use client'
import { type ReactElement, useState } from "react";
import Image from "next/image";
import css from "./TagsMobile.module.css";

interface Option {
  id: string;
  name: string;
  information: {
    title: string;
    paragraphs: string[];
    buttonLabel: string;
  };
}

export function TagsMobile() {

  const options: Option[] = [
    {
      id: "realEstate",      
      name: "Real Estate agencies and owners",
      information: {
        title: "Real Estate agencies and owners",
        paragraphs: [
          "Forward thinking real estate owners and agencies can be part of the Libertum evolution.",
          "$35 trillion worth of assets will be tokenized within the next decade according to the World Economic Forum.",
          "Don’t be left behind.",
        ],
        buttonLabel: "Learn More",
      },
    },
    {
      id: "ambassadors",
      name: "Libertum Ambassadors",
      information: {
        title: "Libertum Ambassadors",
        paragraphs: [

          "Get rewarded by contributing to the growth of the LIbertum network.  Collaborate with Libertum to help drive global adoption.",
          "We want to speak to influencers and marketers who understand the RWA landscape and want to contribute to the evolution happening in real estate tokenisation.  You will be eligible for various reward programmes designed to accelerate asset tokenisation globally ",
        ],
        buttonLabel: "Contact Us",
      },
    },
    {
      id: "investors",
      name: "Smart Investors",
      information: {
        title: "Smart Investors",
        paragraphs: [

          "We are currently considering additional investors in Libertum. If you have experience in blockchain and real estate excite, if you understand the step-change that is taking place in real estate we want to partner with you.",
          "Our to goal in collaborating is ensure to ensure mutual success - help us scale faster and leverage the cross network platform we have been building.",
        ],
        buttonLabel: "Reach Out",
      },      
    },
    {
      id: "partners",
      name: "Technology Partners",
      information: {
        title: "Technology Partners",
        paragraphs: [

          "We aim to always be at the forefront of emerging technology.",
          "If you are a technology provider that knows RWA tokenisation is the future evolution of investment contact us about how our community can benefit from integrating with your technology. ",
        ],
        buttonLabel: "Contact Us",
      },      
    },
  ];


  const [activeOption, setActiveOption] = useState("realEstate");
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
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <button className={css.buttonInformation}>
                    {option.information.buttonLabel}
                    <Image alt="left arrow" src="/assets/leftArrowBLACK.svg" width={13.207} height={8.708} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
  );
}