import { FeedTimeLine } from '../feedTimeline/FeedTimeline';

import css from './feed.module.css';

export const Feed = () => {
  return (
    <div className={css.container}>
      <FeedTimeLine />
    </div>
  );
};
