import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Globe, BookOpen, Activity, Shield, Rocket, Building } from 'lucide-react';
import FeatureColumn from '@/components/ui/FeatureColumn';
import SEO from '@/components/SEO';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Industry Solutions - Cosmo Lab"
        description="Discover how Cosmo Lab's Intelligence Amplification technologies are transforming operations across healthcare, government, smart cities, and corporate innovation."
        keywords={['Industry Solutions', 'Healthcare', 'Government', 'Smart Cities', 'Corporate Innovation', 'Intelligence Amplification']}
        url="https://cosmolab.cc/industries"
      />
      <HeroSection
        title={
          <>
            Transforming <span className="text-gradient">Industries</span> Through Intelligence Amplification
          </>
        }
        subtitle="Industry Solutions"
        description="Discover how our technologies are revolutionizing operations across diverse sectors, from healthcare to smart cities."
      />

      <div id="content">
        {/* Government & Public Sector */}
        <section id="government" className="container mx-auto px-4 md:px-6 py-20">
          <FeatureColumn
            title="Government & Public Sector"
            description={
              <>
                <p className="mb-4">Resilience analytics, privacy-first citizen platforms, policy-grade compliance.</p>
                <p>Our solutions help government agencies enhance decision-making, improve service delivery, 
                and protect critical information while ensuring the highest standards of accountability and transparency.</p>
              </>
            }
            imageUrl="/AdobeStock_1028317895.jpeg"
            imageAlt="Government & Public Sector"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Shield className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Enhanced situational awareness for emergency response teams</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <FileText className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Policy-grade compliance frameworks for sensitive operations</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Globe className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Privacy-first citizen interaction platforms</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
            >
              <a href="/contact">Request a Procurement Brief</a>
            </Button>
          </FeatureColumn>
        </section>

        {/* Healthcare & Life Sciences */}
        <section id="healthcare" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <FeatureColumn
              title="Healthcare & Life Sciences"
              description={
                <>
                  <p className="mb-4">IA-assisted clinical decision support, burnout prevention, data-sovereign patient pathways.</p>
                  <p>Our healthcare solutions enhance clinician performance while reducing cognitive fatigue, 
                  ensuring that medical professionals can maintain peak performance in demanding environments 
                  while preserving patient privacy and data sovereignty.</p>
                </>
              }
              imageUrl="/brain.jpg"
              imageAlt="Healthcare & Life Sciences"
              reverse={true}
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Activity className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Clinician fatigue mitigation systems</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <BookOpen className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Precision diagnostics workload balancing</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Shield className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Data-sovereign patient care pathways</p>
                </div>
              </div>
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="/solutions#use-cases">Explore Healthcare Solutions</a>
              </Button>
            </FeatureColumn>
          </div>
        </section>

        {/* Critical Infrastructure & Smart Cities */}
        <section id="infrastructure" className="container mx-auto px-4 md:px-6 py-20">
          <FeatureColumn
            title="Critical Infrastructure & Smart Cities"
            description={
              <>
                <p className="mb-4">Cyber-physical security layers, real-time situational awareness, sustainability optimisation.</p>
                <p>Our smart city and infrastructure solutions create resilient systems that adapt to changing conditions while 
                optimizing resource utilization, enhancing public safety, and ensuring operational continuity across critical services.</p>
              </>
            }
            imageUrl="/AdobeStock_563774947.jpeg"
            imageAlt="Critical Infrastructure & Smart Cities"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Shield className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Cyber-physical security integration layers</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Globe className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Resilience orchestration across energy, transport, and emergency services</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Rocket className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Sustainability optimization platforms</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
            >
              <a href="/contact">Book a Smart City Consultation</a>
            </Button>
          </FeatureColumn>
        </section>

        {/* Corporate Innovation */}
        <section id="corporate" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <FeatureColumn
              title="Corporate Innovation"
              description={
                <>
                  <p className="mb-4">EchoX-powered upskilling, adaptive workflow design, strategic foresight labs.</p>
                  <p>Our corporate solutions enhance creative throughput and employee retention through adaptive 
                  workflows that align with natural cognitive rhythms, creating more engaging and productive work environments 
                  that foster innovation while reducing burnout.</p>
                </>
              }
              imageUrl="/coperate.jpeg"
              imageAlt="Corporate Innovation"
              reverse={true}
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Building className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Future-of-work programmes boosting creative throughput</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Activity className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Adaptive workflow design that reduces burnout</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Rocket className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Strategic foresight labs powered by echoX</p>
                </div>
              </div>
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="/contact">Talk to Our Innovation Team</a>
              </Button>
            </FeatureColumn>
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
