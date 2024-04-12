import "@assets/scss/custom.scss";
import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "../toolkit/index";

import { AppProps } from "next/app";
import type { NextPage } from "next";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "Components/helpers/firebase_helper";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
//   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

// Fake backend
// import fakeBackend from "Components/helpers/AuthType/fakeBackend";

// Activating fake backend
// fakeBackend();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const MyApp: any = ({ Component, pageProps, ...rest }: AppPropsWithLayout) => {
  const { store } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <title>LightAble | Next js & Admin Dashboard </title>
      </Head>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
};

export default MyApp;
