"use server";

import { signOut } from "@/auth";

export const logout = async (callbackUrl: string) => {
  await signOut({ redirectTo: `/auth/login?callbackUrl=${callbackUrl}` });
};
