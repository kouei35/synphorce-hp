import "@/styles/globals.css";
import '@/styles/embla.css'
import type { AppProps } from "next/app";
import Head from "next/head";

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps)  {
  return (
    <NextUIProvider>
      <Head>
        <title>Synphorce</title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}