import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { NextUIProvider } from '@nextui-org/react';

// export default function App({ Component, pageProps }: AppProps) {
//   return <NextUIProvider><Component {...pageProps} />;
// }

import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps)  {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}