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
      en: "Individual Good Afternoon Coffee Combo",
      es: "Combo Café Buenas Tardes Individual",
      ja: "午後の個別コーヒーセット",
      zh: "个人下午茶咖啡套餐"
    },
    description: {
      pt: "Bule de café ou chá e de leite, pão francês, manteiga e geléia.",
      en: "Pot of coffee or tea and milk, french bread, butter, and jam.",
      es: "Jarra de café o té y leche, pan francés, mantequilla y mermelada.",
      ja: "コーヒーまたは紅茶とミルクのポット、フランスパン、バター、ジャム。",
      zh: "一壶咖啡或茶及牛奶，法式面包，黄油与果酱。"
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
      en: "Toasted Ham & Cheese",
      es: "Sándwich Mixto Caliente de Jamón y Queso",
      ja: "ホットハム＆チーズサンド",
      zh: "热烤火腿奶酪三明治"
    },
    description: {
      pt: "Clássico sanduíche quente de pão francês ou de forma com presunto cozido e queijo mussarela derretido.",
      en: "Classic hot sandwich made with french or sliced bread, cooked ham, and melted mozzarella cheese.",
      es: "Clásico sándwich caliente de pan francés o de molde con jamón cocido y queso mozzarella derretido.",
      ja: "フランスパンまたは食パンにハムととろけるモッツァレラチーズを挟んだ温かいサンドイッチ。",
      zh: "经典法式或吐司面包，夹熟火腿与融化的摩萨德拉奶酪。"
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
      en: "Grilled Cheese Sandwich",
      es: "Sándwich de Queso a la Plancha",
      ja: "グリルチーズサンド",
      zh: "烤奶酪三明治"
    },
    description: {
      pt: "Pão francês ou de forma dourado na chapa com uma porção generosa de queijo mussarela derretido.",
      en: "French bread or sliced bread grilled on the griddle with a generous amount of melted mozzarella cheese.",
      es: "Pan francés o de molde dorado a la plancha con una porción generosa de queso mozzarella derretido.",
      ja: "香ばしく焼いたパンにたっぷりのとろけるモッツァレラチーズ。",
      zh: "香脆烤面包配合丰厚融化的摩萨德拉奶酪。"
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
      en: "Bread with Butter",
      es: "Pan con Mantequilla",
      ja: "バターパン",
      zh: "黄油面包"
    },
    description: {
      pt: "Pão francês fresquinho ou pão caseiro cortado ao meio e dourado na chapa com manteiga da fazenda.",
      en: "Fresh french bread or homemade bread sliced in half and grilled with farm butter.",
      es: "Pan francés fresco o pan casero dorado a la plancha con mantequilla artesanal.",
      ja: "焼き立てのフランスパンまたは自家製パンに農場直送バターを添えて。",
      zh: "新鲜法包或农家面包开半烤至金黄，涂抹农场黄油。"
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
      en: "Whole Wheat Toast",
      es: "Tostadas de Pan Integral",
      ja: "全粒粉トースト",
      zh: "全麦吐司"
    },
    description: {
      pt: "Duas fatias de pão integral tostadas, acompanhadas de manteiga da fazenda e geleia de frutas.",
      en: "Two slices of toasted whole wheat bread, served with farm butter and fruit jam.",
      es: "Dos rebanadas de pan integral tostado, acompañadas de mantequilla de la granja y mermelada de frutas.",
      ja: "全粒粉トースト2枚、農場バターとフルーツジャム添え。",
      zh: "两片烘烤全麦面包，配农场黄油与水果果酱。"
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
      en: "Ham & Cheese Omelet",
      es: "Tortilla Mixta de Jamón y Queso",
      ja: "ハム＆チーズオムレツ",
      zh: "火腿奶酪煎蛋卷"
    },
    description: {
      pt: "Omelete preparado com quatro ovos frescos da fazenda, presunto picado e queijo mussarela derretido.",
      en: "Fluffy omelet made with four fresh farm eggs, diced ham, and melted mozzarella cheese.",
      es: "Tortilla esponjosa preparada con cuatro huevos frescos de la granja, jamón picado y queso mozzarella derretido.",
      ja: "新鮮な卵4個、刻みハム、とろけるモッツァレラチーズで作ったふんわりオムレツ。",
      zh: "采用四个新鲜农场鸡蛋，配合切碎火腿与摩萨德拉奶酪煎制。"
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
      en: "Plain Omelet",
      es: "Tortilla Francesa Sencilla",
      ja: "プレーンオムレツ",
      zh: "原味煎蛋卷"
    },
    description: {
      pt: "Omelete leve e fofinho preparado com quatro ovos frescos da fazenda na manteiga.",
      en: "Light and fluffy omelet prepared with four fresh farm eggs cooked in butter.",
      es: "Tortilla ligera y esponjosa preparada con cuatro huevos frescos de la granja a la mantequilla.",
      ja: "新鮮な卵4個をバターでふんわり焼き上げたシンプルオムレツ。",
      zh: "四个新鲜农场鸡蛋在黄油中煎至松软滑嫩。"
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
      en: "Scrambled Eggs",
      es: "Huevos Revueltos",
      ja: "スクランブルエッグ",
      zh: "美式炒蛋"
    },
    description: {
      pt: "Dois ovos mexidos na chapa com um toque de manteiga da fazenda.",
      en: "Two eggs scrambled on the griddle with a touch of farmhouse butter.",
      es: "Dos huevos revueltos a la plancha con un toque de mantequilla artesanal.",
      ja: "卵2個を農場バターで香ばしく炒めたスクランブルエッグ。",
      zh: "两个鸡蛋配少许农场黄油在铁板上炒制。"
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
      en: "Porridge",
      es: "Gachas / Porridge",
      ja: "おかゆ（ポリッジ）",
      zh: "麦片粥"
    },
    description: {
      pt: "Prato fundo de mingau quentinho e cremoso de Aveia, Fubá ou Maisena com leite integral.",
      en: "Warm and creamy bowl of Oatmeal, Cornmeal, or Cornstarch porridge cooked with whole milk.",
      es: "Plato hondo de gachas calientes y cremosas de Avena, Maicena o Harina de Maíz con leche entera.",
      ja: "全脂粉乳で調理した温かくクリーミーなオートミール、コーンミール、またはコーンスターチのおかゆ。",
      zh: "全脂牛奶精心熬制的香浓燕麦粥、玉米粥或太白粉粥。"
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
      en: "Cake of the Day (Slice)",
      es: "Pastel del Día (Porción)",
      ja: "本日のケーキ（1ピース）",
      zh: "每日特色蛋糕（切片）"
    },
    description: {
      pt: "Fatia de bolo caseiro artesanal preparado no dia. Consulte os sabores disponíveis.",
      en: "Slice of homemade artisanal cake baked fresh daily. Please ask our team for today's flavors.",
      es: "Porción de pastel casero artesanal horneado en el día. Consulte los sabores disponibles.",
      ja: "毎日焼き上げる自家製ケーキ。本日の味はスタッフにお尋ねください。",
      zh: "每日新鲜烘焙的家常手作蛋糕，具体口味请咨询工作人员。"
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
      en: "Seasonal Fruit",
      es: "Fruta de Estación",
      ja: "季節のフルーツ",
      zh: "时令水果"
    },
    description: {
      pt: "Uma fruta pequena inteira ou uma fatia de fruta fresca, como melão, mamão ou melancia.",
      en: "A small whole fruit or a slice of fresh seasonal fruit, such as melon, papaya, or watermelon.",
      es: "Una fruta pequeña entera o una rebanada de fruta fresca, como melón, papaya o sandía.",
      ja: "メロン、パパイヤ、スイカなどの新鮮なカットフルーツまたはホールフルーツ。",
      zh: "新鲜切片水果或小整果，如甜瓜、木瓜或西瓜。"
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
      en: "Homemade Cookies / Cornstarch Biscuits",
      es: "Galletas Artesanales Caseras",
      ja: "自家製クッキー＆ビスケット",
      zh: "手作小饼干/玉米淀粉曲奇"
    },
    description: {
      pt: "Porção de sequilhos ou biscoitos doces caseiros artesanais, crocantes e derretem na boca.",
      en: "Portion of traditional homemade sweet biscuits, light, crispy, and melting in your mouth.",
      es: "Porción de galletas dulces caseras tradicionales, crujientes que se deshacen en la boca.",
      ja: "サクサクでお口の中でとろける伝統的な自家製サブレ・ビスケット。",
      zh: "传统手工烘焙甜饼干，入口即化，香酥可口。"
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
      en: "Typical Seasonal Sweets",
      es: "Postres Típicos de Estación",
      ja: "季節の伝統スイーツ",
      zh: "传统时令甜品"
    },
    description: {
      pt: "Sobremesa individual de doces caseiros. Opções como canjica, arroz doce, compotas, pudim ou curau.",
      en: "Individual portion of traditional homemade seasonal desserts. Options like sweet hominy, rice pudding, flan, or sweet corn pudding.",
      es: "Postre individual casero tradicional. Opciones como arroz con leche, natillas, flan o compotas.",
      ja: "自家製季節のデザート（ライスプディング、カスタードプリン、コンポートなど）。",
      zh: "个人份手作传统甜点，包含牛奶玉米粥、大米布丁、布丁或果酱等。"
    }
  },

  // --- AFTERNOON TEA - CAFÉS & BEBIDAS ---

  {
    id: "drink-1-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 9.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Bule de Café, Leite ou Chá",
      en: "Pot of Coffee, Milk, or Tea",
      es: "Jarra de Café, Leche o Té",
      ja: "コーヒー・ミルク・紅茶のポット",
      zh: "壶装咖啡、牛奶或红茶"
    },
    description: {
      pt: "Servido quente em bule individual. Serve até duas xícaras.",
      en: "Served warm in an individual pot. Yields up to two cups.",
      es: "Servido caliente en jarra individual. Rinde hasta dos tazas.",
      ja: "温かいポットサービス（約2杯分）。",
      zh: "个人壶装温热上桌，可倒满约两杯。"
    }
  },
  {
    id: "drink-2-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Chocolate Quente Especial",
      en: "Special Hot Chocolate",
      es: "Chocolate Caliente Especial",
      ja: "特製ホットチョコレート",
      zh: "特制热巧克力"
    },
    description: {
      pt: "Bebida cremosa feita com leite integral, chocolate, canela, leite condensado e maisena.",
      en: "Creamy hot drink made with whole milk, cocoa, cinnamon, condensed milk, and a touch of cornstarch.",
      es: "Bebida cremosa elaborada con leche entera, cacao, canela, leche condensada y maicena.",
      ja: "全脂乳、カカオ、シナモン、コンデンスミルクで仕上げた濃厚ホットチョコ。",
      zh: "全脂牛奶、可可粉、肉桂、炼乳与少许淀粉调制成的浓郁热饮。"
    }
  },
  {
    id: "drink-3-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Chocolate Simples",
      en: "Simple Hot Chocolate",
      es: "Chocolate Caliente Tradicional",
      ja: "ホットチョコレート",
      zh: "原味热可可"
    },
    description: {
      pt: "Bebida quente preparada com leite integral, chocolate em pó e açúcar ou adoçante.",
      en: "Hot drink prepared with whole milk, cocoa powder, and sugar or sweetener.",
      es: "Bebida caliente preparada con leche entera, cacao en polvo y azúcar o edulcorante.",
      ja: "全脂乳とカカオパウダーのシンプルな温かいチョコドリンク。",
      zh: "全脂牛奶配合冲泡可可粉，添加适量糖或代糖。"
    }
  },
  {
    id: "drink-4-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies",
      es: "Jugos y Licuados",
      ja: "ジュース＆スムージー",
      zh: "果汁与奶昔"
    },
    price: 10.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Suco de Frutas Natural",
      en: "Fresh Fruit Juice",
      es: "Jugo Natural de Frutas",
      ja: "生搾りフルーツジュース",
      zh: "鲜榨原汁果汁"
    },
    description: {
      pt: "Copo de suco de frutas natural preparado na hora. Consulte as opções de frutas disponíveis.",
      en: "Glass of freshly squeezed fruit juice. Please ask your waiter for available fruit options.",
      es: "Vaso de jugo de fruta natural recién preparado. Consulte las opciones disponibles.",
      ja: "新鮮な生搾りフルーツジュース。季節のフルーツ種類はスタッフまで。",
      zh: "现点现榨鲜果汁，具体可选水果种类请询问服务员。"
    }
  },
  {
    id: "drink-5-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies",
      es: "Jugos y Licuados",
      ja: "ジュース＆スムージー",
      zh: "果汁与奶昔"
    },
    price: 12.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Vitamina de Frutas",
      en: "Fruit Smoothie",
      es: "Licuado de Frutas",
      ja: "フルーツスムージー",
      zh: "综合水果奶昔"
    },
    description: {
      pt: "Copo de leite cremoso batido com mamão, maçã e banana. Rápido e nutritivo.",
      en: "Nutritious glass of creamy milk blended with fresh papaya, apple, and banana.",
      es: "Vaso de leche cremosa licuada con papaya, manzana y plátano. Nutritivo y fresco.",
      ja: "パパイヤ、リンゴ、バナナとミルクをブレンドした栄養満点スムージー。",
      zh: "木瓜、苹果、香蕉与浓香牛奶打制，营养丰富。"
    }
  },
  {
    id: "drink-6-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Água Mineral com Gás 500ml",
      en: "Sparkling Mineral Water 500ml",
      es: "Agua Mineral con Gas 500ml",
      ja: "スパークリングミネラルウォーター 500ml",
      zh: "气泡矿泉水 500ml"
    },
    description: {
      pt: "Água mineral com gás engarrafada fresca de 500ml.",
      en: "Fresh bottled sparkling mineral water 500ml.",
      es: "Botella de agua mineral con gas fresca de 500ml.",
      ja: "フレッシュな炭酸入りミネラルウォーター 500mlボトル。",
      zh: "清爽瓶装气泡矿泉水 500ml。"
    }
  },
  {
    id: "drink-7-tea",
    category: "afternoon-tea",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Água Mineral sem Gás 500ml",
      en: "Still Mineral Water 500ml",
      es: "Agua Mineral sin Gas 500ml",
      ja: "ミネラルウォーター（無炭酸） 500ml",
      zh: "饮用矿泉水 500ml"
    },
    description: {
      pt: "Água mineral natural sem gás engarrafada fresca de 500ml.",
      en: "Fresh bottled natural still mineral water 500ml.",
      es: "Botella de agua mineral natural sin gas de 500ml.",
      ja: "ボトルのナチュラルミネラルウォーター 500ml。",
      zh: "清爽瓶装无气天然矿泉水 500ml。"
    }
  },


  // ==========================================
  // DINNER - PRATOS PRINCIPAIS
  // ==========================================

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
      en: "Buffet",
      es: "Buffet Especial",
      ja: "ディナービュッフェ",
      zh: "自助晚餐"
    },
    description: {
      pt: "Em dias específicos, o restaurante serve exclusivamente nosso buffet especial por R$ 60,00. O cardápio inclui espaguete à bolonhesa, sopas caseiras, estrogonofe e sobremesas. Nesses dias, o menu à la carte não estará disponível.",
      en: "On select days, the restaurant exclusively serves our special buffet for R$ 60.00. The menu includes spaghetti bolognese, homemade soups, stroganoff, and assorted desserts. On these days, the a la carte menu is not available.",
      es: "En días específicos, el restaurante sirve exclusivamente nuestro buffet especial por R$ 60,00. Incluye espaguetis a la boloñesa, sopas caseras, Stroganoff y postres variados.",
      ja: "特定日限定のスペシャルビュッフェ（R$ 60,00）。ボロネーゼパスタ、自家製スープ、ストロガノフ、デザート等をご自由にお楽しみいただけます。",
      zh: "特定日期特供自助餐（R$ 60.00）。包含肉酱意面、家常靓汤、斯特罗加诺夫及精选甜点。自助餐开放期间暂不提供单点。"
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
      en: "Spaghetti Bolognese",
      es: "Espaguetis a la Boloñesa",
      ja: "スパゲッティ・ボロネーゼ",
      zh: "意式肉酱斯帕盖蒂面"
    },
    description: {
      pt: "Espaguete italiano clássico servido com molho bolonhesa caseiro de carne bovina e ervas aromáticas.",
      en: "Classic Italian spaghetti served with homemade beef bolognese sauce and aromatic herbs.",
      es: "Clásico espagueti italiano servido con salsa boloñesa casera de carne vacuna y hierbas aromáticas.",
      ja: "自家製牛ひき肉とハーブの特製ボロネーゼソースを添えた伝統パスタ。",
      zh: "传统意式长面配手作牛肉番茄肉酱与芳香草本。"
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
      en: "Spaghetti Aglio e Olio",
      es: "Espaguetis al Ajo y Aceite (Aglio e Olio)",
      ja: "スパゲッティ・アリオ・オリオ",
      zh: "蒜香橄榄油意面"
    },
    description: {
      pt: "Espaguete italiano clássico salteado em azeite de oliva extra virgem, alho laminado dourado e salsinha fresca.",
      en: "Classic Italian spaghetti sautéed in extra virgin olive oil, golden sliced garlic, and fresh parsley.",
      es: "Espagueti italiano clásico salteado en aceite de oliva virgen extra, ajo laminado dorado y perejil fresco.",
      ja: "エクストラバージンオリーブオイル、香ばしいニンニクスライス、パセリで仕上げたシンプルパスタ。",
      zh: "特级初榨橄榄油爆香切片蒜粒与新鲜香菜，拌炒意式长面。"
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
      en: "Chicken Stroganoff",
      es: "Stroganoff de Pollo",
      ja: "チキンストロガノフ",
      zh: "俄式奶油烩鸡肉"
    },
    description: {
      pt: "Tiras de peito de frango grelhadas em molho cremoso de strogonoff. Acompanha arroz branco e batata palha.",
      en: "Grilled chicken breast strips in a rich creamy stroganoff sauce. Served with white rice and crispy potato sticks.",
      es: "Tiras de pechuga de pollo salteadas en salsa cremosa de stroganoff. Acompañado de arroz blanco y patatas paja crujientes.",
      ja: "チキン胸肉の旨味たっぷり濃密クリームストロガノフ。白米とサクサクポテトスチック添え。",
      zh: "鲜嫩鸡胸肉条佐以浓郁酸奶油酱汁，附白米饭及香脆薯丝。"
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
      en: "Individual Soup",
      es: "Sopa Individual",
      ja: "一人前スープ",
      zh: "单人份汤"
    },
    description: {
      pt: "Canja de galinha quentinha servida com pão fatiado, torrada e manteiga. Consulte outras opções de sopa no ramal 268.",
      en: "Warm chicken soup served with sliced bread, toast, and butter. Check other soup options by calling front desk extension 268.",
      es: "Sopa caliente de pollo (Canja) servida con pan rebanado, tostadas y mantequilla. Consulte otras opciones en el ramal 268.",
      ja: "チキン＆ライスの温かいスープ、トーストパンとバター添え。他のスープは内線268まで。",
      zh: "温热鸡汤配切片面包、吐司及黄油。了解今日其他汤品请拨分机 268。"
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
      en: "Cake of the Day (Slice)",
      es: "Pastel del Día (Porción)",
      ja: "本日のケーキ（1ピース）",
      zh: "每日特色蛋糕（切片）"
    },
    description: {
      pt: "Fatia de bolo caseiro artesanal preparado no dia. Consulte os sabores disponíveis.",
      en: "Slice of homemade artisanal cake baked fresh daily. Please ask our team for today's flavors.",
      es: "Porción de pastel casero artesanal horneado en el día. Consulte los sabores disponibles.",
      ja: "毎日焼き上げる自家製ケーキ。本日の味はスタッフにお尋ねください。",
      zh: "每日新鲜烘焙的家常手作蛋糕，具体口味请咨询工作人员。"
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
      en: "Seasonal Fruit",
      es: "Fruta de Estación",
      ja: "季節のフルーツ",
      zh: "时令水果"
    },
    description: {
      pt: "Uma fruta pequena inteira ou uma fatia de fruta fresca, como melão, mamão ou melancia.",
      en: "A small whole fruit or a slice of fresh seasonal fruit, such as melon, papaya, or watermelon.",
      es: "Una fruta pequeña entera o una rebanada de fruta fresca, como melón, papaya o sandía.",
      ja: "メロン、パパイヤ、スイカなどの新鮮なカットフルーツまたはホールフルーツ。",
      zh: "新鲜切片水果或小整果，如甜瓜、木瓜或西瓜。"
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
      en: "Typical Seasonal Sweets",
      es: "Postres Típicos de Estación",
      ja: "季節の伝統スイーツ",
      zh: "传统时令甜品"
    },
    description: {
      pt: "Sobremesa individual de doces caseiros. Opções como canjica, arroz doce, compotas, pudim ou curau.",
      en: "Individual portion of traditional homemade seasonal desserts. Options like sweet hominy, rice pudding, flan, or sweet corn pudding.",
      es: "Postre individual casero tradicional. Opciones como arroz con leche, natillas, flan o compotas.",
      ja: "自家製季節のデザート（ライスプディング、カスタードプリン、コンポートなど）。",
      zh: "个人份手作传统甜点，包含牛奶玉米粥、大米布丁、布丁或果酱等。"
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
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 9.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Bule de Café, Leite ou Chá",
      en: "Pot of Coffee, Milk, or Tea",
      es: "Jarra de Café, Leche o Té",
      ja: "コーヒー・ミルク・紅茶のポット",
      zh: "壶装咖啡、牛奶或红茶"
    },
    description: {
      pt: "Servido quente em bule individual. Serve até duas xícaras.",
      en: "Served warm in an individual pot. Yields up to two cups.",
      es: "Servido caliente en jarra individual. Rinde hasta dos tazas.",
      ja: "温かいポットサービス（約2杯分）。",
      zh: "个人壶装温热上桌，可倒满约两杯。"
    }
  },
  {
    id: "drink-2-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chocolate Quente Especial",
      en: "Special Hot Chocolate",
      es: "Chocolate Caliente Especial",
      ja: "特製ホットチョコレート",
      zh: "特制热巧克力"
    },
    description: {
      pt: "Bebida cremosa feita com leite integral, chocolate, canela, leite condensado e maisena.",
      en: "Creamy hot drink made with whole milk, cocoa, cinnamon, condensed milk, and a touch of cornstarch.",
      es: "Bebida cremosa elaborada con leche entera, cacao, canela, leche condensada y maicena.",
      ja: "全脂乳、カカオ、シナモン、コンデンスミルクで仕上げた濃厚ホットチョコ。",
      zh: "全脂牛奶、可可粉、肉桂、炼乳与少许淀粉调制成的浓郁热饮。"
    }
  },
  {
    id: "drink-3-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Cafés e Bebidas Quentes",
      en: "Coffee & Hot Drinks",
      es: "Cafés y Bebidas Calientes",
      ja: "コーヒー＆温かい飲み物",
      zh: "咖啡与热饮"
    },
    price: 7.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chocolate Simples",
      en: "Simple Hot Chocolate",
      es: "Chocolate Caliente Tradicional",
      ja: "ホットチョコレート",
      zh: "原味热可可"
    },
    description: {
      pt: "Bebida quente preparada com leite integral, chocolate em pó e açúcar ou adoçante.",
      en: "Hot drink prepared with whole milk, cocoa powder, and sugar or sweetener.",
      es: "Bebida caliente preparada con leche entera, cacao en polvo y azúcar o edulcorante.",
      ja: "全脂乳とカカオパウダーのシンプルな温かいチョコドリンク。",
      zh: "全脂牛奶配合冲泡可可粉，添加适量糖或代糖。"
    }
  },
  {
    id: "drink-4-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Sucos e Vitaminas",
      en: "Juices & Smoothies",
      es: "Jugos y Licuados",
      ja: "ジュース＆スムージー",
      zh: "果汁与奶昔"
    },
    price: 10.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Suco de Frutas Natural",
      en: "Fresh Fruit Juice",
      es: "Jugo Natural de Frutas",
      ja: "生搾りフルーツジュース",
      zh: "鲜榨原汁果汁"
    },
    description: {
      pt: "Copo de suco de frutas natural preparado na hora. Consulte as opções de frutas disponíveis.",
      en: "Glass of freshly squeezed fruit juice. Please ask your waiter for available fruit options.",
      es: "Vaso de jugo de fruta natural recién preparado. Consulte las opciones disponibles.",
      ja: "新鮮な生搾りフルーツジュース。季節のフルーツ種類はスタッフまで。",
      zh: "现点现榨鲜果汁，具体可选水果种类请询问服务员。"
    }
  },
  {
    id: "drink-6-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Mineral com Gás 500ml",
      en: "Sparkling Mineral Water 500ml",
      es: "Agua Mineral con Gas 500ml",
      ja: "スパークリングミネラルウォーター 500ml",
      zh: "气泡矿泉水 500ml"
    },
    description: {
      pt: "Água mineral com gás engarrafada fresca de 500ml.",
      en: "Fresh bottled sparkling mineral water 500ml.",
      es: "Botella de agua mineral con gas fresca de 500ml.",
      ja: "フレッシュな炭酸入りミネラルウォーター 500mlボトル。",
      zh: "清爽瓶装气泡矿泉水 500ml。"
    }
  },
  {
    id: "drink-7-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Mineral sem Gás 500ml",
      en: "Still Mineral Water 500ml",
      es: "Agua Mineral sin Gas 500ml",
      ja: "ミネラルウォーター（無炭酸） 500ml",
      zh: "饮用矿泉水 500ml"
    },
    description: {
      pt: "Água mineral natural sem gás engarrafada fresca de 500ml.",
      en: "Fresh bottled natural still mineral water 500ml.",
      es: "Botella de agua mineral natural sin gas de 500ml.",
      ja: "ボトルのナチュラルミネラルウォーター 500ml。",
      zh: "清爽瓶装无气天然矿泉水 500ml。"
    }
  },
  {
    id: "drink-8-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Água Tônica",
      en: "Tonic Water",
      es: "Agua Tónica",
      ja: "トニックウォーター",
      zh: "汤力水"
    },
    description: {
      pt: "Lata de água tônica refrescante de 350ml.",
      en: "Refreshing canned tonic water 350ml.",
      es: "Lata de agua tónica refrescante de 350ml.",
      ja: "爽やかな缶入りトニックウォーター 350ml。",
      zh: "清爽罐装汤力汽水 350ml。"
    }
  },
  {
    id: "drink-9-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Coca-Cola",
      en: "Coca-Cola",
      es: "Coca-Cola",
      ja: "コカ・コーラ",
      zh: "可口可乐"
    },
    description: {
      pt: "Refrigerante Coca-Cola lata 350ml.",
      en: "Canned Coca-Cola soda 350ml.",
      es: "Refresco Coca-Cola en lata 350ml.",
      ja: "缶入りコカ・コーラ 350ml。",
      zh: "罐装可口可乐 350ml。"
    }
  },
  {
    id: "drink-10-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Coca-Cola Zero",
      en: "Coca-Cola Zero",
      es: "Coca-Cola Zero",
      ja: "コカ・コーラ ゼロ",
      zh: "零度可口可乐"
    },
    description: {
      pt: "Refrigerante Coca-Cola sem açúcar lata 350ml.",
      en: "Canned sugar-free Coca-Cola Zero soda 350ml.",
      es: "Refresco Coca-Cola sin azúcar en lata 350ml.",
      ja: "缶入り無糖コカ・コーラ ゼロ 350ml。",
      zh: "无糖罐装零度可口可乐 350ml。"
    }
  },
  {
    id: "drink-11-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Guaraná Antarctica",
      en: "Guaraná Antarctica",
      es: "Guaraná Antarctica",
      ja: "ガラナ・アンタルチカ",
      zh: "瓜拉纳汽水"
    },
    description: {
      pt: "Refrigerante Guaraná Antarctica lata 350ml.",
      en: "Canned Guaraná Antarctica soda 350ml.",
      es: "Refresco tradicional Guaraná Antarctica en lata 350ml.",
      ja: "ブラジル伝統ガラナ炭酸飲料 350ml缶。",
      zh: "巴西特色瓜拉纳风味汽水 350ml。"
    }
  },
  {
    id: "drink-12-dinner",
    category: "dinner",
    subcategory: "bebidas",
    section: {
      pt: "Águas e Refrigerantes",
      en: "Water & Sodas",
      es: "Aguas y Refrescos",
      ja: "水＆ソフトドリンク",
      zh: "矿泉水与汽水"
    },
    price: 6.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Guaraná Antarctica Zero",
      en: "Guaraná Antarctica Zero",
      es: "Guaraná Antarctica Zero",
      ja: "ガラナ・アンタルチカ ゼロ",
      zh: "无糖瓜拉纳汽水"
    },
    description: {
      pt: "Refrigerante Guaraná Antarctica sem açúcar lata 350ml.",
      en: "Canned sugar-free Guaraná Antarctica Zero soda 350ml.",
      es: "Refresco Guaraná Antarctica sin azúcar en lata 350ml.",
      ja: "無糖ガラナ炭酸飲料 350ml缶。",
      zh: "无糖罐装瓜拉纳汽水 350ml。"
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
      en: "Beers",
      es: "Cervezas",
      ja: "ビール",
      zh: "啤酒类"
    },
    price: 7.50,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Bohemia",
      en: "Bohemia Beer",
      es: "Cerveza Bohemia",
      ja: "ボヘミアビール",
      zh: "Bohemia 啤酒"
    },
    description: {
      pt: "Cerveja Pilsen tradicional brasileira de sabor leve e maltado.",
      en: "Traditional Brazilian Pilsner beer with a light, malty flavor.",
      es: "Cerveza Pilsen tradicional brasileña de sabor ligero y malteado.",
      ja: "軽やかでモルト感のある伝統的ブラジルピルスナービール。",
      zh: "传统巴西皮尔森啤酒，口感清爽，带有清香麦芽味。"
    }
  },
  {
    id: "alc-2",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Cervejas",
      en: "Beers",
      es: "Cervezas",
      ja: "ビール",
      zh: "啤酒类"
    },
    price: 6.50,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Skol",
      en: "Skol Beer",
      es: "Cerveza Skol",
      ja: "スコールビール",
      zh: "Skol 啤酒"
    },
    description: {
      pt: "Cerveja Pilsen leve, refrescante e de alta aceitação, servida gelada.",
      en: "Very light, crisp, and refreshing Brazilian Pilsner beer, served ice cold.",
      es: "Cerveza Pilsen ligera, refrescante y popular, servida helada.",
      ja: "キンキンに冷えた軽やかで爽快なピルスナービール。",
      zh: "冰镇上桌，极致爽口清淡的巴西皮尔森啤酒。"
    }
  },
  {
    id: "alc-3",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Cervejas",
      en: "Beers",
      es: "Cervezas",
      ja: "ビール",
      zh: "啤酒类"
    },
    price: 9.00,
    tags: ["lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cerveja Heineken",
      en: "Heineken Beer",
      es: "Cerveza Heineken",
      ja: "ハイネケンビール",
      zh: "喜力啤酒"
    },
    description: {
      pt: "Cerveja Premium Lager holandesa de sabor característico e marcante.",
      en: "Dutch Premium Lager beer, featuring its signature crisp malt flavor.",
      es: "Cerveza Premium Lager holandesa de sabor característico e intenso.",
      ja: "オランダ発のプレミアムラガービール。独自の爽やかな麦芽風味。",
      zh: "荷兰高端拉格啤酒，标志性清爽麦香与微苦回甘。"
    }
  },
  // --- Drinks ---
  {
    id: "alc-4",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails",
      es: "Tragos y Cocteles",
      ja: "カクテル＆ドリンク",
      zh: "鸡尾酒与调饮"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Limão",
      en: "Lime Caipirinha",
      es: "Caipirinha de Limón",
      ja: "カイピリーニャ（ライム）",
      zh: "巴西青柠卡伊皮里尼亚"
    },
    description: {
      pt: "Clássico drink brasileiro feito com uma dose de cachaça de qualidade, dois limões frescos espremidos, açúcar e gelo.",
      en: "Classic Brazilian cocktail made with a shot of cachaça, two fresh squeezed limes, sugar, and crushed ice.",
      es: "Clásico cóctel brasileño hecho con cachaça de calidad, limones frescos exprimidos, azúcar y hielo.",
      ja: "上質なカシャーサ、新鮮なライム、砂糖、砕氷で作る伝統ブラジルカクテル。",
      zh: "巴西经典国酒鸡尾酒：优质甘蔗酒（Cachaça）配鲜榨青柠、白糖与碎冰。"
    }
  },
  {
    id: "alc-5",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails",
      es: "Tragos y Cocteles",
      ja: "カクテル＆ドリンク",
      zh: "鸡尾酒与调饮"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Rum (Caipiríssima)",
      en: "Rum Caipirinha (Caipiríssima)",
      es: "Caipirinha de Ron (Caipiríssima)",
      ja: "カイピリーシマ（ラム・カイピリーニャ）",
      zh: "朗姆卡伊皮里尼亚"
    },
    description: {
      pt: "Variação saborosa da caipirinha preparada com rum importado, limão espremido, açúcar e gelo.",
      en: "Tasty caipirinha variation prepared with imported white rum, squeezed lime, sugar, and ice.",
      es: "Sabrosa variación de la caipirinha preparada con ron blanco importado, limón exprimido, azúcar y hielo.",
      ja: "輸入ホワイトラム、ライム、砂糖、氷で作るカイピリーニャアレンジ。",
      zh: "进口白朗姆酒替换甘蔗酒，搭配新鲜青柠与冰块调制。"
    }
  },
  {
    id: "alc-6",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails",
      es: "Tragos y Cocteles",
      ja: "カクテル＆ドリンク",
      zh: "鸡尾酒与调饮"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caipirinha de Vodka (Caipiroska)",
      en: "Vodka Caipirinha (Caipiroska)",
      es: "Caipirinha de Vodka (Caipiroska)",
      ja: "カイピロスカ（ウォッカ・カイピリーニャ）",
      zh: "伏特加卡伊皮里尼亚"
    },
    description: {
      pt: "Versão moderna da caipirinha preparada com vodka nacional premium, limão fresco espremido, açúcar e bastante gelo.",
      en: "Modern caipirinha version made with premium vodka, fresh squeezed lime, sugar, and ice.",
      es: "Versión moderna de la caipirinha preparada con vodka premium, limón fresco exprimido, azúcar y hielo.",
      ja: "プレミアムウォッカ、新鮮なライム、砂糖、氷で作る人気カクテル。",
      zh: "特级伏特加、鲜榨青柠与碎冰调制的现代风味卡伊皮里尼亚。"
    }
  },
  {
    id: "alc-7",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails",
      es: "Tragos y Cocteles",
      ja: "カクテル＆ドリンク",
      zh: "鸡尾酒与调饮"
    },
    price: 14.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cuba Libre",
      en: "Cuba Libre",
      es: "Cuba Libre",
      ja: "キューバ・リブレ",
      zh: "自由古巴"
    },
    description: {
      pt: "Mistura refrescante de rum, refrigerante sabor cola e suco de limão fresco com gelo.",
      en: "Refreshing blend of white rum, cola soda, and fresh lime juice served over ice.",
      es: "Mezcla refrescante de ron blanco, refresco de cola y jugo de limón fresco con hielo.",
      ja: "ラム、コーラ、新鮮なライムジュースを氷で割った爽快カクテル。",
      zh: "朗姆酒、可口可乐与鲜榨青柠汁融合的经典爽口调饮。"
    }
  },
  {
    id: "alc-8",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Drinks e Coquetéis",
      en: "Drinks & Cocktails",
      es: "Tragos y Cocteles",
      ja: "カクテル＆ドリンク",
      zh: "鸡尾酒与调饮"
    },
    price: 15.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Malibu",
      en: "Malibu Shot",
      es: "Copa de Malibu",
      ja: "マリブ（ココナッツリキュール）",
      zh: "马利宝椰子朗姆酒"
    },
    description: {
      pt: "Dose de licor Malibu de coco com rum caribenho. Doce e tropical.",
      en: "Shot of Malibu coconut liqueur blended with Caribbean rum. Sweet and tropical.",
      es: "Copa de licor Malibu de coco con ron caribeño. Dulce y tropical.",
      ja: "カリブ産ラムベースの濃厚ココナッツリキュール。トロピカルな甘み。",
      zh: "椰林风味马利宝椰子朗姆力娇酒单杯，甘甜热带风味。"
    }
  },
  // --- Vinhos e Espumantes ---
  {
    id: "alc-9",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 120.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Miolo Reserva (Garrafa)",
      en: "Miolo Reserva (Bottle)",
      es: "Vino Miolo Reserva (Botella)",
      ja: "ミオロ・リゼルヴァ（ボトルワイン）",
      zh: "Miolo 珍藏葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho fino brasileiro da vinícola Miolo. Opções: Cabernet Sauvignon, Merlot ou Chardonnay.",
      en: "Fine Brazilian wine from the Miolo winery. Available: Cabernet Sauvignon, Merlot, or Chardonnay.",
      es: "Vino fino brasileño de la bodega Miolo. Opciones: Cabernet Sauvignon, Merlot o Chardonnay.",
      ja: "ブラジルの名門ミオロワイナリーの上質ワイン。（カベルネ・メルロー・シャルドネ）。",
      zh: "巴西名庄 Miolo 出产的高级精选葡萄酒（赤霞珠、梅洛或霞多丽可选）。"
    }
  },
  {
    id: "alc-10",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 70.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Miolo Seleção (Garrafa)",
      en: "Miolo Seleção (Bottle)",
      es: "Vino Miolo Seleção (Botella)",
      ja: "ミオロ・セレクション（ボトルワイン）",
      zh: "Miolo 特选干红葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho de mesa equilibrado da vinícola Miolo, ideal para acompanhar refeições.",
      en: "Balanced table wine from the Miolo winery, perfect for pairing with your dinner.",
      es: "Vino de mesa equilibrado de la bodega Miolo, ideal para acompañar la cena.",
      ja: "バランスの取れたミオロワイナリーのテーブルワイン。ディナーにぴったり。",
      zh: "口感平衡柔和的特选餐酒，非常适合搭配佐餐。"
    }
  },
  {
    id: "alc-11",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 40.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Piagentini (Garrafa)",
      en: "Piagentini Wine (Bottle)",
      es: "Vino Piagentini (Botella)",
      ja: "ピアジェンティーニ ワイン（ボトル）",
      zh: "Piagentini 红葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho nacional de sabor leve e frutado.",
      en: "Traditional Brazilian wine with a light, fruity profile.",
      es: "Vino nacional de sabor ligero y frutado.",
      ja: "軽やかでフルーティーな伝統ブラジルワイン。",
      zh: "传统巴西风味葡萄酒，口感清爽，果香浓郁。"
    }
  },
  {
    id: "alc-12",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 40.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Saint Germain (Garrafa)",
      en: "Saint Germain (Bottle)",
      es: "Vino Saint Germain (Botella)",
      ja: "サンジェルマン ワイン（ボトル）",
      zh: "Saint Germain 葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho de mesa nacional. Disponível em: Cabernet Franc, Merlot suave ou Assemblage suave.",
      en: "Brazilian table wine. Available: Cabernet Franc, Sweet Merlot, or Sweet Assemblage.",
      es: "Vino de mesa nacional. Disponible en: Cabernet Franc, Merlot suave o Assemblage suave.",
      ja: "ブラジル産テーブルワイン（カベルネ・フラン、スウィートメルロー等）。",
      zh: "巴西家常佐餐饮用酒（品丽珠、柔和梅洛或混酿可选）。"
    }
  },
  {
    id: "alc-13",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 13.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Taça de Vinho da Casa",
      en: "House Wine Glass",
      es: "Copa de Vino de la Casa",
      ja: "ハウスワイン（グラス）",
      zh: "店选杯装葡萄酒"
    },
    description: {
      pt: "Uma dose de vinho selecionado da casa servido na taça.",
      en: "A glass of our specially selected house wine.",
      es: "Una copa de vino especialmente seleccionado de la casa.",
      ja: "厳選したハウスワインのグラスサービス。",
      zh: "精选特供杯装红/白葡萄酒。"
    }
  },
  {
    id: "alc-15",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 50.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Concha y Toro Reservado (Garrafa)",
      en: "Concha y Toro Reservado (Bottle)",
      es: "Vino Concha y Toro Reservado (Botella)",
      ja: "コンチャ・イ・トロ レセルバード（ボトル）",
      zh: "干露珍藏红葡萄酒（瓶装）"
    },
    description: {
      pt: "Tradicional vinho tinto chileno, de paladar equilibrado e frutado.",
      en: "Traditional Chilean red wine, offering a balanced and fruity profile.",
      es: "Tradicional vino tinto chileno, de paladar equilibrado y frutado.",
      ja: "フルーティーで調和の取れた伝統的チリ産赤ワイン。",
      zh: "智利传统干红葡萄酒，果香味好，结构平衡。"
    }
  },
  {
    id: "alc-16",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 56.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Familiar (Garrafa)",
      en: "Familiar Wine (Bottle)",
      es: "Vino Familiar (Botella)",
      ja: "ファミリア・ワイン（ボトル）",
      zh: "Familiar 家常干红葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho tinto seco nacional, clássico para refeições em família.",
      en: "Traditional Brazilian dry red wine, a classic choice for family dining.",
      es: "Vino tinto seco nacional, clásico para comidas en familia.",
      ja: "家族の食事にぴったりの伝統的なブラジル産ドライ赤ワイン。",
      zh: "经典巴西干红餐酒，家庭聚餐佐餐的传统佳选。"
    }
  },
  {
    id: "alc-17",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 65.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho Santa Helena (Garrafa)",
      en: "Santa Helena Wine (Bottle)",
      es: "Vino Santa Helena (Botella)",
      ja: "サンタ・ヘレナ ワイン（ボトル）",
      zh: "圣海伦娜葡萄酒（瓶装）"
    },
    description: {
      pt: "Vinho tinto chileno de prestígio. Disponível em Cabernet Sauvignon ou Merlot.",
      en: "Prestigious Chilean red wine. Available: Cabernet Sauvignon or Merlot.",
      es: "Vino tinto chileno de prestigio. Disponible en Cabernet Sauvignon o Merlot.",
      ja: "チリの名門プレミアム赤ワイン。（カベルネ・サヴィニョンまたはメルロー）。",
      zh: "智利著名酒庄干红葡萄酒（赤霞珠或梅洛可选）。"
    }
  },
  {
    id: "alc-18",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 22.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vinho do Porto (Dose)",
      en: "Port Wine (Shot)",
      es: "Vino de Oporto (Dosis)",
      ja: "ポートワイン（グラス）",
      zh: "波特强化甜葡萄酒（单杯）"
    },
    description: {
      pt: "Uma dose do tradicional e encorpado vinho fortificado português.",
      en: "A shot of the traditional, sweet, and full-bodied Portuguese fortified wine.",
      es: "Una copa del tradicional y con cuerpo vino fortificado portugués.",
      ja: "豊潤な甘みとコクが特徴の伝統ポルトガル産フォーティファイドワイン。",
      zh: "葡萄牙传统名酒：酒体丰满、芳香浓郁的强化波特酒。"
    }
  },
  {
    id: "alc-19",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 260.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chandon Brut (Garrafa)",
      en: "Chandon Brut (Bottle)",
      es: "Espumante Chandon Brut (Botella)",
      ja: "シャンドン・ブリュット（スパークリングボトル）",
      zh: "香颂 Brut 起泡酒（瓶装）"
    },
    description: {
      pt: "Espumante nacional premium de aroma fresco e frutado.",
      en: "Premium Brazilian sparkling wine with a crisp, fruity aroma.",
      es: "Espumante nacional premium de aroma fresco y frutado.",
      ja: "爽やかな果実のアロマ漂う国産プレミアムスパークリングワイン。",
      zh: "巴西高端天然起泡酒，带清爽宜人的果香。"
    }
  },
  {
    id: "alc-20",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Vinhos e Espumantes",
      en: "Wines & Champagnes",
      es: "Vinos y Espumantes",
      ja: "ワイン＆スパークリング",
      zh: "葡萄酒与起泡酒"
    },
    price: 260.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Chandon Demi-Sec (Garrafa)",
      en: "Chandon Demi-Sec (Bottle)",
      es: "Espumante Chandon Demi-Sec (Botella)",
      ja: "シャンドン・ドゥミセック（スパークリングボトル）",
      zh: "香颂 Demi-Sec 半干起泡酒（瓶装）"
    },
    description: {
      pt: "Espumante nacional premium, suavemente doce e equilibrado.",
      en: "Premium Brazilian sparkling wine, smoothly sweet and balanced.",
      es: "Espumante nacional premium, suavemente dulce y equilibrado.",
      ja: "柔らかな甘みと洗練された味わいのプレミアムスパークリングワイン。",
      zh: "巴西高端半干起泡酒，口感微甜优雅，富有层次。"
    }
  },
  // --- Doses e Destilados ---
  {
    id: "alc-21",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 18.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Ballantine's 8 Anos (Dose)",
      en: "Ballantine's 8 Years Whisky (Shot)",
      es: "Whisky Ballantine's 8 Años (Dosis)",
      ja: "バランタイン 8年（ショット）",
      zh: "百龄坛 8年威士忌（单杯）"
    },
    description: {
      pt: "Uma dose (50ml) do suave Whisky escocês blended de 8 anos.",
      en: "One shot (50ml) of the smooth 8-year-old blended Scotch whisky.",
      es: "Una copa (50ml) del suave Whisky escocés blended de 8 años.",
      ja: "8年熟成のマイルドなブレンデッドスコッチウイスキー（50ml）。",
      zh: "单杯（50ml）陈酿8年苏格兰调和威士忌，顺滑易入口。"
    }
  },
  {
    id: "alc-22",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 26.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Chivas Regal 12 Anos (Dose)",
      en: "Chivas Regal 12 Years Whisky (Shot)",
      es: "Whisky Chivas Regal 12 Años (Dosis)",
      ja: "シーバスリーガル 12年（ショット）",
      zh: "芝华士 12年威士忌（单杯）"
    },
    description: {
      pt: "Uma dose (50ml) do refinado Whisky escocês premium envelhecido por 12 anos.",
      en: "One shot (50ml) of the refined premium Scotch whisky aged for 12 years.",
      es: "Una copa (50ml) del refinado Whisky escocés premium de 12 años.",
      ja: "12年熟成を重ねた洗練されたプレミアムスコッチウイスキー（50ml）。",
      zh: "单杯（50ml）12年高端调和苏格兰威士忌，口感醇厚丰富。"
    }
  },
  {
    id: "alc-23",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Grant's 8 Anos (Dose)",
      en: "Grant's 8 Years Whisky (Shot)",
      es: "Whisky Grant's 8 Años (Dosis)",
      ja: "グランツ 8年（ショット）",
      zh: "格兰 8年威士忌（单杯）"
    },
    description: {
      pt: "Uma dose (50ml) do aromático Whisky escocês blended envelhecido por 8 anos.",
      en: "One shot (50ml) of the aromatic blended Scotch whisky aged for 8 years.",
      es: "Una copa (50ml) del aromático Whisky escocés de 8 años.",
      ja: "芳醇な香りの8年熟成ブレンデッドスコッチウイスキー（50ml）。",
      zh: "单杯（50ml）8年陈酿芳香型苏格兰调和威士忌。"
    }
  },
  {
    id: "alc-24",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 11.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Passport Scotch (Dose)",
      en: "Passport Scotch Whisky (Shot)",
      es: "Whisky Passport Scotch (Dosis)",
      ja: "パスポート スコッチ（ショット）",
      zh: "护照苏格兰威士忌（单杯）"
    },
    description: {
      pt: "Uma dose (50ml) do clássico Whisky blended escocês.",
      en: "One shot (50ml) of the classic blended Scotch whisky.",
      es: "Una copa (50ml) del clásico Whisky blended escocés.",
      ja: "伝統的なブレンデッドスコッチウイスキーのショット（50ml）。",
      zh: "单杯（50ml）经典苏格兰调和威士忌。"
    }
  },
  {
    id: "alc-25",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 16.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Whisky Johnnie Walker Red Label (Dose)",
      en: "Johnnie Walker Red Label Whisky (Shot)",
      es: "Whisky Johnnie Walker Red Label (Dosis)",
      ja: "ジョニーウォーカー レッドラベル（ショット）",
      zh: "尊尼获加红牌威士忌（单杯）"
    },
    description: {
      pt: "Uma dose (50ml) do Whisky escocês Johnnie Walker Red Label de 8 anos.",
      en: "One shot (50ml) of the famous Johnnie Walker Red Label blended Scotch whisky.",
      es: "Una copa (50ml) del famoso Whisky escocés Johnnie Walker Red Label.",
      ja: "世界中で愛されるジョニーウォーカー・レッドラベルのショット（50ml）。",
      zh: "单杯（50ml）著名尊尼获加红牌苏格兰威士忌。"
    }
  },
  {
    id: "alc-26",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Conhaque Domecq (Dose)",
      en: "Domecq Brandy (Shot)",
      es: "Coñac Domecq (Dosis)",
      ja: "ドメック ブランデー（ショット）",
      zh: "Domecq 白兰地（单杯）"
    },
    description: {
      pt: "Uma dose de conhaque nacional de sabor aveludado.",
      en: "A shot of the traditional Brazilian brandy with a smooth finish.",
      es: "Una copa de coñac nacional de sabor aterciopelado.",
      ja: "まろやかな味わいの伝統的なブラジルブランデー。",
      zh: "单杯经典巴西白兰地，口感滑顺余韵悠长。"
    }
  },
  {
    id: "alc-27",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Conhaque Dreher (Dose)",
      en: "Dreher Brandy (Shot)",
      es: "Coñac Dreher (Dosis)",
      ja: "ドレーハー ブランデー（ショット）",
      zh: "Dreher 白兰地（单杯）"
    },
    description: {
      pt: "Uma dose do popular e tradicional conhaque brasileiro.",
      en: "A shot of the classic and popular Brazilian brandy.",
      es: "Una copa del popular y tradicional coñac brasileño.",
      ja: "ブラジルで長年愛される伝統ブランデーのショット。",
      zh: "单杯巴西极具代表性的传统白兰地。"
    }
  },
  {
    id: "alc-28",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Cachaça (Dose)",
      en: "Cachaça (Shot)",
      es: "Cachaça Brasileña (Dosis)",
      ja: "カシャーサ（ブラジル甘蔗酒）",
      zh: "巴西甘蔗烈酒 Cachaça（单杯）"
    },
    description: {
      pt: "Uma dose de cachaça mineira tradicional de excelente qualidade.",
      en: "A shot of premium traditional Minas sugar cane spirit.",
      es: "Una copa de cachaça artesanal de Minas Gerais de excelente calidad.",
      ja: "ミナスジェライス州伝統の上質カシャーサ（サトウキビ蒸留酒）。",
      zh: "单杯米纳斯州手工精酿顶级甘蔗烈酒。"
    }
  },
  {
    id: "alc-29",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Gin (Dose)",
      en: "Gin (Shot)",
      es: "Ginebra Gin (Dosis)",
      ja: "ジン（ショット）",
      zh: "金酒 Gin（单杯）"
    },
    description: {
      pt: "Uma dose de gin aromático nacional de 50ml.",
      en: "A shot of aromatic dry gin 50ml.",
      es: "Una copa de ginebra aromática nacional de 50ml.",
      ja: "アロマ香るドライジンのショット（50ml）。",
      zh: "单杯（50ml）芳香型干金酒。"
    }
  },
  {
    id: "alc-30",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Rum (Dose)",
      en: "Rum (Shot)",
      es: "Ron Caribeño (Dosis)",
      ja: "ラム（ショット）",
      zh: "朗姆酒 Rum（单杯）"
    },
    description: {
      pt: "Uma dose de rum caribenho de alta qualidade de 50ml.",
      en: "A shot of high-quality Caribbean rum 50ml.",
      es: "Una copa de ron caribeño de alta calidad de 50ml.",
      ja: "カリブ産プレミアムラムのショット（50ml）。",
      zh: "单杯（50ml）优质加勒比朗姆酒。"
    }
  },
  {
    id: "alc-31",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Doses e Destilados",
      en: "Spirits & Shots",
      es: "Licores y Destilados",
      ja: "スピリッツ＆ショット",
      zh: "蒸馏烈酒类"
    },
    price: 8.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vodka (Dose)",
      en: "Vodka (Shot)",
      es: "Vodka (Dosis)",
      ja: "ウォッカ（ショット）",
      zh: "伏特加 Vodka（单杯）"
    },
    description: {
      pt: "Uma dose de vodka premium nacional destilada de 50ml.",
      en: "A shot of premium distilled vodka 50ml.",
      es: "Una copa de vodka premium nacional destilada de 50ml.",
      ja: "プレミアム国産ウォッカのショット（50ml）。",
      zh: "单杯（50ml）纯净特级伏特加。"
    }
  },
  // --- Licores e Aperitivos ---
  {
    id: "alc-32",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 20.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Amarula (Dose)",
      en: "Amarula Cream Liqueur (Shot)",
      es: "Licor Amarula (Dosis)",
      ja: "アマルーラ リキュール（ショット）",
      zh: "阿玛鲁拉大象奶油酒（单杯）"
    },
    description: {
      pt: "Uma dose do cremoso licor sul-africano preparado com o fruto da marula.",
      en: "A shot of the creamy South African liqueur made from wild marula fruit.",
      es: "Una copa del cremoso licor sudafricano elaborado con fruta marula.",
      ja: "野生のマルーラ果実から作られる南アフリカの濃厚クリームリキュール。",
      zh: "由南非野生玛鲁拉树果实酿制的香浓奶酒单杯。"
    }
  },
  {
    id: "alc-33",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Campari (Dose)",
      en: "Campari (Shot)",
      es: "Campari (Dosis)",
      ja: "カンパリ（ショット）",
      zh: "金巴利 Campari（单杯）"
    },
    description: {
      pt: "Uma dose do clássico aperitivo amargo italiano de coloração vermelha.",
      en: "A shot of the classic Italian bitter herbal aperitif.",
      es: "Una copa del clásico aperitivo amargo italiano de tono rojo.",
      ja: "鮮やかな赤色とハーブのほろ苦さが特徴の伝統イタリアンアペリティフ。",
      zh: "标志性红色的经典意大利苦味草本餐前酒单杯。"
    }
  },
  {
    id: "alc-34",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Vermute Cinzano (Dose)",
      en: "Cinzano Vermouth (Shot)",
      es: "Vermut Cinzano (Dosis)",
      ja: "チンザノ ベルモット（ショット）",
      zh: "全赞诺味美思 Cinzano（单杯）"
    },
    description: {
      pt: "Uma dose do tradicional vermute italiano aromático.",
      en: "A shot of the traditional Italian vermouth.",
      es: "Una copa del tradicional vermut italiano aromático.",
      ja: "芳醇な香りの伝統イタリアンベルモット。",
      zh: "单杯传统意式芳香味美思餐前酒。"
    }
  },
  {
    id: "alc-35",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 30.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Cointreau (Dose)",
      en: "Cointreau Liqueur (Shot)",
      es: "Licor Cointreau (Dosis)",
      ja: "コアントロー（ショット）",
      zh: "君度橙酒 Cointreau（单杯）"
    },
    description: {
      pt: "Uma dose do famoso licor fino francês com sabor de cascas de laranja.",
      en: "A shot of the famous French triple sec orange liqueur.",
      es: "Una copa del famoso licor fino francés con sabor a cáscaras de naranja.",
      ja: "オレンジピールの爽やかな香りが広がる有名なフランス製トリプルセック。",
      zh: "著名法国橙皮精酿力娇酒（Triple Sec）单杯。"
    }
  },
  {
    id: "alc-36",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 25.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Frangelico (Dose)",
      en: "Frangelico Liqueur (Shot)",
      es: "Licor Frangelico (Dosis)",
      ja: "フランジェリコ（ショット）",
      zh: "榛子力娇酒 Frangelico（单杯）"
    },
    description: {
      pt: "Uma dose do elegante licor italiano de avelãs e ervas finas.",
      en: "A shot of the elegant Italian hazelnut and herb liqueur.",
      es: "Una copa del elegante licor italiano de avellanas y hierbas finas.",
      ja: "ヘーゼルナッツと香草が香るエレガントなイタリア製リキュール。",
      zh: "优雅榛子与精选草本酿制意式榛子酒单杯。"
    }
  },
  {
    id: "alc-37",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licores Nacionais (Dose)",
      en: "National Liqueurs (Shot)",
      es: "Licores Nacionales (Dosis)",
      ja: "国産リキュール（ショット）",
      zh: "国产精选力娇酒（单杯）"
    },
    description: {
      pt: "Dose de licor nacional. Sabores: Menta, Cacau, Cereja, Strega, Tangerina ou Laranja.",
      en: "A shot of Brazilian liqueur. Flavors: Mint, Cocoa, Cherry, Strega, Tangerine, or Orange.",
      es: "Copa de licor nacional. Sabores: Menta, Cacao, Cereza, Strega, Mandarina o Naranja.",
      ja: "国産リキュールショット（ミント、カカオ、チェリー、ストレガ、タンジェリン、オレンジ等）。",
      zh: "单杯巴西国产力娇酒（薄荷、可可、樱桃、柑橘等口味可选）。"
    }
  },
  {
    id: "alc-38",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 15.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Licor Manischewitz Cereja (Dose)",
      en: "Manischewitz Cherry Liqueur (Shot)",
      es: "Licor Manischewitz Cereza (Dosis)",
      ja: "マニシェヴィッツ チェリー（ショット）",
      zh: "曼尼舍维茨樱桃酒（单杯）"
    },
    description: {
      pt: "Uma dose do tradicional licor kosher com sabor marcante de cereja americana.",
      en: "A shot of the traditional sweet kosher liqueur with a distinct American cherry flavor.",
      es: "Una copa del tradicional licor kosher con intenso sabor a cereza.",
      ja: "アメリカンチェリーの濃厚な風味が広がる伝統的コーシャリキュール。",
      zh: "传统犹太洁食（Kosher）甜酒，带浓郁美洲樱桃风味。"
    }
  },
  {
    id: "alc-39",
    category: "dinner",
    subcategory: "bebidas-alcoolicas",
    section: {
      pt: "Licores e Aperitivos",
      en: "Liqueurs & Aperitifs",
      es: "Licores y Aperitivos",
      ja: "リキュール＆食前酒",
      zh: "利口酒与餐前酒"
    },
    price: 7.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Martini Vermute (Dose)",
      en: "Martini Vermouth (Shot)",
      es: "Martini Vermut (Dosis)",
      ja: "マルティーニ ベルモット（ショット）",
      zh: "马天尼味美思 Martini（单杯）"
    },
    description: {
      pt: "Uma dose do icônico vermute italiano Martini (Bianco ou Rosso).",
      en: "A shot of the iconic Italian vermouth Martini (Bianco or Rosso).",
      es: "Una copa del icónico vermut italiano Martini (Bianco o Rosso).",
      ja: "世界的に有名なイタリアンベルモット（ビアンコ／ロッソ）。",
      zh: "单杯意式经典马天尼味美思（白味美思/红味美思）。"
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
// ==========================================================================
// LANGUAGE CONFIGURATION & DICTIONARIES
// ==========================================================================
const LANG_CONFIG = {
  pt: { flag: "🇧🇷", code: "PT", name: "Português", locale: "pt-BR" },
  en: { flag: "🇺🇸", code: "EN", name: "English", locale: "en-US" },
  es: { flag: "🇪🇸", code: "ES", name: "Español", locale: "es-ES" },
  ja: { flag: "🇯🇵", code: "JA", name: "日本語", locale: "ja-JP" },
  zh: { flag: "🇨🇳", code: "ZH", name: "中文", locale: "zh-CN" }
};

function getText(obj, lang) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj["en"] || obj["pt"] || "";
}

