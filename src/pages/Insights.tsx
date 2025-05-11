
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Insights = () => {
  return (
    <div className="min-h-screen">
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
            {[
              {
                title: "The Evolution of Intelligence Amplification: Beyond AI",
                excerpt: "How the next generation of technologies will enhance human capabilities rather than replace them.",
                author: "Dr. Elena Kazan",
                date: "May 15, 2023",
                category: "Research",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                link: "#"
              },
              {
                title: "Understanding the 4th Cultural Time Perception Shift",
                excerpt: "A deep dive into how synchronized human-machine interaction is creating a new paradigm for collaboration.",
                author: "Marcus Chen",
                date: "April 22, 2023",
                category: "Technology",
                image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                link: "#"
              },
              {
                title: "The Ethics of Human-Centered Technology Development",
                excerpt: "Exploring the principles that should guide the creation of technologies that augment human intelligence.",
                author: "Dr. Sophia Williams",
                date: "March 30, 2023",
                category: "Ethics",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                link: "#"
              },
            ].map((article, index) => (
              <AnimatedSection key={article.title} delay={100 * index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-cosmo-blue/10 text-cosmo-blue text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <a href={article.link} className="hover:text-cosmo-blue transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <a href={article.link} className="text-cosmo-blue font-medium inline-flex items-center group">
                      Read more 
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Research Highlights */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Research <span className="text-cosmo-blue">Highlights</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our groundbreaking research in Intelligence Amplification and the 4th Cultural 
                Time Perception Shift that's shaping the future of human-machine collaboration.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Intelligence Amplification Research Lab</h3>
                <p className="text-gray-600 mb-6">
                  Our research lab focuses on developing technologies that enhance human cognitive abilities 
                  through novel interfaces, adaptive systems, and collaborative AI frameworks.
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Key Research Areas:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Cognitive enhancement through human-AI collaboration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Adaptive interfaces that respond to cognitive states</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Human-guided machine learning frameworks</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Measuring and enhancing cognitive performance</p>
                    </li>
                  </ul>
                </div>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/research/ia-lab">Explore Research Papers</a>
                </Button>
              </AnimatedSection>

              <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">4th CTPS Innovation Center</h3>
                <p className="text-gray-600 mb-6">
                  Our innovation center focuses on developing technologies that synchronize human 
                  perception with machine processing, creating new paradigms for collaboration in 
                  mission-critical environments.
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Key Research Areas:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Temporal perception alignment frameworks</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Real-time feedback systems for human-machine teams</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Cognitive load management in high-stakes environments</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-cosmo-blue"></div>
                      </div>
                      <p>Cultural adaptation to accelerated decision cycles</p>
                    </li>
                  </ul>
                </div>
                <Button 
                  asChild
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
                >
                  <a href="/research/ctps-center">View Innovation Projects</a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Events & Webinars */}
        <section className="container mx-auto px-4 md:px-6 py-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Upcoming <span className="text-cosmo-blue">Events & Webinars</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for discussions on the latest developments in Intelligence Amplification,
              the 4th Cultural Time Perception Shift, and the future of human-machine collaboration.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                title: "The Future of Intelligence Amplification in Healthcare",
                date: "June 15, 2023",
                time: "10:00 AM - 11:30 AM PT",
                type: "Webinar",
                speakers: ["Dr. Elena Kazan", "Dr. Robert Chen, Stanford Medicine"],
                link: "#"
              },
              {
                title: "4th CTPS Applications in High-Risk Environments",
                date: "July 8, 2023",
                time: "9:00 AM - 4:00 PM PT",
                type: "Conference",
                speakers: ["Marcus Chen", "Dr. Sarah Williams, MIT Media Lab", "Col. James Robertson, USAF"],
                link: "#"
              },
              {
                title: "Ethics and Governance of Human-Machine Collaboration",
                date: "July 22, 2023",
                time: "11:00 AM - 12:30 PM PT",
                type: "Panel Discussion",
                speakers: ["Dr. Sophia Williams", "Prof. Maria Garcia, Harvard Kennedy School", "Dr. Michael Chang, EFF"],
                link: "#"
              },
            ].map((event, index) => (
              <AnimatedSection key={event.title} delay={100 * index}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-cosmo-blue p-6 md:w-48 flex flex-col items-center justify-center text-white">
                      <span className="text-sm font-medium uppercase tracking-wider">{event.type}</span>
                      <div className="text-2xl font-bold mt-2">{event.date.split(',')[0]}</div>
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        <a href={event.link} className="hover:text-cosmo-blue transition-colors">
                          {event.title}
                        </a>
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Speakers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map(speaker => (
                            <span key={speaker} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button 
                          asChild
                          variant="outline" 
                          className="border-cosmo-blue text-cosmo-blue hover:bg-cosmo-blue hover:text-white"
                        >
                          <a href={event.link}>Register Now</a>
                        </Button>
                        <a href={event.link} className="text-cosmo-blue font-medium inline-flex items-center group">
                          Learn more 
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              asChild
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
            >
              <a href="/events">View All Events</a>
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-cosmo-blue-dark text-white py-20">
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
        </section>
      </div>
    </div>
  );
};

export default Insights;
