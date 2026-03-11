/*-------------RESTAURANT DATA-----------*/
// All Winnipeg restaurant entries, grouped by cuisine type
const restaurants = [
  // BURGER
  {
    name: "Nuburger",
    tags: ["burger", "fast food"],
    price: "$$",
    rating: 4.6,
    distanceKm: 3.1,
    photos: ["assets/nu1.jpg", "assets/nu2.jpg", "assets/nu3.jpg"],
    contact: "(204) 306-8600",
    address: "472 Stradbrook Ave, Winnipeg, MB",
    hours: "Mon–Sun 11am–9pm",
    website: "https://nuburger.com"
  },
  {
    name: "The Burger Place",
    tags: ["burger", "fast food"],
    price: "$",
    rating: 4.7,
    distanceKm: 4.0,
    photos: ["assets/bp1.jpg", "assets/bp2.jpg", "assets/bp3.jpg"],
    contact: "(204) 775-3905",
    address: "1909 Portage Ave, Winnipeg, MB",
    hours: "Mon–Sat 11am–8pm",
    website: "https://burgerplacewinnipeg.com"
  },
  {
    name: "Superboys",
    tags: ["burger", "fast food"],
    price: "$",
    rating: 4.5,
    distanceKm: 3.7,
    photos: ["assets/sb1.jpg", "assets/sb2.jpg", "assets/sb3.jpg"],
    contact: "(204) 775-1461",
    address: "1485 Main St, Winnipeg, MB",
    hours: "Mon–Sat 11am–10pm",
    website: "https://example.com/superboys"
  },

  // PIZZA
  {
    name: "Santa Lucia Pizza",
    tags: ["pizza"],
    price: "$$",
    rating: 4.5,
    distanceKm: 2.6,
    photos: ["assets/sl1.jpg", "assets/sl2.jpg", "assets/sl3.jpg"],
    contact: "(204) 947-8884",
    address: "4 St Mary's Rd, Winnipeg, MB",
    hours: "Daily 11am–11pm",
    website: "https://santalucia.ca"
  },
  {
    name: "Wall Street Slice",
    tags: ["pizza"],
    price: "$",
    rating: 4.6,
    distanceKm: 2.3,
    photos: ["assets/ws1.jpg", "assets/ws2.jpg", "assets/ws3.jpg"],
    contact: "(204) 615-9400",
    address: "314 Wall St, Winnipeg, MB",
    hours: "Tue–Sun 4pm–10pm",
    website: "https://example.com/wallstreetslice"
  },
  {
    name: "Little Pizza Heaven",
    tags: ["pizza", "fast food"],
    price: "$",
    rating: 4.2,
    distanceKm: 1.9,
    photos: ["assets/lp1.jpg", "assets/lp2.jpg", "assets/lp3.jpg"],
    contact: "(204) 949-1277",
    address: "111 Osborne St, Winnipeg, MB",
    hours: "Daily 11am–12am",
    website: "https://littlepizzaheaven.ca"
  },

  // HALAL / MIDDLE EASTERN
  {
    name: "Baraka Pita Bakery",
    tags: ["halal", "middle eastern"],
    price: "$",
    rating: 4.8,
    distanceKm: 2.8,
    photos: ["assets/ba1.jpg", "assets/ba2.jpg", "assets/ba3.jpg"],
    contact: "(204) 219-4445",
    address: "1780 Main St, Winnipeg, MB",
    hours: "Mon–Sat 10am–7pm",
    website: "https://barakapitabakery.com"
  },
  {
    name: "Ramallah Cafe",
    tags: ["halal", "middle eastern"],
    price: "$$",
    rating: 4.7,
    distanceKm: 3.5,
    photos: ["assets/ra1.jpg", "assets/ra2.jpg", "assets/ra3.jpg"],
    contact: "(204) 415-3999",
    address: "325 Pembina Hwy, Winnipeg, MB",
    hours: "Daily 11am–10pm",
    website: "https://ramallahcafe.com"
  },

  // CHINESE
  {
    name: "Sun Fortune Restaurant",
    tags: ["chinese"],
    price: "$$",
    rating: 4.4,
    distanceKm: 3.3,
    photos: ["assets/sf1.jpg", "assets/sf2.jpg", "assets/sf3.jpg"],
    contact: "(204) 943-6890",
    address: "223 King St, Winnipeg, MB",
    hours: "Daily 10am–9pm",
    website: "https://example.com/sunfortune"
  },
  {
    name: "Golden Loong",
    tags: ["chinese"],
    price: "$$",
    rating: 4.3,
    distanceKm: 4.1,
    photos: ["assets/gl1.jpg", "assets/gl2.jpg", "assets/gl3.jpg"],
    contact: "(204) 772-8703",
    address: "2145 Portage Ave, Winnipeg, MB",
    hours: "Tue–Sun 11am–9pm",
    website: "https://example.com/goldenloong"
  },

  // SUSHI
  {
    name: "Yujiro Japanese Restaurant",
    tags: ["sushi"],
    price: "$$$",
    rating: 4.8,
    distanceKm: 3.6,
    photos: ["assets/yu1.jpg", "assets/yu2.jpg", "assets/yu3.jpg"],
    contact: "(204) 415-9588",
    address: "1822 Grant Ave, Winnipeg, MB",
    hours: "Tue–Sat 5pm–10pm",
    website: "https://yujiro.ca"
  },
  {
    name: "Blufish Sushi",
    tags: ["sushi"],
    price: "$$",
    rating: 4.6,
    distanceKm: 2.9,
    photos: ["assets/bf1.jpg", "assets/bf2.jpg", "assets/bf3.jpg"],
    contact: "(204) 415-7555",
    address: "179 Bannatyne Ave, Winnipeg, MB",
    hours: "Mon–Sat 11:30am–9pm",
    website: "https://blufish.ca"
  },
  {
    name: "Kai Sushi",
    tags: ["sushi"],
    price: "$$",
    rating: 4.5,
    distanceKm: 5.2,
    photos: ["assets/ks1.jpg", "assets/ks2.jpg", "assets/ks3.jpg"],
    contact: "(204) 254-8881",
    address: "680 Elizabeth Rd, Winnipeg, MB",
    hours: "Daily 11am–11pm",
    website: "https://example.com/kaisushi"
  },

  // FAST FOOD
  {
    name: "Dairy Queen Grill & Chill",
    tags: ["fast food", "burger", "dessert"],
    price: "$",
    rating: 4.2,
    distanceKm: 1.1,
    photos: ["assets/dq1.jpg", "assets/dq2.jpg", "assets/dq3.jpg"],
    contact: "(204) 774-4849",
    address: "981 Portage Ave, Winnipeg, MB",
    hours: "Daily 10am–10pm",
    website: "https://dq.com"
  },
  {
    name: "Five Guys",
    tags: ["burger", "fast food"],
    price: "$$",
    rating: 4.4,
    distanceKm: 2.5,
    photos: ["assets/fg1.jpg", "assets/fg2.jpg", "assets/fg3.jpg"],
    contact: "(204) 691-5555",
    address: "1485 Portage Ave, Winnipeg, MB",
    hours: "Daily 11am–10pm",
    website: "https://fiveguys.ca"
  },

  // VEGAN
  {
    name: "Roughage Eatery",
    tags: ["vegan"],
    price: "$$",
    rating: 4.7,
    distanceKm: 3.0,
    photos: ["assets/re1.jpg", "assets/re2.jpg", "assets/re3.jpg"],
    contact: "(204) 219-7222",
    address: "633 Corydon Ave, Winnipeg, MB",
    hours: "Wed–Sun 11am–9pm",
    website: "https://roughageeatery.com"
  },
  {
    name: "Affinity Vegetarian Garden",
    tags: ["vegan"],
    price: "$$",
    rating: 4.6,
    distanceKm: 3.9,
    photos: ["assets/av1.jpg", "assets/av2.jpg", "assets/av3.jpg"],
    contact: "(204) 947-1987",
    address: "389 Portage Ave, Winnipeg, MB",
    hours: "Mon–Sat 11am–8pm",
    website: "https://example.com/affinity"
  },

  // DESSERT
  {
    name: "Chaeban Ice Cream",
    tags: ["dessert"],
    price: "$$",
    rating: 4.8,
    distanceKm: 2.4,
    photos: ["assets/ci1.jpg", "assets/ci2.jpg", "assets/ci3.jpg"],
    contact: "(204) 219-5111",
    address: "390 Osborne St, Winnipeg, MB",
    hours: "Daily 12pm–10pm",
    website: "https://chaebanicecream.com"
  },
  {
    name: "Fête Ice Cream & Coffee",
    tags: ["dessert", "coffee"],
    price: "$$",
    rating: 4.7,
    distanceKm: 1.8,
    photos: ["assets/fe1.jpg", "assets/fe2.jpg", "assets/fe3.jpg"],
    contact: "(204) 219-5199",
    address: "300 Assiniboine Ave, Winnipeg, MB",
    hours: "Daily 12pm–9pm",
    website: "https://feteicecream.com"
  },

  // INDIAN
  {
    name: "East India Company",
    tags: ["indian"],
    price: "$$$",
    rating: 4.6,
    distanceKm: 2.7,
    photos: ["assets/ei1.jpg", "assets/ei2.jpg", "assets/ei3.jpg"],
    contact: "(204) 947-3097",
    address: "349 York Ave, Winnipeg, MB",
    hours: "Daily 11:30am–9:30pm",
    website: "https://eastindiaco.com"
  },
  {
    name: "Clay Oven",
    tags: ["indian"],
    price: "$$",
    rating: 4.5,
    distanceKm: 2.1,
    photos: ["assets/co1.jpg", "assets/co2.jpg", "assets/co3.jpg"],
    contact: "(204) 942-3900",
    address: "1824 Pembina Hwy, Winnipeg, MB",
    hours: "Daily 11am–10pm",
    website: "https://clayoven.ca"
  },

  // COFFEE
  {
    name: "Little Sister Coffee Maker",
    tags: ["coffee", "dessert"],
    price: "$$",
    rating: 4.7,
    distanceKm: 1.6,
    photos: ["assets/ls1.jpg", "assets/ls2.jpg", "assets/ls3.jpg"],
    contact: "(204) 691-0101",
    address: "366 Osborne St, Winnipeg, MB",
    hours: "Daily 7am–5pm",
    website: "https://littlesistercoffeemaker.ca"
  },
  {
    name: "Thom Bargen Coffee",
    tags: ["coffee"],
    price: "$$",
    rating: 4.6,
    distanceKm: 2.2,
    photos: ["assets/tb1.jpg", "assets/tb2.jpg", "assets/tb3.jpg"],
    contact: "(204) 421-4184",
    address: "250 Kennedy St, Winnipeg, MB",
    hours: "Daily 7am–6pm",
    website: "https://thombargen.com"
  },

  // EXTRA CUISINES
  {
    name: "Pho Hoang",
    tags: ["vietnamese"],
    price: "$",
    rating: 4.6,
    distanceKm: 3.4,
    photos: ["assets/ph1.jpg", "assets/ph2.jpg", "assets/ph3.jpg"],
    contact: "(204) 772-4088",
    address: "794 Sargent Ave, Winnipeg, MB",
    hours: "Daily 10am–9pm",
    website: "https://example.com/phohoang"
  },
  {
    name: "Magic Thailand",
    tags: ["thai"],
    price: "$$",
    rating: 4.5,
    distanceKm: 2.7,
    photos: ["assets/mt1.jpg", "assets/mt2.jpg", "assets/mt3.jpg"],
    contact: "(204) 284-0411",
    address: "844 Logan Ave, Winnipeg, MB",
    hours: "Tue–Sun 11am–9pm",
    website: "https://example.com/magicthailand"
  },
  {
    name: "Deer + Almond",
    tags: ["dessert", "coffee"],
    price: "$$$",
    rating: 4.7,
    distanceKm: 1.4,
    photos: ["assets/da1.jpg", "assets/da2.jpg", "assets/da3.jpg"],
    contact: "(204) 504-8562",
    address: "85 Princess St, Winnipeg, MB",
    hours: "Tue–Sat 5pm–10pm",
    website: "https://deerandalmond.com"
  }
];

// All possible cuisine/type tags used across the restaurant list
const ALL_TAGS = [
  "burger","pizza","halal","chinese","sushi",
  "fast food","vegan","dessert","indian","coffee",
  "thai","vietnamese","middle eastern"
];


/*-------------STATE VARIABLES-----------*/
// Working copy of restaurants, updated whenever filters change
let filteredRestaurants = [...restaurants];
// Index of the current top card in filteredRestaurants
let index = 0;
// Prevents swipe/undo actions while a card animation is in progress
let isAnimating = false;
// The restaurant that was liked and is currently shown in the overlay
let chosenRestaurant = null;

// Arrays to track what the user has liked, passed, and the full swipe history
const liked = [];
const passed = [];
const history = [];


/*-------------CARD BUILDER-----------*/
// Builds the full HTML string for a single restaurant card (front + back faces)
function buildCard(r, layerClass, cardIndex) {
  const photos = r.photos?.length ? r.photos : [""];
  // Build tag chip HTML for the front face
  const tagsHtml = r.tags.map(t =>
    `<span class="chip tag-chip">${t}</span>`
  ).join("");

  // Build photo slide divs — one per photo, first is active
  const slidesHtml = photos.map((src, i) =>
    `<div class="photo-slide${i === 0 ? " active" : ""}" style="background-image:url('${src}')"></div>`
  ).join("");

  // Build dot indicators — only rendered when there are multiple photos
  const dotsHtml = photos.length > 1
    ? `<div class="photo-dots">${photos.map((_, i) =>
        `<span class="photo-dot${i === 0 ? " active" : ""}"></span>`
      ).join("")}</div>`
    : "";

  return `
    <article class="card ${layerClass}" data-index="${cardIndex}" data-photo-index="0" data-photo-count="${photos.length}">
      <div class="card-inner">

        <!-- Front face: photo carousel, name, rating, and tags -->
        <div class="card-face card-front">

          <!-- Photo carousel — tap zones live inside so they're bounded by carousel height -->
          <div class="photo-carousel">
            ${slidesHtml}
            <!-- Left half = prev photo, right half = next photo -->
            <div class="photo-tap-prev" data-card-index="${cardIndex}"></div>
            <div class="photo-tap-next" data-card-index="${cardIndex}"></div>
            <!-- Dot indicators at the bottom of the carousel -->
            ${dotsHtml}
          </div>

          <div class="badge like">LIKE</div>
          <div class="badge nope">NOPE</div>

          <!-- Solid info panel at the bottom -->
          <div class="info">
            <div class="title-row">
              <div class="name">${escapeHtml(r.name)}</div>
            </div>
            <div class="sub">
              <span class="chip"><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}</span>
              <span class="chip">${r.price}</span>
              <span class="chip">${r.distanceKm} km</span>
            </div>
            <div class="sub tags-row">${tagsHtml}</div>
            <div class="tap-hint">Tap here for details - Tap photo to cycle</div>
          </div>
        </div>

        <!-- Back face: full restaurant details (shown on tap/flip) -->
        <div class="card-face card-back">
          <div class="chosen-banner">You chose ${escapeHtml(r.name)}</div>
          <div class="back-content">
            <div class="back-title">${escapeHtml(r.name)}</div>
            <div class="back-sub">${r.price} • <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}</div>
            <div class="back-tags">${r.tags.map(t => `<span class="back-tag">${t}</span>`).join("")}</div>
            <div class="back-section">
              <div class="back-label">Contact</div>
              <div class="back-value">${r.contact ?? "—"}</div>
            </div>
            <div class="back-section">
              <div class="back-label">Address</div>
              <div class="back-value">${r.address ?? "—"}</div>
            </div>
            <div class="back-section">
              <div class="back-label">Hours</div>
              <div class="back-value">${r.hours ?? "—"}</div>
            </div>
            <div class="back-section">
              <div class="back-label">Website</div>
              <div class="back-value">
                ${r.website ? `<a href="${r.website}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Visit website</a>` : "—"}
              </div>
            </div>
            <div class="tap-hint back-hint">Tap to return</div>
          </div>
        </div>

      </div>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
}


