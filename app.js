// ==========================================================================
// MENU DATA WITH MULTILINGUAL TEXT & METADATA
// ==========================================================================
const MENU_DATA = [
  // AFTERNOON TEA ITEMS
  {
    id: "tea-1",
    category: "afternoon-tea",
    subcategory: "salgados",
    price: 16.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Pão de Queijo Recheado",
      en: "Stuffed Cheese Bread"
    },
    description: {
      pt: "Tradicional pão de queijo mineiro recheado com queijo Canastra derretido ou doce de leite Viçosa.",
      en: "Traditional Minas cheese bread stuffed with melted Canastra cheese or sweet Viçosa milk caramel."
    }
  },
  {
    id: "tea-2",
    category: "afternoon-tea",
    subcategory: "salgados",
    price: 12.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Broa de Milho na Chapa",
      en: "Grilled Corn Cake"
    },
    description: {
      pt: "Fatia generosa de broa de milho mineira artesanal grelhada na chapa com manteiga da fazenda.",
      en: "Generous slice of artisanal corn broa cake grilled on the griddle with fresh farmhouse butter."
    }
  },
  {
    id: "tea-3",
    category: "afternoon-tea",
    subcategory: "bebidas",
    price: 10.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Café Gourmet das Montanhas",
      en: "Mountain Gourmet Coffee"
    },
    description: {
      pt: "Café especial colhido nas montanhas da Mantiqueira, coado individualmente na mesa para você.",
      en: "Specialty coffee harvested in the Mantiqueira mountains, individually brewed at your table."
    }
  },
  {
    id: "tea-4",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 14.00,
    tags: ["vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Bolo de Cenoura da Vovó",
      en: "Grandma's Carrot Cake"
    },
    description: {
      pt: "Bolo de cenoura fofinho com cobertura quente e generosa de chocolate belga meio amargo.",
      en: "Fluffy carrot cake topped with warm, generous Belgian dark chocolate ganache."
    }
  },
  {
    id: "tea-5",
    category: "afternoon-tea",
    subcategory: "doces",
    price: 18.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/afternoon_tea.png",
    name: {
      pt: "Salada de Frutas com Mel",
      en: "Fruit Salad with Local Honey"
    },
    description: {
      pt: "Seleção de frutas frescas da estação produzidas por produtores locais de São Lourenço.",
      en: "Selection of fresh seasonal fruits produced by local organic growers in São Lourenço."
    }
  },

  // DINNER ITEMS
  {
    id: "dinner-1",
    category: "dinner",
    subcategory: "entradas",
    price: 22.00,
    tags: ["gluten-free"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Caldinho de Mandioca Mineiro",
      en: "Minas Cassava Cream Soup"
    },
    description: {
      pt: "Creme de mandioca encorpado com ervas da horta, finalizado com bacon crocante e cebolinha.",
      en: "Rich cassava cream soup cooked with fresh herbs, finished with crispy bacon and scallions."
    }
  },
  {
    id: "dinner-2",
    category: "dinner",
    subcategory: "entradas",
    price: 28.00,
    tags: ["gluten-free", "lactose-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Salada Primavera Orgânica",
      en: "Organic Spring Salad"
    },
    description: {
      pt: "Folhas jovens colhidas no dia, morangos frescos, nozes caramelizadas e molho de mostarda e mel.",
      en: "Day-harvested baby greens, fresh strawberries, caramelized walnuts, and local honey mustard dressing."
    }
  },
  {
    id: "dinner-3",
    category: "dinner",
    subcategory: "principais",
    price: 78.00,
    tags: ["gluten-free"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Filé Mignon ao Risoto de Canastra",
      en: "Filet Mignon & Canastra Risotto"
    },
    description: {
      pt: "Medalhão de filé mignon ao molho demi-glace de vinho tinto, acompanhado de risoto cremoso de queijo Canastra.",
      en: "Beef tenderloin medallion with red wine demi-glace sauce, served with creamy Canastra cheese risotto."
    }
  },
  {
    id: "dinner-4",
    category: "dinner",
    subcategory: "principais",
    price: 68.00,
    tags: ["gluten-free"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Truta Grelhada da Mantiqueira",
      en: "Grilled Mantiqueira Trout"
    },
    description: {
      pt: "Filé de truta fresca grelhada com amêndoas tostadas na manteiga de ervas e purê cremoso de mandioquinha.",
      en: "Fresh trout fillet grilled with toasted almonds in herb butter, served with creamy yellow cassava purée."
    }
  },
  {
    id: "dinner-5",
    category: "dinner",
    subcategory: "principais",
    price: 56.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Nhoque de Mandioquinha",
      en: "Cassava Gnocchi"
    },
    description: {
      pt: "Nhoque artesanal de mandioquinha ao molho de tomates frescos da horta e folhas de manjericão orgânico.",
      en: "Handmade yellow cassava gnocchi served with fresh garden tomato sauce and organic basil leaves."
    }
  },
  {
    id: "dinner-6",
    category: "dinner",
    subcategory: "sobremesas",
    price: 24.00,
    tags: ["vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Petit Gâteau de Doce de Leite",
      en: "Viçosa Caramel Lava Cake"
    },
    description: {
      pt: "Bolo quente e úmido de doce de leite Viçosa com recheio cremoso e sorvete artesanal de creme.",
      en: "Warm and moist Viçosa milk caramel cake with running caramel center, served with vanilla ice cream."
    }
  },
  {
    id: "dinner-7",
    category: "dinner",
    subcategory: "sobremesas",
    price: 20.00,
    tags: ["gluten-free", "vegetarian"],
    image: "images/dinner_risotto.png",
    name: {
      pt: "Romeu e Julieta Central Parque",
      en: "Romeo & Juliet Central Parque"
    },
    description: {
      pt: "Fatias finas de queijo de Minas artesanal acompanhadas de goiabada cascão cremosa servida quente.",
      en: "Slices of raw artisanal Minas cheese served with warm, homemade creamy guava paste."
    }
  }
];

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
    lblModalIngredients: "Ingredientes / Descrição:",
    txtModalAccInfo: "Prato preparado seguindo rígidos padrões de higiene. Para alterações, consulte o garçom.",
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
    txtModalAccInfo: "Dish prepared following strict sanitary protocols. For modifications, ask your waiter.",
    btnModalBack: "Back to Menu"
  }
};

