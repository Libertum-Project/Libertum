import css from './feed.module.css';
import { Socials } from './socials/socials';
import { TwitterFeed } from './twitter/twitter';

export const Feed = () => {
  return (
    <div className={css.container}>
      <Socials />
      <TwitterFeed />
    </div>
  );
};
