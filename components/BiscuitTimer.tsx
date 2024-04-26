'use client';

import React, {useCallback, useEffect, useState} from "react";

interface BiscuitTimerProps {
  presses: number;
  expiry: number;
}

const MILLIS_DEDUCTED_PER_PRESS: number = 180000;

export default function BiscuitTimer({ presses, expiry }: BiscuitTimerProps): React.ReactElement {
  const [time, setTime]: [number, (time: number) => void] = useState(0)
  const [animateIn, setAnimateIn]: [boolean, (animateIn: boolean) => void] = useState(false)
  const updateTime: () => void = useCallback(() => {
    const currentTime: number = new Date().getTime()
    setTime(Math.max(expiry - currentTime - (presses * MILLIS_DEDUCTED_PER_PRESS), 0))
  }, [expiry, presses])

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      updateTime()
      // On first frame, animate in
      if (!animateIn) {
        setAnimateIn(true)
      }
    }, 500)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    updateTime()
  }, [presses, updateTime]);

  return (
    <div>
      <div className="flex justify-center p-4 border-2 rounded-lg bg-gray-200 dark:bg-gray-900 border-gray-600 dark:border-white">
        <p className="text-2xl">{formatMilliseconds(time)} until the button expires.</p>
      </div>
    </div>
  )
}

function formatMilliseconds(milliseconds: number): React.ReactElement {
  const days: number = Math.floor(milliseconds / 86400000)
  const hours: number = Math.floor(milliseconds % 86400000 / 3600000)
  const minutes: number = Math.floor(milliseconds % 3600000 / 60000)
  const seconds: number = Math.floor(milliseconds % 60000 / 1000)

  const timeStrings: string[] = [
    days > 0 ? `${days} day${days != 1 ? "s" : ""}` : "",
    (hours > 0 || days != 0) ? `${hours} hour${hours != 1 ? "s" : ""}` : "",
    (minutes > 0 || !(days == 0 && hours == 0)) ? `${minutes} minute${minutes != 1 ? "s" : ""}` : "",
    `${seconds} second${seconds != 1 ? "s" : ""}`,
  ].filter((timeString) => timeString.length > 0)

  return (
    <>
      <span>
        {timeStrings.map((timeString, index) => (
          <span key={index}>
            <strong className="text-red-400">{timeString.split(" ")[0]}</strong>{" "}
            {timeString.split(" ")[1]}
            {index < timeStrings.length - 1 ? (timeStrings.length > 2 ? ", " : " and ") : ""}
          </span>
        ))}
      </span>
    </>
  )
}