/*-------------DECK RENDER-----------*/
// Rebuilds the visible card stack (up to 3 cards) from the current index
function render() {
  const stack = document.getElementById("cardStack");
  const empty = document.getElementById("emptyState");
  stack.innerHTML = "";

  // Show empty state if all cards have been swiped
  if (index >= filteredRestaurants.length) {
    empty.classList.add("show");
    return;
  }

  empty.classList.remove("show");
  const remaining = filteredRestaurants.length - index;
  const layers = Math.min(3, remaining); // Show at most 3 stacked cards

  // Render from back to front so the top card sits on top in the DOM
  for (let i = layers - 1; i >= 0; i--) {
    const r = filteredRestaurants[index + i];
    const layerClass = i === 0 ? "top" : (i === 1 ? "layer-1" : "layer-2");
    stack.insertAdjacentHTML("beforeend", buildCard(r, layerClass, index + i));
  }

  initDrag();
  initFlip();
}


/*-------------SWIPE FUNCTIONS-----------*/
function swipe(isLike) {
  if (isAnimating || chosenRestaurant) return;
  const top = document.querySelector(".card.top");
  if (!top) return;
  const current = filteredRestaurants[index];
  if (!current) return;

  isAnimating = true;

  // Record this swipe in history for potential undo
  history.push({ idx: index, action: isLike ? "like" : "pass", restaurant: current });
  if (isLike) liked.push(current);
  else passed.push(current);

  // Animate the card flying off screen
  top.classList.add(isLike ? "fly-right" : "fly-left");

  setTimeout(() => {
    index++;
    isAnimating = false;

    if (groupModeActive) {
      // Show group vote popup before proceeding
      const consensus = isLike ? incrementAndCheckConsensus(current) : false;
      showGroupVotePopup(current, isLike, consensus, () => {
        if (isLike && consensus) {
          // Everyone agrees
          chosenRestaurant = current;
          render();
          showChosenOverlay(current);
          setActionButtonsDisabled(true);
        } else if (isLike && !consensus) {
          // No consensus yet
          liked.pop();
          pendingConsensus.add(current.name);
          history[history.length - 1].action = "pending";
          render();
        } else {
          render();
        }
      });
    } else {
      // Solo mode
      render();
      if (isLike) {
        chosenRestaurant = current;
        showChosenOverlay(current);
        setActionButtonsDisabled(true);
      }
    }
  }, 440);
}

