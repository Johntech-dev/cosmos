import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import FAQ from "./pages/FAQ";
import WhitePaper from "./pages/WhitePaper";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import CookieConsent from "./components/ui/CookieConsent";
import { cookieManager } from "./utils/cookieManager";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import EvergreenProtocol from "./pages/EvergreenProtocol";
import Careers from "./pages/careers";

// ScrollToTop component that will scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    cookieManager.initialize();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SEO />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <div className="pt-20">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/article/:slug" element={<Article />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/white-paper" element={<WhitePaper />} />
                <Route path="/evergreen-protocol" element={<EvergreenProtocol />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <CookieConsent
              onAcceptAll={cookieManager.enableAnalytics}
              onEssentialOnly={cookieManager.disableAnalytics}
            />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
