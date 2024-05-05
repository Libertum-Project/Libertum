'use client'
import React, { useState, useEffect } from 'react';
import css from './feed.module.css';
import FeedTimeLine from '../feedTimeline/FeedTimeline';



export function Feed() {
  return (
    <div className={css.container}>    
            <FeedTimeLine /> 

    </div>
  );
}
