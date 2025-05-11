
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface FeatureHighlightProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <AnimatedSection className={cn("bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow", className)}>
      <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

export default FeatureHighlight;