const TRANSLATIONS = {
  pt: {
    lblFontSize: "Acessibilidade:",
    heroSubtitle: "Cardápio Digital de Gastronomia",
    txtTabBreakfast: "Café da Manhã",
    txtTimeBreakfast: "07:00 - 11:00",
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
    txtServiceDesc: "Se você possui restrições alimentares ou precisa de alguma alteração no prato, por favor fale com a nossa equipe.",
    btnCardDetails: "Ver Detalhes",
    badgeGF: "Sem Glúten",
    badgeLF: "Sem Lactose",
    badgeVeg: "Vegetariano",
    lblModalIngredients: "Ingredientes / Descrição:",
    btnModalBack: "Voltar ao Cardápio"
  },
  en: {
    lblFontSize: "Accessibility:",
    heroSubtitle: "Digital Dining Menu",
    txtTabBreakfast: "Breakfast",
    txtTimeBreakfast: "07:00 AM - 11:00 AM",
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
    txtServiceTitle: "Dietary Restrictions or Requests?",
    txtServiceDesc: "If you have dietary restrictions or need dish alterations, please let our team know.",
    btnCardDetails: "View Details",
    badgeGF: "Gluten-Free",
    badgeLF: "Lactose-Free",
    badgeVeg: "Vegetarian",
    lblModalIngredients: "Ingredients / Description:",
    btnModalBack: "Back to Menu"
  },
  es: {
    lblFontSize: "Accesibilidad:",
    heroSubtitle: "Menú Digital de Gastronomía",
    txtTabBreakfast: "Desayuno",
    txtTimeBreakfast: "07:00 - 11:00",
    txtTabAfternoonTea: "Merienda / Té",
    txtTimeAfternoonTea: "16:00 - 18:30",
    txtTabDinner: "Cena",
    txtTimeDinner: "19:00 - 21:30",
    searchInput: "Buscar plato o ingrediente...",
    txtFilterLabel: "Filtrar por:",
    chipGF: "<span class='chip-color gf-color'></span> Sin Gluten (SG)",
    chipLF: "<span class='chip-color lf-color'></span> Sin Lactosa (SL)",
    chipVeg: "<span class='chip-color veg-color'></span> Vegetariano (VG)",
    txtNoResults: "No se encontraron platos con los filtros seleccionados.",
    btnResetFilters: "Mostrar Todos los Platos",
    txtServiceTitle: "¿Dudas o Restricciones?",
    txtServiceDesc: "Si tiene restricciones alimentarias o necesita alguna modificación en el plato, por favor consulte a nuestro equipo.",
    btnCardDetails: "Ver Detalles",
    badgeGF: "Sin Gluten",
    badgeLF: "Sin Lactosa",
    badgeVeg: "Vegetariano",
    lblModalIngredients: "Ingredientes / Descripción:",
    btnModalBack: "Volver al Menú"
  },
  ja: {
    lblFontSize: "アクセシビリティ:",
    heroSubtitle: "デジタルダイニングメニュー",
    txtTabBreakfast: "朝食",
    txtTimeBreakfast: "07:00 - 11:00",
    txtTabAfternoonTea: "アフタヌーンティー",
    txtTimeAfternoonTea: "16:00 - 18:30",
    txtTabDinner: "夕食",
    txtTimeDinner: "19:00 - 21:30",
    searchInput: "料理や食材を検索...",
    txtFilterLabel: "フィルター:",
    chipGF: "<span class='chip-color gf-color'></span> グルテンフリー (GF)",
    chipLF: "<span class='chip-color lf-color'></span> ラクトースフリー (LF)",
    chipVeg: "<span class='chip-color veg-color'></span> ベジタリアン (VG)",
    txtNoResults: "選択したフィルターに一致する料理が見つかりませんでした。",
    btnResetFilters: "すべての料理を表示",
    txtServiceTitle: "ご質問やアレルギーをお持ちですか？",
    txtServiceDesc: "食事制限や料理の変更のご希望がございましたら、スタッフにお気軽にお声がけください。",
    btnCardDetails: "詳細を見る",
    badgeGF: "グルテンフリー",
    badgeLF: "ラクトースフリー",
    badgeVeg: "ベジタリアン",
    lblModalIngredients: "原材料・商品説明:",
    btnModalBack: "メニューに戻る"
  },
  zh: {
    lblFontSize: "无障碍:",
    heroSubtitle: "美食品鉴电子菜单",
    txtTabBreakfast: "早餐",
    txtTimeBreakfast: "07:00 - 11:00",
    txtTabAfternoonTea: "下午茶",
    txtTimeAfternoonTea: "16:00 - 18:30",
    txtTabDinner: "晚餐",
    txtTimeDinner: "19:00 - 21:30",
    searchInput: "搜索菜品或食材...",
    txtFilterLabel: "筛选条件:",
    chipGF: "<span class='chip-color gf-color'></span> 无麸质 (GF)",
    chipLF: "<span class='chip-color lf-color'></span> 无乳糖 (LF)",
    chipVeg: "<span class='chip-color veg-color'></span> 素食 (VG)",
    txtNoResults: "未找到符合筛选条件的菜品。",
    btnResetFilters: "显示所有菜品",
    txtServiceTitle: "饮食限制或特别要求？",
    txtServiceDesc: "如果您有特殊饮食限制或需要调整菜品，请随时告知我们的服务人员。",
    btnCardDetails: "查看详情",
    badgeGF: "无麸质",
    badgeLF: "无乳糖",
    badgeVeg: "素食",
    lblModalIngredients: "食材与配料描述:",
    btnModalBack: "返回菜单"
  }
};

