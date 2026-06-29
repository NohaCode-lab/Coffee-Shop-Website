import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image with subtle zoom animation */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/hero-bg.jpg"
          alt="Cozy coffee shop background"
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-pink-800/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-4"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg"
        >
          Welcome to Coffee Haven
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow"
        >
          Where every sip feels like home.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <a
            href="#menu"
            aria-label="Explore menu section"
            className="inline-block px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition transform hover:scale-105 hover:shadow-xl"
          >
            Explore Our Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#f8fafc"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,10.19,140.68,5.63,209.28-6.58,68.38-12.19,135.86-31.91,204.57-35.92,68.87-4,137.94,9.92,206.68,24.44,68.13,14.39,135.31,33.48,203.82,33.48,68.5,0,135.68-19.09,203.81-33.48,68.74-14.52,137.81-28.44,206.68-24.44,68.71,4,136.19,23.73,204.57,35.92,68.6,12.21,139.52,16.77,209.28,6.58,16.31-2.78,31.24-7.2,44.24-12.64V0Z"
            fill="#f8fafc"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#f8fafc"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
