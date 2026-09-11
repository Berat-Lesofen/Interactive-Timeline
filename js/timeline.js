/**
 * Türk Tarihi — Zamanın İzinde
 * Timeline Akışı, Canlı Scrubber ve Scroll Senkronizasyonu Motoru
 */

class HistoricalTimelineEngine {
  constructor(options = {}) {
    this.epochs = window.HISTORICAL_EPOCHS || [];
    this.map = options.map || null;
    this.modal = options.modal || null;
    this.audio = options.audio || null;

    this.streamContainer = document.getElementById("narrative-stream");
    this.scrubberContainer = document.getElementById("timeline-scrubber");
    this.quickJumpGrid = document.getElementById("quick-jump-grid");
    this.progressBar = document.getElementById("reading-progress-bar");

    // Sabit Sahne Elemanları
    this.stageBadge = document.getElementById("stage-epoch-badge");
    this.stageName = document.getElementById("stage-epoch-name");
    this.stageGeo = document.getElementById("stage-epoch-geography");
    this.stageCenter = document.getElementById("stage-center-name");
    this.stageCounter = document.getElementById("stage-era-counter");

    this.activeEpochIndex = 0;
    this.observer = null;

    this.init();
  }

  init() {
    this.renderCards();
    this.renderScrubber();
    this.renderQuickJump();
    this.setupScrollObserver();
    this.bindWindowScroll();
  }

  renderCards() {
    if (!this.streamContainer) return;

    this.streamContainer.innerHTML = this.epochs.map((epoch, index) => {
      // 1. Hükümdarlar Hapları
      const rulersHtml = (epoch.rulers || []).slice(0, 3).map(r => `
        <li class="ruler-pill" title="${r.title}: ${r.note}">
          <strong>${r.name}</strong>
        </li>
      `).join("");

      // 2. Kültür Sembolleri
      const symbolsHtml = (epoch.culture?.symbols || []).map(s => `
        <span class="symbol-badge">${s}</span>
      `).join("");

      // 3. İlk Önemli Olay
      const firstMilestone = epoch.milestones && epoch.milestones[0] 
        ? epoch.milestones[0] 
        : { year: epoch.periodBadge, event: epoch.tagline };

      return `
        <article class="epoch-card ${index === 0 ? 'active' : ''}" id="epoch-${epoch.id}" data-epoch-id="${epoch.id}" data-order="${epoch.order}">
          <header class="epoch-card-header">
            <div class="epoch-timeline-pill">
              <span class="epoch-pill-index">${String(epoch.order).padStart(2, '0')}</span>
              <span>${epoch.periodBadge}</span>
            </div>
            <h2 class="epoch-title">${epoch.title}</h2>
            <h3 class="epoch-subtitle">${epoch.subtitle}</h3>
          </header>

          <p class="epoch-lead">${epoch.lead}</p>

          <!-- 3 Sütunlu Özet Grid'i -->
          <div class="epoch-pillars-grid">
            <div class="pillar-col">
              <h4>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Hükümdarlar
              </h4>
              <ul class="pillar-rulers-list">
                ${rulersHtml}
              </ul>
            </div>

            <div class="pillar-col">
              <h4>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                Kültür & Miras
              </h4>
              <div class="pillar-culture-content">
                <div class="pillar-symbols">
                  ${symbolsHtml}
                </div>
              </div>
            </div>

            <div class="pillar-col">
              <h4>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Dönüm Noktası
              </h4>
              <div class="pillar-milestone-text">
                <span class="pillar-milestone-year">${firstMilestone.year}</span>
                <span>${firstMilestone.event}</span>
              </div>
            </div>
          </div>

          <!-- Süreklilik Bağı -->
          <div class="epoch-continuity-box">
            <div class="continuity-header">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              Tarihsel Süreklilik Bağı
            </div>
            <div class="continuity-text">"${epoch.continuity}"</div>
          </div>

          <!-- Aksiyon Satırı -->
          <footer class="epoch-actions-row">
            <button class="btn-open-archive" data-epoch-id="${epoch.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              Detaylı Arşiv ve Yan Dallar
            </button>

            <button class="btn-focus-map" data-epoch-id="${epoch.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
              Haritada Odaklan
            </button>
          </footer>
        </article>
      `;
    }).join("");

    // Buton Olaylarını Bağla
    this.bindCardEvents();
  }

