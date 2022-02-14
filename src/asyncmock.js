const products = [
  {
    id: 1,
    name: "Paseo en tren",
    price: "$200",
    category: "excursion",
    img: "./img/tren.jpg",
  },
  {
    id: 2,
    name: "Navegación al Lago",
    price: "$500",
    category: "navegación",
    img: "./img/navegacion.jpg",
  },
  {
    id: 3,
    name: "Visita a Parque Nacional",
    price: "$100",
    category: "trekking",
    img: "./img/parquenacional.jpg",
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts };
