import { motion } from "framer-motion";
import EventCard from "../components/EventCard";

import birthday from "../assets/events/birthday.jpg";
import family from "../assets/events/family.jpg";
import moments from "../assets/events/moments.jpg";


const Celebrate = () => {
  const events = [
    {
      image: birthday,
      title: "Birthday Parties",
      description: "Customized cakes, special lighting, and a joyful atmosphere to mark your big day."
    },
    {
      image: family,
      title: "Family Gatherings",
      description: "Reunite with loved ones and share a delicious meal in our warm, welcoming café."
    },
    {
      image: moments,
      title: "Great Moments",
      description: "Plan small weddings, anniversaries, or any cherished event with our full support."
    }
  ];

  return (
    <section id="celebrate" className="py-20 px-6 bg-[#fdf1e6] relative overflow-hidden">
      {/* تأثير الـ Clip Path من الـ CSS الخاص بك */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#3c1f0f] mb-4"
          >
            Celebrate With Us
          </motion.h2>
          <p className="text-[#6d4c41] max-w-2xl mx-auto">
            Host your birthdays, family gatherings, and special moments in our cozy space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebrate;