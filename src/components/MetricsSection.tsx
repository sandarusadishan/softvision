import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface MetricProps {
  end: number;
  suffix: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({ end, suffix, label, delay = 0 }: MetricProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration: 2,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, end, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-electric transition-all duration-300 border border-border hover:border-accent">
        <div className="text-center space-y-3">
          <motion.div className="text-5xl md:text-7xl font-bold text-primary">
            <motion.span>{rounded}</motion.span>
            <span className="text-accent">{suffix}</span>
          </motion.div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            {label}
          </p>
        </div>
        
        {/* Decorative glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const MetricsSection = () => {
  const metrics = [
    { end: 20, suffix: "+", label: "Years In Operation" },
    { end: 1000, suffix: "+", label: "Satisfied Customers" },
    { end: 30, suffix: "+", label: "Expert Team Members" },
    { end: 20, suffix: "+", label: "Global Projects" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-muted to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across industries for over two decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={metric.label}
              end={metric.end}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
