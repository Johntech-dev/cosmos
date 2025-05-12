import React from 'react';
import type { FC } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact: FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title={
          <>
            Connect with <span className="text-gradient">Cosmo Lab</span>
          </>
        }
        subtitle="Contact Us"
        description="Use the secure form or direct lines below for RFPs, pilots, and strategic engagements."
      />

      <div id="content" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <AnimatedSection className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connect With <span className="text-cosmo-blue">Our Team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're interested in our solutions, research partnerships, careers, or media inquiries, 
                we'd love to hear from you. Fill out the form, and the right member of our team will get back to you shortly.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organisation Name & Type
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Scope / Brief*
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="solutions">Solutions Information</option>
                    <option value="demo">Request a Demo</option>
                    <option value="research">Research Collaboration</option>
                    <option value="careers">Careers</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="security" className="block text-sm font-medium text-gray-700 mb-1">
                    Compliance or Security Requirements
                  </label>
                  <textarea
                    id="security"
                    name="security"
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cosmo-blue"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="contact_method" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Method*
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="email" className="mr-2" />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="phone" className="mr-2" />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="contact_method" value="video" className="mr-2" />
                      Video Call
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="h-4 w-4 text-cosmo-blue focus:ring-cosmo-blue border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                    I agree to the processing of my personal data in accordance with Cosmo Lab's <a href="/privacy-policy" className="text-cosmo-blue underline">Privacy Policy</a>.*
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white py-3 px-8"
                >
                  Submit
                </Button>
              </form>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="w-full lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-6">Direct Access</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-cosmo-blue/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-cosmo-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:connect@cosmolab.cc" className="hover:text-cosmo-blue transition-colors">
                          connect@cosmolab.cc
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-cosmo-blue/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-cosmo-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Main Office</h4>
                      <address className="not-italic text-gray-600">
                        123 Innovation Drive<br />
                        Palo Alto, CA 94304<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-cosmo-blue/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-cosmo-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+18005551234" className="hover:text-cosmo-blue transition-colors">
                          +1 (800) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-cosmo-blue/10 p-3 rounded-full">
                        <MessageSquare className="h-6 w-6 text-cosmo-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Media Inquiries</h4>
                      <p className="text-gray-600">
                        <a href="mailto:press@cosmolab.com" className="hover:text-cosmo-blue transition-colors">
                          press@cosmolab.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                <iframe
                  title="Cosmo Lab Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101952.09169763806!2d-122.19535545541238!3d37.429789901466224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c39%3A0xe1ff55235f576cf!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1683872227001!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <a href="#" className="text-gray-600 hover:text-cosmo-blue">Cosmo Lab Corporate Site Map</a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-cosmo-blue">Cosmo Agent Program</a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-cosmo-blue">Privacy</a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-cosmo-blue">Terms</a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-cosmo-blue">Evergreen Protocol</a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
