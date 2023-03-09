import Layout from "@/components/common/Layout";

import type { AppProps } from "next/app";

import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
