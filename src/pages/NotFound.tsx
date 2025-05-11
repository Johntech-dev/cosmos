import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-[20rem] font-bold text-cosmo-blue">404</div>
            </div>
            <div className="relative z-10 py-16">
              <h1 className="text-7xl font-bold mb-2 text-cosmo-blue">404</h1>
              <p className="text-2xl font-medium text-cosmo-blue-dark mb-2">Page Not Found</p>
              <div className="h-1 w-20 mx-auto bg-cosmo-blue mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We couldn't find the page you were looking for. The page might have been moved, 
                deleted, or never existed.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-cosmo-blue hover:bg-cosmo-blue-dark text-white"
            >
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="border-cosmo-blue text-cosmo-blue hover:bg-cosmo-blue/10"
              onClick={() => window.history.back()}
            >
              <a href="#">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-sm">
            If you believe this is a mistake, please <a href="/contact" className="text-cosmo-blue hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
