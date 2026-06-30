import MenuItem from "../components/MenuItem";
import { motion } from "framer-motion";

// menu
// Coffee
import espresso from "../assets/menu/coffee/espresso.jpg";
import latte from "../assets/menu/coffee/latte.jpg";
import cappuccino from "../assets/menu/coffee/cappuccino.jpg";
import americano from "../assets/menu/coffee/americano.jpg";

// Breakfast
import avocado from "../assets/menu/breakfast/avocado.jpg";
import breakfastburrito from "../assets/menu/breakfast/breakfastburrito.jpg";
import pancakes from "../assets/menu/breakfast/pancakes.jpg";

// Lunch
import chicken from "../assets/menu/lunch/chicken.jpg";
import cheese from "../assets/menu/lunch/cheese.jpg";
import quinoa from "../assets/menu/lunch/quinoa.jpg";

// Desserts
import cheesecake from "../assets/desserts/cheesecake.jpg";
import chocolatecake from "../assets/desserts/chocolatecake.jpg";
import tiramisu from "../assets/desserts/tiramisu.jpg";

const Menu = () => {
  const coffeeItems = [
    {
      image: espresso,
      title: "Espresso",
      description: "Strong and bold espresso shot.",
      price: "$3.50",
    },
    {
      image: latte,
      title: "Latte",
      description: "Smooth and creamy latte blend.",
      price: "$4.00",
    },
    {
      image: cappuccino,
      title: "Cappuccino",
      description:
        "A rich, bold Cappuccino topped with silky steamed milk and a light layer of foam.",
      price: "$4.50",
    },
    {
      image: americano,
      title: "Americano",
      description:
        "Fresh espresso diluted with hot water for a smooth, bold, and less intense brew.",
      price: "$3.00",
    },
  ];

  const breakfastItems = [
    {
      image: avocado,
      title: "Avocado Toast",
      description:
        "Toasted artisan bread topped with smashed avocado, sea salt, chili flakes, and a drizzle of olive oil.",
      price: "$6.50",
    },
    {
      image: breakfastburrito,
      title: "Breakfast Burrito",
      description: "Eggs, bacon, and cheese wrapped in a warm tortilla.",
      price: "$7.95",
    },
    {
      image: pancakes,
      title: "Pancakes",
      description: "Three golden stacks with butter and syrup.",
      price: "$7.25",
    },
  ];

  const lunchItems = [
    {
      image: chicken,
      title: "Chicken Salad",
      description: "Tender chicken with crisp lettuce and mayo.",
      price: "$8.75",
    },
    {
      image: cheese,
      title: "Gourmet Grilled Cheese",
      description: "Sourdough with aged cheddar and gruyère.",
      price: "$4.50",
    },
    {
      image: quinoa,
      title: "Quinoa Salad",
      description: "Simple quinoa with olive oil and salt.",
      price: "$8.00",
    },
  ];

  const dessertItems = [
    {
      image: cheesecake,
      title: "Classic Cheesecake",
      description: "Rich and velvety with berry compote.",
      price: "$4.95",
    },
    {
      image: chocolatecake,
      title: "Chocolate Fudge Cake",
      description: "Layered with chocolate buttercream.",
      price: "$4.25",
    },
    {
      image: tiramisu,
      title: "Tiramisu",
      description: "Italian dessert with coffee and cocoa.",
      price: "$5.25",
    },
  ];

  const menuSections = [
    { title: "Coffee", items: coffeeItems, id: "coffee" },
    { title: "Breakfast", items: breakfastItems, id: "breakfast" },
    { title: "Lunch", items: lunchItems, id: "lunch" },
    { title: "Desserts", items: dessertItems, id: "desserts" },
  ];

  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-slate-50 to-blue-50 py-16 clip-menu"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-800 mb-6"
        >
          Our Menu
        </motion.h2>

        {/* Quick Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 bg-white shadow rounded-full text-sm hover:bg-pink-100 transition"
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, idx) => (
          <div key={section.id} id={section.id} className="mb-12">
            <h3 className="text-2xl font-semibold text-coffee-700 mb-6">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <MenuItem {...item} />
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            {idx !== menuSections.length - 1 && (
              <hr className="my-12 border-blue-200/50" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
