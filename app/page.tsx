'use client';

import BiscuitButton from "@/components/BiscuitButton";
import BiscuitTimer from "@/components/BiscuitTimer";
import BiscuitActivity from "@/components/BiscuitActivity";
import React, {useEffect} from "react";
import ResponseData from "@/src/ResponseData";
import {fetchData} from "@/app/actions";

export default function Home(): React.ReactElement {
  const [data, setData]: [ResponseData, (data: ResponseData) => void] = React.useState({
    presses: 0,
    expiry: 0,
    millisPerPress: 0,
    whoPressed: "no one"
  } as ResponseData);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(async () => {
      const newData: ResponseData = await fetchData();
      if (newData.presses !== data.presses) {
        setData(newData);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <main className="flex flex-col items-center min-h-svh justify-center pr-12 pl-12 sm:pr-24 sm:pl-24 select-none gap-y-12 sm:gap-y-14">
      <BiscuitTimer expiry={data.expiry} presses={data.presses} millisPerPress={data.millisPerPress}/>
      <BiscuitButton presses={data.presses}/>
      <BiscuitActivity whoPressed={data.whoPressed}/>
    </main>
  );
}
