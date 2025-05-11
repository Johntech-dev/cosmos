
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <>
            Pioneering <span className="text-gradient">Intelligence Amplification</span> for Human Advancement
          </>
        }
        subtitle="Welcome to Cosmo Lab"
        description="We create synergy between humans and machines, amplifying capabilities without replacing expertise. Pioneering the 4th Cultural Time Perception Shift."
        buttonText="Discover Our Solutions"
        buttonUrl="/solutions"
      />

      <div id="content" className="py-20">
        {/* Feature Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Future of <span className="text-cosmo-blue">Human-Machine Collaboration</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Cosmo Lab, we're redefining the relationship between people and technology, creating solutions that enhance human capabilities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-cosmo-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-cosmo-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligence Amplification</h3>
              <p className="text-gray-600 mb-6">
                Enhancing human expertise with technology that augments rather than replaces, creating superior outcomes through collaboration.
              </p>
              <a href="/solutions" className="text-cosmo-blue font-medium inline-flex items-center group">
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-cosmo-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-cosmo-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4th Cultural Time Perception Shift</h3>
              <p className="text-gray-600 mb-6">
                Pioneering synchronization technologies that realign human perception and machine processing for transformative results.
              </p>
              <a href="/solutions" className="text-cosmo-blue font-medium inline-flex items-center group">
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-cosmo-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-cosmo-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Innovation</h3>
              <p className="text-gray-600 mb-6">
                Creating mission-ready technologies that uphold human values and ethics while delivering exceptional performance.
              </p>
              <a href="/solutions" className="text-cosmo-blue font-medium inline-flex items-center group">
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="w-full md:w-1/2">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-8 -left-8 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3klMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
                      alt="Cosmo Lab Team"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="text-cosmo-blue">Cosmo Lab</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded with a vision to redefine the human-machine relationship, Cosmo Lab is at the forefront of creating technologies that amplify human capabilities rather than replacing them.
                </p>
                <p className="text-gray-600 mb-8">
                  Our pioneering work in Intelligence Amplification (IA) and the 4th Cultural Time Perception Shift (4th CTPS) is creating a new paradigm for ethical innovation in the digital age.
                </p>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/about">Learn More About Us</a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cosmo-blue-dark to-cosmo-blue text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Potential?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                Join us in creating a future where human expertise and machine capabilities work in harmony.
              </p>
              <Button 
                asChild
                className="bg-white text-cosmo-blue hover:bg-gray-100 shadow-glow"
              >
                <a href="/contact">Get in Touch</a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
