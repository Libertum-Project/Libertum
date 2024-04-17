import React, { ReactElement } from 'react';
import css from './feed.module.css';

interface Item {
  title: string;
  date?: string;
  paragraphs: string[];
}

interface Props {
  items: Item[];
}

const TimelineItem: React.FC<Item> = ({ title, date, paragraphs }) => {
  return (
    <div className="flex space-x-24 mb-24">
      <div className="flex flex-col mr-4">
        {/* <div className="h-12 w-12 bg-gray-500 rounded-full flex items-center justify-center">

        </div> */}
        <div className="flex w-24">
          <p className="text-lg font-bold font-space_grotesk text-libertumGreen">
            {title}
          </p>
          <p className="text-black font-bold text-xl font-space_grotesk">
            {date}
          </p>
        </div>
      </div>
      <div className="flex-1 ml-4 w-[20rem]">
        <ul className="w-fit space-y-4">
          {paragraphs.map((paragraph, index) => (
            <li
              key={index}
              className="mb-2 w-fit font-semibold flex justify-center items-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0L4.93875 1.06125L9.1275 5.25H0V6.75H9.1275L4.93875 10.9387L6 12L12 6L6 0Z"
                  fill="#00B3B5"
                  fill-opacity="0.8"
                />
              </svg>

              <p className="ml-2 whitespace-nowrap">{paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function Feed({ items }: Props): ReactElement {
  return (
    <div className={css.container}>
      <div className="relative">
        <div className="absolute h-full w-2 bg-gray-200 top-0 left-[140px] rounded"></div>
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
