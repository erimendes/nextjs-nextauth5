import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import { NavBar } from "./_components/nav-bar";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <NavBar />
        {children}
      </div>
    </SessionProvider>
  );
}
