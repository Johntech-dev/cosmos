
import React from 'react';
import { HeroSection } from '@/components/ui/hero-section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Video, MessageSquare } from 'lucide-react';
import FeatureHighlight from '@/components/ui/FeatureHighlight';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Mind, Machines & the 4th Cultural Time Perception Shift"
        subtitle="Redefining the Future of Resilient Intelligence for Enterprise & Government Leaders"
        description="Cosmo Lab pioneers Intelligence Amplification (IA)—technology that augments, rather than replaces, human expertise. By harnessing the 4th Cultural Time Perception Shift (4th CTPS), we synchronise people, machines, and critical systems in real time, driving mission-ready performance and ethical innovation."
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            className="bg-cosmo-blue hover:bg-cosmo-blue-light text-white px-6 py-6 text-lg rounded-md shadow-glow"
          >
            <a href="/solutions">Explore Solutions</a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border-white text-white bg-white/10 px-6 py-6 text-lg"
          >
            <a href="/insights">Read Insights</a>
          </Button>
          
          <Button 
            asChild
            variant="ghost" 
            className="text-cosmo-blue-light px-6 py-6 text-lg"
          >
            <a href="/contact">Talk to Our Team</a>
          </Button>
        </div>
      </HeroSection>

      <div id="content" className="py-20">
        {/* Executive Highlights Section */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why 4th CTPS Matters — <span className="text-cosmo-blue">Executive Highlights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our groundbreaking approach can transform your organization's performance and resilience.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureHighlight 
              title="Intelligence Amplification"
              description="Elevate decision-quality and cognitive throughput across complex operations."
            />
            
            <FeatureHighlight 
              title="Human–Machine Synergy"
              description="Deploy cyber-ecological toolkits that learn, adapt, and cooperate with staff in real time."
            />
            
            <FeatureHighlight 
              title="Evergreen Protocol (Ethics)"
              description="Guarantee data sovereignty, sustainability, and compliance from day one."
            />
          </div>
        </section>

        {/* Strategic Advantage Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="w-full md:w-1/2">
                <div className="relative">
                  <div className="bg-cosmo-blue/10 rounded-lg absolute -top-8 -left-8 w-full h-full -z-10"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3klMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
                      alt="Strategic Advantage"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Strategic <span className="text-cosmo-blue">Advantage</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  In today's rapidly evolving landscape, organizations face unprecedented challenges in maintaining cognitive resilience while adapting to accelerating change. Our Intelligence Amplification technologies provide a strategic advantage by enhancing human capabilities rather than replacing them.
                </p>
                <p className="text-gray-600 mb-8">
                  By harnessing the power of the 4th Cultural Time Perception Shift, we create synchronized ecosystems where human expertise and machine processing work in harmony, delivering superior outcomes across complex operations.
                </p>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/solutions">Discover Our Solutions</a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action for Demo/Consultation Section */}
        <section className="py-20 bg-gradient-to-r from-cosmo-blue-dark to-cosmo-blue">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Experience the Future of Intelligence Amplification
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Schedule a personalized demo or consultation with our expert team to discover how the 4th CTPS can transform your organization.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Product Demo</h3>
                  <p className="text-white/80 mb-6">
                    See our Intelligence Amplification technology in action with a tailored demonstration.
                  </p>
                  <Button 
                    asChild
                    className="bg-white text-cosmo-blue hover:bg-gray-100 w-full"
                  >
                    <a href="/contact?type=demo">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/15 backdrop-blur-sm border-white/20 shadow-xl transform scale-105 hover:scale-110 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Virtual Consultation</h3>
                  <p className="text-white/80 mb-6">
                    Meet with our experts to discuss your specific needs and explore customized solutions.
                  </p>
                  <Button 
                    asChild
                    className="bg-white text-cosmo-blue hover:bg-gray-100 w-full"
                  >
                    <a href="/contact?type=consultation">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Chat</h3>
                  <p className="text-white/80 mb-6">
                    Have questions? Schedule a brief call with our team to get the answers you need.
                  </p>
                  <Button 
                    asChild
                    className="bg-white text-cosmo-blue hover:bg-gray-100 w-full"
                  >
                    <a href="/contact?type=chat">
                      Schedule Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What It Means For You Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What It Means <span className="text-cosmo-blue">For You</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our technologies deliver tangible benefits across your organization, creating resilient systems that adapt to changing conditions while amplifying human potential.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enhanced Decision Making",
                  description: "Leverage real-time cognitive dashboards that provide strategic options while preserving human judgment."
                },
                {
                  title: "Reduced Cognitive Fatigue",
                  description: "Adaptive interfaces that respond to operator stress and workload, preventing burnout and maintaining peak performance."
                },
                {
                  title: "Mission-Ready Performance",
                  description: "Synchronize people, machines, and critical systems for zero-downtime operations and superior outcomes."
                },
                {
                  title: "Ethical Innovation",
                  description: "Built on our Evergreen Protocol, ensuring data sovereignty, sustainability, and compliance from day one."
                },
                {
                  title: "Cultural Transformation",
                  description: "Drive organizational coherence with Mirror Reality Analytics for enhanced collaboration and alignment."
                },
                {
                  title: "Future-Proofed Strategy",
                  description: "Develop adaptive frameworks that evolve with your organization, ensuring sustainable growth and resilience."
                }
              ].map((feature, index) => (
                <AnimatedSection key={feature.title} delay={100 * index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-cosmo-blue">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cosmo-blue-dark to-cosmo-blue text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                Discover how our Intelligence Amplification and 4th CTPS technologies can create a strategic advantage for your team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  asChild
                  className="bg-white text-cosmo-blue hover:bg-gray-100 shadow-glow"
                >
                  <a href="/solutions">Explore Solutions</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white text-white bg-white/10"
                >
                  <a href="/contact">Talk to Our Team</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
