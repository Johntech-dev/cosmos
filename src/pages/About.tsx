
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowDown, Vision, Target, Rocket } from 'lucide-react';
import FeatureTable from '@/components/ui/FeatureTable';
import FeatureHighlight from '@/components/ui/FeatureHighlight';

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Systemic Harmony & Adaptive Intelligence"
        subtitle="About Cosmo Lab"
        description="Cosmo Lab harmonises human potential, machine intelligence, and environmental balance to usher in a resilient era of adaptive intelligence."
      />

      <div id="content">
        {/* Mission & Vision Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              "Cosmo Lab harmonises human potential, machine intelligence, and environmental balance to usher in a resilient era of adaptive intelligence."
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col md:w-1/2">
              <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">From</h3>
              <p className="text-gray-600 flex-grow">
                Static, efficiency-driven frameworks that prioritize optimization over adaptation and human wellbeing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col md:w-1/2">
              <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">To</h3>
              <p className="text-gray-600 flex-grow">
                Adaptive, intelligence-driven systems fostering creativity and strategic resilience across organizations and communities.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Evergreen Protocol Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Evergreen Protocol <span className="text-cosmo-blue">(Our Ethical Backbone)</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our work is guided by core ethical principles that ensure our technologies serve humanity while respecting individual autonomy and ecological balance.
              </p>
            </AnimatedSection>

            <FeatureTable
              headers={["Pillar", "Commitment"]}
              rows={[
                {
                  pillar: <span className="font-medium">Data Sovereignty</span>,
                  commitment: "Users and clients retain full control of behavioural biometric data."
                },
                {
                  pillar: <span className="font-medium">Sustainable Growth</span>,
                  commitment: "Every solution aligns with ecological and social stewardship."
                },
                {
                  pillar: <span className="font-medium">Global Inclusivity</span>,
                  commitment: "Designed for diverse populations and compliance landscapes."
                }
              ]}
              className="max-w-3xl mx-auto"
            />
            
            <div className="text-center mt-12">
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="#" download>
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Download Corporate Overview (PDF)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Vision for the Future Section - New Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vision for the <span className="text-cosmo-blue">Future</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We see a world where adaptive intelligence elevates human potential while balancing technological advancement with environmental stewardship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cosmo-blue/10 rounded-full mr-4">
                    <Vision className="h-6 w-6 text-cosmo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Cognitive Evolution</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  By 2030, our technologies will enable a 40% enhancement in human decision-making capacity through seamless human-AI collaboration without compromising individual agency.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cosmo-blue/10 rounded-full mr-4">
                    <Target className="h-6 w-6 text-cosmo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Adaptive Systems</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  Creating organizational frameworks that dynamically adjust to emerging challenges, improving resilience by 60% while reducing operational stress on human teams.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="p-8 bg-gradient-to-br from-white to-green-50 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cosmo-blue/10 rounded-full mr-4">
                    <Rocket className="h-6 w-6 text-cosmo-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Ecological Balance</h3>
                </div>
                <p className="text-gray-600 flex-grow">
                  Integrating environmental metrics into all decision systems to ensure technological progress advances planetary health and regenerative economics rather than depleting resources.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="bg-cosmo-blue/5 p-8 md:p-12 rounded-2xl border border-cosmo-blue/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our 2035 Milestones</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureHighlight 
                  title="30+ Countries" 
                  description="Global implementation of adaptive intelligence systems across diverse cultural contexts" 
                />
                <FeatureHighlight 
                  title="1000+ Organizations" 
                  description="Enterprise and governmental partners utilizing our frameworks for strategic resilience" 
                />
                <FeatureHighlight 
                  title="15+ Research Centers" 
                  description="Global network of collaborative research hubs advancing ethical AI development" 
                />
                <FeatureHighlight 
                  title="60% Reduction" 
                  description="In organizational resource consumption through adaptive optimization systems" 
                />
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section className="bg-cosmo-blue-dark text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                Whether you're interested in partnering with us, joining our team, or learning more about our research, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  className="bg-white text-cosmo-blue hover:bg-gray-100 shadow-glow"
                >
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white text-white bg-white/10"
                >
                  <a href="/careers">Careers</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
