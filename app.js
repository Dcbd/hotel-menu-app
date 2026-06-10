const MENU_DATA = [
  // --- AFTERNOON TEA - LANCHES & SALGADOS ---

  {
    id: "food-2",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 16.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Café Boa Tarde Individual",
      en: "Individual Good Afternoon Coffee Combo"
    },
    description: {
      pt: "Bule de café ou chá e de leite, pão francês, manteiga e geléia.",
      en: "Pot of coffee or tea and milk, french bread, butter, and jam."
    }
  },
  {
    id: "food-8-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 9.00,
    tags: [],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Misto Quente",
      en: "Toasted Ham & Cheese"
    },
    description: {
      pt: "Clássico sanduíche quente de pão francês ou de forma com presunto cozido e queijo mussarela derretido.",
      en: "Classic hot sandwich made with french or sliced bread, cooked ham, and melted mozzarella cheese."
    }
  },
  {
    id: "food-13-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 8.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Queijo Quente",
      en: "Grilled Cheese Sandwich"
    },
    description: {
      pt: "Pão francês ou de forma dourado na chapa com uma porção generosa de queijo mussarela derretido.",
      en: "French bread or sliced bread grilled on the griddle with a generous amount of melted mozzarella cheese."
    }
  },
  {
    id: "food-12-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 5.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Pão com Manteiga",
      en: "Bread with Butter"
    },
    description: {
      pt: "Pão francês fresquinho ou pão caseiro cortado ao meio e dourado na chapa com manteiga da fazenda.",
      en: "Fresh french bread or homemade bread sliced in half and grilled with farm butter."
    }
  },
  {
    id: "food-15-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Torradas de Pão Integral",
      en: "Whole Wheat Toast"
    },
    description: {
      pt: "Duas fatias de pão integral tostadas, acompanhadas de manteiga da fazenda e geleia de frutas.",
      en: "Two slices of toasted whole wheat bread, served with farm butter and fruit jam."
    }
  },
  {
    id: "food-9-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 16.00,
    tags: ["gluten-free"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Omelete Misto",
      en: "Ham & Cheese Omelet"
    },
    description: {
      pt: "Omelete preparado com quatro ovos frescos da fazenda, presunto picado e queijo mussarela derretido.",
      en: "Fluffy omelet made with four fresh farm eggs, diced ham, and melted mozzarella cheese."
    }
  },
  {
    id: "food-10-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 13.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Omelete Simples",
      en: "Plain Omelet"
    },
    description: {
      pt: "Omelete leve e fofinho preparado com quatro ovos frescos da fazenda na manteiga.",
      en: "Light and fluffy omelet prepared with four fresh farm eggs cooked in butter."
    }
  },
  {
    id: "food-11-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 8.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Ovos Mexidos",
      en: "Scrambled Eggs"
    },
    description: {
      pt: "Dois ovos mexidos na chapa com um toque de manteiga da fazenda.",
      en: "Two eggs scrambled on the griddle with a touch of farmhouse butter."
    }
  },
  {
    id: "food-16-tea",
    category: "afternoon-tea",
    subcategory: "lanches",
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Mingau",
      en: "Porridge"
    },
    description: {
      pt: "Prato fundo de mingau quentinho e cremoso de Aveia, Fubá ou Maisena com leite integral.",
      en: "Warm and creamy bowl of Oatmeal, Cornmeal, or Cornstarch porridge cooked with whole milk."
    }
  },

  // --- AFTERNOON TEA - DOCES & FRUTAS ---

  {
    id: "food-6-tea",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Bolo do Dia (Fatia)",
      en: "Cake of the Day (Slice)"
    },
    description: {
      pt: "Fatia de bolo caseiro artesanal preparado no dia. Consulte os sabores disponíveis.",
      en: "Slice of homemade artisanal cake baked fresh daily. Please ask our team for today's flavors."
    }
  },

  {
    id: "food-7-tea",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Fruta da Estação",
      en: "Seasonal Fruit"
    },
    description: {
      pt: "Uma fruta pequena inteira ou uma fatia de fruta fresca, como melão, mamão ou melancia.",
      en: "A small whole fruit or a slice of fresh seasonal fruit, such as melon, papaya, or watermelon."
    }
  },
  {
    id: "food-14",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 10.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Sequilhos / Biscoitos Caseiros",
      en: "Homemade Cookies / Cornstarch Biscuits"
    },
    description: {
      pt: "Porção de sequilhos ou biscoitos doces caseiros artesanais, crocantes e derretem na boca.",
      en: "Portion of traditional homemade sweet biscuits, light, crispy, and melting in your mouth."
    }
  },
  {
    id: "food-18-tea",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 8.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Doces Típicos da Época",
      en: "Typical Seasonal Sweets"
    },
    description: {
      pt: "Sobremesa individual de doces caseiros. Opções como canjica, arroz doce, compotas, pudim ou curau.",
      en: "Individual portion of traditional homemade seasonal desserts. Options like sweet hominy, rice pudding, flan, or sweet corn pudding."
    }
  },

  // --- AFTERNOON TEA - CAFÉS & BEBIDAS ---

  {
    id: "drink-1-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 9.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Bule de Café, Leite ou Chá",
      en: "Pot of Coffee, Milk, or Tea"
    },
    description: {
      pt: "Servido quente em bule individual. Serve até duas xícaras.",
      en: "Served warm in an individual pot. Yields up to two cups."
    }
  },
  {
    id: "drink-2-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Chocolate Quente Especial",
      en: "Special Hot Chocolate"
    },
    description: {
      pt: "Bebida cremosa feita com leite integral, chocolate, canela, leite condensado e maisena.",
      en: "Creamy hot drink made with whole milk, cocoa, cinnamon, condensed milk, and a touch of cornstarch."
    }
  },
  {
    id: "drink-3-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Chocolate Simples",
      en: "Simple Hot Chocolate"
    },
    description: {
      pt: "Bebida quente preparada com leite integral, chocolate em pó e açúcar ou adoçante.",
      en: "Hot drink prepared with whole milk, cocoa powder, and sugar or sweetener."
    }
  },
  {
    id: "drink-4-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies"
    },
    price: 10.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Suco de Frutas Natural",
      en: "Fresh Fruit Juice"
    },
    description: {
      pt: "Copo de suco de frutas natural preparado na hora. Consulte as opções de frutas disponíveis.",
      en: "Glass of freshly squeezed fruit juice. Please ask your waiter for available fruit options."
    }
  },
  {
    id: "drink-5-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies"
    },
    price: 12.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Vitamina de Frutas",
      en: "Fruit Smoothie"
    },
    description: {
      pt: "Copo de leite cremoso batido com mamão, maçã e banana. Rápido e nutritivo.",
      en: "Nutritious glass of creamy milk blended with fresh papaya, apple, and banana."
    }
  },
  {
    id: "drink-6-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Água Mineral com Gás 500ml",
      en: "Sparkling Mineral Water 500ml"
    },
    description: {
      pt: "Água mineral com gás engarrafada fresca de 500ml.",
      en: "Fresh bottled sparkling mineral water 500ml."
    }
  },
  {
    id: "drink-7-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Água Mineral sem Gás 500ml",
      en: "Still Mineral Water 500ml"
    },
    description: {
      pt: "Água mineral natural sem gás engarrafada fresca de 500ml.",
      en: "Fresh bottled natural still mineral water 500ml."
    }
  },


  // ==========================================
  // DINNER - PRATOS PRINCIPAIS
  // ==========================================

  {
    id: "food-buffet",
    category: "dinner",
    subcategory: "principais",
    price: 60.00,
    tags: [],
    image: "images/buffet.jpg",
    name: {
      pt: "Buffet",
      en: "Buffet"
    },
    description: {
      pt: "Em dias específicos, o restaurante serve exclusivamente nosso buffet especial por R$ 60,00. O cardápio inclui espaguete à bolonhesa, sopas caseiras, estrogonofe e sobremesas. Nesses dias, o menu à la carte não estará disponível.",
      en: "On select days, the restaurant exclusively serves our special buffet for R$ 60.00. The menu includes spaghetti bolognese, homemade soups, stroganoff, and assorted desserts. On these days, the a la carte menu is not available."
    }
  },
  {
    id: "food-3",
    category: "dinner",
    subcategory: "principais",
    price: 30.00,
    tags: [],
    image: "images/spaghetti_bolognese.jpg",
    name: {
      pt: "Espaguete à Bolonhesa",
      en: "Spaghetti Bolognese"
    },
    description: {
      pt: "Espaguete italiano clássico servido com molho bolonhesa caseiro de carne bovina e ervas aromáticas.",
      en: "Classic Italian spaghetti served with homemade beef bolognese sauce and aromatic herbs."
    }
  },
  {
    id: "food-4",
    category: "dinner",
    subcategory: "principais",
    price: 25.00,
    tags: ["vegetarian", "lactose-free"],
    image: "images/spaghetti_aglio_olio.jpg",
    name: {
      pt: "Espaguete ao Alho e Óleo",
      en: "Spaghetti Aglio e Olio"
    },
    description: {
      pt: "Espaguete italiano clássico salteado em azeite de oliva extra virgem, alho laminado dourado e salsinha fresca.",
      en: "Classic Italian spaghetti sautéed in extra virgin olive oil, golden sliced garlic, and fresh parsley."
    }
  },
  {
    id: "food-5",
    category: "dinner",
    subcategory: "principais",
    price: 35.00,
    tags: [],
    image: "images/chicken_stroganoff.jpg",
    name: {
      pt: "Estrogonofe de Frango",
      en: "Chicken Stroganoff"
    },
    description: {
      pt: "Tiras de peito de frango grelhadas em molho cremoso de strogonoff. Acompanha arroz branco e batata palha.",
      en: "Grilled chicken breast strips in a rich creamy stroganoff sauce. Served with white rice and crispy potato sticks."
    }
  },
  {
    id: "food-17",
    category: "dinner",
    subcategory: "principais",
    price: 25.00,
    tags: ["gluten-free", "lactose-free"],
    image: "images/chicken_soup.jpg",
    name: {
      pt: "Sopa Individual",
      en: "Individual Soup"
    },
    description: {
      pt: "Canja de galinha quentinha servida com pão fatiado, torrada e manteiga. Consulte outras opções de sopa no ramal 268.",
      en: "Warm chicken soup served with sliced bread, toast, and butter. Check other soup options by calling front desk extension 268."
    }
  },

  // ==========================================
  // DINNER - SOBREMESAS E DOCES
  // ==========================================

  {
    id: "food-6-dinner",
    category: "dinner",
    subcategory: "sobremesas",
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Bolo do Dia (Fatia)",
      en: "Cake of the Day (Slice)"
    },
    description: {
      pt: "Fatia de bolo caseiro artesanal preparado no dia. Consulte os sabores disponíveis.",
      en: "Slice of homemade artisanal cake baked fresh daily. Please ask our team for today's flavors."
    }
  },
  {
    id: "food-7-dinner",
    category: "dinner",
    subcategory: "sobremesas",
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Fruta da Estação",
      en: "Seasonal Fruit"
    },
    description: {
      pt: "Uma fruta pequena inteira ou uma fatia de fruta fresca, como melão, mamão ou melancia.",
      en: "A small whole fruit or a slice of fresh seasonal fruit, such as melon, papaya, or watermelon."
    }
  },
  {
    id: "food-18-dinner",
    category: "dinner",
    subcategory: "sobremesas",
    price: 8.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Doces Típicos da Época",
      en: "Typical Seasonal Sweets"
    },
    description: {
      pt: "Sobremesa individual de doces caseiros. Opções como canjica, arroz doce, compotas, pudim ou curau.",
      en: "Individual portion of traditional homemade seasonal desserts. Options like sweet hominy, rice pudding, flan, or sweet corn pudding."
    }
  },

  // ==========================================
  // DINNER - BEBIDAS NÃO ALCOÓLICAS
  // ==========================================
  {
    id: "drink-1-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 9.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Bule de Café, Leite ou Chá",
      en: "Pot of Coffee, Milk, or Tea"
    },
    description: {
      pt: "Servido quente em bule individual. Serve até duas xícaras.",
      en: "Served warm in an individual pot. Yields up to two cups."
    }
  },
  {
    id: "drink-2-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chocolate Quente Especial",
      en: "Special Hot Chocolate"
    },
    description: {
      pt: "Bebida cremosa feita com leite integral, chocolate, canela, leite condensado e maisena.",
      en: "Creamy hot drink made with whole milk, cocoa, cinnamon, condensed milk, and a touch of cornstarch."
    }
  },
  {
    id: "drink-3-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks"
    },
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chocolate Simples",
      en: "Simple Hot Chocolate"
    },
    description: {
      pt: "Bebida quente preparada com leite integral, chocolate em pó e açúcar ou adoçante.",
      en: "Hot drink prepared with whole milk, cocoa powder, and sugar or sweetener."
    }
  },
  {
    id: "drink-4-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies"
    },
    price: 10.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Suco de Frutas Natural",
      en: "Fresh Fruit Juice"
    },
    description: {
      pt: "Copo de suco de frutas natural preparado na hora. Consulte as opções de frutas disponíveis.",
      en: "Glass of freshly squeezed fruit juice. Please ask your waiter for available fruit options."
    }
  },
  {
    id: "drink-6-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Mineral com Gás 500ml",
      en: "Sparkling Mineral Water 500ml"
    },
    description: {
      pt: "Água mineral com gás engarrafada fresca de 500ml.",
      en: "Fresh bottled sparkling mineral water 500ml."
    }
  },
  {
    id: "drink-7-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Mineral sem Gás 500ml",
      en: "Still Mineral Water 500ml"
    },
    description: {
      pt: "Água mineral natural sem gás engarrafada fresca de 500ml.",
      en: "Fresh bottled natural still mineral water 500ml."
    }
  },
  {
    id: "drink-8-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Tônica",
      en: "Tonic Water"
    },
    description: {
      pt: "Lata de água tônica refrescante de 350ml.",
      en: "Refreshing canned tonic water 350ml."
    }
  },
  {
    id: "drink-9-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Coca-Cola",
      en: "Coca-Cola"
    },
    description: {
      pt: "Refrigerante Coca-Cola lata 350ml.",
      en: "Canned Coca-Cola soda 350ml."
    }
  },
  {
    id: "drink-10-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Coca-Cola Zero",
      en: "Coca-Cola Zero"
    },
    description: {
      pt: "Refrigerante Coca-Cola sem açúcar lata 350ml.",
      en: "Canned sugar-free Coca-Cola Zero soda 350ml."
    }
  },
  {
    id: "drink-11-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Guaraná Antarctica",
      en: "Guaraná Antarctica"
    },
    description: {
      pt: "Refrigerante Guaraná Antarctica lata 350ml.",
      en: "Canned Guaraná Antarctica soda 350ml."
    }
  },
  {
    id: "drink-12-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Guaraná Antarctica Zero",
      en: "Guaraná Antarctica Zero"
    },
    description: {
      pt: "Refrigerante Guaraná Antarctica sem açúcar lata 350ml.",
      en: "Canned sugar-free Guaraná Antarctica Zero soda 350ml."
    }
  },

  // ==========================================
  // DINNER - BEBIDAS ALCOÓLICAS
  // ==========================================
  // --- Cervejas ---
  {
    id: "alc-1",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Cervejas",
      en: "Beers"
    },
    price: 7.50,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Bohemia",
      en: "Bohemia Beer"
    },
    description: {
      pt: "Cerveja Pilsen tradicional brasileira de sabor leve e maltado.",
      en: "Traditional Brazilian Pilsner beer with a light, malty flavor."
    }
  },
  {
    id: "alc-2",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Cervejas",
      en: "Beers"
    },
    price: 6.50,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Skol",
      en: "Skol Beer"
    },
    description: {
      pt: "Cerveja Pilsen leve, refrescante e de alta aceitação, servida gelada.",
      en: "Very light, crisp, and refreshing Brazilian Pilsner beer, served ice cold."
    }
  },
  {
    id: "alc-3",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Cervejas",
      en: "Beers"
    },
    price: 9.00,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Heineken",
      en: "Heineken Beer"
    },
    description: {
      pt: "Cerveja Premium Lager holandesa de sabor característico e marcante.",
      en: "Dutch Premium Lager beer, featuring its signature crisp malt flavor."
    }
  },
  // --- Drinks ---
  {
    id: "alc-4",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Limão",
      en: "Lime Caipirinha"
    },
    description: {
      pt: "Clássico drink brasileiro feito com uma dose de cachaça de qualidade, dois limões frescos espremidos, açúcar e gelo.",
      en: "Classic Brazilian cocktail made with a shot of cachaça, two fresh squeezed limes, sugar, and crushed ice."
    }
  },
  {
    id: "alc-5",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Rum (Caipiríssima)",
      en: "Rum Caipirinha (Caipiríssima)"
    },
    description: {
      pt: "Variação saborosa da caipirinha preparada com rum importado, limão espremido, açúcar e gelo.",
      en: "Tasty caipirinha variation prepared with imported white rum, squeezed lime, sugar, and ice."
    }
  },
  {
    id: "alc-6",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Vodka (Caipiroska)",
      en: "Vodka Caipirinha (Caipiroska)"
    },
    description: {
      pt: "Versão moderna da caipirinha preparada com vodka nacional premium, limão fresco espremido, açúcar e bastante gelo.",
      en: "Modern caipirinha version made with premium vodka, fresh squeezed lime, sugar, and ice."
    }
  },
  {
    id: "alc-7",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails"
    },
    price: 14.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cuba Libre",
      en: "Cuba Libre"
    },
    description: {
      pt: "Mistura refrescante de rum, refrigerante sabor cola e suco de limão fresco com gelo.",
      en: "Refreshing blend of white rum, cola soda, and fresh lime juice served over ice."
    }
  },
  {
    id: "alc-8",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails"
    },
    price: 15.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Malibu",
      en: "Malibu Shot"
    },
    description: {
      pt: "Dose de licor Malibu de coco com rum caribenho. Doce e tropical.",
      en: "Shot of Malibu coconut liqueur blended with Caribbean rum. Sweet and tropical."
    }
  },
  // --- Vinhos e Espumantes ---
  {
    id: "alc-9",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 120.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Miolo Reserva (Garrafa)",
      en: "Miolo Reserva (Bottle)"
    },
    description: {
      pt: "Vinho fino brasileiro da vinícola Miolo. Opções: Cabernet Sauvignon, Merlot ou Chardonnay.",
      en: "Fine Brazilian wine from the Miolo winery. Available: Cabernet Sauvignon, Merlot, or Chardonnay."
    }
  },
  {
    id: "alc-10",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 70.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Miolo Seleção (Garrafa)",
      en: "Miolo Seleção (Bottle)"
    },
    description: {
      pt: "Vinho de mesa equilibrado da vinícola Miolo, ideal para acompanhar refeições.",
      en: "Balanced table wine from the Miolo winery, perfect for pairing with your dinner."
    }
  },
  {
    id: "alc-11",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 40.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Piagentini (Garrafa)",
      en: "Piagentini Wine (Bottle)"
    },
    description: {
      pt: "Vinho nacional de sabor leve e frutado.",
      en: "Traditional Brazilian wine with a light, fruity profile."
    }
  },
  {
    id: "alc-12",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 40.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Saint Germain (Garrafa)",
      en: "Saint Germain (Bottle)"
    },
    description: {
      pt: "Vinho de mesa nacional. Disponível em: Cabernet Franc, Merlot suave ou Assemblage suave.",
      en: "Brazilian table wine. Available: Cabernet Franc, Sweet Merlot, or Sweet Assemblage."
    }
  },
  {
    id: "alc-13",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 13.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Taça de Vinho da Casa",
      en: "House Wine Glass"
    },
    description: {
      pt: "Uma dose de vinho selecionado da casa servido na taça.",
      en: "A glass of our specially selected house wine."
    }
  },
  {
    id: "alc-15",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 50.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Concha y Toro Reservado (Garrafa)",
      en: "Concha y Toro Reservado (Bottle)"
    },
    description: {
      pt: "Tradicional vinho tinto chileno, de paladar equilibrado e frutado.",
      en: "Traditional Chilean red wine, offering a balanced and fruity profile."
    }
  },
  {
    id: "alc-16",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 56.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Familiar (Garrafa)",
      en: "Familiar Wine (Bottle)"
    },
    description: {
      pt: "Vinho tinto seco nacional, clássico para refeições em família.",
      en: "Traditional Brazilian dry red wine, a classic choice for family dining."
    }
  },
  {
    id: "alc-17",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 65.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Santa Helena (Garrafa)",
      en: "Santa Helena Wine (Bottle)"
    },
    description: {
      pt: "Vinho tinto chileno de prestígio. Disponível em Cabernet Sauvignon ou Merlot.",
      en: "Prestigious Chilean red wine. Available: Cabernet Sauvignon or Merlot."
    }
  },
  {
    id: "alc-18",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 22.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho do Porto (Dose)",
      en: "Port Wine (Shot)"
    },
    description: {
      pt: "Uma dose do tradicional e encorpado vinho fortificado português.",
      en: "A shot of the traditional, sweet, and full-bodied Portuguese fortified wine."
    }
  },
  {
    id: "alc-19",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 260.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chandon Brut (Garrafa)",
      en: "Chandon Brut (Bottle)"
    },
    description: {
      pt: "Espumante nacional premium de aroma fresco e frutado.",
      en: "Premium Brazilian sparkling wine with a crisp, fruity aroma."
    }
  },
  {
    id: "alc-20",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes"
    },
    price: 260.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chandon Demi-Sec (Garrafa)",
      en: "Chandon Demi-Sec (Bottle)"
    },
    description: {
      pt: "Espumante nacional premium, suavemente doce e equilibrado.",
      en: "Premium Brazilian sparkling wine, smoothly sweet and balanced."
    }
  },
  // --- Doses e Destilados ---
  {
    id: "alc-21",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 18.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Ballantine's 8 Anos (Dose)",
      en: "Ballantine's 8 Years Whisky (Shot)"
    },
    description: {
      pt: "Uma dose (50ml) do suave Whisky escocês blended de 8 anos.",
      en: "One shot (50ml) of the smooth 8-year-old blended Scotch whisky."
    }
  },
  {
    id: "alc-22",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 26.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Chivas Regal 12 Anos (Dose)",
      en: "Chivas Regal 12 Years Whisky (Shot)"
    },
    description: {
      pt: "Uma dose (50ml) do refinado Whisky escocês premium envelhecido por 12 anos.",
      en: "One shot (50ml) of the refined premium Scotch whisky aged for 12 years."
    }
  },
  {
    id: "alc-23",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Grant's 8 Anos (Dose)",
      en: "Grant's 8 Years Whisky (Shot)"
    },
    description: {
      pt: "Uma dose (50ml) do aromático Whisky escocês blended envelhecido por 8 anos.",
      en: "One shot (50ml) of the aromatic blended Scotch whisky aged for 8 years."
    }
  },
  {
    id: "alc-24",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 11.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Passport Scotch (Dose)",
      en: "Passport Scotch Whisky (Shot)"
    },
    description: {
      pt: "Uma dose (50ml) do clássico Whisky blended escocês.",
      en: "One shot (50ml) of the classic blended Scotch whisky."
    }
  },
  {
    id: "alc-25",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Johnnie Walker Red Label (Dose)",
      en: "Johnnie Walker Red Label Whisky (Shot)"
    },
    description: {
      pt: "Uma dose (50ml) do Whisky escocês Johnnie Walker Red Label de 8 anos.",
      en: "One shot (50ml) of the famous Johnnie Walker Red Label blended Scotch whisky."
    }
  },
  {
    id: "alc-26",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Conhaque Domecq (Dose)",
      en: "Domecq Brandy (Shot)"
    },
    description: {
      pt: "Uma dose de conhaque nacional de sabor aveludado.",
      en: "A shot of the traditional Brazilian brandy with a smooth finish."
    }
  },
  {
    id: "alc-27",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Conhaque Dreher (Dose)",
      en: "Dreher Brandy (Shot)"
    },
    description: {
      pt: "Uma dose do popular e tradicional conhaque brasileiro.",
      en: "A shot of the classic and popular Brazilian brandy."
    }
  },
  {
    id: "alc-28",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cachaça (Dose)",
      en: "Cachaça (Shot)"
    },
    description: {
      pt: "Uma dose de cachaça mineira tradicional de excelente qualidade.",
      en: "A shot of premium traditional Minas sugar cane spirit."
    }
  },
  {
    id: "alc-29",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Gin (Dose)",
      en: "Gin (Shot)"
    },
    description: {
      pt: "Uma dose de gin aromático nacional de 50ml.",
      en: "A shot of aromatic dry gin 50ml."
    }
  },
  {
    id: "alc-30",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Rum (Dose)",
      en: "Rum (Shot)"
    },
    description: {
      pt: "Uma dose de rum caribenho de alta qualidade de 50ml.",
      en: "A shot of high-quality Caribbean rum 50ml."
    }
  },
  {
    id: "alc-31",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vodka (Dose)",
      en: "Vodka (Shot)"
    },
    description: {
      pt: "Uma dose de vodka premium nacional destilada de 50ml.",
      en: "A shot of premium distilled vodka 50ml."
    }
  },
  // --- Licores e Aperitivos ---
  {
    id: "alc-32",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 20.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Amarula (Dose)",
      en: "Amarula Cream Liqueur (Shot)"
    },
    description: {
      pt: "Uma dose do cremoso licor sul-africano preparado com o fruto da marula.",
      en: "A shot of the creamy South African liqueur made from wild marula fruit."
    }
  },
  {
    id: "alc-33",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Campari (Dose)",
      en: "Campari (Shot)"
    },
    description: {
      pt: "Uma dose do clássico aperitivo amargo italiano de coloração vermelha.",
      en: "A shot of the classic Italian bitter herbal aperitif."
    }
  },
  {
    id: "alc-34",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vermute Cinzano (Dose)",
      en: "Cinzano Vermouth (Shot)"
    },
    description: {
      pt: "Uma dose do tradicional vermute italiano aromático.",
      en: "A shot of the traditional Italian vermouth."
    }
  },
  {
    id: "alc-35",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 30.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Cointreau (Dose)",
      en: "Cointreau Liqueur (Shot)"
    },
    description: {
      pt: "Uma dose do famoso licor fino francês com sabor de cascas de laranja.",
      en: "A shot of the famous French triple sec orange liqueur."
    }
  },
  {
    id: "alc-36",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 25.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Frangelico (Dose)",
      en: "Frangelico Liqueur (Shot)"
    },
    description: {
      pt: "Uma dose do elegante licor italiano de avelãs e ervas finas.",
      en: "A shot of the elegant Italian hazelnut and herb liqueur."
    }
  },
  {
    id: "alc-37",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licores Nacionais (Dose)",
      en: "National Liqueurs (Shot)"
    },
    description: {
      pt: "Dose de licor nacional. Sabores: Menta, Cacau, Cereja, Strega, Tangerina ou Laranja.",
      en: "A shot of Brazilian liqueur. Flavors: Mint, Cocoa, Cherry, Strega, Tangerine, or Orange."
    }
  },
  {
    id: "alc-38",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 15.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Manischewitz Cereja (Dose)",
      en: "Manischewitz Cherry Liqueur (Shot)"
    },
    description: {
      pt: "Uma dose do tradicional licor kosher com sabor marcante de cereja americana.",
      en: "A shot of the traditional sweet kosher liqueur with a distinct American cherry flavor."
    }
  },
  {
    id: "alc-39",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Martini Vermute (Dose)",
      en: "Martini Vermouth (Shot)"
    },
    description: {
      pt: "Uma dose do icônico vermute italiano Martini (Bianco ou Rosso).",
      en: "A shot of the iconic Italian vermouth Martini (Bianco or Rosso)."
    }
  }
];

