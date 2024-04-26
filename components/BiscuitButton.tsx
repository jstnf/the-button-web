'use client';

import React from "react";
import {invalidateCache} from "@/app/actions";

interface BiscuitButtonProps {
  presses: number;
}

export default function BiscuitButton({presses}: BiscuitButtonProps): React.ReactElement {
  return (
    <div className="sm:p-56 p-[32vw] rounded-full flex justify-center bg-gray-500 dark:bg-gray-700">
      <div className="absolute sm:p-52 p-[30vw] hover:bg-red-500 rounded-full bg-red-600 flex justify-center active:bg-red-400 -translate-y-1/2">
        <span className="absolute -translate-y-1/2 text-4xl sm:text-5xl font-bold text-white">{formatMoney(presses)}</span>
        <button className="w-[60vw] h-[60vw] sm:h-[26rem] sm:w-[26rem] absolute rounded-full -translate-y-1/2 opacity-0" onClick={onButtonPress}></button>
      </div>
    </div>
  )
}

async function onButtonPress() {
  // TODO: Send POST request to server with button press parameters
  console.log("Button was pressed, send the request to the server!");

  // Re-fetch the data on the home page
  await invalidateCache("button-data");
}

// Convert number to money format
// 1000 -> $10.00
function formatMoney(amount: number): string {
  return `$${(amount / 100).toFixed(2)}`;
}
