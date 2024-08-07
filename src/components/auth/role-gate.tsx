"use client";

import { UserRole } from "@prisma/client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const user = useCurrentUser();

  if (user?.role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this area." />
    );
  }

  return <>{children}</>;
};
