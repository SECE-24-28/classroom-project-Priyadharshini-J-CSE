import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OurPromiseStyle } from './OurPromiseStyle';

// Define the data structure for the promises
const promisesData = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Top Code Quality',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#39C4C4',
  },
  {
    icon: 'fa-solid fa-tablet-screen-button',
    title: 'Modern Learning Platform',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#F5E50A',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Community Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#0ABEF5',
  },
  {
    icon: 'fa-solid fa-diamond-turn-right',
    title: 'Clear Career Path',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#780AF5',
  },
  {
    icon: 'fa-solid fa-life-ring',
    title: 'Dedicated Mentorship',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#F50A8F',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Placement Assurance',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a, suscipit, nemo illum assumenda dolor debitis animi officiis inventore voluptatum, iste libero!Lorem',
    color: '#1DE262',
  },
];

const OurPromise = ({ promises = promisesData }) => {
  return (
    <OurPromiseStyle>
      <h1 className="heading">Our Promise</h1>
      <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        riosam magnam excepturi id nulla error corrupti ullam alias odio!
      </p>

      <div className="bigbox">
        {promises.map((promise, index) => (
          <div
            className="smallbox"
            key={index}
            style={{ borderColor: promise.color }}
          >
            <h1>
              <span style={{ color: promise.color }}>
                {/* NOTE: FontAwesomeIcon requires specific import, but for compatibility with your existing class name usage, 
                    we are rendering the class name directly within a standard <i> tag. */}
                <i className={promise.icon}></i>
              </span>{' '}
              {promise.title}
            </h1>
            <p>{promise.description}</p>
          </div>
        ))}
      </div>
    </OurPromiseStyle>
  );
};

export default OurPromise;