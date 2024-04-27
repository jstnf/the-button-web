'use client';

import React from "react";
import {pressButton} from "@/app/actions";
import {ReadonlyURLSearchParams, useSearchParams} from "next/navigation";

export default function BiscuitButtonActuation(): React.ReactElement {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  return (
    <button className="w-[60vw] h-[60vw] sm:h-[26rem] sm:w-[26rem] absolute rounded-full -translate-y-1/2 opacity-0" onClick={() => pressButton(searchParams.get("id") || "unknown")}></button>
  )
}