// Reverts the most recent swipe action
function undoLastSwipe() {
  if (isAnimating) return;
  const last = history.pop();
  if (!last) { showToast("Nothing to undo"); return; }

  if (last.action === "like") {
    liked.pop();
    chosenRestaurant = null;
    hideChosenOverlay();
    setActionButtonsDisabled(false);
  } else if (last.action === "pass") {
    passed.pop();
  } else if (last.action === "pending") {
    pendingConsensus.delete(last.restaurant.name);
    // Decrement like attempt count so the undo fully resets consensus progress
    const key = last.restaurant.name;
    if (likeAttempts[key]) likeAttempts[key]--;
  }

  // Put the restaurant back at the correct position in the filtered list
  if (!filteredRestaurants.includes(last.restaurant)) {
    filteredRestaurants.splice(index, 0, last.restaurant);
  } else {
    index = filteredRestaurants.indexOf(last.restaurant);
  }

  showToast("Undone");
  render();
}

// Resets all state back to the beginning
function resetDeck() {
  index = 0;
  liked.length = 0;
  passed.length = 0;
  history.length = 0;
  pendingConsensus.clear();
  Object.keys(likeAttempts).forEach(k => delete likeAttempts[k]);
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}


/*-------------FILTER FUNCTIONS-----------*/
// Active filter state
let activeTagFilters = new Set();
let activeDistanceFilter = "all";