  bindCardEvents() {
    // Arşiv Çekmecesini Açma
    document.querySelectorAll(".btn-open-archive").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const epochId = btn.dataset.epochId;
        const epoch = this.epochs.find(item => item.id === epochId);
        if (epoch && this.modal) {
          this.modal.open(epoch);
        }
      });
    });

    // Haritada Odaklanma Butonu
    document.querySelectorAll(".btn-focus-map").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const epochId = btn.dataset.epochId;
        const epoch = this.epochs.find(item => item.id === epochId);
        if (epoch && this.map) {
          this.map.setEpoch(epoch);
        }
      });
    });
  }

  renderScrubber() {
    if (!this.scrubberContainer) return;

    const nodesHtml = this.epochs.map((epoch, index) => `
      <div class="scrubber-node ${index === 0 ? 'active' : ''}" data-index="${index}" data-epoch-id="${epoch.id}">
        <span class="scrubber-tooltip">${epoch.order}. ${epoch.title}</span>
      </div>
    `).join("");

    this.scrubberContainer.innerHTML = `
      <div class="scrubber-track"></div>
      <div class="scrubber-fill" id="scrubber-fill"></div>
      ${nodesHtml}
    `;

    // Scrubber Düğümlerine Tıklama
    this.scrubberContainer.querySelectorAll(".scrubber-node").forEach(node => {
      node.addEventListener("click", () => {
        const epochId = node.dataset.epochId;
        this.scrollToEpoch(epochId);
      });
    });
  }

  renderQuickJump() {
    if (!this.quickJumpGrid) return;

    this.quickJumpGrid.innerHTML = this.epochs.map(epoch => `
      <a href="#epoch-${epoch.id}" class="quick-jump-item" data-epoch-id="${epoch.id}">
        <span class="quick-jump-number">${String(epoch.order).padStart(2, '0')}</span>
        <div class="quick-jump-text">
          <h4>${epoch.title}</h4>
          <span>${epoch.periodBadge}</span>
        </div>
      </a>
    `).join("");

    this.quickJumpGrid.querySelectorAll(".quick-jump-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const epochId = item.dataset.epochId;
        this.scrollToEpoch(epochId);
        // Paneli kapat
        const quickJumpPanel = document.getElementById("quick-jump-panel");
        if (quickJumpPanel) quickJumpPanel.classList.remove("open");
      });
    });
  }

  setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: "-25% 0px -40% 0px",
      threshold: [0.1, 0.5]
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const epochId = entry.target.dataset.epochId;
          const index = this.epochs.findIndex(e => e.id === epochId);
          if (index !== -1 && index !== this.activeEpochIndex) {
            this.setActiveEpoch(index);
          }
        }
      });
    }, options);

    document.querySelectorAll(".epoch-card").forEach(card => {
      this.observer.observe(card);
    });

    // İlk dönemi aktif yap
    if (this.epochs.length > 0) {
      this.setActiveEpoch(0, false);
    }
  }

  setActiveEpoch(index, triggerSound = true) {
    this.activeEpochIndex = index;
    const epoch = this.epochs[index];
    if (!epoch) return;

    // 1. Kart Vurgusu
    document.querySelectorAll(".epoch-card").forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    // 2. Sabit Sahne Bilgilerini Güncelle
    if (this.stageBadge) this.stageBadge.textContent = epoch.periodBadge;
    if (this.stageName) this.stageName.textContent = epoch.title;
    if (this.stageGeo) {
      this.stageGeo.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        ${epoch.geography?.regionName || "Avrasya"}
      `;
    }
    if (this.stageCenter) this.stageCenter.textContent = epoch.geography?.capitalOrCenter || "—";
    if (this.stageCounter) this.stageCounter.textContent = `${epoch.order} / ${this.epochs.length}`;

    // 3. Haritayı Güncelle
    if (this.map) {
      this.map.setEpoch(epoch);
    }

    // 4. Scrubber Güncelle
    const nodes = document.querySelectorAll(".scrubber-node");
    nodes.forEach((node, i) => {
      node.classList.toggle("active", i === index);
    });

    const scrubberFill = document.getElementById("scrubber-fill");
    if (scrubberFill && nodes.length > 1) {
      const fillPercent = (index / (nodes.length - 1)) * 100;
      scrubberFill.style.height = `${fillPercent}%`;
    }

    // 5. Ses Efekti (Opsiyonel Çan)
    if (triggerSound && this.audio) {
      this.audio.playChime();
    }
  }

  scrollToEpoch(epochId) {
    const target = document.getElementById(`epoch-${epochId}`);
    if (!target) return;

    const offset = 90;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  bindWindowScroll() {
    window.addEventListener("scroll", () => {
      // Okuma ilerleme çubuğu
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (this.progressBar) {
        this.progressBar.style.width = scrolled + "%";
      }

      // HUD Scroll Efekti
      const hud = document.getElementById("site-hud");
      if (hud) {
        hud.classList.toggle("scrolled", winScroll > 50);
      }
    }, { passive: true });
  }
}

if (typeof window !== "undefined") {
  window.HistoricalTimelineEngine = HistoricalTimelineEngine;
}
