'use client';

import React from "react";
import {invalidateCache} from "@/app/actions";

export default function BiscuitButtonActuation(): React.ReactElement {
  return (
    <button className="w-[60vw] h-[60vw] sm:h-[26rem] sm:w-[26rem] absolute rounded-full -translate-y-1/2 opacity-0" onClick={onButtonPress}></button>
  )
}

async function onButtonPress() {
  // TODO: Send POST request to server with button press parameters
  console.log("Button was pressed, send the request to the server!");

  // Re-fetch the data on the home page
  await invalidateCache("button-data");
}
