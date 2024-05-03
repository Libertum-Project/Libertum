import React from 'react';
import { Hero } from './hero/hero';
import { Card } from './cards/Card';
import { TeamMembers } from './teamMembers/TeamMembers';

export default function Team() {
  return (
    <div>
      <Hero />
      <TeamMembers />
    </div>
  );
}