// Dynamically creates a toggle button for each cuisine
function buildTagFilters() {
  const container = document.getElementById("tagFilterContainer");
  if (!container) return;
  container.innerHTML = "";
  ALL_TAGS.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "tag-filter-btn";
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.addEventListener("click", () => toggleTagFilter(tag, btn));
    container.appendChild(btn);
  });
}

// Adds or removes a tag from the active filter set and re-applies filters
function toggleTagFilter(tag, btn) {
  if (activeTagFilters.has(tag)) {
    activeTagFilters.delete(tag);
    btn.classList.remove("active");
  } else {
    activeTagFilters.add(tag);
    btn.classList.add("active");
  }
  applyFilters();
}

// Updates the distance label text as the slider is dragged
function updateDistanceLabel(val) {
  const label = document.getElementById("distanceLabel");
  if (!label) return;
  label.textContent = Number(val) >= 50 ? "Any distance" : `Within ${val} km`;
}

// Filters the restaurant list by distance and active tags, then re-renders the deck
function applyFilters() {
  const sliderVal = Number(document.getElementById("distanceFilter").value);
  const maxDist = sliderVal >= 50 ? Infinity : sliderVal;

  filteredRestaurants = restaurants.filter((r) => {
    const matchesDistance = r.distanceKm <= maxDist;
    const matchesTags = activeTagFilters.size === 0 || r.tags.some(t => activeTagFilters.has(t));
    // Exclude restaurants already swiped on in this session
    const alreadySeen = passed.includes(r) || liked.includes(r) || pendingConsensus.has(r.name);
    return matchesDistance && matchesTags && !alreadySeen;
  });

  index = 0;
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}