// Assign sequential number IDs to each menu item
MENU_DATA.forEach((item, index) => {
  item.number = String(index + 1).padStart(2, '0');
});

// ==========================================================================
// TRANSLATION DICTIONARY
// ==========================================================================
const TRANSLATIONS = {
  pt: {
    lblFontSize: "Acessibilidade:",
    heroSubtitle: "Cardápio Digital de Gastronomia",
    txtTabAfternoonTea: "Chá da Tarde",
    txtTimeAfternoonTea: "16:00 - 18:30",
    txtTabDinner: "Jantar",
    txtTimeDinner: "19:00 - 21:30",
    searchInput: "Pesquisar prato ou ingrediente...",
    txtFilterLabel: "Filtrar por:",
    chipGF: "<span class='chip-color gf-color'></span> Sem Glúten (SG)",
    chipLF: "<span class='chip-color lf-color'></span> Sem Lactose (SL)",
    chipVeg: "<span class='chip-color veg-color'></span> Vegetariano (VG)",
    txtNoResults: "Nenhum prato encontrado com os filtros selecionados.",
    btnResetFilters: "Mostrar Todos os Pratos",
    txtServiceTitle: "Dúvidas ou Restrições?",
    txtServiceDesc: "Se você possui alergias severas ou precisa de alguma alteração no prato, por favor fale com a nossa equipe.",
    txtFooterAddress: "Rua Dr. Mello Viana, 28 - Centro, São Lourenço - MG",
    txtFooterPhone: "📞 Recepção: (35) 3339-2300 | 🌐 www.hotelcentralparque.com.br",
    btnCardDetails: "Ver Detalhes",
    badgeGF: "Sem Glúten",
    badgeLF: "Sem Lactose",
    badgeVeg: "Vegetariano",
    lblModalIngredients: "Ingredientes / Description:",
    btnModalBack: "Voltar ao Cardápio"
  },
  en: {
    lblFontSize: "Accessibility:",
    heroSubtitle: "Digital Dining Menu",
    txtTabAfternoonTea: "Afternoon Tea",
    txtTimeAfternoonTea: "4:00 PM - 6:30 PM",
    txtTabDinner: "Dinner",
    txtTimeDinner: "7:00 PM - 9:30 PM",
    searchInput: "Search dish or ingredient...",
    txtFilterLabel: "Filter by:",
    chipGF: "<span class='chip-color gf-color'></span> Gluten-Free (GF)",
    chipLF: "<span class='chip-color lf-color'></span> Lactose-Free (LF)",
    chipVeg: "<span class='chip-color veg-color'></span> Vegetarian (VG)",
    txtNoResults: "No dishes found with the selected filters.",
    btnResetFilters: "Show All Dishes",
    txtServiceTitle: "Allergies or Requests?",
    txtServiceDesc: "If you have severe allergies or need dish alterations, please let our team know.",
    txtFooterAddress: "28 Dr. Mello Viana St - Downtown, São Lourenço - MG",
    txtFooterPhone: "📞 Front Desk: (35) 3339-2300 | 🌐 www.hotelcentralparque.com.br",
    btnCardDetails: "View Details",
    badgeGF: "Gluten-Free",
    badgeLF: "Lactose-Free",
    badgeVeg: "Vegetarian",
    lblModalIngredients: "Ingredients / Description:",
    btnModalBack: "Back to Menu"
  }
};

