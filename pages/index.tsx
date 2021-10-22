import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-200 via-red-200 to-pink-300">
      <Head>
        <title>super standard</title>
        <meta
          name="description"
          content="web3, crypto, nfts, and other stuff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto pl-10 pt-80 font-mono text-gray-800 align-middle">
          <h1 className="text-4xl md:text-5xl lg:text-6xl ">super standard</h1>
          <p>web3, crypto, ntfs, and other stuff</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
