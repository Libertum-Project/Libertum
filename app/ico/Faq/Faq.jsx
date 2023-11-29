import "./Faq.scss";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const QuestionAnswer = ({ pregunta, answer, isActive, onClick }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);

  return (
    <div ref={itemRef} className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question" onClick={onClick}>
        {pregunta}
        <div className="faq-icon">
          {isActive ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
      </div>
      {isActive && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const aboutLibertum = [
    {
      pregunta: "What are the $LBM token details?  ",
      answer: (
        <ul>
          <li>
            $LBM is an ERC-20 token on the Polygon Smart Chain with a maximum
            supply of only 200,000,000 (200 million).{" "}
          </li>
          <br />
          <li>
            The $LBM Token is the native token on the blockchain that is the
            backbone of the Libertum fractionalized rental income ecosystem.
          </li>
          <br />
          <li>
            The token contract address
            is 0x7C5f61351339B7a516ba1e7fC0d9052042CC4875. Please do not send
            any funds to this token contract address, as they cannot be
            recovered. $LBM can currently only be purchased through the official
            presale at buy.libertum.io
          </li>
        </ul>
      ),
    },
    {
      pregunta: "Why the $LBM token?  ",
      answer: (
        <ul>
          <li>
            The $LBM token will be fueling the vibrant Libertum rental income
            ecosystem. The $LBM token will provide long term rewards for holders
            of the $LBM token in the form of revenue share through the staking
            pool. It will generate a 10% return to the $LBM token holders
            annually. Moreover, it may form a payment overlay network alongside
            fiat transactions that will ease the barrier to entry into the
            Libertum ecosystem for those among the unbanked (i.e. no access to
            traditional financial services).{" "}
          </li>
        </ul>
      ),
    },
    {
      pregunta: "When is the claim and launch of $LBM token? ",
      answer: (
        <ul>
          <li>
            Once the Token Generation Event (TGE) kicks off, eligible holders
            will receive tokens directly in their wallets. No delays here! As
            soon as the public sale starts, we&apos;ll airdrop the tokens to
            you. Just head over to the token dashboard to access your tokens
            during the TGE. And don&apos;t worry, we&apos;ll make sure the
            official airdrop is smooth sailing. Just make sure you have the
            right wallet set up to receive your tokens seamlessly. Need more
            info? Don&apos;t hesitate to reach out to our support team.
            We&apos;re here to support you every step of the way!{" "}
          </li>
        </ul>
      ),
    },
    {
      pregunta: "How do I claim my $LBM tokens? ",
      answer: (
        <ul>
          <li>To claim your tokens, please follow the steps below: </li>
          <li>
            {" "}
            • Ensure that you participated in the public sale and are eligible
            to receive tokens during the Token Generation Event (TGE).{" "}
          </li>
          <li>
            {" "}
            • Straight after the public sale commences, the airdrop process will
            begin, and the tokens will be distributed to the wallets of eligible
            holders.{" "}
          </li>
          <li>
            {" "}
            • During this period, you can access and monitor your tokens on the
            token dashboard provided by Libertum.{" "}
          </li>
          <li>
            {" "}
            • Once the airdrop is completed, the tokens will be fully accessible
            and transferable in your wallet as per the schedule mentioned in the
            table above.{" "}
          </li>
          <li>
            {" "}
            • If you encounter any issues or have specific questions regarding
            the token claim process, kindly reach out to our dedicated support
            team. We are here to assist you every step of the way.{" "}
          </li>
        </ul>
      ),
    },
    {
      pregunta: "Where is the company located?",
      answer:
        "Libertum is located in The United Kingdom and The United Arab Emirates.",
    },
    {
      pregunta: "How do I contact support? ",
      answer: (
        <ul>
          <li>
            Contact our support team at hello@libertum.io for any questions,
            concerns, or inquiries. Our dedicated support staff is ready to
            assist you promptly and ensure your experience with our project is
            smooth and enjoyable. Feel free to reach out to us anytime, and we
            are excited to provide you with excellent support and service. Thank
            you for choosing freedom with Libertum!{" "}
          </li>
        </ul>
      ),
    },
    {
      pregunta: "How to buy?",
      answer: (
        <ul>
          <li>
            1. REQUIREMENTS: You will need to have a web3 compatible wallet such
            as Metamask connected to your browser, alternatively, you can also
            use other wallets supported by Wallet Connect, such as Trust Wallet.
            To ensure a smooth process for participating in the presale, we
            suggest using a desktop browser and Metamask. For mobile devices, we
            suggest using Trust Wallet for the smoothest user experience.{" "}
          </li>
          <br />
          <li>
            2. WALLET CONNECTION: Enter the amount you wish to purchase and
            click &apos;Connect Wallet&apos; to choose your preferred payment
            option for acquiring $LBM tokens. Ensure your wallet has a
            sufficient balance in the desired currency to display available
            options or alternatively use pay by card or bank transfer for FIAT
            payment. After selecting your desired currency in our widget,
            you&apos;ll be redirected to your wallet or card payment gateway for
            completing the transaction.
            <br /> There will be 2 options to buy LBM:
            <br />
            🔹 with TRANSFER / CARD (Fiat Currency)
            <br />
            🔹 with CRYPTO{" "}
          </li>
          <br />
          <li>
            3. CLAIM: You can claim your $LBM tokens at the end of the presale.
            Details will be released closer to the time. Once the presale period
            has concluded, you must visit our website and click the ‘Claim’
            button.{" "}
          </li>
        </ul>
      ),
    },
    {
      pregunta: "How to claim? ",
      answer: (
        <ul>
          <li>
            As we complete all funding rounds, you&apos;ll gain the opportunity
            to claim your $LBM tokens effortlessly! Stay tuned for comprehensive
            instructions on how to claim, which will be revealed closer to the
            scheduled time. When the claiming process is ready, simply visit our
            main page at libertum.io and click on the &apos;Claim&apos; button.
            We&apos;ve got you covered, and claiming your $LBM tokens will be as
            seamless as our investing in our fractionalized rental income model{" "}
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="container-faq">
      {aboutLibertum.map((item, index) => (
        <QuestionAnswer
          key={index}
          pregunta={item.pregunta}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
