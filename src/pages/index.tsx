import { useState } from 'react'
import { type NextPage } from "next";
import Head from "next/head";
import Footer from '~/components/layouts/footer'

import Scene from '~/components/canvas/scene'
import RapierScene from "~/components/canvas/rapier-scene";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [sceneSelection, setSceneSelection] = useState(0)
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const switchScene = (selection: number) => {
    setSceneSelection(selection)
  }
  return (
    <>
      <Head>
        <title>T4 App</title>
        <meta name="description" content="t3 + Three" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className='text-white z-10'>
          <button onClick={e => switchScene(0)} className='m-2'>Basic</button>
          <button onClick={e => switchScene(1)} className='m-2'>Physics</button>
        </div>
        <Footer />
      </main>
      {sceneSelection === 0 ?
        <Scene /> :
        <RapierScene />
      }
    </>
  );
};

export default Home;