// Resets all filters to defaults and re-renders without affecting swipe history
function resetFilters() {
  document.getElementById("distanceFilter").value = 50;
  updateDistanceLabel(50);
  syncSliderFill();
  activeTagFilters.clear();
  activeDistanceFilter = "all";
  document.querySelectorAll(".tag-filter-btn").forEach(btn => btn.classList.remove("active"));

  // Rebuild filtered list excluding already-swiped restaurants
  filteredRestaurants = restaurants.filter(r => !passed.includes(r) && !liked.includes(r) && !pendingConsensus.has(r.name));
  index = 0;
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}

// Toggles the filter dropdown panel open/closed
function toggleFilterMenu() {
  document.getElementById("filterMenu").classList.toggle("show");
}


/*-------------CARD INTERACTIONS-----------*/
// Attaches photo-cycle tap zones and the flip click listener to the top card
function initFlip() {
  const top = document.querySelector(".card.top");
  if (!top || chosenRestaurant) return;

  // Photo prev/next tap zones (inside the carousel)
  const prevZone = top.querySelector(".photo-tap-prev");
  const nextZone = top.querySelector(".photo-tap-next");

  if (prevZone) {
    prevZone.addEventListener("click", (e) => {
      if (top.dataset.dragged === "true") return;
      cyclePhoto(top, -1);
    });
  }
  if (nextZone) {
    nextZone.addEventListener("click", (e) => {
      if (top.dataset.dragged === "true") return;
      cyclePhoto(top, 1);
    });
  }

  // Flip only when tapping the info panel at the bottom
  const infoPanel = top.querySelector(".info");
  if (infoPanel) {
    infoPanel.addEventListener("click", function (e) {
      if (isAnimating) return;
      if (e.target.closest("a")) return;
      if (top.dataset.dragged === "true") { top.dataset.dragged = "false"; return; }
      top.classList.toggle("flipped");
    });
  }
}

// Advances or reverses the photo carousel on a card by one step
function cyclePhoto(card, direction) {
  const count = parseInt(card.dataset.photoCount, 10) || 1;
  if (count <= 1) return;

  let current = parseInt(card.dataset.photoIndex, 10) || 0;
  const next = (current + direction + count) % count;

  // Swap active slide
  const slides = card.querySelectorAll(".photo-slide");
  slides[current].classList.remove("active");
  slides[next].classList.add("active");

  // Swap active dot
  const dots = card.querySelectorAll(".photo-dot");
  if (dots.length) {
    dots[current].classList.remove("active");
    dots[next].classList.add("active");
  }

  card.dataset.photoIndex = next;
}

