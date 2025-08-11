import hamburgerSvg from "../assets/hamburger.svg";
import chickenNuggetsSvg from "../assets/chicken.svg";
import sandwichSvg from "../assets/submarine.svg";
import pizzaSvg from "../assets/pizza.svg";
export const foods = [
  {
    id: crypto.randomUUID(),
    name: "Hamburger",
    price: "300",
    image: hamburgerSvg,
  },
  {
    id: crypto.randomUUID(),
    name: "Chicken Nuggets",
    price: "350",
    image: chickenNuggetsSvg,
  },
  {
    id: crypto.randomUUID(),
    name: "Submarine Sandwich",
    price: "250",
    image: sandwichSvg,
  },
  {
    id: crypto.randomUUID(),
    name: "Pizza slices",
    price: "150",
    image: pizzaSvg,
  },
  {
    id: crypto.randomUUID(),
    name: "Pizza slices",
    price: "150",
    image: pizzaSvg,
  },
];
