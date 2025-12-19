import { Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";

// Lazy load components that are below the fold
const CompanyShowcase = lazy(() => import("@/components/CompanyShowcase"));
const MetricsSection = lazy(() => import("@/components/MetricsSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyShowcase />
        <MetricsSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
