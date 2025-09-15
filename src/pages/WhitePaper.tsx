import { useRef } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';

const WhitePaper = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="White Paper - Cosmo Lab"
        description="Explore our comprehensive white paper on Intelligence Amplification and the 4th Cultural Time Perception Shift. Learn how we're guiding organizations into the future."
        keywords={['White Paper', 'Intelligence Amplification', '4th CTPS', 'Research', 'Technology']}
        url="https://cosmolab.cc/white-paper"
      />
      <HeroSection
        title="White Papers"
        subtitle="Research Library"
        description="A curated library of Cosmo Lab research on Intelligence Amplification, 4th Cultural Time Perception Shift, and organizational transformation. Explore frameworks, methodologies, and practical guides shaping the next era of human-system design."
        className="bg-gradient-to-r from-blue-600 to-blue-800"
      >
      </HeroSection>

      <div id="content" ref={contentRef} className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Available Papers</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Techno-Cultural Paradigm Immune Response */}
                <div className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-cosmo-blue bg-cosmo-blue/10 px-2.5 py-1 rounded-full mb-3">PDF</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Techno-Cultural Paradigm Immune Response</h3>
                      <p className="text-gray-600 mb-4">
                        An exploration of resilience mechanisms within evolving techno-cultural systems, outlining a framework for organizational immune response across the 4th Cultural Time Perception Shift.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-cosmo-blue hover:bg-cosmo-blue-light text-white">
                      <a href="/Techno-Cultural Paradigm Immune Response.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-cosmo-blue text-cosmo-blue">
                      <a href="/Techno-Cultural Paradigm Immune Response.pdf" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>

                {/* American Violence Systemic Disorder Analysis */}
                <div className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-cosmo-blue bg-cosmo-blue/10 px-2.5 py-1 rounded-full mb-3">PDF</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">American Violence Systemic Disorder Analysis</h3>
                      <p className="text-gray-600 mb-4">
                        A systemic analysis of violence dynamics across American socio-technical environments, proposing diagnostic lenses and interventions rooted in cybernetic organizational health and temporal cognition.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-cosmo-blue hover:bg-cosmo-blue-light text-white">
                      <a href="/American Violence Systemic Disorder Analysis.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-cosmo-blue text-cosmo-blue">
                      <a href="/American Violence Systemic Disorder Analysis.pdf" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default WhitePaper; 