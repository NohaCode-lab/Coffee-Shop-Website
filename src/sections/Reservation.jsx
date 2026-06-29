import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Clock, Heart } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    notes: '',
  });
  const [response, setResponse] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateApiCall = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ message: 'Processing your reservation...', type: 'processing' });

    try {
      await simulateApiCall(1500);
      setResponse({ message: 'Reservation confirmed! We look forward to serving you.', type: 'success' });
      setFormData({ name: '', email: '', phone: '', guests: '', date: '', time: '', notes: '' });
    } catch (error) {
      setResponse({ message: 'Error processing reservation. Please try again or call us.', type: 'error' });
    }
  };

  useEffect(() => {
    if (response.type === 'success') {
      const timer = setTimeout(() => setResponse({ message: '', type: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [response]);

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    .toISOString()
    .split('T')[0];

  return (
    <section id="reservation" className="bg-gradient-to-t from-blue-50 to-pink-50 py-16 clip-reservation relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-800"
          >
            Book a Table
          </motion.h2>
          <p className="text-slate-600 mt-2">Plan your perfect moment — reserve your seat today.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-wrap">
          {/* Reservation Form */}
          <form className="flex-1 p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                aria-label="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <select
                name="guests"
                aria-label="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="" disabled>Number of Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                max={maxDate}
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            <textarea
              name="notes"
              placeholder="Special requests (allergies, celebrations, etc.)"
              aria-label="Special Requests"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-6"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Reserve Now
            </motion.button>

            <motion.AnimatePresence>
              {response.message && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 text-center ${response.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                  {response.message}
                </motion.div>
              )}
            </motion.AnimatePresence>
          </form>

          {/* Info Panel */}
          <div className="bg-gradient-to-br from-blue-600 to-pink-600 text-white p-8 flex-1 min-w-[280px]">
            <h3 className="text-2xl font-semibold text-pink-200 text-center mb-6">Why Reserve With Us?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Zap className="text-pink-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Instant Confirmation</h4>
                  <p className="text-sm opacity-90">No waiting—your table is secured immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-pink-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Flexible Changes</h4>
                  <p className="text-sm opacity-90">Modify your booking anytime, hassle-free.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="text-pink-300 text-2xl" />
                <div>
                  <h4 className="font-medium">Personalized Experience</h4>
                  <p className="text-sm opacity-90">We accommodate allergies, celebrations, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;