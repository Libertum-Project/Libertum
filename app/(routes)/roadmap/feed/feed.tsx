'use client';
import React from 'react';

import FeedTimeline from '../feedTimeline/FeedTimeline';

import css from './feed.module.css';

export function Feed() {
  return (
    <div className={css.container}>
      <FeedTimeline />
    </div>
  );
}
