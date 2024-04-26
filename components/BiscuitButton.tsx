import React from "react";

interface BiscuitButtonProps {
  onClick: () => void;
  presses: number;
}

export default function BiscuitButton({onClick, presses}: BiscuitButtonProps): React.ReactElement {
  return (
    <div>
      <a onClick={onClick}>
        <div className="p-52 hover:bg-red-400 rounded-full bg-red-500 flex justify-center">
          <p className="fixed -translate-y-1/2 text-4xl">{formatMoney(presses)}</p>
        </div>
      </a>
    </div>
  )
}

// Convert number to money format
// 1000 -> $10.00
function formatMoney(amount: number): string {
  return `$${(amount / 100).toFixed(2)}`;
}