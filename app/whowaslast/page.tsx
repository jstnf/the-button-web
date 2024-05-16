'use client';

import React from "react";
import {fetchWhoWasLast} from "@/app/actions";
import WhoWasLastResponseData from "@/src/WhoWasLastResponseData";

export default function WhoWasLast(): React.ReactElement {
  const [data, setData]: [WhoWasLastResponseData, (data: WhoWasLastResponseData) => void] = React.useState({
    users: []
  } as WhoWasLastResponseData);

  React.useEffect(() => {
    fetchWhoWasLast().then(setData);
  }, []);

  return (
    <main
      className="flex flex-col items-center min-h-svh justify-center pr-12 pl-12 sm:pr-24 sm:pl-24 select-none gap-y-12 sm:gap-y-14">
      <h1 className="text-4xl sm:text-5xl text-center">Who was the last to press the button?</h1>
      <ul className="text-xl sm:text-2xl text-center">
        {data.users.map((entry, index) => (
          <li key={index}>{entry.name} at {new Date(entry.time).toLocaleString()}</li>
        ))}
      </ul>
    </main>
  );
}