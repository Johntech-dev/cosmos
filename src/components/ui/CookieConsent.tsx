import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  onAcceptAll: () => void;
  onEssentialOnly: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAcceptAll, onEssentialOnly }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    onAcceptAll();
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    onEssentialOnly();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <span>🍪</span>
                <span>Your Privacy Matters</span>
              </div>
              <p className="text-gray-600 mt-1">
                Cosmo Lab uses essential and analytics cookies to improve your experience, aligned with our values of cognitive integrity. No ads, no manipulation.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Manage your preferences anytime.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                onClick={handleAcceptAll}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                Accept All
              </Button>
              <Button
                onClick={handleEssentialOnly}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6"
              >
                Essential Only
              </Button>
              <Link
                to="/cookie-policy"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent; 