'use client'

import BiscuitButton from "@/components/BiscuitButton";
import BiscuitTimer from "@/components/BiscuitTimer";
import BiscuitActivity from "@/components/BiscuitActivity";
import {useState} from "react";

export default function Home() {
  const [presses, setPresses] = useState(0);
  const onButtonPress = () => {
    setPresses(presses + 1)
  }

  return (
    <main className="flex flex-col items-center min-h-svh justify-center pr-24 pl-24 select-none gap-y-12 sm:gap-y-14">
      <BiscuitTimer expiry={1716015600000} presses={presses}/>
      <BiscuitButton onClick={onButtonPress} presses={presses}/>
      <BiscuitActivity whoPressed="Aron"/>
    </main>
  );
}
