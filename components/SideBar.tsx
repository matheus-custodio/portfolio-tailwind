import React from 'react';
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaEthereum,
  FaHardHat,
  FaReact,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import {
  SiSolidity,
  SiBinance,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';
import Image from 'next/image';
import { useTheme } from 'next-themes';

function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <Image
        src="/images/me.jpeg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        Matheus Custodio
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Smart Contract Developer
      </p>
      {/* Contacts */}
      <div
        className="py-4 mx-5 bg-gray-200 h-fit dark:bg-dark-200 dark:bg-black-500 rounded-2xl"
        style={{
          marginLeft: '-1rem',
          marginRight: '-1rem',
        }}
      >
        <div className="flex justify-center">
          <GoLocation className="mr-2" /> <span>São Paulo, Brazil</span>
        </div>
        <p className="mx-2 my-2 break-words">
          matheus.c.conceicao@protonmail.com
        </p>
        <p className="my-2"> +5511984851100 </p>

        {/* Socials */}
        <div className="flex w-9/12 mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full ">
          <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
            <FaLinkedin className="w-8 h-8 cursor-pointer " />
          </a>
          <a href="https://www.instagram.com/_sumax__/">
            <FaGithub className="w-8 h-8 cursor-pointer" />
          </a>
          <button type="button" onClick={changeTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <div className="py-4 mx-5">
          <button
            className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-light to-purple-light dark:from-cyan-dark dark:to-purple-dark hover:scale-105 focus:outline-none"
            onClick={() => window.open('matheus.c.conceicao@protonmail.com')}
            type="button"
          >
            Email me
          </button>
          <button
            className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-light to-purple-light dark:from-cyan-dark dark:to-purple-dark focus:outline-none hover:scale-105 "
            type="button"
          >
            Download my CV
          </button>
        </div>
        <div className="flex mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full 2xl:my-14">
          <FaEthereum className="w-8 h-8" />
          <SiBinance className="w-8 h-8" />
          <FaHardHat className="w-8 h-8" />
          <SiNextdotjs className="w-8 h-8" />
        </div>
        <div className="flex mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full 2xl:my-14">
          <SiSolidity className="w-8 h-8" />
          <SiTypescript className="w-8 h-8" />
          <FaReact className="w-8 h-8" />
          <SiTailwindcss className="w-8 h-8" />
        </div>
      </div>

      {/* Email Button */}
    </>
  );
}

export default Sidebar;
