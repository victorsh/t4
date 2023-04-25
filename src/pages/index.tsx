import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Scene from '~/components/canvas/scene'
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="t3 + Three" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Scene />
      </main>
    </>
  );
};

export default Home;
