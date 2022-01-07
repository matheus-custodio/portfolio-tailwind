import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import Image from 'next/image';

function Sidebar() {
  return (
    <>
      <Image
        src="/static/me.jpeg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Matheus</span> Custodio
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Smart Contract Developer
      </p>
      {/* Contacts */}
      <div
        className="py-4 mt-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500 rounded-2xl"
        style={{
          marginLeft: '-1rem',
          marginRight: '-1rem',
          marginBottom: '-1rem',
        }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>São Paulo, Brazil</span>
        </div>
        <p className="mx-2 my-2 break-words">
          matheus.c.conceicao@protonmail.com
        </p>
        <p className="my-2"> +5511984851100 </p>

        {/* Socials */}
        <div className="flex w-9/12 mx-auto my-5 justify-evenly text-green md:w-full ">
          <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_sumax__/">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />{' '}
          </a>
        </div>

        {/* Email Button */}
        <button
          className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() => window.open('matheus.c.conceicao@protonmail.com')}
          type="button"
        >
          Email me
        </button>
        <button
          className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
          type="button"
        >
          Download my CV
        </button>
      </div>
    </>
  );
}

export default Sidebar;
