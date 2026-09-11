/**
 * Türk Tarihi — Zamanın İzinde
 * Etkileşimli SVG Harita Motoru
 */

class InteractiveHistoricalMap {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.currentEpoch = null;
    this.zoomLevel = 1;
    this.pan = { x: 0, y: 0 };
    this.viewBox = { width: 960, height: 500 };

    this.cities = [
      { id: "otuken", name: "Ötüken", x: 670, y: 220, labelPos: "top" },
      { id: "karabalgasun", name: "Karabalgasun", x: 685, y: 210, labelPos: "top" },
      { id: "kasgar", name: "Kaşgar", x: 550, y: 275, labelPos: "right" },
      { id: "balasagun", name: "Balasagun", x: 535, y: 250, labelPos: "top" },
      { id: "semerkant", name: "Semerkant", x: 490, y: 285, labelPos: "bottom" },
      { id: "merv", name: "Merv", x: 460, y: 305, labelPos: "bottom" },
      { id: "isfahan", name: "İsfahan", x: 395, y: 335, labelPos: "bottom" },
      { id: "bagdat", name: "Bağdat", x: 345, y: 340, labelPos: "bottom" },
      { id: "konya", name: "Konya", x: 265, y: 305, labelPos: "bottom" },
      { id: "iznik", name: "İznik", x: 235, y: 275, labelPos: "top" },
      { id: "bursa", name: "Bursa", x: 225, y: 280, labelPos: "left" },
      { id: "edirne", name: "Edirne", x: 210, y: 260, labelPos: "top" },
      { id: "istanbul", name: "İstanbul", x: 232, y: 265, labelPos: "top" },
      { id: "ankara", name: "Ankara", x: 270, y: 288, labelPos: "right" },
      { id: "budapeste", name: "Tuna / Budin", x: 195, y: 245, labelPos: "top" },
      { id: "roma", name: "Roma", x: 155, y: 285, labelPos: "bottom" },
      { id: "kahire", name: "Kahire", x: 275, y: 375, labelPos: "bottom" },
      { id: "baku", name: "Bakü", x: 390, y: 285, labelPos: "right" }
    ];