// ==========================================================================
// SUBCATEGORIES CONFIGURATION
// ==========================================================================
const SUBCATEGORIES = {
  "afternoon-tea": [
    { id: "lanches", pt: "Lanches", en: "Snacks", es: "Tentempiés", ja: "軽食", zh: "小吃点心", icon: "🥐" },
    { id: "doces", pt: "Doces & Frutas", en: "Sweets & Fruits", es: "Dulces y Frutas", ja: "スイーツ＆フルーツ", zh: "甜品与水果", icon: "🍰" },
    { id: "bebidas", pt: "Cafés & Bebidas", en: "Coffee & Drinks", es: "Café y Bebidas", ja: "コーヒー＆ドリンク", zh: "咖啡与饮品", icon: "☕" }
  ],
  "dinner": [
    { id: "principais", pt: "Pratos Principais", en: "Main Courses", es: "Platos Principales", ja: "メインディッシュ", zh: "主菜", icon: "🥩" },
    { id: "sobremesas", pt: "Sobremesas", en: "Desserts", es: "Postres", ja: "デザート", zh: "甜点", icon: "🍨" },
    { id: "bebidas", pt: "Bebidas", en: "Soft Drinks", es: "Bebidas", ja: "ソフトドリンク", zh: "软饮料", icon: "🥤" },
    { id: "bebidas-alcoolicas", pt: "Bebidas Alcoólicas", en: "Alcoholic Drinks", es: "Bebidas Alcohólicas", ja: "アルコール飲料", zh: "含酒精饮品", icon: "🍷" }
  ]
};

