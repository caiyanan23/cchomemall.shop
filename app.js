const categories = [
  {
    id: "all",
    name: "ทั้งหมด",
    title: "ทุกหมวด",
    description: "รวมวัสดุพร้อมส่ง",
    color: "#176f72",
    icon: "grid"
  },
  {
    id: "tiles",
    name: "กระเบื้อง",
    title: "Tile & Surface",
    description: "พื้น ผนัง ห้องน้ำ ครัว",
    color: "#b45f35",
    icon: "tile"
  },
  {
    id: "flooring",
    name: "พื้นไม้",
    title: "Flooring",
    description: "SPC ลามิเนต ไม้เอ็นจิเนียร์",
    color: "#8c6a3d",
    icon: "floor"
  },
  {
    id: "bath",
    name: "สุขภัณฑ์",
    title: "Bath & Kitchen",
    description: "อ่าง ก๊อก ฝักบัว โถสุขภัณฑ์",
    color: "#315a7d",
    icon: "bath"
  },
  {
    id: "lighting",
    name: "ไฟและระบบ",
    title: "Lighting",
    description: "โคมไฟ สวิตช์ สายไฟ",
    color: "#d8a338",
    icon: "light"
  },
  {
    id: "paint",
    name: "สีและเคมีภัณฑ์",
    title: "Paint & Chemical",
    description: "สีทาภายใน กันซึม กาวซีเมนต์",
    color: "#697b4b",
    icon: "paint"
  }
];

const products = [
  {
    id: "tile-calacatta-60",
    name: "Calacatta Porcelain Tile 60x60 cm",
    category: "tiles",
    price: 690,
    unit: "ต่อ ตร.ม.",
    badge: "Best for condo",
    stock: "พร้อมส่ง BKK",
    rating: 4.8,
    colors: ["#eee8de", "#c7c3ba", "#2f3231"],
    visual: "linear-gradient(135deg, #cfc9bf, #f4f1ea 45%, #9b9a94)"
  },
  {
    id: "spc-oak-5mm",
    name: "SPC Flooring Natural Oak 5 mm",
    category: "flooring",
    price: 520,
    unit: "ต่อ ตร.ม.",
    badge: "กันน้ำ",
    stock: "ส่ง 2-3 วัน",
    rating: 4.7,
    colors: ["#b9864f", "#d7b37a", "#6b4a2d"],
    visual: "linear-gradient(135deg, #8f6237, #ddb77a 48%, #5b3b23)"
  },
  {
    id: "toilet-rimless",
    name: "Rimless One-piece Toilet Soft Close",
    category: "bath",
    price: 2890,
    unit: "ต่อชิ้น",
    badge: "ติดตั้งได้",
    stock: "มีทีมช่าง",
    rating: 4.6,
    colors: ["#ffffff", "#d7dad8", "#a9b0af"],
    visual: "linear-gradient(135deg, #f9fbfb, #bdcac9 55%, #738381)"
  },
  {
    id: "track-light-12w",
    name: "Magnetic Track Light 12W Warm White",
    category: "lighting",
    price: 780,
    unit: "ต่อดวง",
    badge: "โปรเจกต์",
    stock: "พร้อมส่ง",
    rating: 4.9,
    colors: ["#171717", "#c79838", "#fff0c7"],
    visual: "radial-gradient(circle at 70% 35%, #ffd36d, transparent 24%), linear-gradient(135deg, #1a1c1b, #4d4534)"
  },
  {
    id: "paint-low-voc",
    name: "Interior Low VOC Paint 9L Matte White",
    category: "paint",
    price: 1250,
    unit: "ต่อถัง",
    badge: "Low VOC",
    stock: "ผสมสีได้",
    rating: 4.5,
    colors: ["#f8f4e9", "#d7e0d6", "#bfc8d7"],
    visual: "linear-gradient(135deg, #f8f4e9, #d7e0d6 52%, #9aa9b2)"
  },
  {
    id: "adhesive-c2te",
    name: "C2TE Tile Adhesive Premium 20 kg",
    category: "paint",
    price: 310,
    unit: "ต่อถุง",
    badge: "งานช่าง",
    stock: "ยกพาเลทได้",
    rating: 4.7,
    colors: ["#d4d0c4", "#978d7d", "#4f5855"],
    visual: "linear-gradient(135deg, #d4d0c4, #978d7d 52%, #4f5855)"
  },
  {
    id: "subway-tile-green",
    name: "Gloss Subway Tile Sage Green 7.5x30 cm",
    category: "tiles",
    price: 460,
    unit: "ต่อ ตร.ม.",
    badge: "คาเฟ่/ครัว",
    stock: "พร้อมส่ง",
    rating: 4.6,
    colors: ["#6f8b74", "#b9cab8", "#f0efe6"],
    visual: "linear-gradient(135deg, #6f8b74, #b9cab8 44%, #f0efe6)"
  },
  {
    id: "shower-matte-black",
    name: "Matte Black Rain Shower Set",
    category: "bath",
    price: 1990,
    unit: "ต่อชุด",
    badge: "Hot item",
    stock: "พร้อมส่ง",
    rating: 4.8,
    colors: ["#111312", "#5f6763", "#c4b79c"],
    visual: "linear-gradient(135deg, #111312, #5f6763 58%, #c4b79c)"
  }
];

