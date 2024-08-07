"use server";

import { UserRole } from "@prisma/client";

import { currentUser } from "@/lib/user";

export const admin = async () => {
  const user = await currentUser();

  if (user?.role === UserRole.ADMIN) {
    return { success: "Okay" };
  }

  return { error: "Forbidden" };
};