// ==========================================================================
// SUBCATEGORIES CONFIGURATION
// ==========================================================================
const SUBCATEGORIES = {
  "afternoon-tea": [
    { id: "lanches", pt: "Lanches", en: "Snacks", icon: "🥐" },
    { id: "doces", pt: "Doces & Frutas", en: "Sweets & Fruits", icon: "🍰" },
    { id: "bebidas", pt: "Cafés & Bebidas", en: "Coffee & Drinks", icon: "☕" }
  ],
  "dinner": [
    { id: "principais", pt: "Pratos Principais", en: "Main Courses", icon: "🥩" },
    { id: "sobremesas", pt: "Sobremesas", en: "Desserts", icon: "🍨" },
    { id: "bebidas", pt: "Bebidas", en: "Soft Drinks", icon: "🥤" },
    { id: "bebidas-alcoolicas", pt: "Bebidas Alcoólicas", en: "Alcoholic Drinks", icon: "🍷" }
  ]
};

// ==========================================================================
// APP STATE MANAGEMENT
// ==========================================================================
let currentLang = localStorage.getItem("lang") || "pt";
let currentTheme = localStorage.getItem("theme") || "light";
let currentTextSize = localStorage.getItem("textSize") || "normal";
let currentCategory = "afternoon-tea";
let currentSubcategory = "lanches";
let searchQuery = "";
let selectedDiets = new Set();

