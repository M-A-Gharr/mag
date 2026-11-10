import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

// The main page is in the entry bundle (no second round trip before the first paint);
// only the 404 page is loaded on demand.
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));

const queryClient = new QueryClient();

const App = () => (
    <MotionConfig reducedMotion="user">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
            <span className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 h-8 w-8"></span>
          </div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Language pages (generated at build time with translated meta tags) */}
              <Route path="/fr" element={<Index />} />
              <Route path="/ar" element={<Index />} />
              {/* Case study pages (generated at build time too, see vite.config.ts) */}
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
              <Route path="/fr/etudes-de-cas/:slug" element={<CaseStudyPage />} />
              <Route path="/ar/case-studies/:slug" element={<CaseStudyPage />} />
              {/* Service pages (generated at build time too) */}
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/fr/services/:slug" element={<ServicePage />} />
              <Route path="/ar/services/:slug" element={<ServicePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </MotionConfig>
);


export default App;