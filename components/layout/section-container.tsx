import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "div";
};

export default function SectionContainer({
  children,
  className,
  innerClassName,
  id,
  as = "section",
}: SectionContainerProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn("relative px-5 py-20 sm:px-6 md:py-28 lg:px-8", className)}
    >
      <div className={cn("relative mx-auto max-w-7xl", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
