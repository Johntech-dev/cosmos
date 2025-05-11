
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <>
            Our Vision for <span className="text-gradient">Human-Machine Synergy</span>
          </>
        }
        subtitle="About Cosmo Lab"
        description="A pioneering organization dedicated to Intelligence Amplification and the 4th Cultural Time Perception Shift, creating ethical solutions for tomorrow's challenges."
      />

      <div id="content">
        {/* Mission Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To pioneer technologies that enhance human capabilities through ethical innovation, 
              creating a future where people and machines work in harmony to solve our most pressing challenges.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">Vision</h3>
              <p className="text-gray-600">
                We envision a world where technology serves humanity by amplifying our inherent capabilities, 
                not replacing them. Where the synergy between human expertise and machine processing creates 
                solutions beyond what either could achieve alone.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">Values</h3>
              <p className="text-gray-600">
                Our work is guided by a commitment to ethical innovation, human-centered design, 
                collaboration, excellence, and the belief that technology should enhance human potential 
                while respecting individual autonomy and privacy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">Approach</h3>
              <p className="text-gray-600">
                We combine cutting-edge research with practical application, creating technologies 
                that bridge the gap between human perception and machine processing to deliver 
                mission-ready solutions with real-world impact.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-cosmo-blue">Leadership Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A diverse group of visionaries, scientists, and technologists united by a shared mission to 
                redefine human-machine collaboration.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Elena Kazan",
                  title: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                  bio: "Former MIT professor with 20+ years experience in AI and human-computer interaction."
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
          </div>
        </section>

        {/* History & Innovation Section */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <AnimatedSection className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our History of <span className="text-cosmo-blue">Innovation</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Cosmo Lab emerged from a collaboration between leading researchers in 
                artificial intelligence, cognitive science, and human-computer interaction, united by a 
                shared vision for a more harmonious relationship between humans and technology.
              </p>
              <p className="text-gray-600 mb-6">
                Since our founding, we've pioneered groundbreaking research in Intelligence Amplification 
                and the 4th Cultural Time Perception Shift, leading to practical applications that are 
                transforming how humans and machines collaborate across industries.
              </p>
              <p className="text-gray-600 mb-8">
                Today, our team of over 200 researchers, engineers, designers, and ethicists continues to 
                push the boundaries of what's possible, creating technologies that amplify human potential 
                while upholding our core values of ethics, privacy, and human autonomy.
              </p>
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="/contact">Join Our Team</a>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200} className="w-full md:w-1/2">
              <div className="relative">
                <div className="bg-cosmo-blue/10 rounded-lg absolute -top-8 -right-8 w-full h-full -z-10"></div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="Cosmo Lab Innovation"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
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
                  className="border-white text-white hover:bg-white/10"
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
