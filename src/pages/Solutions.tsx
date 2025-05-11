
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Sword, Lock } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <>
            Our <span className="text-gradient">Groundbreaking Solutions</span>
          </>
        }
        subtitle="Solutions"
        description="Discover our innovative technologies that amplify human intelligence and synchronize human-machine interaction."
      />

      <div id="content">
        {/* Main Solutions Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering the Future of <span className="text-cosmo-blue">Human-Machine Collaboration</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our solutions are built on groundbreaking research in Intelligence Amplification and 
              the 4th Cultural Time Perception Shift, creating technologies that enhance human capabilities 
              rather than replace them.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {/* Solution 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <AnimatedSection className="w-full lg:w-1/2 order-2 lg:order-1">
                <span className="text-cosmo-blue font-semibold">Intelligence Amplification</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-1">Augmenting Human Expertise</h3>
                <p className="text-gray-600 mb-6">
                  Our Intelligence Amplification platforms create a symbiotic relationship between 
                  human expertise and computational processing, enhancing decision-making and creative 
                  problem-solving beyond what either could achieve alone.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Cognitive enhancement frameworks that adapt to individual thinking styles</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Neural-inspired interfaces that reduce cognitive load</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Human-guided learning systems that leverage expert knowledge</p>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white inline-flex items-center group"
                >
                  <a href="#ia-case-studies">
                    Explore Case Studies 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </AnimatedSection>
              <AnimatedSection delay={200} className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-6 -right-6 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                      alt="Intelligence Amplification"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Solution 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <AnimatedSection delay={200} className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-6 -left-6 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                      alt="4th Cultural Time Perception Shift Technology"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="w-full lg:w-1/2">
                <span className="text-cosmo-blue font-semibold">4th Cultural Time Perception Shift</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-1">Synchronizing Humans and Machines</h3>
                <p className="text-gray-600 mb-6">
                  Our 4th CTPS technologies create real-time synchronization between human perception 
                  and machine processing, enabling unprecedented collaboration and efficiency in 
                  mission-critical environments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Temporal alignment systems for high-speed decision environments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Real-time feedback loops that optimize human-machine interaction</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-cosmo-blue flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">Adaptive interfaces that match cognitive processing speeds</p>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white inline-flex items-center group"
                >
                  <a href="#ctps-applications">
                    View Applications 
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tech Features Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key <span className="text-cosmo-blue">Technology Features</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions incorporate cutting-edge technologies designed to create 
                seamless integration between human expertise and machine capabilities.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap className="h-10 w-10 text-cosmo-blue" />,
                  title: "Cognitive Enhancement",
                  description: "Technologies that amplify human cognitive abilities, including perception, attention, and decision-making."
                },
                {
                  icon: <Clock className="h-10 w-10 text-cosmo-blue" />,
                  title: "Temporal Synchronization",
                  description: "Systems that align human perception with machine processing speeds for optimal collaboration."
                },
                {
                  icon: <Sword className="h-10 w-10 text-cosmo-blue" />,
                  title: "Adaptive Learning",
                  description: "AI frameworks that continuously learn from human experts while preserving human agency and control."
                },
                {
                  icon: <Lock className="h-10 w-10 text-cosmo-blue" />,
                  title: "Ethical Safeguards",
                  description: "Built-in protections that ensure privacy, transparency, and alignment with human values."
                },
              ].map((feature, index) => (
                <AnimatedSection key={feature.title} delay={100 * index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cosmo-blue to-cosmo-blue-light text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Capabilities?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                Discover how our solutions can enhance your team's performance and create breakthrough results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  className="bg-white text-cosmo-blue hover:bg-gray-100 shadow-glow"
                >
                  <a href="/contact">Schedule a Demo</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  <a href="/industries">Explore Industry Applications</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