// DOM References
const bodyEl = document.body;
const menuListEl = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const btnClearSearch = document.getElementById("btnClearSearch");
const btnResetFilters = document.getElementById("btnResetFilters");
const noResultsMessage = document.getElementById("noResultsMessage");
const detailModal = document.getElementById("detailModal");
const subcategoryContainer = document.getElementById("subcategoryContainer");
const subcategoryNav = document.getElementById("subcategoryNav");

// ==========================================================================
// INITIALIZATION
// ==========================================================================
function setInitialCategoryByTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Chá da tarde até as 18:30h, jantar a partir das 18:31h
  if (hours < 18 || (hours === 18 && minutes <= 30)) {
    currentCategory = "afternoon-tea";
  } else {
    currentCategory = "dinner";
  }

  const list = SUBCATEGORIES[currentCategory] || [];
  if (list.length > 0) {
    currentSubcategory = list[0].id;
  }

  // Update tab active state in navigation
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === currentCategory) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function parseUrlCode() {
  const hash = window.location.search.substring(1);
  if (!hash) return;

  try {
    const hashids = new Hashids("HotelCentralParqueMenu", 6);
    const decoded = hashids.decode(hash);
    if (decoded && decoded.length === 2) {
      const pdvId = decoded[0];
      const number = decoded[1];
      
      const pdvMap = {
        1: 'mesa',
        2: 'quarto',
        3: 'piscina',
        4: 'lobby'
      };
      
      const pdv = pdvMap[pdvId] || 'desconhecido';
      
      sessionStorage.setItem('pdv_id', pdvId);
      sessionStorage.setItem('pdv_type', pdv);
      sessionStorage.setItem('pdv_number', number);
      
      console.log(`Ponto de Venda detectado: ${pdv} número ${number}`);
    }
  } catch (e) {
    console.error("Erro ao decodificar o código do QR Code:", e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  parseUrlCode();
  setInitialCategoryByTime();
  applyTheme(currentTheme);
  applyTextSize(currentTextSize);
  applyLanguage(currentLang);
  setupEventListeners();
  renderMenu();
});

// ==========================================================================
// THEME & ACCESSIBILITY FUNCTIONS
// ==========================================================================
function applyTheme(theme) {
  bodyEl.classList.remove("theme-light", "theme-dark");
  bodyEl.classList.add(`theme-${theme}`);
  currentTheme = theme;
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
}

function applyTextSize(size) {
  bodyEl.classList.remove("text-normal", "text-large", "text-xlarge", "text-huge");
  bodyEl.classList.add(`text-${size}`);
  currentTextSize = size;
  localStorage.setItem("textSize", size);

  // Update button active state
  document.querySelectorAll(".btn-acc[id^='btnFont']").forEach(btn => {
    btn.classList.remove("active");
  });
  if (size === "normal") document.getElementById("btnFontNormal").classList.add("active");
  else if (size === "large") document.getElementById("btnFontIncrease").classList.add("active");
  else if (size === "xlarge") document.getElementById("btnFontHuge").classList.add("active");
}

// Let's implement dynamic size transitions on clicks
function handleFontBtnClick(id) {
  let nextSize = "normal";
  if (id === "btnFontNormal") nextSize = "normal";
  else if (id === "btnFontIncrease") nextSize = "large";
  else if (id === "btnFontHuge") nextSize = "xlarge";

  // Highlight active
  document.querySelectorAll(".btn-acc[id^='btnFont']").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(id);
  if (activeBtn) activeBtn.classList.add("active");

  applyTextSize(nextSize);
}

// ==========================================================================
// TRANSLATION & LANGUAGE FUNCTIONS
// ==========================================================================
function applyLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    console.warn("Storage access not allowed:", e);
  }

  // Translate static UI elements
  const dict = TRANSLATIONS[lang];
  for (const [id, value] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) {
      if (id === "searchInput") {
        el.setAttribute("placeholder", value);
      } else if (id.startsWith("chip")) {
        el.innerHTML = value;
      } else {
        el.innerHTML = value;
      }
    }
  }

  // Update button text for toggle safely
  const langTextEl = document.querySelector("#btnLangToggle .lang-text");
  if (langTextEl) {
    langTextEl.textContent = lang === "pt" ? "EN" : "PT";
  }

  // Render subcategories so they update their text language
  renderSubcategories();

  // Re-render menu to display translated items
  renderMenu();
}

