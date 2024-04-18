import React from 'react';
import css from './feed.module.css';

interface Item {
  title: string;
  date?: string;
  paragraphs: string[];
}

interface Props {
  items: Item[];
}

const TimelineItem: React.FC<Item> = ({ title, date, paragraphs }) => (
  <div className="flex flex-col lg:flex-row space-x-24 mb-24 last:mb-0">
    <div className="hidden lg:flex flex-col mr-4">
      <div className="flex w-24">
        <div className="absolute w-2 left-10 lg:left-[137px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <circle cx="8" cy="8.81836" r="8" fill="#00B3B5" />
          </svg>
        </div>
        <p className="text-lg font-bold font-space_grotesk text-libertumGreen">
          {title}
        </p>
        <p className="text-black font-bold text-xl font-space_grotesk">
          {date}
        </p>
      </div>
    </div>
    <div className="flex-1 ml-4 w-[20rem]">
      <div className="flex lg:hidden">
        <div className="absolute h-full w-2 left-[37px] lg:left-[137px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <circle cx="8" cy="8.81836" r="8" fill="#00B3B5" />
          </svg>
        </div>
        <p className="text-lg font-bold font-space_grotesk text-libertumGreen">
          {title}
        </p>
        <p className="text-black font-bold text-xl font-space_grotesk">
          {date}
        </p>
      </div>

      <ul className="w-fit space-y-4 mt-8 lg:mt-0">
        {paragraphs.map((paragraph, index) => (
          <li
            key={index}
            className="mb-2 w-fit font-semibold flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 0L4.93875 1.06125L9.1275 5.25H0V6.75H9.1275L4.93875 10.9387L6 12L12 6L6 0Z"
                fill="#00B3B5"
                fillOpacity="0.8"
              />
            </svg>
            <p className="ml-2 lg:whitespace-nowrap">{paragraph}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export function Feed({ items }: Props) {
  return (
    <div className={css.container}>
      <div className="relative">
        <div className="absolute h-[81rem] max-h-[81rem] w-2 bg-gray-200 top-0 left-10 lg:left-[140px] rounded"></div>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
