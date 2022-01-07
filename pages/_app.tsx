import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      <div className="p-4 text-center bg-white rounded-2xl">
        Main
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
