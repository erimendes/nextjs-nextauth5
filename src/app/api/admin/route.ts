import { NextResponse } from "next/server";

import { currentUser } from "@/lib/user";
import { UserRole } from "@prisma/client";

export async function GET() {
  const user = await currentUser();

  if (user?.role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