// ==========================================================================
// APP STATE MANAGEMENT
// ==========================================================================
function getInitialCategory() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes >= 0 && totalMinutes < 12 * 60) {
    return "breakfast";
  } else if (totalMinutes >= 12 * 60 && totalMinutes < (18 * 60 + 30)) {
    return "afternoon-tea";
  } else {
    return "dinner";
  }
}

function updateActiveTab() {
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === currentCategory) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

let currentLang = localStorage.getItem("lang") || "pt";
let currentTheme = localStorage.getItem("theme") || "light";
let currentTextSize = localStorage.getItem("textSize") || "normal";
let currentCategory = getInitialCategory();
let currentSubcategory = currentCategory === "breakfast" ? "" : "lanches";
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
  updateActiveTab();
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
  const normalizedSize = size === "large" ? "large" : "normal";
  bodyEl.classList.remove("text-normal", "text-large", "text-xlarge", "text-huge");
  bodyEl.classList.add(`text-${normalizedSize}`);
  currentTextSize = normalizedSize;
  try {
    localStorage.setItem("textSize", normalizedSize);
  } catch (e) {
    console.warn("Storage access not allowed:", e);
  }

  const fontToggleBtn = document.getElementById("btnFontToggle");
  if (fontToggleBtn) {
    if (normalizedSize === "large") {
      fontToggleBtn.classList.add("active");
      fontToggleBtn.setAttribute("aria-pressed", "true");
    } else {
      fontToggleBtn.classList.remove("active");
      fontToggleBtn.setAttribute("aria-pressed", "false");
    }
  }
}