const shippingByZone = {
  Bangkok: 180,
  "Chiang Mai": 350,
  Phuket: 480,
  Isan: 390
};

const state = {
  category: "all",
  query: "",
  maxPrice: 3000,
  sort: "recommended",
  deliveryZone: "Bangkok",
  cart: JSON.parse(localStorage.getItem("cchome-cart") || "{}")
};

const els = {
  categoryList: document.querySelector("[data-category-list]"),
  filterChips: document.querySelector("[data-filter-chips]"),
  productGrid: document.querySelector("[data-product-grid]"),
  resultTitle: document.querySelector("[data-result-title]"),
  searchForm: document.querySelector("[data-search-form]"),
  searchInput: document.querySelector("#site-search"),
  priceRange: document.querySelector("[data-price-range]"),
  priceLabel: document.querySelector("[data-price-label]"),
  sort: document.querySelector("[data-sort]"),
  deliveryZone: document.querySelector("[data-delivery-zone]"),
  clearFilters: document.querySelector("[data-clear-filters]"),
  cartDrawer: document.querySelector("[data-cart-drawer]"),
  cartCount: document.querySelector("[data-cart-count]"),
  cartItems: document.querySelector("[data-cart-items]"),
  subtotal: document.querySelector("[data-subtotal]"),
  shipping: document.querySelector("[data-shipping]"),
  total: document.querySelector("[data-total]"),
  toast: document.querySelector("[data-toast]")
};

const money = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

function observeReveals(root = document) {
  root.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

function animateCount(el) {
  const target = Number(el.dataset.countTo);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = `${value.toLocaleString("en-US")}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initHeroCounts() {
  document.querySelectorAll("[data-count-to]").forEach((el) => animateCount(el));
}

function iconPath(type) {
  const icons = {
    grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />',
    tile: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />',
    floor: '<path d="M4 8h16M4 16h16M8 4v4M14 8v8M10 16v4" />',
    bath: '<path d="M5 11h14v3a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z" /><path d="M8 11V6a2 2 0 0 1 2-2h1" />',
    light: '<path d="M9 18h6M10 22h4M8 10a4 4 0 1 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5Z" />',
    paint: '<path d="M5 4h14v7H5zM7 11v9h10v-9M9 4V2h6v2" />'
  };
  return icons[type] || icons.grid;
}

function renderCategories() {
  els.categoryList.innerHTML = categories
    .filter((category) => category.id !== "all")
    .map(
      (category) => `
        <button class="category-card reveal" type="button" data-category="${category.id}">
          <span class="category-icon" style="background:${category.color}">
            <svg aria-hidden="true" viewBox="0 0 24 24">${iconPath(category.icon)}</svg>
          </span>
          <h3>${category.title}</h3>
          <p>${category.description}</p>
        </button>
      `
    )
    .join("");

  els.filterChips.innerHTML = categories
    .map(
      (category) => `
        <button class="chip ${state.category === category.id ? "active" : ""}" type="button" data-category="${category.id}">
          ${category.name}
        </button>
      `
    )
    .join("");

  observeReveals(els.categoryList);
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase();
  const visible = products.filter((product) => {
    const inCategory = state.category === "all" || product.category === state.category;
    const inPrice = product.price <= state.maxPrice;
    const inQuery = !query || `${product.name} ${product.badge} ${product.stock}`.toLowerCase().includes(query);
    return inCategory && inPrice && inQuery;
  });

  const sorted = [...visible];
  if (state.sort === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") sorted.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const categoryName = categories.find((category) => category.id === state.category)?.name || "ทั้งหมด";
  els.resultTitle.textContent = state.query
    ? `ผลลัพธ์สำหรับ "${state.query}"`
    : state.category === "all"
      ? "วัสดุขายดีในพื้นที่ของคุณ"
      : `สินค้าในหมวด ${categoryName}`;

  if (!filtered.length) {
    els.productGrid.innerHTML = `
      <div class="empty-state">
        <h3>ไม่พบสินค้าที่ตรงกับตัวกรอง</h3>
        <p>ลองเพิ่มช่วงราคา หรือเลือกหมวดหมู่อื่น</p>
      </div>
    `;
    return;
  }

  els.productGrid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card reveal">
          <div class="product-visual" style="--tile-bg:${product.visual}">
            <span>${product.badge}</span>
            <div class="swatches" aria-label="Color options">
              ${product.colors.map((color) => `<i style="--swatch:${color}"></i>`).join("")}
            </div>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span>${product.stock}</span>
              <span class="rating">★ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <div class="product-foot">
              <div>
                <span class="price">${money.format(product.price)}</span>
                <span class="unit">${product.unit}</span>
              </div>
              <button class="add-button" type="button" data-add="${product.id}">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                เพิ่ม
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  observeReveals(els.productGrid);
}

function persistCart() {
  localStorage.setItem("cchome-cart", JSON.stringify(state.cart));
}

function getCartRows() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ product: products.find((product) => product.id === id), qty }))
    .filter((row) => row.product && row.qty > 0);
}

function renderCart() {
  const rows = getCartRows();
  const itemCount = rows.reduce((sum, row) => sum + row.qty, 0);
  const subtotal = rows.reduce((sum, row) => sum + row.product.price * row.qty, 0);
  const shipping = rows.length ? shippingByZone[state.deliveryZone] : 0;

  els.cartCount.textContent = itemCount;
  els.cartItems.innerHTML = rows.length
    ? rows
        .map(
          ({ product, qty }) => `
            <article class="cart-item">
              <div>
                <h3>${product.name}</h3>
                <p>${money.format(product.price)} ${product.unit}</p>
              </div>
              <div class="qty" aria-label="Quantity for ${product.name}">
                <button type="button" data-dec="${product.id}">−</button>
                <span>${qty}</span>
                <button type="button" data-inc="${product.id}">+</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state"><h3>ตะกร้ายังว่าง</h3><p>เลือกวัสดุที่ต้องการ แล้วระบบจะประเมินค่าจัดส่งให้</p></div>`;

  els.subtotal.textContent = money.format(subtotal);
  els.shipping.textContent = money.format(shipping);
  els.total.textContent = money.format(subtotal + shipping);
}

function setCategory(category) {
  state.category = category;
  renderCategories();
  renderProducts();
}

function addToCart(id, sourceButton) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  persistCart();
  renderCart();
  const product = products.find((item) => item.id === id);
  showToast(`${product.name} ถูกเพิ่มในตะกร้า`);

  if (sourceButton) {
    sourceButton.classList.add("pop");
    window.setTimeout(() => sourceButton.classList.remove("pop"), 220);
  }

  els.cartCount.classList.add("bump");
  window.setTimeout(() => els.cartCount.classList.remove("bump"), 420);
}

