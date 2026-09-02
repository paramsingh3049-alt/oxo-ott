// ==========================================================================
// OXO XTREAM Main Application Engine
// Interactivity, Search, Watchlist, Slider, Modals & Notifications
// ==========================================================================

const OXOApp = {
  currentSlide: 0,
  sliderInterval: null,
  watchlist: [],
  downloads: [],

  init() {
    this.loadStorage();
    this.initNavbar();
    this.initHeroSlider();
    this.initSearchModal();
    this.initQuickViewModal();
    this.initCheckoutModal();
    this.updateWatchlistBadges();
  },

  loadStorage() {
    try {
      this.watchlist = JSON.parse(localStorage.getItem('oxo_watchlist')) || ['mv-1', 'sp-1', 'org-1'];
      this.downloads = JSON.parse(localStorage.getItem('oxo_downloads')) || [
        { id: 'mv-1', title: 'Shadows of Elysium', progress: 100, size: '4.2 GB', status: 'Completed' },
        { id: 'org-1', title: 'Red Horizon: Colony One', progress: 65, size: '3.1 GB', status: 'Downloading' }
      ];
    } catch (e) {
      this.watchlist = ['mv-1', 'sp-1', 'org-1'];
      this.downloads = [];
    }
  },

  saveStorage() {
    localStorage.setItem('oxo_watchlist', JSON.stringify(this.watchlist));
    localStorage.setItem('oxo_downloads', JSON.stringify(this.downloads));
    this.updateWatchlistBadges();
  },

  // --------------------------------------------------------------------------
  // NAVBAR & MOBILE MENU
  // --------------------------------------------------------------------------
  initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('open') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });
    }
  },

  // --------------------------------------------------------------------------
  // HERO BILLBOARD SLIDER
  // --------------------------------------------------------------------------
  initHeroSlider() {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer || !OTT_DATA.heroSlides) return;

    // Render Hero Slides
    sliderContainer.innerHTML = OTT_DATA.heroSlides.map((slide, index) => `
      <div class="hero-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img class="hero-backdrop" src="${slide.backdrop}" alt="${slide.title}">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-badges-row">
            <span class="hero-badge-pill"><i class="fas fa-fire"></i> ${slide.badge}</span>
            <span class="hero-quality-pill">${slide.quality}</span>
            <span class="hero-quality-pill"><i class="fas fa-volume-up"></i> ${slide.audio}</span>
          </div>
          <h1 class="hero-title">${slide.title}</h1>
          <div class="hero-tagline">${slide.tagline}</div>
          <div class="hero-meta">
            <span class="hero-rating"><i class="fas fa-star"></i> ${slide.rating}</span>
            <span>•</span>
            <span>${slide.year}</span>
            <span>•</span>
            <span>${slide.duration}</span>
            <span>•</span>
            <span class="hero-genre-tags">
              ${slide.genres.map(g => `<span class="hero-genre-tag">${g}</span>`).join('')}
            </span>
          </div>
          <p class="hero-desc">${slide.description}</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="OXOPlayer.playItem(findMediaById('${slide.id}'))">
              <i class="fas fa-play"></i> Watch Now
            </button>
            <button class="btn-secondary" onclick="OXOApp.showQuickView('${slide.id}')">
              <i class="fas fa-info-circle"></i> More Details
            </button>
            <button class="btn-icon-circle ${this.watchlist.includes(slide.id) ? 'active' : ''}" onclick="OXOApp.toggleWatchlist('${slide.id}')" title="Add to Watchlist">
              <i class="fas ${this.watchlist.includes(slide.id) ? 'fa-check' : 'fa-plus'}"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Indicators
    const indicatorsWrap = document.getElementById('hero-indicators');
    if (indicatorsWrap) {
      indicatorsWrap.innerHTML = OTT_DATA.heroSlides.map((_, i) => `
        <div class="hero-indicator ${i === 0 ? 'active' : ''}" onclick="OXOApp.goToSlide(${i})"></div>
      `).join('');
    }

    // Auto Play Slide
    this.startSliderAutoplay();

    // Arrows
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
  },

  startSliderAutoplay() {
    clearInterval(this.sliderInterval);
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 7000);
  },

  goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    if (!slides.length) return;

    this.currentSlide = (index + slides.length) % slides.length;

    slides.forEach((s, i) => s.classList.toggle('active', i === this.currentSlide));
    indicators.forEach((ind, i) => ind.classList.toggle('active', i === this.currentSlide));
    this.startSliderAutoplay();
  },

  nextSlide() {
    this.goToSlide(this.currentSlide + 1);
  },

  prevSlide() {
    this.goToSlide(this.currentSlide - 1);
  },

  // --------------------------------------------------------------------------
  // WATCHLIST & DOWNLOADS
  // --------------------------------------------------------------------------
  toggleWatchlist(id) {
    const item = findMediaById(id);
    if (!item) return;

    const index = this.watchlist.indexOf(id);
    if (index > -1) {
      this.watchlist.splice(index, 1);
      this.showToast(`Removed "${item.title}" from My Watchlist`, 'fa-minus-circle');
    } else {
      this.watchlist.push(id);
      this.showToast(`Added "${item.title}" to My Watchlist`, 'fa-bookmark');
    }

    this.saveStorage();
    this.updateCardWatchlistStates();
  },

  updateWatchlistBadges() {
    const badgeElems = document.querySelectorAll('.watchlist-count-badge');
    badgeElems.forEach(el => {
      el.innerText = this.watchlist.length;
    });
  },

  updateCardWatchlistStates() {
    document.querySelectorAll('[data-watchlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-watchlist-id');
      const inList = this.watchlist.includes(id);
      btn.innerHTML = inList ? '<i class="fas fa-check"></i> In Watchlist' : '<i class="fas fa-plus"></i> Watchlist';
      btn.classList.toggle('active', inList);
    });
  },

  triggerDownload(id) {
    const item = findMediaById(id);
    if (!item) return;

    const existing = this.downloads.find(d => d.id === id);
    if (existing) {
      this.showToast(`"${item.title}" is already in your offline downloads!`, 'fa-download');
      return;
    }

    this.downloads.push({
      id: item.id,
      title: item.title,
      progress: 10,
      size: '3.4 GB',
      status: 'Downloading'
    });
    this.saveStorage();
    this.showToast(`Started downloading "${item.title}" in 4K HDR for offline watch`, 'fa-arrow-down');

    // Simulate download progress
    let p = 10;
    const interval = setInterval(() => {
      p += 30;
      const target = this.downloads.find(d => d.id === id);
      if (target) {
        target.progress = Math.min(100, p);
        if (p >= 100) {
          target.status = 'Completed';
          clearInterval(interval);
          this.saveStorage();
          this.showToast(`Download complete: "${item.title}" is ready to watch offline!`, 'fa-check-circle');
        }
      } else {
        clearInterval(interval);
      }
    }, 1200);
  },

  // --------------------------------------------------------------------------
  // QUICK VIEW DETAIL MODAL
  // --------------------------------------------------------------------------
  initQuickViewModal() {
    if (document.getElementById('quickview-modal')) return;

    const modalHTML = `
      <div id="quickview-modal" class="quickview-modal-overlay">
        <div class="quickview-card">
          <button class="player-close-btn" onclick="OXOApp.closeQuickView()" title="Close">
            <i class="fas fa-times"></i>
          </button>
          <div class="quickview-hero">
            <img id="qv-img" class="quickview-hero-img" src="" alt="Title">
            <div class="quickview-hero-overlay"></div>
          </div>
          <div class="quickview-body">
            <div class="hero-badges-row">
              <span id="qv-badge" class="hero-badge-pill">PREMIERE</span>
              <span id="qv-quality" class="hero-quality-pill">4K UHD</span>
              <span id="qv-rating" class="hero-rating"><i class="fas fa-star"></i> 9.8</span>
            </div>
            <h2 id="qv-title" style="font-family:var(--font-heading); font-size:2rem; margin-bottom:0.5rem;"></h2>
            <div id="qv-meta" style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;"></div>
            <p id="qv-desc" style="color:#d1d5db; line-height:1.6; margin-bottom:1.5rem;"></p>
            <div id="qv-cast" style="font-size:0.88rem; color:var(--text-dim); margin-bottom:1.5rem;"></div>
            <div class="hero-actions">
              <button id="qv-play-btn" class="btn-primary">
                <i class="fas fa-play"></i> Watch Stream
              </button>
              <button id="qv-watchlist-btn" class="btn-secondary">
                <i class="fas fa-plus"></i> Watchlist
              </button>
              <button id="qv-download-btn" class="btn-secondary">
                <i class="fas fa-download"></i> Download Offline
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const qvModal = document.getElementById('quickview-modal');
    if (qvModal) {
      qvModal.addEventListener('click', (e) => {
        if (e.target === qvModal) this.closeQuickView();
      });
    }
  },

  showQuickView(id) {
    const item = findMediaById(id);
    if (!item) return;

    this.initQuickViewModal();
    const modal = document.getElementById('quickview-modal');
    document.getElementById('qv-img').src = item.backdrop || item.poster;
    document.getElementById('qv-badge').innerText = item.badge || 'FEATURED';
    document.getElementById('qv-quality').innerText = item.quality || '4K ULTRA HD';
    document.getElementById('qv-rating').innerHTML = `<i class="fas fa-star" style="color:var(--accent-gold)"></i> ${item.rating || '9.8'}`;
    document.getElementById('qv-title').innerText = item.title;
    document.getElementById('qv-meta').innerText = `${item.year || '2026'} • ${item.duration || 'Full HD'} • ${Array.isArray(item.genres) ? item.genres.join(', ') : item.category}`;
    document.getElementById('qv-desc').innerText = item.description || 'Experience cutting-edge entertainment with OXO XTREAM 4K HDR streaming.';

    const castElem = document.getElementById('qv-cast');
    if (item.cast && item.cast.length) {
      castElem.innerHTML = `<strong>Starring:</strong> ${item.cast.join(', ')}`;
      castElem.style.display = 'block';
    } else {
      castElem.style.display = 'none';
    }

    document.getElementById('qv-play-btn').onclick = () => {
      this.closeQuickView();
      OXOPlayer.playItem(item);
    };

    document.getElementById('qv-watchlist-btn').onclick = () => {
      this.toggleWatchlist(item.id);
    };

    document.getElementById('qv-download-btn').onclick = () => {
      this.triggerDownload(item.id);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  },

  // --------------------------------------------------------------------------
  // SEARCH MODAL & AUTOCOMPLETE
  // --------------------------------------------------------------------------
  initSearchModal() {
    if (document.getElementById('search-modal')) return;

    const modalHTML = `
      <div id="search-modal" class="search-modal-overlay">
        <button class="player-close-btn" onclick="OXOApp.closeSearch()" title="Close Search">
          <i class="fas fa-times"></i>
        </button>
        <div class="search-bar-wrap">
          <input type="text" id="global-search-input" class="search-input-field" placeholder="Search movies, live sports, originals, documentaries...">
          <i class="fas fa-search search-icon-inside"></i>
        </div>
        <div id="search-results-grid" class="search-results-grid"></div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const input = document.getElementById('global-search-input');
    if (input) {
      input.addEventListener('input', (e) => {
        this.performSearch(e.target.value.trim());
      });
    }

    const searchTriggers = document.querySelectorAll('.search-trigger-btn');
    searchTriggers.forEach(btn => {
      btn.addEventListener('click', () => this.openSearch());
    });
  },

  openSearch() {
    this.initSearchModal();
    const modal = document.getElementById('search-modal');
    modal.classList.add('active');
    const input = document.getElementById('global-search-input');
    if (input) {
      input.value = '';
      input.focus();
      this.performSearch('');
    }
    document.body.style.overflow = 'hidden';
  },

  closeSearch() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  },

  performSearch(query) {
    const container = document.getElementById('search-results-grid');
    if (!container) return;

    const allItems = [
      ...OTT_DATA.heroSlides,
      ...OTT_DATA.sports,
      ...OTT_DATA.cinema,
      ...OTT_DATA.media,
      ...OTT_DATA.originals
    ];

    // Deduplicate by ID
    const uniqueMap = new Map();
    allItems.forEach(item => {
      if (!uniqueMap.has(item.id)) uniqueMap.set(item.id, item);
    });
    const uniqueItems = Array.from(uniqueMap.values());

    const filtered = query === '' 
      ? uniqueItems.slice(0, 10) 
      : uniqueItems.filter(item => {
          const q = query.toLowerCase();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchCategory = item.category && item.category.toLowerCase().includes(q);
          const matchGenres = item.genres && item.genres.some(g => g.toLowerCase().includes(q));
          const matchCast = item.cast && item.cast.some(c => c.toLowerCase().includes(q));
          const matchLanguage = item.language && item.language.toLowerCase().includes(q);
          return matchTitle || matchCategory || matchGenres || matchCast || matchLanguage;
        });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:3rem; color:var(--text-muted)">
          <i class="fas fa-film" style="font-size:3rem; margin-bottom:1rem; color:var(--oxo-red)"></i>
          <h3>No titles found for "${query}"</h3>
          <p>Try searching for "Football", "Martian", "Cyber", "F1", or "Live News"</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="media-card" onclick="OXOApp.closeSearch(); OXOPlayer.playItem(findMediaById('${item.id}'))">
        <div class="card-poster-wrap">
          <img class="card-poster" src="${item.poster || item.backdrop}" alt="${item.title}">
          <span class="card-badge">${item.badge || item.category}</span>
          <span class="card-quality-tag">${item.quality || '4K'}</span>
          <div class="card-play-overlay">
            <div class="play-hover-btn"><i class="fas fa-play"></i></div>
          </div>
        </div>
        <div class="card-body">
          <h4 class="card-title">${item.title}</h4>
          <div class="card-meta-line">
            <span class="card-rating"><i class="fas fa-star"></i> ${item.rating}</span>
            <span>${item.year || '2026'}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  // --------------------------------------------------------------------------
  // CHECKOUT & SUBSCRIPTION SIMULATOR
  // --------------------------------------------------------------------------
  initCheckoutModal() {
    if (document.getElementById('checkout-modal')) return;

    const modalHTML = `
      <div id="checkout-modal" class="checkout-modal-overlay">
        <div class="checkout-box">
          <button class="player-close-btn" onclick="OXOApp.closeCheckout()" title="Close">
            <i class="fas fa-times"></i>
          </button>
          <div style="text-align:center; margin-bottom:1.5rem;">
            <img src="assets/images/logo.png" alt="OXO XTREAM" style="width:50px; height:50px; margin:0 auto 0.5rem; border-radius:50%; border:2px solid var(--oxo-red); box-shadow:var(--shadow-red);">
            <h3 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:800;" id="checkout-plan-name">XTREAM VIP ALL-ACCESS</h3>
            <p style="color:var(--oxo-red-glow); font-weight:700; font-size:1.2rem;" id="checkout-plan-price">$14.99 / month</p>
          </div>
          
          <div class="payment-method-selector">
            <div class="payment-pill active"><i class="fab fa-cc-visa"></i> Card</div>
            <div class="payment-pill"><i class="fab fa-apple-pay"></i> Apple</div>
            <div class="payment-pill"><i class="fab fa-paypal"></i> PayPal</div>
            <div class="payment-pill"><i class="fas fa-qrcode"></i> UPI</div>
          </div>

          <form id="checkout-form" onsubmit="OXOApp.completeCheckout(event)">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control" placeholder="Alex Morgan" required>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" placeholder="alex.morgan@domain.com" required>
            </div>
            <div class="form-group">
              <label>Card Number</label>
              <input type="text" class="form-control" placeholder="•••• •••• •••• 4242" required>
            </div>
            <button type="submit" class="btn-primary" style="width:100%; justify-content:center; margin-top:1.5rem;">
              <i class="fas fa-lock"></i> Activate VIP Pass Instantly
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  },

  openCheckout(planName, price) {
    this.initCheckoutModal();
    const modal = document.getElementById('checkout-modal');
    document.getElementById('checkout-plan-name').innerText = planName || 'XTREAM VIP ALL-ACCESS';
    document.getElementById('checkout-plan-price').innerText = price || '$14.99 / month';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  },

  completeCheckout(e) {
    e.preventDefault();
    this.closeCheckout();
    this.showToast('🎉 VIP Pass Activated! You now have unlimited 4K access to all content.', 'fa-crown');
  },

  // --------------------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // --------------------------------------------------------------------------
  showToast(message, icon = 'fa-info-circle') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'oxo-toast';
    toast.innerHTML = `
      <i class="fas ${icon} toast-icon"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
};

window.OXOApp = OXOApp;
document.addEventListener('DOMContentLoaded', () => OXOApp.init());
