import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="header">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
