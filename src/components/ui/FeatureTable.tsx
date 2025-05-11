
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface FeatureTableProps {
  title?: string;
  description?: string;
  headers?: string[];
  rows: {
    [key: string]: string | React.ReactNode;
  }[];
  className?: string;
}

const FeatureTable: React.FC<FeatureTableProps> = ({
  title,
  description,
  headers = [],
  rows = [],
  className,
}) => {
  return (
    <AnimatedSection className={cn("", className)}>
      {title && (
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          {headers.length > 0 && (
            <thead className="bg-cosmo-blue text-white">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="py-3 px-4 text-left">{header}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-4 px-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedSection>
  );
};

export default FeatureTable;
