
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Sword, Lock, Users, Layers, BarChart } from 'lucide-react';
import FeatureColumn from '@/components/ui/FeatureColumn';
import FeatureTable from '@/components/ui/FeatureTable';

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

      <div id="content" className="pt-10">
        {/* Quick Navigation */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-wrap justify-center gap-4 text-cosmo-blue">
                <a href="#ia" className="hover:underline">Intelligence Amplification</a>
                <span className="text-gray-300">|</span>
                <a href="#synergy" className="hover:underline">Human-Machine Synergy</a>
                <span className="text-gray-300">|</span>
                <a href="#sts" className="hover:underline">Social Transformation Systems</a>
                <span className="text-gray-300">|</span>
                <a href="#use-cases" className="hover:underline">Use Cases</a>
                <span className="text-gray-300">|</span>
                <a href="#implementation" className="hover:underline">Implementation</a>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Intelligence Amplification (IA) */}
        <section id="ia" className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intelligence Amplification <span className="text-cosmo-blue">(IA)</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our echoX Platform and Adaptive Learning Systems augment human expertise without replacing it,
              creating a symbiotic relationship between human insight and computational power.
            </p>
          </AnimatedSection>

          <FeatureColumn
            title="echoX Platform"
            subtitle="Intelligence Amplification"
            description={
              <>
                <p className="mb-4">Our flagship echoX Platform delivers real-time cognitive dashboards with HRV-driven feedback,
                adapting to your team's natural rhythms and enhancing their decision-making capabilities.</p>
                <p>The AI co-pilot surfaces strategic options without overriding human judgment, ensuring
                that human expertise remains at the center of critical decisions while benefiting from
                machine-assisted insights.</p>
              </>
            }
            imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            imageAlt="echoX Platform"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Zap className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Real-time cognitive dashboards with HRV-driven feedback</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Users className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">AI co-pilot that surfaces strategic options without overriding human judgment</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Lock className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Compliance-ready data controls built on the Evergreen Protocol</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white inline-flex items-center group"
            >
              <a href="#use-cases">
                Explore Use Cases 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </FeatureColumn>
        </section>

        {/* Human-Machine Synergy */}
        <section id="synergy" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <FeatureColumn
              title="Human–Machine Synergy"
              subtitle="Cyber-Ecology Toolkits"
              description={
                <>
                  <p className="mb-4">Our Cyber-Ecology Toolkits and Real-Time Command Dashboards create unprecedented 
                  synchronization between human operators and intelligent systems, enhancing situational awareness and 
                  accelerating decision cycles.</p>
                  <p>By adapting to operator stress and workload, our context-aware interfaces prevent cognitive 
                  overload while maintaining precision and performance in mission-critical environments.</p>
                </>
              }
              imageUrl="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              imageAlt="Human-Machine Synergy"
              reverse={true}
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Layers className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Context-aware interfaces that adapt to operator stress and workload</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                      <Clock className="h-3.5 w-3.5 text-cosmo-blue" />
                    </div>
                  </div>
                  <p className="text-gray-700">Cobots & digital twins synchronised to human tempo for zero-downtime ops</p>
                </div>
              </div>
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white inline-flex items-center group"
              >
                <a href="#implementation">
                  See Implementation Process 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </FeatureColumn>
          </div>
        </section>

        {/* Social Transformation Systems */}
        <section id="sts" className="container mx-auto px-4 md:px-6 py-20">
          <FeatureColumn
            title="Social Transformation Systems"
            subtitle="Organisational Coherence Platforms"
            description={
              <>
                <p className="mb-4">Our Organisational Coherence Platforms create co-adaptive infrastructures that facilitate 
                collective intelligence and enhanced collaboration across your enterprise.</p>
                <p>Using Mirror Reality Analytics (MRA) for cultural sentiment and alignment, we help organizations 
                move from fragmented silos to unified systems of resonance, driven by shared purpose and transparent feedback.</p>
              </>
            }
            imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            imageAlt="Social Transformation Systems"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <BarChart className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Mirror Reality Analytics (MRA) for cultural sentiment and alignment</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-6 h-6 rounded-full bg-cosmo-blue/20 flex items-center justify-center">
                    <Sword className="h-3.5 w-3.5 text-cosmo-blue" />
                  </div>
                </div>
                <p className="text-gray-700">Decision frameworks powered by Cybernetic Superrationality</p>
              </div>
            </div>
            <Button 
              asChild
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white inline-flex items-center group"
            >
              <a href="/insights">
                Read Related Insights 
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </FeatureColumn>
        </section>

        {/* Government & Enterprise Use Cases */}
        <section id="use-cases" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Government & Enterprise <span className="text-cosmo-blue">Use Cases</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions deliver transformative results across diverse sectors, addressing 
                mission-critical challenges with human-centered, ethical innovation.
              </p>
            </AnimatedSection>

            <FeatureTable
              headers={["Sector", "Impact Snapshot"]}
              rows={[
                {
                  sector: <span className="font-medium">Healthcare & Life Sciences</span>,
                  impact: "Clinician fatigue mitigation, precision diagnostics workload balancing."
                },
                {
                  sector: <span className="font-medium">Defence & Public Safety</span>,
                  impact: "Cognitive readiness dashboards for mission-critical teams."
                },
                {
                  sector: <span className="font-medium">Smart Cities / Critical Infrastructure</span>,
                  impact: "Resilience orchestration across energy, transport, and emergency services."
                },
                {
                  sector: <span className="font-medium">Corporate Innovation</span>,
                  impact: "Future-of-work programmes boosting creative throughput and retention."
                }
              ]}
              className="max-w-4xl mx-auto"
            />
            
            <div className="text-center mt-12">
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="/industries">Explore Industry Solutions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Implementation Services */}
        <section id="implementation" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Implementation <span className="text-cosmo-blue">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven implementation methodology ensures seamless integration of our technologies 
                into your existing systems and workflows, delivering measurable value at every stage.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Implementation steps with connector lines */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-cosmo-blue/30 -translate-y-1/2 hidden md:block"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "Discovery",
                      description: "We assess your current capabilities, challenges, and goals to create a tailored roadmap."
                    },
                    {
                      step: "Pilot",
                      description: "Implement targeted solutions in a controlled environment to validate impact and ROI."
                    },
                    {
                      step: "Scale",
                      description: "Roll out solutions across your organization with comprehensive training and support."
                    },
                    {
                      step: "Optimization",
                      description: "Continuous improvement through data-driven insights and adaptive enhancements."
                    }
                  ].map((phase, index) => (
                    <AnimatedSection key={phase.step} delay={100 * index} className="relative">
                      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 h-full">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cosmo-blue flex items-center justify-center text-white font-bold z-10">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-center text-cosmo-blue mt-4">{phase.step}</h3>
                        <p className="text-gray-600 text-center">{phase.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/contact">Schedule a Strategy Call</a>
                </Button>
              </div>
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
                  className="border-white text-white bg-white/10"
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
