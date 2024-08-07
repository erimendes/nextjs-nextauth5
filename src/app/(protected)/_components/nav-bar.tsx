"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const NavBar = () => {
  const pathname = usePathname();

  const paths = ["/server", "/client", "/admin", "/settings"];

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {paths.map((path) => (
          <Button
            key={path}
            asChild
            variant={pathname === path ? "default" : "outline"}
          >
            <Link href={path}>{path}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};
