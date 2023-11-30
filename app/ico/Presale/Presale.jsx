import "./Presale.scss";
import coinIcon from "../assets/coinIcon.svg";
import calendarIcon from "../assets/calendar.svg";
import tagIcon1 from "../assets/tag.svg";
import tagIcon2 from "../assets/tag2.svg";

const Card = ({ image, dateIcon, title, features, date, onScrollToTop }) => {
  return (
    <div className="card">
      {/* <div className="icon">{icon}</div> */}
      <div className="image">{image}</div>
      <div className="date-container">
        <div className="date-icon">{dateIcon}</div>
        <div className="date">{date}</div>
      </div>
      <h3 className="title">{title}</h3>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
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
      image: <img src={tagIcon1} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "Starts 1 Dec 2023",
      title: "PreSale",
      features: [
        "Tokens for sale: 6,000,000",
        "Price start at: $0.06",
        "Raise: $360.000",
      ],
    },
    {
      // icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon2} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "15 to 20 Jan 2024",
      title: "Whitelist",
      features: [
        "Tokens for sale: 10,000,000",
        "Price start at: $0.072",
        "Raise: $720.000",
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      // image: <img src={tagIcon3} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "25 to 30 Jan 2024",
      title: "Public",
      features: [
        "Tokens for sale: 46,000,000",
        "Price start at: $0.08",
        "Raise: $3.680.000",
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      // image: <img src={tagIcon4} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "1st Feb 2024",
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
