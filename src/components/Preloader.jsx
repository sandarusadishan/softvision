import { motion } from "framer-motion";
import Logo from "../accets/favicon.ico.png"; // Adjust path if needed based on previous list_dir

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Glow Effect behind logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* Logo Animation */}
        <motion.img
          src={Logo}
          alt="Loading..."
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-24 md:w-32 object-contain"
        />

        {/* Loading Bar */}
        <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-sm font-light tracking-[0.2em] text-gray-400"
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
