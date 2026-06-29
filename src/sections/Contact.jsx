import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateApiCall = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ message: 'Sending your message...', type: 'processing' });

    try {
      await simulateApiCall(1500);
      setResponse({ message: 'Message sent! We will get back to you soon.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setResponse({ message: 'Error sending message. Please try again.', type: 'error' });
    }
  };

  return (
    <>
      
      <section id="contact" className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-2"
            >
              Contact Us
            </motion.h1>
            <p className="text-slate-600 max-w-xl mx-auto">
              Reach out to us via email, phone, or fill the form below. We would love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-pink-500 w-6 h-6" />
                <span className="text-slate-700">hello@coffeehaven.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-pink-500 w-6 h-6" />
                <span className="text-slate-700">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-pink-500 w-6 h-6" />
                <span className="text-slate-700">123 Coffee Street, Brewville, CA 90210</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border border-slate-200 text-blue-700  rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder:text-gray-700"
                
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder:text-gray-700"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder:text-gray-700"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

              {response.message && (
                <div
                  className={`mt-2 text-center ${
                    response.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {response.message}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Contact;