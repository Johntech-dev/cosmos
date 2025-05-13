import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  className,
  children,
}: HeroSectionProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden py-20 md:py-32",
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <h2 className="mb-4 text-lg font-medium text-white/80">
              {subtitle}
            </h2>
          )}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}; 