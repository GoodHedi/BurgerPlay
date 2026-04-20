export const ORDER_URL = 'https://glovoapp.com/fr/ma/tanger/stores/burger-play-tng';

// Helper: build /images/produits path (served from /public)
const img = (f) => `/images/produits/${f}`;

export const CATEGORIES = [
  {
    id: 'promo', nom: 'Promotions', level: 'BONUS',
    produits: [
      { nom: 'Burger mozza chicken + Frite', desc: 'Pain brioché maison, tenders crispy, galette mozzarella, 2 onion rings, cheddar, sauce au choix, salade, tomate, oignons + frites.', img: img('produit_1_c6eda482-cb31-426b-86b4-8c37b8094e79.jpg'), tag: '−30%' },
      { nom: 'Burger mozza kefta + Frite', desc: 'Pain brioché maison, steak kefta 120g, galette mozzarella, 2 onion rings, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_2_0e44c13a-0ea9-4e04-af0e-04112078198e.jpg'), tag: '−30%' },
      { nom: 'Monster Mozza', desc: 'Tenders crispy, steak kefta 120g, galette mozzarella, 2 onion rings, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_3_2aa6f99d-35b9-4530-a072-cff54ea45cfd.jpg'), tag: 'Boss' },
    ],
  },
  {
    id: 'top', nom: 'Top des ventes', level: 'POPULAIRE',
    produits: [
      { nom: 'Burger kefta 1 + frite', desc: 'Pain brioché maison, steak kefta 120g, double cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_4_ec9b6e7c-f8ff-44c0-8ae4-4aaaf9096230.jpg') },
      { nom: 'Burger œuf bacon + frite', desc: 'Steak kefta 120g, bacon, omelette, oignons caramélisés, cheddar, sauce, salade, tomate + frites.', img: img('produit_5_13a8d0c2-32de-4aaa-8903-d7d5ab73bae2.jpg') },
      { nom: 'Burger raclette kefta + Frite', desc: 'Steak kefta 120g, bacon, fromage raclette, oignons caramélisés, sauce, salade, tomate + frites.', img: img('produit_6_98fe0880-f3ec-422f-bc20-a4bf4a193ced.jpg') },
    ],
  },
  {
    id: 'classic', nom: 'Classic Level', level: 'LV.1 · FACILE',
    produits: [
      { nom: 'Burger kefta 1 + frite', desc: 'Steak kefta 120g, double cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_7_4b6d8a60-a42b-4716-83a5-53532749d4dd.jpg') },
      { nom: 'Burger fish + Frite', desc: 'Poisson pané, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_8_fabf1c3e-8519-4569-b7cc-aba6c201dfbf.jpg') },
      { nom: 'Burger poulet + frite', desc: 'Poulet, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_9_a58d01d0-0b32-449b-841f-466fb73b02dc.jpg') },
      { nom: 'Burger tandoori + frite', desc: 'Poulet mariné aux épices tandoori, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_10_8594806e-8b22-4f28-9f5f-4a80c5a080d5.jpg') },
      { nom: 'Burger curry + Frite', desc: 'Poulet mariné aux épices curry, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_11_a300f308-505d-4657-b81f-3451afc1970f.jpg') },
      { nom: 'Burger tenders + frite', desc: 'Tenders crispy frais, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_12_bd25fd9d-87b7-4670-9d67-c78a2dec7594.jpg') },
    ],
  },
  {
    id: 'kefta', nom: 'Kefta Level', level: 'LV.2 · MOYEN',
    produits: [
      { nom: 'Burger raclette kefta + Frite', desc: 'Steak kefta 120g, bacon, raclette, oignons caramélisés, sauce, salade, tomate + frites.', img: img('produit_13_34789247-661d-4604-9283-802ad4c5c557.jpg') },
      { nom: 'Burger œuf bacon + frite', desc: 'Steak kefta 120g, bacon, omelette, oignons caramélisés, cheddar, sauce, salade, tomate + frites.', img: img('produit_14_e1455691-76d8-4a19-9773-cecd999644e4.jpg') },
      { nom: 'Burger chèvre miel + frite', desc: 'Steak kefta 120g, chèvre, miel, sauce, salade, tomate, oignons + frites.', img: img('produit_15_07d69dda-689d-4f56-9ee2-b05aa693f77d.jpg') },
      { nom: 'Burger champignon + Frite', desc: 'Steak kefta 120g, sauce champignons, oignons caramélisés, cheddar, salade, tomate + frites.', img: img('produit_16_896ec964-184b-433f-b39b-8e24f26b16c7.jpg') },
      { nom: 'Burger fromage bleu + frite', desc: 'Steak kefta 120g, sauce roquefort, cheddar, salade, tomate, oignons + frites.', img: img('produit_17_e78066f6-5f65-496a-82e1-5fb242cb67d6.jpg') },
    ],
  },
  {
    id: 'chicken', nom: 'Chicken Level', level: 'LV.3 · RELEVÉ',
    produits: [
      { nom: 'Burger raclette chicken + Frites', desc: 'Tenders crispy, bacon, raclette, oignons caramélisés, sauce, salade, tomate + frites.', img: img('produit_18_8d61bc1b-f49b-4bd6-b792-be74c6f8e85d.jpg') },
      { nom: 'Burger tenders batata + Frite', desc: 'Tenders crispy, galette de pomme de terre, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_19_be577f07-2fd6-45a5-ad79-405a0870c72a.jpg') },
      { nom: 'Burger tandoori & curry + Frites', desc: 'Escalope curry + tandoori, poivrons grillés, cheddar, salade, tomate, oignons + frites.', img: img('produit_20_d7aa0315-6330-4ae7-9d0f-471ee3e84468.jpg') },
      { nom: 'Burger poulet coréen + Frites', desc: 'Poulet frit coréen, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_21_6c6a27cf-4196-4e1d-b47b-a24fe20e0308.jpg') },
      { nom: 'Burger poulet crousti + Frite', desc: 'Poulet pané tempura, cheddar, sauces crousti secrètes, salade, tomate, oignons + frites.', img: img('produit_22_bfdcfefa-e14a-450d-8786-d5479b793b9d.jpg') },
    ],
  },
  {
    id: 'boss', nom: 'Boss Level', level: 'LV.4 · DIFFICILE',
    produits: [
      { nom: 'Burger Super Kefta 4', desc: '480g de viande. 4 steaks kefta 120g, 8 cheddars, sauce, salade, tomate, oignons + frites.', img: img('produit_23_0a05ac6a-d491-4a08-bbbf-5488d1482338.jpg'), tag: 'Final Boss' },
      { nom: 'Burger Super Kefta 3', desc: '360g de viande. 3 steaks kefta 120g, 6 cheddars, sauce, salade, tomate, oignons + frites.', img: img('produit_24_e7d9fb5f-9a73-4089-85ab-3e2c208f4c63.jpg'), tag: 'Boss' },
      { nom: 'Monster Mozza', desc: 'Tenders crispy, steak kefta 120g, galette mozzarella, 2 onion rings, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_25_adc16895-f365-44b5-a172-782ea089c9b0.jpg') },
      { nom: 'Burger mozza kefta', desc: 'Steak kefta 120g, galette mozzarella, 2 onion rings, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_26_fa29176b-8f2c-4ae5-916e-58e14efcd87f.jpg') },
      { nom: 'Burger mozza chicken', desc: 'Tenders crispy, galette mozzarella, 2 onion rings, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_27_2ec5eea8-7ba8-4752-b32a-075bbee3b6f1.jpg') },
      { nom: 'Chicken Beef + Frite', desc: 'Steak kefta 120g, tenders crispy, cheddar, sauce, salade, tomate, oignons + frites.', img: img('produit_28_46f5ba61-9da3-4e20-a838-77aa8ca9d7e5.jpg') },
    ],
  },
  {
    id: 'tenders', nom: 'Chicken Fried Home', level: 'ACCOMPAGNEMENT',
    produits: [
      { nom: 'Tenders x10', desc: '10 filets de tenders panure crispy fait maison + 3 sauces.', img: img('produit_29_569d2c0d-9af4-4731-833e-0bacc2f38832.jpg') },
      { nom: 'Tenders x5', desc: '5 filets de tenders panure crispy + 2 sauces.', img: img('produit_30_55380a0a-7190-42b9-bb3e-dfd1b2153331.jpg') },
      { nom: 'Tenders x3', desc: '3 filets de tenders panure crispy + 1 sauce.', emoji: '🍗' },
      { nom: 'Tenders x2', desc: '2 filets de tenders panure crispy fait maison.', emoji: '🍗' },
      { nom: 'Tenders x1', desc: '1 filet de tenders panure crispy fait maison.', emoji: '🍗' },
    ],
  },
  {
    id: 'starters', nom: 'Starters', level: 'ENTRÉE',
    produits: [
      { nom: 'Trili Cheese x5', desc: '5 trili cheese cheddar jalapeños fondants.', emoji: '🧀' },
      { nom: 'Mozza cube x5', desc: '5 mozza cubes fondants.', emoji: '🧀' },
      { nom: 'Trili cheese x3', desc: '3 trili cheese cheddar jalapeños fondants.', emoji: '🧀' },
      { nom: 'Mozza cube x3', desc: '3 mozza cubes fondants.', emoji: '🧀' },
    ],
  },
  {
    id: 'fries', nom: 'Fries', level: 'SIDES',
    produits: [
      { nom: 'Frites Cheddar + Bacon', desc: 'Généreuse portion, sauce cheddar + bacon.', emoji: '🍟' },
      { nom: 'Frites Cheddar + Pepperoni', desc: 'Généreuse portion, sauce cheddar + pepperoni.', emoji: '🍟' },
      { nom: 'Frites Fromagère + Bacon', desc: 'Généreuse portion, sauce fromagère maison + bacon.', emoji: '🍟' },
      { nom: 'Frites Fromagère + Pepperoni', desc: 'Généreuse portion, sauce fromagère + pepperoni.', emoji: '🍟' },
      { nom: 'Frites Cheddar', desc: 'Généreuse portion, sauce cheddar maison.', emoji: '🍟' },
      { nom: 'Frites Fromagère', desc: 'Généreuse portion, sauce fromagère maison.', emoji: '🍟' },
      { nom: 'Frites Nature', desc: 'Généreuse portion de frites fraîches.', emoji: '🍟' },
    ],
  },
  {
    id: 'dessert', nom: 'Dessert', level: 'FIN DE PARTIE',
    produits: [
      { nom: 'Tiramisu Oréo', desc: 'Tiramisu goût Oréo, fait maison. Peut arriver légèrement givré.', emoji: '🍰' },
      { nom: 'Tiramisu Spéculos', desc: 'Tiramisu goût spéculos, fait maison. Peut arriver légèrement givré.', emoji: '🍰' },
    ],
  },
  {
    id: 'drinks', nom: 'Boissons', level: 'POTION',
    produits: [
      { nom: 'Fanta Orange 25cl', desc: 'Boisson gazeuse fraîche.', emoji: '🥤' },
      { nom: 'Fanta Citron 25cl', desc: 'Boisson gazeuse fraîche.', emoji: '🥤' },
      { nom: 'Hawai Tropical 25cl', desc: 'Boisson gazeuse tropicale.', emoji: '🥤' },
      { nom: 'Schweppes Mojito 25cl', desc: 'Boisson gazeuse mojito.', emoji: '🥤' },
      { nom: 'Pepsi 25cl', desc: 'Boisson gazeuse.', emoji: '🥤' },
      { nom: 'Coca Cola 25cl', desc: 'Boisson gazeuse.', emoji: '🥤' },
      { nom: '7 Up 25cl', desc: 'Boisson gazeuse.', emoji: '🥤' },
      { nom: "Pom's 25cl", desc: 'Boisson gazeuse pomme.', emoji: '🥤' },
      { nom: 'Mirinda Pomme 25cl', desc: 'Boisson gazeuse pomme.', emoji: '🥤' },
      { nom: 'Mirinda Citron 25cl', desc: 'Boisson gazeuse citron.', emoji: '🥤' },
      { nom: 'Mirinda Orange 25cl', desc: 'Boisson gazeuse orange.', emoji: '🥤' },
    ],
  },
];

export const TOTAL_PRODUCTS = CATEGORIES.reduce((s, c) => s + c.produits.length, 0);