// Attaches touch and mouse drag listeners to the top card for swipe gestures
function initDrag() {
  const top = document.querySelector(".card.top");
  if (!top || chosenRestaurant) return;

  let startX=null,startY=null,dx=0,dy=0,dragging=false;
  const likeBadge = top.querySelector(".badge.like");
  const nopeBadge = top.querySelector(".badge.nope");

  // Fades LIKE/NOPE badge in/out based on drag distance and direction
  function setBadges(dxVal) {
    const ratio = Math.min(Math.abs(dxVal)/90,1);
    if (dxVal>0){likeBadge.style.opacity=ratio;nopeBadge.style.opacity=0;}
    else{nopeBadge.style.opacity=ratio;likeBadge.style.opacity=0;}
  }

  function onStart(e) {
    if (isAnimating||chosenRestaurant) return;
    if (top.classList.contains("flipped")) return; // Don't drag the back face
    const pt=e.touches?e.touches[0]:e;
    startX=pt.clientX;startY=pt.clientY;dx=0;dy=0;dragging=false;top.dataset.dragged="false";
  }

  function onMove(e) {
    if (startX===null) return;
    const pt=e.touches?e.touches[0]:e;
    dx=pt.clientX-startX;dy=pt.clientY-startY;
    if (!dragging&&Math.abs(dx)<6) return; // Ignore tiny movements
    dragging=true;top.dataset.dragged="true";
    const rot=dx*0.08; // Slight rotation proportional to drag
    top.classList.add("dragging");
    top.style.transform=`translateX(${dx}px) translateY(${dy*0.2}px) rotate(${rot}deg)`;
    setBadges(dx);
    if (e.cancelable) e.preventDefault();
  }

  function onEnd() {
    if (startX===null) return;
    top.classList.remove("dragging");
    likeBadge.style.opacity=0;nopeBadge.style.opacity=0;
    if (!dragging){startX=null;return;}
    // Trigger a swipe if dragged past the threshold, otherwise snap back
    if (Math.abs(dx)>110) swipe(dx>0);
    else top.style.transform="";
    startX=null;startY=null;dx=0;dy=0;dragging=false;
  }

  // Support both mouse and touch input
  top.addEventListener("mousedown",onStart);
  top.addEventListener("touchstart",onStart,{passive:true});
  document.addEventListener("mousemove",onMove);
  document.addEventListener("touchmove",onMove,{passive:false});
  document.addEventListener("mouseup",onEnd);
  document.addEventListener("touchend",onEnd);
}


/*-------------CHOSEN OVERLAY-----------*/
// Populates and shows the full-screen chosen restaurant overlay
function showChosenOverlay(r) {
  const overlay = document.getElementById("chosenOverlay");
  if (!overlay) return;

  document.getElementById("chosenTitle").textContent = `You chose ${r.name}`;
  document.getElementById("chosenName").textContent = r.name;
  document.getElementById("chosenSub").innerHTML = `${r.price} • <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}`;

  const tagsEl = document.getElementById("chosenTags");
  if (tagsEl) tagsEl.innerHTML = r.tags.map(t=>`<span class="back-tag">${t}</span>`).join("");

  document.getElementById("chosenContact").textContent = r.contact ?? "—";
  document.getElementById("chosenAddress").textContent = r.address ?? "—";
  document.getElementById("chosenHours").textContent = r.hours ?? "—";

  const websiteEl = document.getElementById("chosenWebsite");
  if (r.website) websiteEl.innerHTML = `<a href="${r.website}" target="_blank" rel="noopener">Visit website</a>`;
  else websiteEl.textContent = "—";

  overlay.classList.add("show");
}

// Hides the chosen overlay (used on undo or filter reset)
function hideChosenOverlay() {
  const overlay = document.getElementById("chosenOverlay");
  if (overlay) overlay.classList.remove("show");
}

// Disables or re-enables the pass/like action buttons
function setActionButtonsDisabled(disabled) {
  ["passBtn","likeBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.disabled = disabled;
    btn.classList.toggle("disabled-action", disabled);
  });
}


/*-------------TOAST-----------*/
let toastTimer = null;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1100);
}


/*-------------GROUP MODE-----------*/
// Simulated group members who vote alongside the user
const GROUP_MEMBERS = ["John", "Ethan", "Davud", "Will", "Hector"];
let groupModeActive = false;

// Tracks how many times each restaurant has been liked
const likeAttempts = {};
// Restaurants that were liked but didn't reach consensus (kept out of the deck until reset)
const pendingConsensus = new Set();

// Toggles group mode on/off and updates the header icon and member count display
function toggleGroupMode() {
  groupModeActive = !groupModeActive;
  const icon = document.getElementById("groupToggleIcon");
  const btn = document.getElementById("groupToggleBtn");
  const count = document.getElementById("groupCount");

  if (groupModeActive) {
    icon.classList.replace("fa-toggle-off", "fa-toggle-on");
    btn.classList.add("active");
    count.textContent = "6"; // group mode
  } else {
    icon.classList.replace("fa-toggle-on", "fa-toggle-off");
    btn.classList.remove("active");
    count.textContent = "1"; // solo mode
  }
}

// Increments the like attempt count for a restaurant and returns true once threshold is met
function incrementAndCheckConsensus(restaurant) {
  const key = restaurant.name;
  likeAttempts[key] = (likeAttempts[key] || 0) + 1;
  return likeAttempts[key] >= 1; // Consensus reached on first like attempt
}

