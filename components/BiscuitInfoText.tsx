import React from "react";

export default function BiscuitInfoText({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="flex justify-center p-4 sm:p-6 border-2 rounded-lg bg-gray-200 dark:bg-gray-900 border-gray-600 dark:border-white">
      <p className="text-2xl sm:text-4xl text-center">{children}</p>
    </div>
  );
}
