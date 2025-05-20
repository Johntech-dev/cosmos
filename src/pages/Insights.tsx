import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/ui/ArticleCard';
import SEO from '@/components/SEO';

const Insights = () => {
  const featuredArticles = [
    {
      title: "From Work-Life Balance to Work-Life Resonance",
      excerpt: "The familiar quest for 'work-life balance' imagines two forces forever fighting for equal time. In practice that scale tips with every urgent email or family surprise. Cosmo Lab reframes the problem around work-life resonance—a state in which what you are doing and how you are wired move in the same rhythm.",
      date: "June 1, 2023",
      category: "Wellbeing",
      image: "work-balance.jpeg",
      url: "/article/work-life-resonance"
    },
    {
      title: "From Enforcement to Shared Awareness",
      excerpt: "Traditional public-safety systems rely on prediction: analyse past incidents, flood 'hot spots' with patrols, and hope deterrence follows. The approach often magnifies mistrust because it focuses on where risk might occur but ignores how people actually feel in the moment.",
      date: "May 15, 2023",
      category: "Society",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      url: "/article/shared-awareness"
    },
    {
      title: "Deep Time: Re-awakening Long-Range Awareness",
      excerpt: "Digital culture compresses attention into two settings: now and too late. When every alert demands an instant reply, hours feel crowded and decades disappear from view. Cosmo Lab revives an older capacity—Deep Time—the sense that minutes, seasons, and millennia can coexist in a single thought.",
      date: "April 22, 2023",
      category: "Research",
      image: "AdobeStock_800182196.jpeg",
      url: "/article/deep-time"
    },
    {
      title: "Intelligence Amplification: Clearer Thinking Through Human-Centric Tech",
      excerpt: "Most conversations about smart software focus on Artificial Intelligence—machines that analyse data and issue answers. Cosmo Lab works on a different frontier: Intelligence Amplification (IA), technology that expands the conditions in which human insight appears.",
      date: "March 30, 2023",
      category: "Technology",
      image: "body.png",
      url: "/article/intelligence-amplification"
    },
    {
      title: "Human–Machine Synergy: Designing Responsive Cybernetic Ecologies",
      date: "March 30, 2023",
      excerpt: "Most technology still behaves like a power tool: wait for a command, do the task, fall silent. Cosmo Lab imagines a richer relationship—Human–Machine Synergy—in which devices sense your state, adapt their responses, and co-evolve with you over time.",
      url: "/article/human-machine-synergy",
      category: "Technology",
     image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Ethics by Design: Building Sovereign Technology from the Inside Out",
      date: "March 30, 2023",
      excerpt: "When software can read heart rhythms, infer mood, and reorder your task list, 'privacy settings' are no longer enough. Ethics must move from policy appendices into the source code itself.",
      url: "/article/ethics-in-ia",
      category: "Ethics",
      image:"etic-by-design.jpeg"
    },
  ];
  
  const additionalArticles = [
    // {
    //   title: "Human–Machine Synergy: Designing Responsive Cybernetic Ecologies",
    //   excerpt: "Most technology still behaves like a power tool: wait for a command, do the task, fall silent. Cosmo Lab imagines a richer relationship—Human–Machine Synergy—in which devices sense your state, adapt their responses, and co-evolve with you over time.",
    //   url: "/article/human-machine-synergy",
    //   category: "Technology"
    // },
    // {
    //   title: "Ethics by Design: Building Sovereign Technology from the Inside Out",
    //   excerpt: "When software can read heart rhythms, infer mood, and reorder your task list, 'privacy settings' are no longer enough. Ethics must move from policy appendices into the source code itself.",
    //   url: "/article/ethics-by-design",
    //   category: "Ethics"
    // },
    {
      title: "Social Transformation Systems: Engineering Collective Coherence",
      excerpt: "Group tools connect people faster than ever, yet meetings stall, online debates polarise, and communities fracture. Cosmo Lab addresses the gap with Social Transformation Systems (STS)—feedback frameworks that help groups feel themselves as a single, adaptive organism.",
      url: "/article/social-transformation",
      category: "Society",
      image: "social-transformation.png"
    },
    {
      title: "Cognitive Sovereignty: Protecting the Self in the Age of Augmentation",
      excerpt: "When technology can sense pulse changes, predict preferences, and reorder your schedule, freedom is no longer just legal—it is neurocognitive. Cosmo Lab anchors that freedom in Cognitive Sovereignty: the un-transferable right to decide how your inner signals are captured, reflected, and acted upon.",
      url: "/article/cognitive-sovereignty",
      category: "Research",
      image: "low-angle-woman-posing-outdoors.jpg"
    }
  ];
  
  const timelineEvents = [
    {
      era: "1st CTPS",
      title: "Agricultural Revolution",
      year: "10,000 BCE",
      description: "Shift from nomadic hunter-gathering to seasonal time perception",
      image: "1stctps.jpeg"
    },
    {
      era: "2nd CTPS",
      title: "Industrial Revolution",
      year: "1760s",
      description: "Shift to mechanical time perception with clock-based scheduling",
      image: "2ndctps.jpeg"
    },
    {
      era: "3rd CTPS",
      title: "Digital Revolution",
      year: "1950s",
      description: "Shift to always-on connectivity and acceleration of experience",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      era: "4th CTPS",
      title: "Intelligence Revolution",
      year: "2020s",
      description: "Shift to adaptive, fluid time perception aligned with cognitive states",
      image: "4thctps.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Insights & Research - Cosmo Lab"
        description="Explore our latest research, thought leadership, and insights on Intelligence Amplification and the 4th Cultural Time Perception Shift."
        keywords={['Intelligence Amplification Research', '4th CTPS Insights', 'Cognitive Evolution', 'Human-Machine Collaboration', 'Future of Work']}
        url="https://cosmolab.cc/insights"
      />
      <HeroSection
        title={
          <>
            Latest <span className="text-gradient">Insights</span> & Research
          </>
        }
        subtitle="Insights"
        description="Explore our latest research, thought leadership, and insights on Intelligence Amplification and the 4th Cultural Time Perception Shift."
      />

      <div id="content">
        {/* Featured Articles */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured <span className="text-cosmo-blue">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our latest thinking on the future of human-machine collaboration, Intelligence 
              Amplification, and the 4th Cultural Time Perception Shift.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <ArticleCard 
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                image={article.image}
                url={article.url}
                delay={100 * index}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {additionalArticles.map((article, index) => (
              <ArticleCard 
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                url={article.url}
                image={article.image}
                delay={100 * (index + featuredArticles.length)}
              />
            ))}
          </div>
        </section>

        {/* 4th CTPS Interactive Timeline */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                4th CTPS <span className="text-cosmo-blue">Interactive Timeline</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the evolution of Cultural Time Perception Shifts throughout human history,
                leading to our current transformative era.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Horizontal timeline line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-cosmo-blue/30 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {timelineEvents.map((event, index) => (
                  <AnimatedSection key={event.era} delay={100 * index}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="bg-cosmo-blue/10 text-cosmo-blue text-sm font-medium px-3 py-1 rounded-full">
                            {event.era}
                          </span>
                          <span className="text-gray-500 text-sm">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button 
                asChild
                className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
              >
                <a href="#4th-ctps">Read More About the 4th CTPS</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          {/* <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resource <span className="text-cosmo-blue">Library</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access in-depth research papers, white papers, keynote recordings, and frequently asked questions
              about our technologies and methodologies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">White Papers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Procurement-friendly deep dives into our technologies, methodologies, and research findings.
                Perfect for technical teams and decision-makers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/evergreen-protocol" className="text-gray-700 hover:text-cosmo-blue">The Evergreen Protocol (PDF)</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/white-paper" className="text-gray-700 hover:text-cosmo-blue">4th CTPS: Technical Implementation Guide (PDF)</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/white-paper" className="text-gray-700 hover:text-cosmo-blue">Cosmo Lab White Paper (PDF)</a>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">Keynote Recordings</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Executive summaries and presentations from our researchers and leadership team on
                the latest developments in IA and 4th CTPS.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="#" className="text-gray-700 hover:text-cosmo-blue">Human-Machine Synergy (Video + Slides)</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="#" className="text-gray-700 hover:text-cosmo-blue">The Future of Work in the 4th CTPS (Video)</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="#" className="text-gray-700 hover:text-cosmo-blue">Ethics in the Age of IA (Slides)</a>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-cosmo-blue/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-cosmo-blue" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">FAQ</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Frequently asked questions about our technologies, methodologies, and implementation process.
                Updated quarterly with the latest information.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/faq" className="text-gray-700 hover:text-cosmo-blue">Intelligence Amplification FAQ</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/faq" className="text-gray-700 hover:text-cosmo-blue">Implementation & Integration FAQ</a>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-cosmo-blue mr-2" />
                  <a href="/faq" className="text-gray-700 hover:text-cosmo-blue">Data Privacy & Security FAQ</a>
                </li>
              </ul>
            </AnimatedSection>
          </div> */}
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-cosmo-blue">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore common questions about the Evergreen Initiative, Intelligence Amplification,
                and the 4th Cultural Time Perception Shift.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <AnimatedSection>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">What is the Evergreen Initiative?</h3>
                    <p className="text-gray-600">
                      The Evergreen Initiative is a global movement dedicated to Intelligence Amplification (IA) as the foundation 
                      of a sustainable and regenerative future. It envisions a cybernetic ecology where humans thrive in harmony 
                      with nature and technology—through cognitive sovereignty, ecological design, and cultural resilience.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">What is Intelligence Amplification (IA)?</h3>
                    <p className="text-gray-600">
                      IA is a design paradigm that enhances human intelligence—cognitive, emotional, and creative—by working 
                      symbiotically with natural neurocognitive rhythms. Unlike AI, IA does not replace people; it empowers 
                      them to become more adaptive, self-aware, and aligned with real-time feedback from their environment.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">How is IA different from AI?</h3>
                    <p className="text-gray-600">
                      AI automates. IA collaborates. While AI often centralizes control and efficiency, IA supports the 
                      decentralization of agency—amplifying perception, memory, learning, and decision-making in harmony 
                      with human values and ecological feedback.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">What are the Four Cultural Time Perception Shifts (CTPS)?</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>1st CTPS – Calendar: Organized cyclical time (agriculture)</li>
                      <li>2nd CTPS – Metronome: Mechanical time and scientific inquiry</li>
                      <li>3rd CTPS – Atomic Clock: Precision time driving industry and computation</li>
                      <li>4th CTPS – Personal Cognitive Computing: Time as fluid, adaptive, and internalized via neurocognitive rhythms</li>
                    </ul>
                  </div>
                </AnimatedSection>

                <div className="text-center mt-10">
                  <Button 
                    asChild
                    className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                  >
                    <a href="/faq">View All FAQs</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="bg-cosmo-blue-dark text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
                <p className="text-xl mb-8 text-gray-100">
                  Subscribe to our newsletter for the latest research, insights, and event announcements.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue-light text-gray-900"
                  />
                  <Button className="bg-cosmo-blue-light hover:bg-white hover:text-cosmo-blue">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm mt-4 text-gray-300">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section> */}

        {/* Blog Post Preview */}
        <section id="4th-ctps" className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The 4th Cultural Time Perception Shift: <span className="text-cosmo-blue">A New Epoch in Human Potential</span>
            </h2>
            
            <div className="flex items-center justify-center mb-8">
              <div>
                <p className="text-sm text-gray-500">May 15, 2023 • 8 min read</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                The 4th Cultural Time Perception Shift represents humanity's move from experiencing time as an external force to mastering 
                it as a fluid, personalized, and co-evolving construct. This shift, driven by advanced cognitive technologies, artificial 
                intelligence, and real-time feedback systems, transforms time from something we measure to something we optimize.
              </p>
              
              <h3>Introduction: A New Epoch of Perception</h3>
              <p>
                Throughout history, humanity has redefined its relationship with time, ushering in sweeping transformations in how we live, 
                create, and connect. From the natural rhythms of the first Cultural Time Perception Shift (CTPS) to the mechanized order 
                of the second and the relativistic understanding of the third, each shift has expanded our horizons. Now, the 4th Cultural 
                Time Perception Shift (4th CTPS) challenges us to go further—transforming time from a linear, external force into a fluid, 
                personal, and co-created dimension.
              </p>
              
              <h3>Reimagining Time: From Fixed to Fluid</h3>
              <p>
                The 4th CTPS represents a fundamental shift in our perception of time. No longer confined to rigid calendars or ticking 
                clocks, time becomes an adaptive, co-evolving construct shaped by three key dynamics:
              </p>
              <ul>
                <li>Intelligence Amplification: Through wearable devices, biofeedback tools, and AI-driven systems</li>
                <li>Cybernetic Ecology: The interplay between humans, machines, and environments</li>
                <li>Temporal Elasticity: Understanding and shaping our perceptions of time</li>
              </ul>
              
              <div className="text-center my-10">
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/article/4th-ctps-paradigm">Read Full Article</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default Insights;