function updateQty(id, diff) {
  state.cart[id] = Math.max(0, (state.cart[id] || 0) + diff);
  if (state.cart[id] === 0) delete state.cart[id];
  persistCart();
  renderCart();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) setCategory(categoryButton.dataset.category);

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add, addButton);

  const incButton = event.target.closest("[data-inc]");
  if (incButton) updateQty(incButton.dataset.inc, 1);

  const decButton = event.target.closest("[data-dec]");
  if (decButton) updateQty(decButton.dataset.dec, -1);

  if (event.target.closest("[data-open-cart]")) {
    els.cartDrawer.classList.add("open");
    els.cartDrawer.setAttribute("aria-hidden", "false");
  }

  if (event.target.closest("[data-close-cart]")) {
    els.cartDrawer.classList.remove("open");
    els.cartDrawer.setAttribute("aria-hidden", "true");
  }

  if (event.target.closest("[data-checkout]")) {
    showToast("ทีมขายจะใช้รายการนี้จัดทำใบเสนอราคา");
  }
});

els.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = els.searchInput.value;
  renderProducts();
});

els.searchInput.addEventListener("input", () => {
  state.query = els.searchInput.value;
  renderProducts();
});

els.priceRange.addEventListener("input", () => {
  state.maxPrice = Number(els.priceRange.value);
  els.priceLabel.textContent = money.format(state.maxPrice);
  renderProducts();
});

els.sort.addEventListener("change", () => {
  state.sort = els.sort.value;
  renderProducts();
});

els.deliveryZone.addEventListener("change", () => {
  state.deliveryZone = els.deliveryZone.value;
  renderCart();
});

els.clearFilters.addEventListener("click", () => {
  state.category = "all";
  state.query = "";
  state.maxPrice = 3000;
  state.sort = "recommended";
  els.searchInput.value = "";
  els.priceRange.value = "3000";
  els.priceLabel.textContent = money.format(3000);
  els.sort.value = "recommended";
  renderCategories();
  renderProducts();
});

renderCategories();
renderProducts();
renderCart();
observeReveals(document);
initHeaderScroll();
initHeroCounts();
