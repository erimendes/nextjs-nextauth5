import { fontPoppins } from "@/lib/font";
import { cn } from "@/lib/utils";

interface CardHeaderProps {
  label: string;
}

export const CardHeader = ({ label }: CardHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", fontPoppins.className)}>
        Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
