import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/Pricing";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forgescloud.com/cw_script/consent-widget-1.0.1.js";
    script.async = true;

    script.onload = () => {
      if (window.CookieConsentWidget) {
        new window.CookieConsentWidget({
          brandName: "Deployer Consent",
          cookieName: "deployer_consent",
          primaryColor: "#0596689a",
          secondaryColor: "#ffffff",
          language: "pt",
          position: "bottom-left", // opções: bottom-right, bottom-left, top-right, top-left, center
          autoShow: true,
          cookieExpiry: 365,
          termsUrl: "/juridico/politica-de-privacidade.pdf",
          privacyUrl: "/juridico/Termos-e-Condicoes-gerais.pdf",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (


    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<PricingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );


}