function toggleLanguage() {
  const nextLang = currentLang === "pt" ? "en" : "pt";
  applyLanguage(nextLang);
}

function renderSubcategories() {
  if (!subcategoryNav) return;
  subcategoryNav.innerHTML = "";

  const list = SUBCATEGORIES[currentCategory] || [];
  list.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = `btn-sub ${currentSubcategory === sub.id ? "active" : ""}`;
    btn.setAttribute("data-sub", sub.id);
    btn.setAttribute("aria-label", currentLang === "pt" ? `Categoria ${sub.pt}` : `Category ${sub.en}`);

    const label = currentLang === "pt" ? sub.pt : sub.en;
    btn.innerHTML = `
      <span class="btn-sub-icon">${sub.icon}</span>
      <span class="btn-sub-label">${label}</span>
    `;

    btn.addEventListener("click", () => {
      currentSubcategory = sub.id;
      document.querySelectorAll(".btn-sub").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu();
    });

    subcategoryNav.appendChild(btn);
  });
}

// ==========================================================================
// RENDER MENU
// ==========================================================================
function renderMenu() {
  menuListEl.innerHTML = "";

  // Filter items
  const filteredItems = MENU_DATA.filter(item => {
    // Category check
    if (item.category !== currentCategory) return false;

    // Subcategory check
    if (item.subcategory !== currentSubcategory) return false;

    // Diet check
    if (selectedDiets.size > 0) {
      const matchAllDiets = Array.from(selectedDiets).every(diet => item.tags.includes(diet));
      if (!matchAllDiets) return false;
    }

    // Search check
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().replace("#", "").trim();
      const nameMatch = item.name[currentLang].toLowerCase().includes(query);
      const descMatch = item.description[currentLang].toLowerCase().includes(query);
      const numberMatch = item.number && item.number.includes(query);
      if (!nameMatch && !descMatch && !numberMatch) return false;
    }

    return true;
  });

  // Handle No Results
  if (filteredItems.length === 0) {
    noResultsMessage.style.display = "block";
    menuListEl.style.display = "none";
  } else {
    noResultsMessage.style.display = "none";
    menuListEl.style.display = "flex";

    let lastSection = null;
    filteredItems.forEach(item => {
      // Check for section transitions
      if (item.section) {
        const sectionName = item.section[currentLang];
        if (sectionName !== lastSection) {
          const sectionHeader = document.createElement("h3");
          sectionHeader.className = "menu-section-header";
          sectionHeader.textContent = sectionName;
          menuListEl.appendChild(sectionHeader);
          lastSection = sectionName;
        }
      } else {
        lastSection = null;
      }

      const card = createMenuCard(item);
      menuListEl.appendChild(card);
    });
  }
}

