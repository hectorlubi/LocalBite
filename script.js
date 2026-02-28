/* ============================================
   RESTAURANT DATA
   ============================================ */
const tinderBooks = [
    {
        title: 'Amulet',
        author: 'Kazu Kibuishi',
        images: ['assets/amulet.jpg', 'assets/c22.jpg', 'assets/tgg.jpg'],
        contact: '(555) 123-4567',
        address: '123 Fantasy Lane, Stonebridge',
        hours: 'Mon–Fri 10am–9pm, Sat–Sun 11am–8pm',
        website: 'https://example.com/amulet'
    },
    {
        title: 'Catch-22',
        author: 'Joseph Heller',
        images: ['assets/c22.jpg', 'assets/rye.jpg', 'assets/moby.jpg'],
        contact: '(555) 234-5678',
        address: '22 Satirical St, Pianosa',
        hours: 'Daily 11am–10pm',
        website: 'https://example.com/catch22'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        images: ['assets/tgg.jpg', 'assets/dante.jpg', 'assets/pnp.jpg'],
        contact: '(555) 345-6789',
        address: '1 West Egg Drive, Long Island',
        hours: 'Thu–Sun 6pm–11pm',
        website: 'https://example.com/gatsby'
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        images: ['assets/rye.jpg', 'assets/out.jpg', 'assets/iliad.jpg'],
        contact: '(555) 456-7890',
        address: '456 Phony Ave, New York',
        hours: 'Mon–Sat 9am–5pm',
        website: 'https://example.com/rye'
    },
    {
        title: 'Moby-Dick',
        author: 'Herman Melville',
        images: ['assets/moby.jpg', 'assets/iliad.jpg', 'assets/hp.jpg'],
        contact: '(555) 567-8901',
        address: '1 Nantucket Wharf, New Bedford',
        hours: 'Tue–Sun 12pm–8pm',
        website: 'https://example.com/moby'
    },
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        images: ['assets/hp.jpg', 'assets/charlie.jpg', 'assets/amulet.jpg'],
        contact: '(555) 678-9012',
        address: '4 Privet Drive, Little Whinging',
        hours: 'Daily 8am–11pm',
        website: 'https://example.com/hp'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        images: ['assets/dune.jpg', 'assets/451.jpg', 'assets/thg.jpg'],
        contact: '(555) 789-0123',
        address: '1 Arrakis Blvd, Giedi Prime',
        hours: 'Mon–Fri 11am–9pm',
        website: 'https://example.com/dune'
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        images: ['assets/frank.jpg', 'assets/lord.jpg', 'assets/dante.jpg'],
        contact: '(555) 890-1234',
        address: '17 Ingolstadt Road, Geneva',
        hours: 'Wed–Sun 5pm–12am',
        website: 'https://example.com/frank'
    }
];

let currentCardIndex = 0;
let isAnimating = false;

/* ============================================
   CARD BUILDER
   ============================================ */
function buildCard(book) {
    const imagesHtml = book.images.map((img, i) =>
        `<div class="card-image ${i === 0 ? 'active' : ''}" style="background-image: url('${img}')"></div>`
    ).join('');

    const dotsHtml = book.images.map((_, i) =>
        `<div class="image-dot ${i === 0 ? 'active' : ''}"></div>`
    ).join('');

    const bookIndex = currentCardIndex;

    return `
    <div class="tinder-card top-card" data-book-index="${bookIndex}">
        <div class="swipe-overlay-nope">NOPE</div>
        <div class="swipe-overlay-like">LIKE</div>

        <div class="card-front">
            <div class="card-images">
                ${imagesHtml}
                <div class="image-dots">${dotsHtml}</div>
                <div class="image-click-zones">
                    <div class="image-click-zone" onclick="prevImage(event, this.closest('.tinder-card'))"></div>
                    <div class="image-click-zone" onclick="nextImage(event, this.closest('.tinder-card'))"></div>
                </div>
            </div>

            <div class="card-info-bar" onclick="openCardModal(${bookIndex})">
                <div class="card-book-name">${book.title}</div>
                <div class="info-tap-hint">More info →</div>
            </div>

            <div class="card-actions">
                <button class="action-btn-tinder btn-nope" onclick="swipeCard(false)">✕</button>
                <button class="action-btn-tinder btn-like" onclick="swipeCard(true)">✓</button>
            </div>
        </div>
    </div>`;
}

