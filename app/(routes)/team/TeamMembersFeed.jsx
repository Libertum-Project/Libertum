'use client';
import { Card } from './cards/Card';
import { techMembers, marketingMembers } from './teamMembers';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

function TeamMembers() {
  return (
    <div className="max-w-[75.125rem] mx-auto flex flex-col items-center">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <motion.h3
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-[#000041] text-center font-space_grotesk text-3xl font-semibold mt-[6rem]  mb-[4rem]"
        >
          Technology
        </motion.h3>
        <motion.div
          className="flex w-full lg:w-containerWidth justify-between flex-col lg:flex-row items-center h-[110rem] lg:h-fit"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          {techMembers.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              linkedin={member.linkedin}
              index={member.id}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <motion.h3
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-[#000041] text-center font-space_grotesk text-3xl font-semibold mt-[6rem]  mb-[4rem]"
        >
          Marketing
        </motion.h3>
        <motion.div
          className="flex lg:w-[55.125rem] w-full flex-col justify-between lg:flex-row items-center h-[90rem] lg:h-fit"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          {marketingMembers.map((member) => (
            <Card
              key={member.id}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              linkedin={member.linkedin}
              index={member.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TeamMembers;
