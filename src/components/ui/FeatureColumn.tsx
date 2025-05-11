
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface FeatureColumnProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  children?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({
  title,
  subtitle,
  description,
  children,
  imageUrl,
  imageAlt = "Feature image",
  reverse = false,
  className,
}) => {
  return (
    <div className={cn("flex flex-col lg:flex-row items-center gap-16", reverse && "lg:flex-row-reverse", className)}>
      <AnimatedSection className="w-full lg:w-1/2" delay={reverse ? 200 : 0}>
        {subtitle && (
          <span className="text-cosmo-blue font-semibold">{subtitle}</span>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-1">{title}</h3>
        <div className="text-gray-600 mb-6">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
        {children}
      </AnimatedSection>
      
      <AnimatedSection delay={reverse ? 0 : 200} className="w-full lg:w-1/2">
        <div className="relative">
          <div className={`bg-cosmo-blue/10 rounded-lg absolute ${reverse ? "-top-6 -left-6" : "-top-6 -right-6"} w-full h-full -z-10`}></div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={imageUrl || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} 
              alt={imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FeatureColumn;
