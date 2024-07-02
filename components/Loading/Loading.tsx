import css from './Loading.module.css';

export const LoadingPage = () => {
  return (
    <div className={css.loading}>
      <div className={css['three-body']}>
        <div className={css['three-body__dot']}></div>
        <div className={css['three-body__dot']}></div>
        <div className={css['three-body__dot']}></div>
      </div>
    </div>
  );
};
