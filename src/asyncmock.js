const products = [
  {
    id: 1,
    name: "Paseo en Tren del Fin del Mundo",
    price: "$200",
    category: "excursion",
    categoryDescription: "Excursión",
    description:
      "Un hermoso paseo en tren saliendo de las cercanías de Ushuaia y adentrándose al Parque Nacional Tierra del Fuego",
    img: "../img/tren.jpg",
  },
  {
    id: 2,
    name: "Navegación al Lago",
    price: "$500",
    category: "navegacion",
    categoryDescription: "Navegación",
    description:
      "Navegación tanto por la mañana como por la tarde para disfrutar del lago cristalino más cautivante del sur",
    img: "../img/navegacion.jpg",
  },
  {
    id: 3,
    name: "Visita a Parque Nacional Tierra del Fuego",
    price: "$100",
    category: "trekking",
    categoryDescription: "Trekking",
    description:
      "6 hs de caminata conociendo los puntos más sorprendentes del Parque Nacional Tierra del Fuego",
    img: "../img/parquenacional.jpg",
  },
  {
    id: 4,
    name: "Viaje en La Trochita",
    price: "$100",
    category: "excursion",
    categoryDescription: "Excursión",
    description:
      "La Trochita es una reliquia viviente de una historia llena de aventuras, anécdotas y todo tipo de acontecimientos",
    img: "../img/trentrochita.jpg",
  },
  {
    id: 5,
    name: "Navegación al Beagle",
    price: "$500",
    category: "navegacion",
    categoryDescription: "Navegación",
    description:
      "Nos embarcamos para conocer de cerca el Faro Les Éclaireurs y avistar la maravillosa fauna del Beagle",
    img: "../img/navegacionbeagle.jpg",
  },
  {
    id: 6,
    name: "Trekking Glaciar Vinciguerra",
    price: "$400",
    category: "trekking",
    categoryDescription: "Trekking",
    description:
      "Una caminata de 7 hs para conocer uno de los glaciares más majestuosos de la Patagonia",
    img: "../img/glaciarvinciguerra.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve) => {
    const prod = products.find((p) => p.id === parseInt(productId));
    setTimeout(() => {
      resolve(prod);
    }, 2000);
  });
};

export const getByCategory = (categoryId) => {
  return new Promise((resolve) => {
    const prodsFiltered = products.filter((p) => p.category === categoryId);
    setTimeout(() => {
      resolve(prodsFiltered);
    }, 2000);
  });
};