function createMenuCard(item) {
  const card = document.createElement("article");
  const hasImage = item.subcategory === "principais";
  card.className = `menu-card${hasImage ? "" : " no-image"}`;
  card.id = `card-${item.id}`;

  // Generate badges html
  let badgesHtml = "";
  item.tags.forEach(tag => {
    let tagLabel = "";
    let tagClass = "";
    if (tag === "gluten-free") {
      tagLabel = currentLang === "pt" ? "Sem Glúten" : "Gluten-Free";
      tagClass = "gf";
    } else if (tag === "lactose-free") {
      tagLabel = currentLang === "pt" ? "Sem Lactose" : "Lactose-Free";
      tagClass = "lf";
    } else if (tag === "vegetarian") {
      tagLabel = currentLang === "pt" ? "Vegetariano" : "Vegetarian";
      tagClass = "veg";
    }
    badgesHtml += `<span class="diet-badge ${tagClass}">${tagLabel}</span>`;
  });

  const formattedPrice = new Intl.NumberFormat(currentLang === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL"
  }).format(item.price);

  const viewDetailsText = TRANSLATIONS[currentLang].btnCardDetails;

  card.innerHTML = `
    ${hasImage ? `
    <div class="menu-card-image-wrapper">
      <img src="${item.image}" alt="${item.name[currentLang]}" class="menu-card-image" loading="lazy">
    </div>
    ` : ""}
    <div class="menu-card-content">
      <div class="menu-card-header">
        <h3 class="menu-card-title">${item.name[currentLang]}</h3>
        <span class="menu-card-price">${formattedPrice}</span>
      </div>
      <p class="menu-card-description">${item.description[currentLang]}</p>
      <div class="menu-card-badges">${badgesHtml}</div>
      <div class="menu-card-footer">
        <button class="btn-card-details" aria-haspopup="dialog" onclick="openDetailsModal('${item.id}')">
          <span>${viewDetailsText}</span> ➔
        </button>
        <span class="product-number">${item.number}</span>
      </div>
    </div>
  `;

  return card;
}

