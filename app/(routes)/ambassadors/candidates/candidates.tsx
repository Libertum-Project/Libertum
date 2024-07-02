import css from './candidates.module.css';
import { FormCandidates } from './form/formCandidates';

export const Candidates = () => {
  return (
    <div className={css.container}>
      <div className={css.textFrame}>
        <h2>Ideal Ambassador Candidates</h2>
        <p>
          If you have a keen interest in delving into the practical uses of blockchain technology and are excited about
          integrating real-world assets into the tokenization ecosystem, we invite you to explore the opportunity of
          becoming a Libertum Ambassador.
        </p>
        <h4>Here are the key qualities we seek in an ideal candidate:</h4>
        <ul>
          <li>
            An interest in the real-world applications of blockchain technology and onboarding real-world assets to
            DeFi.
          </li>
          <li>
            Proficiency in written and spoken English, with strong writing and communication skills for social media
            platforms.
          </li>
          <li>A keenness to delve into Libertum and the surrounding real-world asset ecosystem in DeFi.</li>
        </ul>
        <h4>Ambassadors play an integral role by:</h4>
        <ul>
          <li>Speaking about Libertum at events, meet-ups, and community calls.</li>
          <li>
            Conducting research and creating original articles, blog posts, and social media content about Libertum,
            RWA, or specific use cases.
          </li>
          <li>Acting as a brand ambassador for Libertum in your local area.</li>
          <li>Identifying potential asset originators or partners.</li>
        </ul>
      </div>

      <FormCandidates />
    </div>
  );
};
