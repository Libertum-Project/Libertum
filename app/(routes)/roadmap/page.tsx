'use client'
import React from 'react';


import FeedTimeLine from './feedTimeline/FeedTimeline';
import { Hero } from './Hero';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';

export default function Roadmap() {
  return (
    <>
      <Hero />
      <motion.div variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} className="container  max-w-[75rem] m-auto flex flex-col justify-center items-center mt-12">

        <motion.p 
        className="font-space_grotesk font-semibold text-4xl"
        variants={fadeIn('up', 'tween', 1.4, 1)}
        >Roadmap
        </motion.p>

        <motion.video variants={fadeIn('up', 'tween', 1.6, 1)} controls width="600" className="rounded-[15px] mt-6" poster="./roadmapView.png">
          <source src="/LBMRoadmap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>      
      <FeedTimeLine />
    </>
  );
}
