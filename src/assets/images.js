
// logo
import logo2 from "./logo2.png";
// menu
// coffee
import espresso from "./menu/coffee/espresso.jpg";
import latte from "./menu/coffee/latte.jpg";
import cappuccino from "./menu/coffee/cappuccino.jpg";
import americano from "./menu/coffee/americano.jpg";

// breakfast
import avocado  from "./menu/breakfast/avocado.jpg";
import breakfastburrito from "./menu/breakfast/breakfastburrito.jpg";
import pancakes from "./menu/breakfast/pancakes.jpg";

// lunch
import chicken from "./menu/lunch/chicken.jpg";
import cheese from "./menu/lunch/cheese.jpg";
import quinoa from "./menu/lunch/quinoa.jpg";

// desserts
import cheesecake from "./desserts/cheesecake.jpg";
import chocolatecake from "./desserts/chocolatecake.jpg";
import tiramisu from "./desserts/tiramisu.jpg";

// gallery
import gallery1 from "./gallery/gallery1.jpg";
import gallery2 from "./gallery/gallery2.jpg";
import gallery3 from "./gallery/gallery3.jpg";
import gallery4 from "./gallery/gallery4.jpg";
import gallery5 from "./gallery/gallery5.jpg";

// events 
import birthday from "./events/birthday.jpg";
import family from "./events/family.jpg";
import moments from "./events/moments.jpg";


const images = {
  logo2,
  menu: {
    coffee: [espresso, latte, cappuccino, americano ],
    breakfast: [avocado,breakfastburrito, pancakes],
    lunch: [chicken, cheese, quinoa],
},

desserts: [cheesecake, chocolatecake, tiramisu],

gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],

events: [birthday, family, moments],

};




export default images;