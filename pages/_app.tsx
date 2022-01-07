import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 py-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          {/* //!sidebar */}
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light rounded-2xl lg:col-span-9 dark:bg-dark-500 dark:shadow-custom-dark">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