// ==========================================================================
// SUBCATEGORIES CONFIGURATION
// ==========================================================================
const SUBCATEGORIES = {
  "afternoon-tea": [
    { id: "salgados", pt: "Salgados", en: "Savory", icon: "🥐" },
    { id: "bebidas", pt: "Bebidas", en: "Drinks", icon: "☕" },
    { id: "doces", pt: "Doces", en: "Sweets", icon: "🍰" }
  ],
  "dinner": [
    { id: "entradas", pt: "Entradas", en: "Starters", icon: "🥗" },
    { id: "principais", pt: "Pratos Principais", en: "Main Courses", icon: "🥩" },
    { id: "sobremesas", pt: "Sobremesas", en: "Desserts", icon: "🍨" }
  ]
};

// ==========================================================================
// APP STATE MANAGEMENT
// ==========================================================================
let currentLang = localStorage.getItem("lang") || "pt";
let currentTheme = localStorage.getItem("theme") || "light";
let currentTextSize = localStorage.getItem("textSize") || "normal";
let currentCategory = "afternoon-tea";
let currentSubcategory = "salgados";
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
document.addEventListener("DOMContentLoaded", () => {
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
      const query = searchQuery.toLowerCase();
      const nameMatch = item.name[currentLang].toLowerCase().includes(query);
      const descMatch = item.description[currentLang].toLowerCase().includes(query);
      if (!nameMatch && !descMatch) return false;
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

    filteredItems.forEach(item => {
      const card = createMenuCard(item);
      menuListEl.appendChild(card);
    });
  }
}

function createMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
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
    <div class="menu-card-image-wrapper">
      <img src="${item.image}" alt="${item.name[currentLang]}" class="menu-card-image" loading="lazy">
    </div>
    <div class="menu-card-content">
      <div class="menu-card-header">
        <h3 class="menu-card-title">${item.name[currentLang]}</h3>
        <span class="menu-card-price">${formattedPrice}</span>
      </div>
      <p class="menu-card-description">${item.description[currentLang]}</p>
      <div class="menu-card-badges">${badgesHtml}</div>
      <button class="btn-card-details" aria-haspopup="dialog" onclick="openDetailsModal('${item.id}')">
        <span>${viewDetailsText}</span> ➔
      </button>
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

  modalImg.src = item.image;
  modalImg.alt = item.name[currentLang];
  modalTitle.textContent = item.name[currentLang];

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
