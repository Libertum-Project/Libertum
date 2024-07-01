import FeedTimeline from '../feedTimeline/FeedTimeline';

import css from './feed.module.css';

const Feed = () => {
  return (
    <div className={css.container}>
      <FeedTimeline />
    </div>
  );
};

export default Feed;
