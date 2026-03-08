const restaurants = [
  {
    name: "Amulet Bistro",
    cuisine: "Fusion",
    price: "$$",
    rating: 4.6,
    distanceKm: 2.1,
    photos: ["assets/amulet.jpg", "assets/c22.jpg", "assets/tgg.jpg"],
    contact: "(555) 123-4567",
    address: "123 Fantasy Lane, Stonebridge",
    hours: "Mon–Fri 10am–9pm, Sat–Sun 11am–8pm",
    website: "https://example.com/amulet"
  },
  {
    name: "Catch-22 Kitchen",
    cuisine: "Comfort",
    price: "$$",
    rating: 4.2,
    distanceKm: 3.7,
    photos: ["assets/c22.jpg", "assets/rye.jpg", "assets/moby.jpg"],
    contact: "(555) 234-5678",
    address: "22 Satirical St, Pianosa",
    hours: "Daily 11am–10pm",
    website: "https://example.com/catch22"
  },
  {
    name: "Great Gatsby Grill",
    cuisine: "Steakhouse",
    price: "$$$",
    rating: 4.8,
    distanceKm: 1.3,
    photos: ["assets/tgg.jpg", "assets/dante.jpg", "assets/pnp.jpg"],
    contact: "(555) 345-6789",
    address: "1 West Egg Drive, Long Island",
    hours: "Thu–Sun 6pm–11pm",
    website: "https://example.com/gatsby"
  },
  {
    name: "Rye & Co.",
    cuisine: "Brunch",
    price: "$",
    rating: 4.1,
    distanceKm: 4.9,
    photos: ["assets/rye.jpg", "assets/out.jpg", "assets/iliad.jpg"],
    contact: "(555) 456-7890",
    address: "456 Phony Ave, New York",
    hours: "Mon–Sat 9am–5pm",
    website: "https://example.com/rye"
  }
];

let filteredRestaurants = [...restaurants];
let index = 0;
let isAnimating = false;
let chosenRestaurant = null;

const liked = [];
const passed = [];
const history = [];

function buildCard(r, layerClass, cardIndex) {
  const hero = r.photos?.[0] || "";

  return `
    <article class="card ${layerClass}" data-index="${cardIndex}">
      <div class="card-inner">

        <div class="card-face card-front">
          <div class="photo" style="background-image:url('${hero}')"></div>
          <div class="fade"></div>

          <div class="badge like">LIKE</div>
          <div class="badge nope">NOPE</div>

          <div class="info">
            <div class="title-row">
              <div class="name">${escapeHtml(r.name)}</div>
            </div>
            <div class="sub">
              <span class="chip"><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}</span>
              <span class="chip">${r.cuisine} • ${r.price}</span>
              <span class="chip">${r.distanceKm} km</span>
            </div>
            <div class="tap-hint">Tap for details</div>
          </div>
        </div>

        <div class="card-face card-back">
          <div class="chosen-banner">You chose ${escapeHtml(r.name)}</div>

          <div class="back-content">
            <div class="back-title">${escapeHtml(r.name)}</div>
            <div class="back-sub">${r.cuisine} • ${r.price} • <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}</div>

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
                ${
                  r.website
                    ? `<a href="${r.website}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Visit website</a>`
                    : "—"
                }
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
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[s]));
}

function render() {
  const stack = document.getElementById("cardStack");
  const empty = document.getElementById("emptyState");

  stack.innerHTML = "";

  if (index >= filteredRestaurants.length) {
    empty.classList.add("show");
    return;
  }

  empty.classList.remove("show");

  const remaining = filteredRestaurants.length - index;
  const layers = Math.min(3, remaining);

  for (let i = layers - 1; i >= 0; i--) {
    const r = filteredRestaurants[index + i];
    const layerClass = i === 0 ? "top" : (i === 1 ? "layer-1" : "layer-2");
    stack.insertAdjacentHTML("beforeend", buildCard(r, layerClass, index + i));
  }

  initDrag();
  initFlip();
}

function swipe(isLike) {
  if (isAnimating || chosenRestaurant) return;

  const top = document.querySelector(".card.top");
  if (!top) return;

  const current = filteredRestaurants[index];
  if (!current) return;

  isAnimating = true;

  history.push({
    idx: index,
    action: isLike ? "like" : "pass",
    restaurant: current
  });

  if (isLike) liked.push(current);
  else passed.push(current);

  top.classList.add(isLike ? "fly-right" : "fly-left");
  showToast(isLike ? `You chose ${current.name}` : "Passed");

  setTimeout(() => {
    index++;
    isAnimating = false;
    render();

    if (isLike) {
      chosenRestaurant = current;
      showChosenOverlay(current);
      setActionButtonsDisabled(true);
    }
  }, 440);
}

function undoLastSwipe() {
  if (isAnimating) return;

  const last = history.pop();
  if (!last) {
    showToast("Nothing to undo");
    return;
  }

  index = last.idx;

  if (last.action === "like") {
    liked.pop();
    chosenRestaurant = null;
    hideChosenOverlay();
    setActionButtonsDisabled(false);
  } else if (last.action === "pass") {
    passed.pop();
  }

  showToast("Undone");
  render();
}

function resetDeck() {
  index = 0;
  liked.length = 0;
  passed.length = 0;
  history.length = 0;
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}

