import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Tag = "div", children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10", className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = "Container";