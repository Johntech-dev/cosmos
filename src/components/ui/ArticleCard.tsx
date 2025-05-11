
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image?: string;
  category?: string;
  date?: string;
  author?: string;
  url?: string;
  delay?: number;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  category,
  date,
  author,
  url = "#",
  delay = 0,
  className,
}) => {
  return (
    <AnimatedSection delay={delay} className={cn("bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow", className)}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {(category || date) && (
          <div className="flex items-center mb-3">
            {category && (
              <span className="bg-cosmo-blue/10 text-cosmo-blue text-sm font-medium px-3 py-1 rounded-full">
                {category}
              </span>
            )}
            {date && <span className="text-gray-500 text-sm ml-auto">{date}</span>}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-3">
          <a href={url} className="hover:text-cosmo-blue transition-colors">
            {title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          {author && <span className="text-sm text-gray-500">By {author}</span>}
          <a href={url} className="text-cosmo-blue font-medium inline-flex items-center group">
            Read more 
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ArticleCard;
