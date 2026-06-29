import { motion } from 'framer-motion';

const MenuItem = ({ image, title, description, price }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-700 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold text-lg">{price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-500 hover:text-pink-700 transition-colors"
            aria-label={`Add ${title} to cart`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;