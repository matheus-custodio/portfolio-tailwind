import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, routeAnimation, stagger } from '../animation';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

function Home() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 "
    >
      <h5 className="my-3 text-base font-medium">
        With an Associate&apos;s degree in System Analysis and Development, I
        have 4+ years of software development working closely with multinational
        clients on daily basis to design and develop complex solutions in
        Salesforce environments. Currently seeking a position as Solidity
        Developer.
      </h5>
      <div
        className="xl:h-[85vh] p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">Skills</h4>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 my-3 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
