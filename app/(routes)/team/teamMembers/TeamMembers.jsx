import { Card } from '../cards/Card';
import alan from '../assets/alan.svg';
import nicole from '../assets/nicole.svg';
import guillermo from '../assets/guillermo.svg';
import chris from '../assets/chris.svg';
import abhishek from '../assets/abhishek.svg';
import mona from '../assets/mona.svg';
import daniel from '../assets/daniel.svg';
import ephraim from '../assets/ephraim.svg';

import css from './TeamMembers.module.css';

export function TeamMembers() {
  const techMembers = [
    {
      id: 1,
      image: chris,
      name: 'Chris',
      position: 'Software Engineer',
      description:
        'A Bay Area software engineer with 5+ years in web3, developing the smart contracts and blockchain infrastructure crucial to democratizing real estate.',
      linkedin: 'https://www.linkedin.com/in/chrswt/',
    },
    {
      id: 2,
      image: nicole,
      name: 'Nicole',
      position: 'Front End Developer',
      description:
        'Front End developer specializing in UX/UI design, known for her strong technical skills and passion for creating engaging digital experiences within the blockchain technology field.',
      linkedin: 'https://www.linkedin.com/in/nikiburgos/',
    },
    {
      id: 3,
      image: guillermo,
      name: 'Guillermo',
      position: 'Full-Stack Engineer',
      description:
        'Full-Stack engineer specializing in blockchain and smart contracts, continually enhancing his front-end and back-end development skills with cutting-edge technologies.',
      linkedin: 'https://www.linkedin.com/in/guillermo-galarza/',
    },
    {
      id: 4,
      image: abhishek,
      name: 'Abhishek',
      position: 'Full Stack Developer',
      description:
        'Full-stack developer with deep expertise in blockchain technologies, focusing on DEXs and NFT marketplaces across various platforms, committed to driving innovation in decentralized applications.',
      linkedin: 'https://www.linkedin.com/in/amishra91/',
    },
  ];

  const marketingMembers = [
    {
      id: 1,
      image: mona,
      name: 'Mona',
      position: 'Digital PR',
      description:
        'Fiction and non-fiction author with a methodical and creative approach, to enhance brand-audience connections and boost visibility and strategic positioning for both Web3 and Web2 markets.',
      linkedin: '/linkedin.com',
    },
    {
      id: 2,
      image: daniel,
      name: 'Daniel',
      position: 'Community Manager',
      description:
        'Community manager with 3+ years of experience in the Web3 space, to foster a safe, inclusive, and engaging environment, upholding community values and encouraging open expression.',
      linkedin: '/linkedin.com',
    },
    {
      id: 3,
      image: ephraim,
      name: 'Ephraim',
      position: 'Community Growth Strategist',
      description:
        "Community Growth Strategist specializing in blockchain and cryptocurrency, focused on expanding Libertum's global community through strategic engagement and innovative campaigns.",
      linkedin: 'https://www.linkedin.com/in/simply-ephraim-372152222/',
    },
  ];

  return (
    <div className={css.container}>
      <div className={css.technologyMembersContainer}>
        <h3>Technology</h3>
        <div className={css.members}>
          {techMembers.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
      <div className={css.maketingMembersContainer}>
        <h3>Marketing</h3>
        <div className={css.membersMarketing}>
          {marketingMembers.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
