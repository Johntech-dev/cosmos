// Cookie consent types
export type CookieConsent = 'all' | 'essential' | null;

// Cookie management functions
export const cookieManager = {
  // Get current consent status
  getConsent: (): CookieConsent => {
    return localStorage.getItem('cookieConsent') as CookieConsent;
  },

  // Enable analytics cookies
  enableAnalytics: () => {
    // Add your analytics initialization code here
    // For example, Google Analytics:
    // window.gtag('consent', 'update', {
    //   'analytics_storage': 'granted'
    // });
    console.log('Analytics cookies enabled');
  },

  // Disable analytics cookies
  disableAnalytics: () => {
    // Add your analytics disable code here
    // For example, Google Analytics:
    // window.gtag('consent', 'update', {
    //   'analytics_storage': 'denied'
    // });
    console.log('Analytics cookies disabled');
  },

  // Initialize cookie settings based on stored consent
  initialize: () => {
    const consent = cookieManager.getConsent();
    if (consent === 'all') {
      cookieManager.enableAnalytics();
    } else if (consent === 'essential') {
      cookieManager.disableAnalytics();
    }
  }
}; 