    this.init();
  }

  init() {
    this.renderBaseMap();
    this.bindControls();
  }

  renderBaseMap() {
    const svgMarkup = `
      <div class="map-focus-indicator" id="map-focus-indicator">Avrasya Bozkır Kuşağı</div>
      <div class="map-controls-toolbar">
        <button class="map-tool-btn" id="map-zoom-in" title="Yakınlaştır">+</button>
        <button class="map-tool-btn" id="map-zoom-out" title="Uzaklaştır">−</button>
        <button class="map-tool-btn" id="map-reset" title="Sıfırla">⟲</button>
      </div>

      <svg class="historical-svg-map" id="map-svg-element" viewBox="0 0 ${this.viewBox.width} ${this.viewBox.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Gradyanlar ve Filtreler -->
          <linearGradient id="goldTerritoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d4af37" stop-opacity="0.45" />
            <stop offset="70%" stop-color="#8c6d32" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#16243b" stop-opacity="0.1" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Arka Plan Grid / Koordinat Çizgileri -->
        <g class="map-grid-layer" opacity="0.3">
          <line x1="0" y1="120" x2="960" y2="120" class="map-water-grid" />
          <line x1="0" y1="240" x2="960" y2="240" class="map-water-grid" />
          <line x1="0" y1="360" x2="960" y2="360" class="map-water-grid" />
          <line x1="240" y1="0" x2="240" y2="500" class="map-water-grid" />
          <line x1="480" y1="0" x2="480" y2="500" class="map-water-grid" />
          <line x1="720" y1="0" x2="720" y2="500" class="map-water-grid" />
        </g>

        <!-- Avrasya & Anadolu Ana Kara Kütlesi (Stilize Vektör Çizimi) -->
        <g id="map-landmass-layer">
          <!-- Avrupa & Balkanlar -->
          <path class="map-landmass" d="
            M 120,170 
            Q 180,160 250,175 
            Q 240,240 220,260 
            Q 200,280 180,310 
            Q 150,290 140,250 
            Q 110,210 120,170 Z
          " />

          <!-- Karadeniz Havzası & Anadolu & Kafkaslar -->
          <path class="map-landmass" d="
            M 210,260 
            Q 260,255 310,260 
            Q 370,270 410,265 
            Q 400,320 340,330 
            Q 270,335 225,315 
            Q 215,290 210,260 Z
          " />

          <!-- Ön Asya, Mezopotamya & İran Platosu -->
          <path class="map-landmass" d="
            M 340,320 
            Q 410,310 470,300 
            Q 490,360 440,390 
            Q 360,390 320,360 
            Q 330,335 340,320 Z
          " />

          <!-- Orta Asya Bozkırları, Hazar & Aral Çevresi, Maveraünnehir -->
          <path class="map-landmass" d="
            M 380,240 
            Q 460,210 560,220 
            Q 620,250 610,310 
            Q 530,330 460,320 
            Q 390,300 380,240 Z
          " />

          <!-- Altaylar, Moğolistan Platosu, Baykal & Doğu Bozkırları -->
          <path class="map-landmass" d="
            M 560,210 
            Q 670,170 790,190 
            Q 840,240 810,290 
            Q 720,320 630,290 
            Q 580,260 560,210 Z
          " />

          <!-- Tarım Havzası & Çin Sınır Kuşağı -->
          <path class="map-landmass" d="
            M 580,270 
            Q 670,280 760,295 
            Q 740,360 650,370 
            Q 590,340 580,270 Z
          " />

          <!-- Hazar Denizi (İç Göl Boşluğu) -->
          <ellipse cx="370" cy="275" rx="14" ry="32" fill="#06080d" stroke="rgba(212,175,55,0.2)" stroke-width="0.75" />
          <!-- Karadeniz (İç Deniz Boşluğu) -->
          <ellipse cx="260" cy="265" rx="35" ry="16" fill="#06080d" stroke="rgba(212,175,55,0.2)" stroke-width="0.75" />
          <!-- Aral Gölü -->
          <ellipse cx="440" cy="260" rx="10" ry="14" fill="#06080d" stroke="rgba(212,175,55,0.2)" stroke-width="0.75" />
          <!-- Baykal Gölü -->
          <path d="M 720,165 Q 730,150 735,160 Q 725,175 720,165 Z" fill="#06080d" stroke="rgba(212,175,55,0.2)" stroke-width="0.75" />
        </g>

        <!-- Dinamik Hakimiyet Bölgesi Katmanı (Active Epoch Territory) -->
        <g id="map-active-territory-layer">
          <path id="map-territory-polygon" class="map-territory-path" d="" />
        </g>

        <!-- Dinamik Rota ve Göç Yolları Katmanı -->
        <g id="map-routes-layer"></g>

        <!-- Şehir ve Tarihi Merkez Düğümleri -->
        <g id="map-cities-layer">
          ${this.renderCities()}
        </g>
      </svg>

      <!-- Pusula / Damga Süslemesi -->
      <svg class="map-compass-rose" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="42" stroke="var(--gold-primary)" stroke-width="1" stroke-dasharray="2, 4" />
        <polygon points="50,12 56,44 50,50 44,44" fill="var(--gold-light)" />
        <polygon points="50,88 56,56 50,50 44,56" fill="var(--gold-deep)" />
        <polygon points="12,50 44,44 50,50 44,56" fill="var(--gold-deep)" />
        <polygon points="88,50 56,44 50,50 56,56" fill="var(--gold-deep)" />
        <circle cx="50" cy="50" r="4" fill="var(--gold-light)" />
      </svg>
    `;

    this.container.innerHTML = svgMarkup;
    this.svgElement = document.getElementById("map-svg-element");
    this.territoryElement = document.getElementById("map-territory-polygon");
    this.routesLayer = document.getElementById("map-routes-layer");
    this.focusIndicator = document.getElementById("map-focus-indicator");
  }

  renderCities() {
    return this.cities.map(city => {
      let textX = city.x;
      let textY = city.y - 7;
      let anchor = "middle";

      if (city.labelPos === "bottom") {
        textY = city.y + 13;
      } else if (city.labelPos === "right") {
        textX = city.x + 8;
        textY = city.y + 3;
        anchor = "start";
      } else if (city.labelPos === "left") {
        textX = city.x - 8;
        textY = city.y + 3;
        anchor = "end";
      }

      return `
        <g class="map-city-node" id="city-node-${city.id}" data-city-id="${city.id}" transform="translate(0, 0)">
          <circle class="map-city-dot" cx="${city.x}" cy="${city.y}" r="3.5" />
          <text class="map-city-label" x="${textX}" y="${textY}" text-anchor="${anchor}">${city.name}</text>
        </g>
      `;
    }).join("");
  }

  setEpoch(epoch) {
    if (!epoch || !epoch.geography) return;
    this.currentEpoch = epoch;

    // 1. Hakimiyet Alanı Yolunu Güncelle
    if (this.territoryElement && epoch.geography.territoryPath) {
      this.territoryElement.setAttribute("d", epoch.geography.territoryPath);
    }

    // 2. Coğrafi Bölge Göstergesi
    if (this.focusIndicator) {
      this.focusIndicator.textContent = epoch.geography.regionName || epoch.title;
    }

    // 3. Göç / Sefer Rotalarını Çiz
    if (this.routesLayer) {
      this.routesLayer.innerHTML = "";
      if (epoch.geography.routes && epoch.geography.routes.length > 0) {
        epoch.geography.routes.forEach(route => {
          const midX = (route.from.x + route.to.x) / 2;
          const midY = (route.from.y + route.to.y) / 2 - 20;
          const pathD = `M ${route.from.x},${route.from.y} Q ${midX},${midY} ${route.to.x},${route.to.y}`;
          
          const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathEl.setAttribute("class", "map-route-path");
          pathEl.setAttribute("d", pathD);
          this.routesLayer.appendChild(pathEl);
        });
      }
    }

    // 4. İlgili Merkez Şehri Vurgula
    this.highlightCapital(epoch);

    // 5. Yumuşak Harita Kamerası Odaklaması
    this.focusCoordinates(epoch.geography.centerCoords);
  }

  highlightCapital(epoch) {
    // Tüm şehirleri normale çek
    document.querySelectorAll(".map-city-node").forEach(el => {
      el.classList.remove("map-city-capital");
    });

    // Döneme ait merkezi vurgula
    const capitalName = epoch.geography.capitalOrCenter.toLowerCase();
    const matchedCity = this.cities.find(c => capitalName.includes(c.name.toLowerCase()));
    if (matchedCity) {
      const cityEl = document.getElementById(`city-node-${matchedCity.id}`);
      if (cityEl) {
        cityEl.classList.add("map-city-capital");
      }
    }
  }

  focusCoordinates(coords) {
    if (!coords || !this.svgElement) return;

    // Koordinat etrafında yumuşak hafif pan hareketi (ölçekli)
    const targetX = (coords.x - this.viewBox.width / 2) * 0.18;
    const targetY = (coords.y - this.viewBox.height / 2) * 0.18;
    this.pan = { x: -targetX, y: -targetY };

    this.applyTransform();
  }

  applyTransform() {
    if (!this.svgElement) return;
    this.svgElement.style.transform = `translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.zoomLevel})`;
  }

  bindControls() {
    const zoomIn = document.getElementById("map-zoom-in");
    const zoomOut = document.getElementById("map-zoom-out");
    const reset = document.getElementById("map-reset");

    if (zoomIn) {
      zoomIn.addEventListener("click", () => {
        this.zoomLevel = Math.min(this.zoomLevel + 0.25, 2.2);
        this.applyTransform();
      });
    }

    if (zoomOut) {
      zoomOut.addEventListener("click", () => {
        this.zoomLevel = Math.max(this.zoomLevel - 0.25, 0.85);
        this.applyTransform();
      });
    }

    if (reset) {
      reset.addEventListener("click", () => {
        this.zoomLevel = 1;
        this.pan = { x: 0, y: 0 };
        this.applyTransform();
      });
    }
  }
}

if (typeof window !== "undefined") {
  window.InteractiveHistoricalMap = InteractiveHistoricalMap;
}