function applyFilters() {
  const distanceValue = document.getElementById("distanceFilter").value;
  const cuisineValue = document.getElementById("cuisineFilter").value;

  filteredRestaurants = restaurants.filter((r) => {
    const matchesDistance =
      distanceValue === "all" || r.distanceKm <= Number(distanceValue);

    const matchesCuisine =
      cuisineValue === "all" || r.cuisine === cuisineValue;

    return matchesDistance && matchesCuisine;
  });

  index = 0;
  history.length = 0;
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}

function resetFilters() {
  document.getElementById("distanceFilter").value = "all";
  document.getElementById("cuisineFilter").value = "all";
  filteredRestaurants = [...restaurants];
  index = 0;
  history.length = 0;
  chosenRestaurant = null;
  hideChosenOverlay();
  setActionButtonsDisabled(false);
  render();
}

function toggleFilterMenu() {
  document.getElementById("filterMenu").classList.toggle("show");
}

function initFlip() {
  const top = document.querySelector(".card.top");
  if (!top || chosenRestaurant) return;

  top.addEventListener("click", function (e) {
    if (isAnimating) return;
    if (e.target.closest("a")) return;

    if (top.dataset.dragged === "true") {
      top.dataset.dragged = "false";
      return;
    }

    top.classList.toggle("flipped");
  });
}

function initDrag() {
  const top = document.querySelector(".card.top");
  if (!top || chosenRestaurant) return;

  let startX = null;
  let startY = null;
  let dx = 0;
  let dy = 0;
  let dragging = false;

  const likeBadge = top.querySelector(".badge.like");
  const nopeBadge = top.querySelector(".badge.nope");

  function setBadges(dxVal) {
    const ratio = Math.min(Math.abs(dxVal) / 90, 1);

    if (dxVal > 0) {
      likeBadge.style.opacity = ratio;
      nopeBadge.style.opacity = 0;
    } else {
      nopeBadge.style.opacity = ratio;
      likeBadge.style.opacity = 0;
    }
  }

  function onStart(e) {
    if (isAnimating || chosenRestaurant) return;
    if (top.classList.contains("flipped")) return;

    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX;
    startY = pt.clientY;
    dx = 0;
    dy = 0;
    dragging = false;
    top.dataset.dragged = "false";
  }

  function onMove(e) {
    if (startX === null) return;

    const pt = e.touches ? e.touches[0] : e;
    dx = pt.clientX - startX;
    dy = pt.clientY - startY;

    if (!dragging && Math.abs(dx) < 6) return;

    dragging = true;
    top.dataset.dragged = "true";

    const rot = dx * 0.08;
    top.classList.add("dragging");
    top.style.transform = `translateX(${dx}px) translateY(${dy * 0.2}px) rotate(${rot}deg)`;

    setBadges(dx);

    if (e.cancelable) e.preventDefault();
  }

  function onEnd() {
    if (startX === null) return;

    top.classList.remove("dragging");
    likeBadge.style.opacity = 0;
    nopeBadge.style.opacity = 0;

    if (!dragging) {
      startX = null;
      return;
    }

    if (Math.abs(dx) > 110) {
      swipe(dx > 0);
    } else {
      top.style.transform = "";
    }

    startX = null;
    startY = null;
    dx = 0;
    dy = 0;
    dragging = false;
  }

  top.addEventListener("mousedown", onStart);
  top.addEventListener("touchstart", onStart, { passive: true });

  document.addEventListener("mousemove", onMove);
  document.addEventListener("touchmove", onMove, { passive: false });

  document.addEventListener("mouseup", onEnd);
  document.addEventListener("touchend", onEnd);
}

function showChosenOverlay(r) {
  const overlay = document.getElementById("chosenOverlay");
  if (!overlay) return;

  document.getElementById("chosenTitle").textContent = `You chose ${r.name}`;
  document.getElementById("chosenName").textContent = r.name;
  document.getElementById("chosenSub").innerHTML =
    `${r.cuisine} • ${r.price} • <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${r.rating ?? "—"}`;

  document.getElementById("chosenContact").textContent = r.contact ?? "—";
  document.getElementById("chosenAddress").textContent = r.address ?? "—";
  document.getElementById("chosenHours").textContent = r.hours ?? "—";

  const websiteEl = document.getElementById("chosenWebsite");
  if (r.website) {
    websiteEl.innerHTML = `<a href="${r.website}" target="_blank" rel="noopener">Visit website</a>`;
  } else {
    websiteEl.textContent = "—";
  }

  overlay.classList.add("show");
}

function hideChosenOverlay() {
  const overlay = document.getElementById("chosenOverlay");
  if (overlay) overlay.classList.remove("show");
}

function setActionButtonsDisabled(disabled) {
  const passBtn = document.getElementById("passBtn");
  const likeBtn = document.getElementById("likeBtn");

  [passBtn, likeBtn].forEach((btn) => {
    if (!btn) return;
    btn.disabled = disabled;
    btn.classList.toggle("disabled-action", disabled);
  });
}

let toastTimer = null;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1100);
}

document.addEventListener("DOMContentLoaded", () => {
  render();

  document.addEventListener("click", (e) => {
    const menu = document.getElementById("filterMenu");
    const wrap = document.querySelector(".filter-menu-wrap");

    if (wrap && !wrap.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("filterMenu").classList.remove("show");
    }

    if (!chosenRestaurant && e.key === "ArrowLeft") swipe(false);
    if (!chosenRestaurant && e.key === "ArrowRight") swipe(true);
    if (e.key.toLowerCase() === "z") undoLastSwipe();
  });
});