/* ============================================
   DECK RENDERER
   ============================================ */
function renderDeck() {
    const stack = document.getElementById('cardStack');
    stack.innerHTML = '';

    if (currentCardIndex >= tinderBooks.length) {
        stack.style.display = 'none';
        document.getElementById('tinderEmpty').classList.add('visible');
        document.getElementById('tinderArena').classList.add('hidden');
        return;
    }

    const remaining = tinderBooks.length - currentCardIndex;
    const layers    = Math.min(3, remaining);

    for (let i = layers - 1; i >= 0; i--) {
        const book = tinderBooks[currentCardIndex + i];
        const el   = document.createElement('div');
        el.innerHTML = buildCard(book);
        const card = el.firstElementChild;

        if (i !== 0) {
            card.classList.remove('top-card');
            if (i === 1) card.style.cssText = 'transform: rotate(-3deg) translateY(8px) scale(0.97); z-index: 1;';
            if (i === 2) card.style.cssText = 'transform: rotate(2deg) translateY(16px) scale(0.94); z-index: 0;';
        }

        stack.appendChild(card);
    }

    initSwipe();
}

/* ============================================
   SWIPE ACTION
   ============================================ */
function swipeCard(liked) {
    if (isAnimating) return;
    const stack   = document.getElementById('cardStack');
    const topCard = stack.querySelector('.top-card');
    if (!topCard) return;

    isAnimating = true;
    topCard.classList.add(liked ? 'fly-right' : 'fly-left');

    setTimeout(() => {
        currentCardIndex++;
        isAnimating = false;
        renderDeck();
    }, 500);
}

function resetTinderDeck() {
    currentCardIndex = 0;
    document.getElementById('tinderEmpty').classList.remove('visible');
    document.getElementById('cardStack').style.display = '';
    document.getElementById('tinderArena').classList.remove('hidden');
    renderDeck();
}

/* ============================================
   IMAGE CYCLING
   ============================================ */
function nextImage(e, card) {
    e.stopPropagation();
    cycleImage(card, 1);
}

function prevImage(e, card) {
    e.stopPropagation();
    cycleImage(card, -1);
}

