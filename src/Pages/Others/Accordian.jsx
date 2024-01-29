// Accordion.js

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {items.map((item, index) => (
        <div key={index} className="mb-4 w-96">
          <div
            className={`flex justify-between items-center bg-orange-200 p-4 cursor-pointer ${
              index === activeIndex ? 'rounded-t-md' : 'rounded-md'
            }`}
            onClick={() => handleClick(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                index === activeIndex ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {index === activeIndex && (
            <div className="bg-white p-4 rounded-b-md">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
