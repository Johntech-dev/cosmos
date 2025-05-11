
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  tertiaryButtonText?: string;
  tertiaryButtonUrl?: string;
  backgroundImage?: string;
  className?: string;
  overlayClassName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonUrl = '#',
  secondaryButtonText,
  secondaryButtonUrl,
  tertiaryButtonText,
  tertiaryButtonUrl,
  backgroundImage,
  className,
  overlayClassName,
}) => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        !backgroundImage && "hero-pattern",
        className
      )}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-cosmo-blue-dark/80 to-cosmo-blue-dark/90",
          overlayClassName
        )}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20">
        {subtitle && (
          <p className="text-cosmo-blue-light uppercase tracking-wider font-medium mb-3 animate-fade-in">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {title}
        </h1>
        {description && (
          <p 
            className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 animate-fade-in" 
            style={{animationDelay: '0.4s'}}
          >
            {description}
          </p>
        )}
        
        {(buttonText || secondaryButtonText || tertiaryButtonText) && (
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {buttonText && (
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-light text-white px-6 py-6 text-lg rounded-md shadow-glow"
              >
                <a href={buttonUrl}>{buttonText}</a>
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white bg-white/10 px-6 py-6 text-lg"
              >
                <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
              </Button>
            )}
            
            {tertiaryButtonText && (
              <Button 
                asChild
                variant="ghost" 
                className="text-cosmo-blue-light px-6 py-6 text-lg"
              >
                <a href={tertiaryButtonUrl}>{tertiaryButtonText}</a>
              </Button>
            )}
          </div>
        )}
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-glow cursor-pointer z-10"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-10 w-10 text-cosmo-blue-light" />
      </div>
    </div>
  );
};

export default HeroSection;
