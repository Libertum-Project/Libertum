import css from './Rfp.module.css';
import { TagComponent } from './tags/tag';

export default function Rfp() {
  return (
    <div className={css.container}>
      <div className={css.background}></div>
      <div className={css.frame}>
        <TagComponent />
      </div>
    </div>
  );
}
