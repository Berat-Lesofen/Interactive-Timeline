/**
 * Türk Tarihi — Zamanın İzinde
 * Müze Arşiv Çekmecesi (Side Drawer / Modal) Yöneticisi
 */

class MuseumArchiveModal {
  constructor() {
    this.overlay = document.getElementById("archive-drawer-overlay");
    this.panel = document.getElementById("archive-drawer-panel");
    this.closeBtn = document.getElementById("drawer-close-btn");
    
    // Başlık Elemanları
    this.periodTag = document.getElementById("drawer-period-tag");
    this.titleEl = document.getElementById("drawer-title");
    this.subtitleEl = document.getElementById("drawer-subtitle");

    // Sekmeler ve Paneller
    this.tabButtons = document.querySelectorAll(".drawer-tab-btn");
    this.tabPanes = document.querySelectorAll(".drawer-tab-pane");

    // İçerik Taşıyıcıları
    this.subBranchesContainer = document.getElementById("pane-subbranches");
    this.rulersContainer = document.getElementById("pane-rulers");
    this.artifactsContainer = document.getElementById("pane-artifacts");
    this.continuityContainer = document.getElementById("pane-continuity");

    this.isOpen = false;
    this.currentEpoch = null;

    this.init();
  }

  init() {
    if (!this.overlay) return;

    // Kapatma Olayları
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    // Sekme Değiştirme
    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.dataset.tab;
        this.switchTab(targetTab);
      });
    });
  }

  open(epoch) {
    if (!epoch) return;
    this.currentEpoch = epoch;

    // Başlıkları Doldur
    if (this.periodTag) this.periodTag.textContent = epoch.periodBadge || "";
    if (this.titleEl) this.titleEl.textContent = epoch.title;
    if (this.subtitleEl) this.subtitleEl.textContent = epoch.subtitle || epoch.tagline;

    // Sekme İçeriklerini Render Et
    this.renderSubBranches(epoch);
    this.renderRulers(epoch);
    this.renderArtifacts(epoch);
    this.renderContinuity(epoch);

    // Varsayılan sekmeye dön (Yan Dallar)
    this.switchTab("subbranches");

    // Çekmeceyi Aç
    this.overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;
    this.overlay.classList.remove("active");
    document.body.style.overflow = "";
    this.isOpen = false;
  }

  switchTab(tabId) {
    this.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    this.tabPanes.forEach(pane => {
      pane.classList.toggle("active", pane.id === `pane-${tabId}`);
    });
  }

  renderSubBranches(epoch) {
    if (!this.subBranchesContainer) return;

    if (!epoch.subBranches || epoch.subBranches.length === 0) {
      this.subBranchesContainer.innerHTML = `
        <div class="sub-branch-info-banner">
          Bu döneme ait ana omurga tek bir merkezi yapı etrafında şekillenmiştir.
        </div>
      `;
      return;
    }

    const cardsHtml = epoch.subBranches.map(branch => `
      <div class="sub-branch-card">
        <div class="sub-branch-header">
          <h4 class="sub-branch-name">${branch.name}</h4>
          <span class="sub-branch-period">${branch.period}</span>
        </div>
        <div class="sub-branch-region">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/></svg>
          ${branch.region}
        </div>
        <p class="sub-branch-desc">${branch.desc}</p>
      </div>
    `).join("");

    this.subBranchesContainer.innerHTML = `
      <div class="sub-branch-info-banner">
        <strong>Tarihsel Derinlik & Yan Kollar:</strong> ${epoch.title} dönemi boyunca gelişen alt hanedanlar, bölgesel kollar ve devam yapıları:
      </div>
      <div class="sub-branches-grid">
        ${cardsHtml}
      </div>
    `;
  }

  renderRulers(epoch) {
    if (!this.rulersContainer) return;

    if (!epoch.rulers || epoch.rulers.length === 0) {
      this.rulersContainer.innerHTML = `<p class="sub-branch-desc">Bu döneme ait lider bilgisi arşivleniyor.</p>`;
      return;
    }

    const rulersHtml = epoch.rulers.map(ruler => `
      <div class="ruler-detail-card">
        <h4 class="ruler-name">${ruler.name}</h4>
        <div class="ruler-role">${ruler.title}</div>
        <p class="ruler-note">${ruler.note}</p>
      </div>
    `).join("");

    this.rulersContainer.innerHTML = `
      <div class="rulers-cards-list">
        ${rulersHtml}
      </div>
    `;
  }

  renderArtifacts(epoch) {
    if (!this.artifactsContainer) return;

    if (!epoch.artifacts || epoch.artifacts.length === 0) {
      this.artifactsContainer.innerHTML = `<p class="sub-branch-desc">Maddi kültür arşivi hazırlanıyor.</p>`;
      return;
    }

    const artifactsHtml = epoch.artifacts.map(item => `
      <div class="artifact-card">
        <div class="artifact-header">
          <h4 class="artifact-name">${item.name}</h4>
          <span class="artifact-century">${item.century}</span>
        </div>
        <div class="artifact-location">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${item.location}
        </div>
        <p class="artifact-desc">${item.desc}</p>
      </div>
    `).join("");

    this.artifactsContainer.innerHTML = `
      <div class="artifacts-grid">
        ${artifactsHtml}
      </div>
    `;
  }

  renderContinuity(epoch) {
    if (!this.continuityContainer) return;

    const milestonesHtml = (epoch.milestones || []).map(m => `
      <div class="milestone-detail-item">
        <div class="milestone-year">${m.year}</div>
        <div class="milestone-event">${m.event}</div>
      </div>
    `).join("");

    this.continuityContainer.innerHTML = `
      <div class="continuity-deep-box">
        <h3>Tarihsel Süreklilik ve Geleceğe Miras</h3>
        <p>${epoch.continuity || "Türk devlet aklı ve kültürü bu dönemin ardından bir sonraki evreye aktarılmıştır."}</p>
      </div>

      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-primary); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 1.25rem;">
        Dönemin Önemli Kırılma Noktaları
      </h4>
      <div class="milestones-detailed-timeline">
        ${milestonesHtml}
      </div>
    `;
  }
}

if (typeof window !== "undefined") {
  window.MuseumArchiveModal = MuseumArchiveModal;
}
