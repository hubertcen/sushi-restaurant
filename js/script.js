// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingSushis = [
  "Tuna Delight",
  "Teriyaki Salmon",
  "Ebi Supreme",
  "Dragon Maki",
  "Crab Roll",
  "Avocado Roll",
];

const trendingDrinks = [
  "Hojicha",
  "Ocha",
  "Genmaicha",
  "Shochu",
  "Umeshu",
  "Kirin",
];

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Tamago Bliss",
    rating: "4.9",
    price: "$15.00",
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Salmon Heaven",
    rating: "5.0",
    price: "$13.00",
    active: true,
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Samuerai Udon",
    rating: "4.8",
    price: "$19.00",
  },
];
