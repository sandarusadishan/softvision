import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 lg:h-40 -mb-1 pointer-events-none overflow-hidden">
      <motion.svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="var(--color-background)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </motion.svg>
    </div>
  );
};

export default SectionDivider;