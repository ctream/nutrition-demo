import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Doctor = () => {
  const { doctor } = config;

  return (
    <section className={`bg-background py-8`} id="about">
      <div className={`container max-w-5xl mx-auto text-center`}>
        <div className={`text-center w-full mb-10`}>
          <img src="assets/images/woman.png" alt="drmueller" style={{width: "20%", margin: "0 auto"}} />
        </div>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {doctor.title.split(' ').map((word, index) => ( 
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {doctor.description}
        </p>
        <p className="mt-16 text-2xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-3xl">
            {doctor.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {doctor.laufbahn}
        </p>
      </div>
    </section>
  );
};

export default Doctor;