// ==========================================================================
// MODAL CONTROLS
// ==========================================================================
function openDetailsModal(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalDietTags = document.getElementById("modalDietTags");

  const modalImgWrapper = document.querySelector(".modal-image-wrapper");
  const modalContainer = document.querySelector(".modal-container");

  const hasImage = item.subcategory === "principais";
  if (hasImage) {
    modalImgWrapper.style.display = "block";
    modalContainer.classList.remove("modal-no-image");
    modalImg.src = item.image;
    modalImg.alt = item.name[currentLang];
  } else {
    modalImgWrapper.style.display = "none";
    modalContainer.classList.add("modal-no-image");
    modalImg.src = "";
    modalImg.alt = "";
  }

  modalTitle.innerHTML = `<span class="product-number">${item.number}</span> ${item.name[currentLang]}`;

  const formattedPrice = new Intl.NumberFormat(currentLang === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL"
  }).format(item.price);
  modalPrice.textContent = formattedPrice;
  modalDescription.textContent = item.description[currentLang];

  // Render modal badges
  modalDietTags.innerHTML = "";
  item.tags.forEach(tag => {
    const badge = document.createElement("span");
    badge.className = `diet-badge ${tag === 'gluten-free' ? 'gf' : tag === 'lactose-free' ? 'lf' : 'veg'}`;
    badge.textContent = TRANSLATIONS[currentLang][tag === 'gluten-free' ? 'badgeGF' : tag === 'lactose-free' ? 'badgeLF' : 'badgeVeg'];
    modalDietTags.appendChild(badge);
  });

  // Display Modal
  detailModal.classList.add("show");
  detailModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeDetailsModal() {
  detailModal.classList.remove("show");
  detailModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}



