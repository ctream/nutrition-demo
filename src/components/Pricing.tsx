import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Unsere Produkte
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div id="e917845c-ae87-436e-8768-32e31f754acd"
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div style={{textAlign: "center", fontSize: "1.3rem", borderBottom: "1px solid rgba(229, 231, 235, 1)", padding: "0.8rem 0"}}>
              PureOmega Health Boost
              </div>
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                <img src="assets/images/image2.png" alt="whatever" width="80%" height="80%" style={{margin: "0 auto"}} />
              </div>
              <ul className={`w-full text-center text-sm px-5`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 px-5`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
          >
            <div id="ca289f70-0f73-4bc6-9964-f0e4e2713935"
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
                            <div style={{textAlign: "center", fontSize: "1.3rem", borderBottom: "1px solid rgba(229, 231, 235, 1)", padding: "0.8rem 0"}}>
                            VitalBoost Daily Essentials
              </div>
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
              <img src="assets/images/image1.png" alt="whatever" width="70%" height="70%" style={{margin: "0 auto"}} />
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 px-5`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div id="2abded65-fe98-4669-8111-1aaf61de0c74"
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
                            <div style={{textAlign: "center", fontSize: "1.3rem", borderBottom: "1px solid rgba(229, 231, 235, 1)", padding: "0.8rem 0"}}>
                            VitaMax Pro
              </div>
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
              <img src="assets/images/image3.png" alt="whatever" width="70%" height="70%" style={{margin: "0 auto"}} />
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4 px-5`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
