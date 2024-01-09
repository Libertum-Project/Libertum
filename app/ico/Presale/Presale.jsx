'use client'
import "./Presale.scss";
import coinIcon from "../assets/coinIcon.svg";
import calendarIcon from "../assets/calendar.svg";
import tagIcon1 from "../assets/tag.svg";
import tagIcon2 from "../assets/tag2.svg";
import tagIcon3 from "../assets/tag3.svg"

const Card = ({ image, dateIcon, title, features, date, completed }) => {

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
<div className={`card ${completed ? 'completed-card' : ''}`}>
      {completed && (
        <div className="completed-overlay">
          <span className="completed-text">{completed}</span>
        </div>
      )}
      <div className="image">{image}</div>
      <div className="date-container">
        <div className="date-icon">{dateIcon}</div>
        <div className="date">{date}</div>
      </div>
      <h3 className="title">{title}</h3>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <button className="buybutton" onClick={onScrollToTop}>
        BUY
      </button>
    </div>
  );
};

const PresaleGrid = ({ onScrollToTop }) => {
  const cardData = [
    {
      // icon: <img src={coinIcon} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "Starts 1 Dec 2023",
      title: "PreSale",
      features: [
        "Tokens for sale: 6,000,000",
        "Price start at: $0.06",
        "Raise: $360.000",
      ],
      completed: "Sold Out!"
    },
    {
      // icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon3} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "Midnight 19 Feb 2024",
      title: "Public Round 1",
      features: [
        "Tokens for sale: 4.000.000",
        "Price start at: $0.066",
        "Raise: $264.000",
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon2} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "11 to 29 March 2024",
      title: "Public Round 2",
      features: [
        "Tokens for sale: 6,000,000",
        "Price start at: $0.072",
        "Raise: $432.000",
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      // image: <img src={tagIcon4} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "April 2024",
      title: "Launch Day",
      features: ["Price start at: $0.08"],
    },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} {...card} onScrollToTop={onScrollToTop} />
      ))}
    </div>
  );
};

export default PresaleGrid;
