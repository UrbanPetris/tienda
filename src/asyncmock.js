const products = [
  {
    id: 1,
    name: "Paseo en tren",
    price: "$200",
    category: "Excursión",
    description:
      "Un hermoso paseo en tren saliendo de las cercanías de Ushuaia y adentrándose al Parque Nacional Tierra del Fuego",
    img: "./img/tren.jpg",
  },
  {
    id: 2,
    name: "Navegación al Lago",
    price: "$500",
    category: "Navegación",
    description:
      "Navegación tanto por la mañana como por la tarde para disfrutar del lago cristalino más cautivante del sur",
    img: "./img/navegacion.jpg",
  },
  {
    id: 3,
    name: "Visita a Parque Nacional",
    price: "$100",
    category: "Trekking",
    description:
      "6 hs de caminata conociendo los puntos más sorprendentes del Parque Nacional Tierra del Fuego",
    img: "./img/parquenacional.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 2000);
  });
};