function cycleImage(card, dir) {
    const images = card.querySelectorAll('.card-image');
    const dots   = card.querySelectorAll('.image-dot');
    if (images.length <= 1) return;

    let current = [...images].findIndex(img => img.classList.contains('active'));
    images[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = (current + dir + images.length) % images.length;
    images[current].classList.add('active');
    dots[current].classList.add('active');
}

/* ============================================
   INFO MODAL
   ============================================ */
function openCardModal(indexOrTitle) {
    // resolve the book object from either an index or a title
    let book;
    if (typeof indexOrTitle === 'number') {
        book = tinderBooks[indexOrTitle];
    } else {
        book = tinderBooks.find(b => b.title === indexOrTitle);
    }

    // fallback for carousel items not yet in tinderBooks
    if (!book) {
        book = {
            title:   String(indexOrTitle),
            contact: 'Coming soon',
            address: 'Coming soon',
            hours:   'Coming soon',
            website: '#'
        };
    }

    document.getElementById('cardModalTitle').textContent = book.title;

    document.getElementById('cardModalBody').innerHTML = `
        <div class="info-row">
            <div>
                <div class="info-label">Contact</div>
                <div class="info-value">${book.contact}</div>
            </div>
        </div>
        <div class="info-row">
            <div>
                <div class="info-label">Address</div>
                <div class="info-value">${book.address}</div>
            </div>
        </div>
        <div class="info-row">
            <div>
                <div class="info-label">Hours</div>
                <div class="info-value">${book.hours}</div>
            </div>
        </div>
        <div class="info-row">
            <div>
                <div class="info-label">Website</div>
                <div class="info-value"><a href="${book.website}" target="_blank">Visit website</a></div>
            </div>
        </div>
        <div class="map-placeholder"></div>
    `;

    document.getElementById('cardModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCardModal() {
    document.getElementById('cardModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ============================================
   SWIPE GESTURE (drag / touch)
   ============================================ */
function initSwipe() {
    const stack   = document.getElementById('cardStack');
    const topCard = stack.querySelector('.top-card');
    if (!topCard) return;

    let startX     = null;
    let currentX   = 0;
    let isDragging = false;

    function onStart(e) {
        if (isAnimating) return;
        if (document.getElementById('cardModal').classList.contains('active')) return;
        const pt = e.touches ? e.touches[0] : e;
        startX     = pt.clientX;
        isDragging = false;
        currentX   = 0;
    }

    function onMove(e) {
        if (startX === null) return;
        const pt = e.touches ? e.touches[0] : e;
        const dx = pt.clientX - startX;

        if (!isDragging && Math.abs(dx) < 5) return;

        isDragging = true;
        currentX   = dx;

        topCard.style.transform = `translateX(${dx}px) rotate(${dx * 0.08}deg)`;
        topCard.classList.add('dragging');

        const ratio = Math.min(Math.abs(dx) / 80, 1);
        topCard.querySelector('.swipe-overlay-nope').style.opacity = dx < 0 ? ratio : 0;
        topCard.querySelector('.swipe-overlay-like').style.opacity = dx > 0 ? ratio : 0;

        if (e.cancelable) e.preventDefault();
    }

    function onEnd() {
        if (startX === null || !isDragging) { startX = null; return; }

        topCard.classList.remove('dragging');
        topCard.querySelector('.swipe-overlay-nope').style.opacity = 0;
        topCard.querySelector('.swipe-overlay-like').style.opacity = 0;

        if (Math.abs(currentX) > 80) {
            swipeCard(currentX > 0);
        } else {
            topCard.style.transform = '';
        }

        startX     = null;
        currentX   = 0;
        isDragging = false;
    }

    topCard.addEventListener('mousedown',  onStart);
    topCard.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup',   onEnd);
    document.addEventListener('touchend',  onEnd);
}

/* ============================================
   CAROUSEL
   ============================================ */
const scrollPositions   = { featured: 0, popular: 0, romance: 0, horror: 0 };
const carouselIntervals = { featured: null, popular: null, romance: null, horror: null };

function scrollCarousel(sectionId, direction) {
    const carousel = document.getElementById(sectionId + '-carousel');
    if (!carousel) return;

    const cardWidth = 195;
    const visible   = Math.floor(carousel.parentElement.offsetWidth / cardWidth);
    const maxScroll = Math.max(0, (carousel.children.length - visible) * cardWidth);

    scrollPositions[sectionId] += direction * cardWidth * 3;

    if (scrollPositions[sectionId] < 0)             scrollPositions[sectionId] = maxScroll;
    else if (scrollPositions[sectionId] > maxScroll) scrollPositions[sectionId] = 0;

    carousel.style.transform = `translateX(-${scrollPositions[sectionId]}px)`;
}

function startAutoplay(id) {
    stopAutoplay(id);
    const carousel = document.getElementById(id + '-carousel');
    if (!carousel) return;
    const delays = { featured: 8000, popular: 10000, romance: 12000, horror: 14000 };
    carouselIntervals[id] = setInterval(() => scrollCarousel(id, 1), delays[id]);
}

function stopAutoplay(id) {
    if (carouselIntervals[id]) {
        clearInterval(carouselIntervals[id]);
        carouselIntervals[id] = null;
    }
}

/* ============================================
   SEARCH
   ============================================ */
function searchBooks() {
    const input = document.getElementById('searchInput');
    const term  = input.value.trim();
    if (!term) { alert('Please enter a search term.'); return; }
    alert(`"${term}" is unavailable at the moment.`);
    input.value = '';
}

/* ============================================
   UTILITIES
   ============================================ */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {

    renderDeck();

    // Carousel autoplay + hover pause
    const carouselIds = ['featured', 'popular', 'romance', 'horror'];
    carouselIds.forEach(id => startAutoplay(id));

    document.querySelectorAll('.carousel-container').forEach((container, i) => {
        const id = carouselIds[i];
        if (!id) return;
        container.addEventListener('mouseenter', () => stopAutoplay(id));
        container.addEventListener('mouseleave', () => startAutoplay(id));
    });

    // Close modal on backdrop click or Escape
    document.getElementById('cardModal').addEventListener('click', function (e) {
        if (e.target === this) closeCardModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeCardModal();
    });

    // Search on Enter
    document.getElementById('searchInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') searchBooks();
    });
});