import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

function Home() {
  return (
    <div className="flex flex-col px-6 pt-1 ">
      <h5 className="my-3 text-base font-medium">
        With an Associate&apos;s degree in System Analysis and Development, I
        have 4+ years of software development working closely with multinational
        clients on daily basis to design and develop complex solutions in
        Salesforce environments. Currently seeking a position as Solidity
        Developer.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">Skills</h4>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
