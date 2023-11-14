import css from './MessageBox.module.css';
import success from '../../public/icons/checkIcon.svg';

const SuccessMessage = ({
  setShowSuccessMessage,
  messagge,
  textBtn,
  redirectURL,
}) => {
  const handleContinue = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };
  return (
    <div
      className={css.successBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div
        className={css.successBox}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={css.header}>
          <img src={success} alt="success" />
          <h2>Success!</h2>
        </div>
        <div>
          <p>{messagge}</p>
        </div>
        <a href={redirectURL}>
          <button>{textBtn}</button>
        </a>
      </div>
    </div>
  );
};

export default SuccessMessage;
