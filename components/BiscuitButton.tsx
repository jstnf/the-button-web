import React from "react";

interface BiscuitButtonProps {
  onClick: () => void;
  presses: number;
}

export default function BiscuitButton({onClick, presses}: BiscuitButtonProps): React.ReactElement {
  return (
    <>
      <a onClick={onClick}>
        <div className="sm:p-52 p-[30vw] hover:bg-red-500 rounded-full bg-red-600 flex justify-center border-[14px] sm:border-[18px] border-gray-500 dark:border-gray-700 active:bg-red-400">
          <p className="fixed -translate-y-1/2 text-4xl sm:text-5xl font-bold text-white">{formatMoney(presses)}</p>
        </div>
      </a>
    </>
  )
}

// Convert number to money format
// 1000 -> $10.00
function formatMoney(amount: number): string {
  return `$${(amount / 100).toFixed(2)}`;
}