// Generates simulated vote results for each group member based on swipe outcome
function getGroupVotes(isLike, restaurant, consensus) {
  const key = restaurant.name;
  const attempt = likeAttempts[key] || 0;

  if (isLike) {
    if (consensus) {
      // all members vote yes
      return GROUP_MEMBERS.map(name => ({ name, vote: true }));
    } else {
      // only 1 or 2 members agree on first attempt
      const yesCount = Math.floor(Math.random() * 2) + 1;
      const shuffled = [...GROUP_MEMBERS].sort(() => Math.random() - 0.5);
      return shuffled.map((name, i) => ({ name, vote: i < yesCount }));
    }
  } else {
    // random mix of yes/no from the group
    return GROUP_MEMBERS.map(name => ({ name, vote: Math.random() > 0.45 }));
  }
}

// Builds and displays the group vote popup with per-member vote chips and a result message
function showGroupVotePopup(restaurant, isLike, consensus, onDismiss) {
  const popup = document.getElementById("groupPopup");
  const votesEl = document.getElementById("groupPopupVotes");
  const msgEl = document.getElementById("groupPopupMsg");
  const btn = document.getElementById("groupPopupBtn");

  const votes = getGroupVotes(isLike, restaurant, consensus);

  // Build a chip for each group member's vote
  votesEl.innerHTML = votes.map(v => `
    <div class="vote-chip ${v.vote ? "yes" : "no"}">
      <div class="vote-avatar">${v.name[0]}</div>
      ${v.name} said <strong>${v.vote ? "yes" : "no"}</strong>
    </div>
  `).join("");

  const youChip = `<div class="vote-chip ${isLike ? "yes" : "no"}">
    <div class="vote-avatar">Y</div>
    You said <strong>${isLike ? "yes" : "no"}</strong>
  </div>`;
  votesEl.innerHTML = youChip + votesEl.innerHTML;

  // Set the result message and button style based on outcome
  if (!isLike) {
    msgEl.textContent = "Moving on to the next one.";
    msgEl.className = "group-popup-msg no-consensus";
    btn.textContent = "Continue";
    btn.className = "group-popup-btn";
  } else if (consensus) {
    msgEl.textContent = `You all chose ${restaurant.name}!`;
    msgEl.className = "group-popup-msg consensus";
    btn.textContent = "Let's go!";
    btn.className = "group-popup-btn consensus-btn";
  } else {
    msgEl.textContent = "Not everyone agrees yet — keep swiping!";
    msgEl.className = "group-popup-msg no-consensus";
    btn.textContent = "Continue";
    btn.className = "group-popup-btn";
  }

  popup.classList.add("show");
  popup._onDismiss = onDismiss;
}

function dismissGroupPopup() {
  const popup = document.getElementById("groupPopup");
  popup.classList.remove("show");
  if (typeof popup._onDismiss === "function") {
    popup._onDismiss();
    popup._onDismiss = null;
  }
}


/*-------------SLIDER FILL-----------*/
function syncSliderFill() {
  const slider = document.getElementById("distanceFilter");
  if (!slider) return;
  const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--val", pct + "%");
}


/*-------------INITIALIZATION-----------*/
// Runs on page load — sets up filters, slider, deck, and keyboard/click listeners
document.addEventListener("DOMContentLoaded", () => {
  buildTagFilters();
  updateDistanceLabel(50);

  // Sync slider fill whenever the value changes
  document.getElementById("distanceFilter").addEventListener("input", syncSliderFill);
  syncSliderFill();

  render();

  // Close the filter menu when clicking outside of it
  document.addEventListener("click", (e) => {
    const menu = document.getElementById("filterMenu");
    const wrap = document.querySelector(".filter-menu-wrap");
    if (wrap && !wrap.contains(e.target)) menu.classList.remove("show");
  });

  // Keyboard shortcuts: arrow keys to swipe, Z to undo, Escape to close filter menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.getElementById("filterMenu").classList.remove("show");
    if (!chosenRestaurant && e.key === "ArrowLeft") swipe(false);
    if (!chosenRestaurant && e.key === "ArrowRight") swipe(true);
    if (e.key.toLowerCase() === "z") undoLastSwipe();
  });
});