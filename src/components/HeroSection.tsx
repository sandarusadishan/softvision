import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import SectionDivider from "./SectionDivider";
import { Starfield } from "./Starfield";
import backgroundImage from '/src/accets/background1.jpg';
import logoImage from '/src/accets/re logo.png';

const HeroSection = () => {
  const titleText = "SoftVision Group";
  const subtitleText = "Pioneering Digital Innovation";

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.8,
      },
    },
  };

  const titleChild = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateZ: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 150,
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 0.3,
      opacity: 0,
      y: -100,
      rotateX: 90,
      rotateY: -45,
      scaleZ: 0.1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scaleZ: 1,
      transition: {
        duration: 2.0,
        delay: 0.2,
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-background"
      style={{ minHeight: "100svh" }}  // mobile height fix
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Starfield (Hidden on mobile for performance) */}
      <div className="absolute inset-0 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.2} />
          <pointLight intensity={2} position={[0, 0, -10]} color="#00aaff" />
          <pointLight intensity={1.5} position={[-10, -5, -5]} color="#d946ef" />
          <pointLight intensity={1.5} position={[10, 5, -5]} color="#ff6b6b" />
          <Starfield
            color="#ffffff"
            size={0.008}
            speed={3}
            mouseXMultiplier={0.2}
            mouseYMultiplier={0.2}
          />
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `calc(${Math.random() * 100}vh - 100px)`],
              x: [null, `calc(${Math.random() * 100}vw - 100px)`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="space-y-6 md:space-y-8"
        >

          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="flex justify-center mb-4 md:mb-8"
            style={{ perspective: 1500, transformStyle: 'preserve-3d' }}
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className="relative">
              <motion.img
                src={logoImage}
                alt="SoftVision Group"
                className="h-20 sm:h-28 md:h-36 lg:h-44 object-contain drop-shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-cyan-400/50 blur-3xl rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.6, 0.1, 0.4],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 className="
            text-4xl sm:text-5xl md:text-7xl lg:text-9xl 
            font-black text-white tracking-tight leading-none
          ">
            <motion.span
              variants={titleContainer}
              initial="hidden"
              animate="visible"
              className="text-slate-400 inline-block px-2 py-1 rounded-md"
            >
              {Array.from(titleText).map((word, index) => (
                <motion.span 
                  key={index}
                  variants={titleChild}
                  className="inline-block"
                >
                  {word === " " ? "\u00A0" : word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl 
                font-light text-white/90 tracking-wide mx-auto font-mono"
            >
              {subtitleText}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transforming businesses through cutting-edge software solutions, 
            cloud infrastructure, and visionary technology partnerships.
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2.3, type: "spring" }}
            className="relative h-1 mx-auto max-w-xl md:max-w-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-white blur-sm"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Down */}
      <a
        href="#company-showcase"
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 group"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col items-center space-y-3"
        >
          <motion.span
            className="text-white/60 text-xs sm:text-sm font-light tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Explore
          </motion.span>

          <motion.div
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-cyan-400/50 flex justify-center items-start p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </a>

      <SectionDivider />
    </section>
  );
};

export default HeroSection;
