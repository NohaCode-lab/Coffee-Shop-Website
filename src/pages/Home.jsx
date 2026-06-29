import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";
import Gallery from "../sections/Gallery";
import Celebrate from "../sections/Celebrate";
import Reservation from "../sections/Reservation";
import Contact from "../sections/Contact";

const Home = () => {
  const location = useLocation();

  // Scroll عند استخدام hash
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Menu />
      <Gallery />
      <Celebrate />
      <Reservation />
      <Contact />
    </>
  );
};

export default Home;