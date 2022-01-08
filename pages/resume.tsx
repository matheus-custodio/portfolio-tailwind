import React from 'react';
import { motion } from 'framer-motion';
import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { fadeInUp, routeAnimation } from '../animation';

const resume = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              System Analysis and Development
            </h5>
            <p className="font-semibold">University Nine of July(2017-2019)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Information Security Intern
            </h5>
            <p className="font-semibold">LG Electronics of Brazil(2015-2016)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">System Analysis Trainee</h5>
            <p className="font-semibold">Solvay(2018-2019)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">FullStack Developer</h5>
            <p className="font-semibold">Kolekto(2019-2021)</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & FrameWorks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
