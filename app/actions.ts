'use server';

import {revalidateTag} from "next/cache";

export async function invalidateCache(tag: string): Promise<void> {
  revalidateTag(tag);
}