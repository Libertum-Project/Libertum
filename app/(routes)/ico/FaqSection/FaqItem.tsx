"use client";
import { useState } from "react";
import Image from "next/image";
import css from "./FaqSection.module.css";
import leftArrow from "@/public/assets/vector.svg";
import questionIcon from "@/public/assets/question.svg";

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
        <div className={css.questionIconContainer}>
          <Image src={questionIcon} alt="question" width={24} height={24} />
        </div>

        <h4>{question}</h4>

        <div
          className={`${css.arrowContainer} ${
            isExpanded ? css.rotateArrow : ""
          }`}
        >
          <Image src={leftArrow} alt="left arrow" width={20} height={13} />
        </div>
      </div>
 <div className={`${css.answerContainer} ${isExpanded ? css.open : ""}`}>
        <div className={css.answer}>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