function toggleTextSize() {
  const nextSize = currentTextSize === "large" ? "normal" : "large";
  applyTextSize(nextSize);
}

// ==========================================================================
// TRANSLATION & LANGUAGE FUNCTIONS
// ==========================================================================
function applyLanguage(lang) {
  if (!LANG_CONFIG[lang]) lang = "pt";
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    console.warn("Storage access not allowed:", e);
  }

  // Update current flag and code in header toggle button
  const flagEl = document.getElementById("currentLangFlag");
  const codeEl = document.getElementById("currentLangCode");
  if (flagEl) flagEl.textContent = LANG_CONFIG[lang].flag;
  if (codeEl) codeEl.textContent = LANG_CONFIG[lang].code;

  // Highlight active option in dropdown menu
  document.querySelectorAll(".lang-option").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Translate static UI elements
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt"];
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

  // Render subcategories so they update their text language
  renderSubcategories();

  // Re-render menu to display translated items
  renderMenu();
}

function setupLanguageDropdown() {
  const wrapper = document.getElementById("langDropdownWrapper");
  const toggleBtn = document.getElementById("btnLangToggle");

  if (!wrapper || !toggleBtn) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = wrapper.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang) {
        applyLanguage(selectedLang);
      }
      wrapper.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", () => {
    wrapper.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  });
}

