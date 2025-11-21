import { motion } from "framer-motion";

const Preloader = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.div variants={logoVariants} animate="animate">
        <img
          src="/public/logo.png"
          alt="SoftVision Group Loading"
          className="h-32 md:h-40 object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.p
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="mt-6 text-lg md:text-xl text-white/70 font-light tracking-widest"
      >
        Initializing Innovation...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;