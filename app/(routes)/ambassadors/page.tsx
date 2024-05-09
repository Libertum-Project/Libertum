import React from 'react';

import { Hero } from './hero/hero';
import WhatIs from './whatIs/WhatIs';
import { Included } from './included/Included';
import { JoinTeam } from './joinTeam/JoinTeam';
import { Candidates } from './candidates/candidates';

export default function page() {
  return (
    <div>
      <Hero />
      <WhatIs />
      <Included />
      <JoinTeam />
      <Candidates />
    </div>
  );
}