function renderSubcategories() {
  if (!subcategoryNav) return;
  subcategoryNav.innerHTML = "";

  const list = SUBCATEGORIES[currentCategory] || [];
  list.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = `btn-sub ${currentSubcategory === sub.id ? "active" : ""}`;
    btn.setAttribute("data-sub", sub.id);
    const label = getText(sub, currentLang);
    btn.setAttribute("aria-label", label);

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
  const searchFilterSec = document.getElementById("searchFilterSection");
  const serviceSec = document.getElementById("serviceSection");
  
  if (currentCategory === "breakfast") {
    if (subcategoryContainer) subcategoryContainer.style.display = "none";
    if (searchFilterSec) searchFilterSec.style.display = "none";
    if (noResultsMessage) noResultsMessage.style.display = "none";
    if (serviceSec) serviceSec.style.display = "none";
    
    const breakfastTitles = {
      pt: "Serviço de Café da Manhã",
      en: "Breakfast Service",
      es: "Servicio de Desayuno",
      ja: "朝食サービス",
      zh: "早餐服务"
    };
    const breakfastItems = {
      pt: [
        "É possível solicitar ao garçom por omeletes preparados na hora.",
        "Caso possua restrições alimentares, por favor informe a nossa equipe.",
        "Caso tenha dificuldades de locomoção, nossos garçons estão à disposição para servir os alimentos diretamente em sua mesa."
      ],
      en: [
        "You may request freshly made omelets directly from the waiter.",
        "Please inform our staff if you have any dietary restrictions.",
        "If you have mobility difficulties, our waiters are available to serve food directly to your table."
      ],
      es: [
        "Puede solicitar al camarero tortillas preparadas al momento.",
        "Si tiene alguna restricción alimentaria, informe a nuestro personal.",
        "Si tiene dificultades de movilidad, nuestros camareros están a su disposición para servirle en su mesa."
      ],
      ja: [
        "スタッフに出来立てのオムレツをご注文いただけます。",
        "アレルギーや食事制限がございましたら、スタッフまでお申し付けください。",
        "お体が不自由なお客様には、スタッフがお席までお料理をお運びいたします。"
      ],
      zh: [
        "您可以直接向服务员点选现做煎蛋卷。",
        "如果您有饮食限制，请告知我们的工作人员。",
        "如果您行动不便，我们的服务员将竭诚为您直接送餐到桌。"
      ]
    };

    const titleText = breakfastTitles[currentLang] || breakfastTitles.en;
    const itemsList = breakfastItems[currentLang] || breakfastItems.en;

    menuListEl.style.display = "flex";
    menuListEl.innerHTML = `
      <div class="breakfast-info-card">
        <div class="breakfast-info-icon">🍳</div>
        <h2 class="breakfast-info-title">${titleText}</h2>
        <p class="breakfast-info-time">⏰ 07:00 - 11:00</p>
        <hr class="breakfast-divider">
        
        <ul class="breakfast-info-list">
          ${itemsList.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
    return;
  } else {
    if (subcategoryContainer) subcategoryContainer.style.display = "block";
    if (searchFilterSec) searchFilterSec.style.display = "block";
    if (serviceSec) serviceSec.style.display = "block";
  }

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
      const nameMatch = getText(item.name, currentLang).toLowerCase().includes(query);
      const descMatch = getText(item.description, currentLang).toLowerCase().includes(query);
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
        const sectionName = getText(item.section, currentLang);
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
  
  // Accessibility and interactivity for the card
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-haspopup", "dialog");
  
  card.addEventListener("click", () => openDetailsModal(item.id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDetailsModal(item.id);
    }
  });
  
  // Generate badges html
  let badgesHtml = "";
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.pt;
  item.tags.forEach(tag => {
    let tagLabel = "";
    let tagClass = "";
    if (tag === "gluten-free") {
      tagLabel = dict.badgeGF || "Sem Glúten";
      tagClass = "gf";
    } else if (tag === "lactose-free") {
      tagLabel = dict.badgeLF || "Sem Lactose";
      tagClass = "lf";
    } else if (tag === "vegetarian") {
      tagLabel = dict.badgeVeg || "Vegetariano";
      tagClass = "veg";
    }
    badgesHtml += `<span class="diet-badge ${tagClass}">${tagLabel}</span>`;
  });

  const locale = (LANG_CONFIG[currentLang] && LANG_CONFIG[currentLang].locale) || "pt-BR";
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL"
  }).format(item.price);

  const itemName = getText(item.name, currentLang);
  const itemDesc = getText(item.description, currentLang);

  card.innerHTML = `
    ${hasImage ? `
    <div class="menu-card-image-wrapper">
      <img src="${item.image}" alt="${itemName}" class="menu-card-image" loading="lazy">
    </div>
    ` : ""}
    <div class="menu-card-content">
      <div class="menu-card-header">
        <h3 class="menu-card-title">${itemName}</h3>
        <span class="menu-card-price">${formattedPrice}</span>
      </div>
      <p class="menu-card-description">${itemDesc}</p>
      <div class="menu-card-footer">
        <div class="menu-card-badges">${badgesHtml}</div>
        ${item.number ? `<span class="product-number">${item.number}</span>` : ""}
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

  const itemName = getText(item.name, currentLang);
  const itemDesc = getText(item.description, currentLang);

  const hasImage = item.subcategory === "principais";
  if (hasImage) {
    modalImgWrapper.style.display = "block";
    modalContainer.classList.remove("modal-no-image");
    modalImg.src = item.image;
    modalImg.alt = itemName;
  } else {
    modalImgWrapper.style.display = "none";
    modalContainer.classList.add("modal-no-image");
    modalImg.src = "";
    modalImg.alt = "";
  }

  modalTitle.innerHTML = `<span class="product-number">${item.number}</span> ${itemName}`;

  const locale = (LANG_CONFIG[currentLang] && LANG_CONFIG[currentLang].locale) || "pt-BR";
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL"
  }).format(item.price);
  modalPrice.textContent = formattedPrice;
  modalDescription.textContent = itemDesc;

  // Render modal badges
  modalDietTags.innerHTML = "";
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.pt;
  item.tags.forEach(tag => {
    const badge = document.createElement("span");
    badge.className = `diet-badge ${tag === 'gluten-free' ? 'gf' : tag === 'lactose-free' ? 'lf' : 'veg'}`;
    badge.textContent = dict[tag === 'gluten-free' ? 'badgeGF' : tag === 'lactose-free' ? 'badgeLF' : 'badgeVeg'];
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

  // Accessibility Font size toggle button (A+)
  const fontToggleBtn = document.getElementById("btnFontToggle");
  if (fontToggleBtn) {
    fontToggleBtn.addEventListener("click", toggleTextSize);
  }

  // Language dropdown initialization
  setupLanguageDropdown();

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
      } else {
        currentSubcategory = "";
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
