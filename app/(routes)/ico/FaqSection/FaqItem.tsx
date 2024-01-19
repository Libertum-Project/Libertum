"use client";
import { useState } from "react";
import Image from "next/image";
import css from "./FaqSection.module.css";
import leftArrow from "@/public/assets/vector.svg";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className={css.faqItem}>
      <div className={css.question} onClick={handleToggle}>
        <h4>{question}</h4>

        <div className={css.arrowContainer}>
          <Image src={leftArrow} alt="left arrow" width={20} height={13} />
        </div>
      </div>
      <div
        className={css.answer}
        style={{ display: isExpanded ? "block" : "none" }}
                dangerouslySetInnerHTML={{ __html: answer }}

      >
      </div>
    </div>
  );
};

export default FAQ;
