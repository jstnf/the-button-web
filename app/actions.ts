'use server';

import {revalidateTag} from "next/cache";
import ResponseData from "@/src/ResponseData";
import WhoWasLastResponseData from "@/src/WhoWasLastResponseData";

export async function invalidateCache(tag: string): Promise<void> {
  revalidateTag(tag);
}

export async function fetchData(): Promise<ResponseData> {
  const res = await fetch("http://biscuitsbutton-server:3001/api/v1/data", {
    next: {
      tags: ["button-data"],
    },
    cache: "no-cache"
  });
  return await res.json();
}

export async function pressButton(userId: string): Promise<string | undefined> {
  try {
    const res: Response = await fetch("http://biscuitsbutton-server:3001/api/v1/press", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId}),
    });
    console.log(res.status)
    const data = await res.json();
    console.log(data);
    if (res.status !== 200 && data.error !== undefined) {
      return data.error;
    }
  } catch (error) {
    console.error("Failed to send the request to the server", error);
  }

  // Re-fetch the data on the home page
  await invalidateCache("button-data");
}

export async function fetchWhoWasLast(): Promise<WhoWasLastResponseData> {
  const res = await fetch("http://biscuitsbutton-server:3001/api/v1/whowaslast", {
    next: {
      tags: ["whowaslast-data"],
    },
    cache: "no-cache"
  });
  return await res.json();
}
