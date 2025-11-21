import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";

// Lazy load components that are below the fold
const CompanyShowcase = lazy(() => import("@/components/CompanyShowcase"));
const MetricsSection = lazy(() => import("@/components/MetricsSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
    >
      <div className="relative w-24 h-24">
        {[
          { x: -1, y: -1, delay: 0 },
          { x: 1, y: -1, delay: 0.2 },
          { x: -1, y: 1, delay: 0.4 },
          { x: 1, y: 1, delay: 0.6 },
        ].map((part, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 bg-primary"
            style={{
              top: part.y > 0 ? '50%' : '0%',
              left: part.x > 0 ? '50%' : '0%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1, 0.5, 1],
              opacity: [0, 1, 1, 1, 1],
              x: [0, 0, part.x * 20, 0, 0],
              y: [0, 0, part.y * 20, 0, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: part.delay,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Reduced to 1 second
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <HeroSection />
          <Suspense fallback={<div>Loading...</div>}>
            <CompanyShowcase />
            <MetricsSection />
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Index;
