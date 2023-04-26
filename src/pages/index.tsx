import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Scene from '~/components/canvas/scene'
import RapierScene from "~/components/canvas/rapier-scene";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>T4 App</title>
        <meta name="description" content="t3 + Three" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {/* <Scene /> */}
        <RapierScene />
      </main>
    </>
  );
};

export default Home;
