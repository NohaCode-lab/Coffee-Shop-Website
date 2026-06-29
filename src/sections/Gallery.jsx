import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";


const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-center text-blue-800 mb-4"
        >
          Our Gallery
        </motion.h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          A glimpse into our cozy atmosphere and delicious creations.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src={src}
                  alt="Coffee shop gallery image"
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <p className="text-sm font-semibold">Coffee Moment</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Gallery;