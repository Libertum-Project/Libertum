import { Card } from '../cards/Card';
import alan from '../assets/alan.svg';
import css from './TeamMembers.module.css'

export function TeamMembers(){
  const techMembers = [
    {
      id: 1,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 2,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 3,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 4,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    }
  ];

  const marketingMembers = [
    {
      id: 1,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 2,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
    {
      id: 3,
      image: alan,
      name: 'Alan Gormley',
      position: 'COO & Co-Founder',
      description:
        'Digital marketing expert with 10+ years of experience in advertising technologies and machine learning, a crypto enthusiast, and the founder of Ad360, an AI advertising platform.',
      linkedin: '/linkedin.com'
    },
  ];
 
  return(
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
  )
}; 
