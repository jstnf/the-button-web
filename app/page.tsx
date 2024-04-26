'use client'

import BiscuitButton from "@/components/BiscuitButton";
import BiscuitTimer from "@/components/BiscuitTimer";
import {useState} from "react";

export default function Home() {
  const [presses, setPresses] = useState(0);

  return (
    <main className="flex flex-col items-center justify-between p-24 select-none gap-y-10">
      <BiscuitTimer expiry={1716015600000} presses={presses} />
      <BiscuitButton onClick={() => {
        setPresses(presses + 1)
      }} presses={presses}/>
    </main>
  );
}
