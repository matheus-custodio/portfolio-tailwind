/* eslint-disable react/function-component-definition */
import React, { FunctionComponent, useState } from 'react';
import { FaGithub, FaPoll, FaWindowClose } from 'react-icons/fa';
import Image from 'next/image';
import { IProject } from '../type';

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    category,
    deployedUrl,
    githubUrl,
    description,
    imagePath,
    keyTechs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        onKeyPress={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={imagePath} alt={name} />
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
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {keyTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            className="absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            type="button"
            onClick={() => setShowDetail(false)}
            onKeyPress={() => setShowDetail(false)}
          >
            <FaWindowClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