// Make globally accessible for onclick events
window.openDetailsModal = openDetailsModal;

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Theme Toggle click
  document.getElementById("btnThemeToggle").addEventListener("click", toggleTheme);

  // Accessibility Font size buttons
  document.getElementById("btnFontNormal").addEventListener("click", () => handleFontBtnClick("btnFontNormal"));
  document.getElementById("btnFontIncrease").addEventListener("click", () => handleFontBtnClick("btnFontIncrease"));
  document.getElementById("btnFontHuge").addEventListener("click", () => handleFontBtnClick("btnFontHuge"));

  // Language toggle click
  document.getElementById("btnLangToggle").addEventListener("click", toggleLanguage);

  // Tab switching
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      const targetTab = e.currentTarget;
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      targetTab.classList.add("active");

      currentCategory = targetTab.getAttribute("data-tab");

      // Set default subcategory for the selected category
      const list = SUBCATEGORIES[currentCategory] || [];
      if (list.length > 0) {
        currentSubcategory = list[0].id;
      }

      renderSubcategories();
      renderMenu();

      // Smooth scroll back to top of menu list
      const navPosition = document.getElementById("categoryNav").getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: navPosition - 70, // offset for accessibility bar and spacing
        behavior: "smooth"
      });
    });
  });

  // Search input typing
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim() !== "") {
      btnClearSearch.style.display = "flex";
    } else {
      btnClearSearch.style.display = "none";
    }
    renderMenu();
  });

  // Clear search button
  btnClearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    btnClearSearch.style.display = "none";
    renderMenu();
  });

  // Filter chips click
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      const targetChip = e.currentTarget;
      const diet = targetChip.getAttribute("data-diet");

      if (selectedDiets.has(diet)) {
        selectedDiets.delete(diet);
        targetChip.classList.remove("active");
      } else {
        selectedDiets.add(diet);
        targetChip.classList.add("active");
      }
      renderMenu();
    });
  });

  // Reset filter button when no items match
  btnResetFilters.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    btnClearSearch.style.display = "none";
    selectedDiets.clear();
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    renderMenu();
  });

  // Modal close buttons
  document.getElementById("btnModalClose").addEventListener("click", closeDetailsModal);
  document.getElementById("btnModalBack").addEventListener("click", closeDetailsModal);
  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target === detailModal) closeDetailsModal();
  });


}
