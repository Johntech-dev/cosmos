
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import FeatureTable from '@/components/ui/FeatureTable';

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

        {/* Leadership Team Section - Using existing code from the original About page */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-cosmo-blue">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse group of visionaries, scientists, and technologists united by a shared mission to 
              redefine human-machine collaboration.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Elena Kazan",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                bio: "Former MIT professor with 20+ years experience in AI and human-computer interaction."
              },
              {
                name: "Dr. Michael Zhang",
                title: "Co-founder & CSO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                bio: "Neuroscientist specializing in cognitive enhancement and temporal intelligence systems."
              },
              {
                name: "Marcus Chen",
                title: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                bio: "Technology innovator with a background in quantum computing and neural interfaces."
              },
              {
                name: "Dr. Sophia Williams",
                title: "Chief Research Officer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
                bio: "Pioneering researcher in cognitive enhancement and temporal perception technologies."
              },
            ].map((person, index) => (
              <AnimatedSection key={person.name} delay={100 * index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                    <p className="text-cosmo-blue font-medium mb-3">{person.title}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
