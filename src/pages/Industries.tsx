
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileSearch, Globe, BookOpen, Activity, Shield, Rocket } from 'lucide-react';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <>
            Transforming <span className="text-gradient">Industries</span> Through Intelligence Amplification
          </>
        }
        subtitle="Industry Solutions"
        description="Discover how our technologies are revolutionizing operations across diverse sectors, from healthcare to aerospace."
      />

      <div id="content">
        {/* Industry Overview */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-cosmo-blue">Industry Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Intelligence Amplification and 4th CTPS technologies are reshaping operations across 
              industries, creating unprecedented collaboration between human expertise and machine capabilities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-10 w-10 text-cosmo-blue" />,
                title: "Healthcare",
                description: "Enhancing clinical decision-making and improving patient outcomes through augmented diagnostics and treatment planning.",
                link: "#healthcare"
              },
              {
                icon: <Shield className="h-10 w-10 text-cosmo-blue" />,
                title: "Defense & Security",
                description: "Supporting mission-critical operations with real-time intelligence analysis and enhanced situational awareness.",
                link: "#defense"
              },
              {
                icon: <FileSearch className="h-10 w-10 text-cosmo-blue" />,
                title: "Financial Services",
                description: "Amplifying risk assessment capabilities and improving decision-making in complex financial environments.",
                link: "#finance"
              },
              {
                icon: <Rocket className="h-10 w-10 text-cosmo-blue" />,
                title: "Aerospace & Aviation",
                description: "Creating synchronization between human operators and autonomous systems for enhanced safety and performance.",
                link: "#aerospace"
              },
              {
                icon: <BookOpen className="h-10 w-10 text-cosmo-blue" />,
                title: "Education & Research",
                description: "Transforming learning and discovery through augmented cognition and collaborative knowledge systems.",
                link: "#education"
              },
              {
                icon: <Globe className="h-10 w-10 text-cosmo-blue" />,
                title: "Energy & Sustainability",
                description: "Optimizing resource management and accelerating innovation in clean energy development.",
                link: "#energy"
              },
            ].map((industry, index) => (
              <AnimatedSection key={industry.title} delay={100 * index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <a href={industry.link} className="text-cosmo-blue font-medium inline-flex items-center group">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Healthcare Section */}
        <section id="healthcare" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection className="w-full lg:w-1/2">
                <span className="text-cosmo-blue font-semibold">Healthcare</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-1">
                  Amplifying Medical Expertise
                </h2>
                <p className="text-gray-600 mb-6">
                  In healthcare, our solutions enhance clinician decision-making without replacing 
                  medical expertise, creating a symbiotic relationship between human insight and 
                  computational processing.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Diagnostic Amplification</h4>
                    <p className="text-gray-600">Systems that enhance radiologists' ability to detect subtle anomalies while preserving their clinical judgment and reducing cognitive fatigue.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Surgical Navigation Enhancement</h4>
                    <p className="text-gray-600">Real-time synchronization technologies that align surgeon perception with imaging systems for enhanced precision and reduced cognitive load.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Clinical Decision Support</h4>
                    <p className="text-gray-600">AI frameworks that learn from expert clinicians while amplifying their ability to integrate complex patient data into treatment plans.</p>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/case-studies/healthcare">View Healthcare Case Studies</a>
                </Button>
              </AnimatedSection>
              <AnimatedSection delay={200} className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-8 -right-8 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                      alt="Healthcare Applications"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Defense & Security Section */}
        <section id="defense" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection delay={200} className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-8 -left-8 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                      alt="Defense & Security Applications"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="w-full lg:w-1/2 order-1 lg:order-2">
                <span className="text-cosmo-blue font-semibold">Defense & Security</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-1">
                  Enhanced Situational Intelligence
                </h2>
                <p className="text-gray-600 mb-6">
                  In defense and security applications, our technologies create real-time synchronization 
                  between human operators and complex systems, enhancing situational awareness and 
                  accelerating decision cycles.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Intelligence Analysis</h4>
                    <p className="text-gray-600">Cognitive amplification frameworks that enhance analysts' ability to detect patterns and anomalies in complex data environments.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Command & Control</h4>
                    <p className="text-gray-600">4th CTPS technologies that synchronize human decision-making with autonomous systems for enhanced operational agility.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2">Training & Simulation</h4>
                    <p className="text-gray-600">Advanced systems that accelerate expertise development through augmented learning and real-time feedback.</p>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/case-studies/defense">View Defense & Security Case Studies</a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-cosmo-blue-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                Discover how our Intelligence Amplification and 4th CTPS technologies can create 
                breakthrough capabilities for your organization.
              </p>
              <Button 
                asChild
                className="bg-white text-cosmo-blue hover:bg-gray-100 shadow-glow"
              >
                <a href="/contact">Request a Consultation</a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industries;
