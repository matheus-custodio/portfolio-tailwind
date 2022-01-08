/* eslint-disable react/function-component-definition */
import React, { FunctionComponent, useState } from 'react';
import { FaGithub, FaPoll, FaWindowClose } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IProject } from '../type';
import { fadeInUp, stagger } from '../animation';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    id,
    name,
    category,
    deployedUrl,
    githubUrl,
    description,
    imagePath,
    keyTechs,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        onKeyPress={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-cyan-light dark:border-cyan-dark "
            >
              <Image
                src={imagePath}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>

            <div className="flex justify-center my-4 space-x-3">
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaGithub />
                <span>Github</span>
              </a>
              <a
                href={deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaPoll />
                <span>Project</span>
              </a>
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {keyTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            type="button"
            onClick={() => setShowDetail(null)}
            onKeyPress={() => setShowDetail(null)}
          >
            <FaWindowClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
