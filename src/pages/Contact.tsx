
import React from 'react';
import type { FC } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  projectScope: z.string().min(1, "Project scope is required"),
  securityRequirements: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  contactMethod: z.enum(["email", "phone", "video"], {
    required_error: "Please select a contact method",
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      projectScope: "",
      securityRequirements: "",
      message: "",
      contactMethod: "email",
      consent: true,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  }

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
        overlayClassName="bg-gradient-to-b from-cosmo-blue-dark/90 to-cosmo-blue-dark/95"
      />

      <div id="content" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <AnimatedSection className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connect With <span className="text-cosmo-blue">Our Team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're interested in our solutions, research partnerships, careers, or media inquiries, 
                we'd love to hear from you. Fill out the form, and the right member of our team will get back to you shortly.
              </p>              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name*</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name*</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation Name & Type</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectScope"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Scope / Brief*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="solutions">Solutions Information</SelectItem>
                            <SelectItem value="demo">Request a Demo</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="securityRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Compliance or Security Requirements</FormLabel>
                        <FormControl>
                          <Textarea rows={2} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message*</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Preferred Contact Method*</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <label htmlFor="email">Email</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="video" id="video" />
                              <label htmlFor="video">Video Call</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the processing of my personal data in accordance with Cosmo Lab's{" "}
                            <a href="/privacy-policy" className="text-cosmo-blue underline">
                              Privacy Policy
                            </a>
                            .*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white py-3 px-8"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="w-full lg:w-1/3">
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
                      <h4 className="font-medium mb-1">Global Presence</h4>
                      <p className="text-gray-600">
                        San Francisco • London • Singapore
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-cosmo-blue/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-cosmo-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Response Time</h4>
                      <p className="text-gray-600">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
