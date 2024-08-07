"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClick = () => {
    const callbackUrl = `${pathname}?${searchParams.toString()}`;
    logout(encodeURIComponent(callbackUrl));
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
