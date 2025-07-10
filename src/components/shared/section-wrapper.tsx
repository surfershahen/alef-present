
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
