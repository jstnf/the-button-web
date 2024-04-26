import BiscuitButton from "@/components/BiscuitButton";
import BiscuitTimer from "@/components/BiscuitTimer";
import BiscuitActivity from "@/components/BiscuitActivity";
import React from "react";

export default async function Home(): Promise<React.ReactElement> {
  const data: ResponseData = await getData()

  return (
    <main className="flex flex-col items-center min-h-svh justify-center pr-12 pl-12 sm:pr-24 sm:pl-24 select-none gap-y-12 sm:gap-y-14">
      <BiscuitTimer expiry={data.expiry} presses={data.presses}/>
      <BiscuitButton presses={data.presses}/>
      <BiscuitActivity whoPressed={data.whoPressed}/>
    </main>
  );
}

interface ResponseData {
  presses: number;
  whoPressed?: string;
  expiry: number;
}

async function getData(): Promise<ResponseData> {
  // TODO: Fetch the actual data
  const res = await fetch("https://dummyjson.com/products", { next: { tags: ["button-data"] } });
  const data = await res.json();
  return {
    presses: 0,
    whoPressed: "Aron",
    expiry: 1716015600000
  };
}
