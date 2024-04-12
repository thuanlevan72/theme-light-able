import "@assets/scss/custom.scss";
import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { Provider } from "react-redux";
import { wrapper } from '../toolkit/index';
import { NextPage } from "next";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: React.FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
  ...rest
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.svg' />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <title>Lightable | Next.js & Admin Dashboard</title>
      </Head>
      <Provider store={store}>
        {getLayout(
          <Component {...pageProps} />
        )}
      </Provider>
    </>
  );
};

export default MyApp;
