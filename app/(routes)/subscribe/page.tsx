import Link from 'next/link';

import Subscribe from './Subscribe';

export default function page() {
  return (
    <div>
      <div className="absolute top-0 right-0 z-[-1] w-full h-[180%] lg:h-[140%] bg-gradient-to-br from-[#000041] to-[#0E0E1E]"></div>
      <div className="pt-60 pb-8 px-4 max-w-[75.125rem] mx-auto flex flex-col justify-center items-center relative box-border gap-4">
        <h2 className="text-white text-left text-5xl font-semibold font-space_grotesk">
          {' '}
          <span className="text-libertumGreen"> Waitlist! </span> Secure your VIP pass to the pre-launch excitement.
        </h2>
        <p className="text-white text-left font-montserrat text-base">
          {' '}
          Reserve your spot on the waitlist for exclusive early access to the Libertum platform. Simply enter your
          email, and we make sure you will be among the first in line to experience and earn passive rental income
          platform when it is unveiled!{' '}
        </p>

        <div className="flex justify-start items-start w-full">
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
