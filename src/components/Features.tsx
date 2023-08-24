import React from 'react';
import {BiConversation} from "react-icons/bi"
import {TbNotes} from "react-icons/tb"
import {GrUserExpert} from "react-icons/gr"
import {BsCheck2Circle} from "react-icons/bs"

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))} */}
            {/* f1 */}
            <div key={"Personalisierte Ernährungspläne"} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <TbNotes size={25} color='rgb(17, 24, 39)'/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Personalisierte Ernährungspläne
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Individuell zugeschnittene Ernährungspläne, die Ihren Zielen, Bedürfnissen und Vorlieben entsprechen.
                </dd>
              </div>
              {/* f2 */}
              <div key={"Ganzheitliche Beratung"} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <BiConversation size={25} color='rgb(17, 24, 39)'/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Ganzheitliche Beratung
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Umfassende Betreuung, die nicht nur auf Ernährung, sondern auch auf Bewegung, Lebensstil und Wohlbefinden abzielt.
                </dd>
              </div>
              {/* f3 */}
              <div key={"Expertenwissen"} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <GrUserExpert size={25}/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Expertenwissen
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Zugang zu Experten mit fundiertem Wissen über Ernährung, Gesundheit und Fitness, die Sie auf Ihrem Weg begleiten.
                </dd>
              </div>
              {/* f4 */}
              <div key={"Langfristige Erfolge"} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <BsCheck2Circle size={25} color='rgb(17, 24, 39)'/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Langfristige Erfolge
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Nachhaltige Strategien und Unterstützung, um langfristige Veränderungen zu erreichen und ein gesundes Leben zu führen.
                </dd>
              </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
