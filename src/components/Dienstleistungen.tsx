import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Dienstleistungen = () => {
  const { dienstleistungen } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem] = dienstleistungen.items;

  return (
    <section className={`bg-background py-8`} id="dienstleistungen">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {dienstleistungen.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title2}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description2}</p>
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title2}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description2}</p>
            </div>
          </div>
        </div>
        {/* third item */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {thirdItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{thirdItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {thirdItem?.title2}
              </h3>
              <p className={`text-gray-600 mb-8`}>{thirdItem?.description2}</p>
            </div>
          </div>
        </div>
        {/* fourth item */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fourthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fourthItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fourthItem?.title2}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fourthItem?.description2}</p>
            </div>
          </div>
        </div>
        {/* fifth item */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fifthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fifthItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fifthItem?.title2}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fifthItem?.description2}</p>
            </div>
          </div>
        </div>
        {/* sixth item */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {sixthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{sixthItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {sixthItem?.title2}
              </h3>
              <p className={`text-gray-600 mb-8`}>{sixthItem?.description2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dienstleistungen;
