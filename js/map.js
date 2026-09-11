/**
 * Türk Tarihi — Zamanın İzinde
 * Profesyonel Etkileşimli Tarih Haritası Motoru (Digital History Museum Cartography)
 * 
 * Özellikler:
 * 1. Gerçek dünya coğrafyası: Karadeniz (Kırım & Boğazlar), Hazar Denizi (Bakü & Volga),
 *    Anadolu, Kafkaslar, Balkanlar/Tuna, Orta Asya, Aral, Balkaş, Baykal, Altaylar ve Tanrı Dağları.
 * 2. Her dönemin kendine has tarihsel etki alanı (Influence Area) ve göç/sefer rotaları.
 * 3. Döneme özel filtrelenmiş stratejik merkezler (etiket karmaşası yok, hover müze tooltip'i).
 * 4. Sinematik kamera: Dönemler arası yumuşak pan & zoom (SVG viewBox interpolasyonu).
 * 5. Kullanıcı kontrolleri: Mouse/Touch ile sürükleme (drag), tekerlek ile zoom, Zoom +/- ve Reset.
 */

class InteractiveHistoricalMap {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.currentEpoch = null;
    this.baseDimensions = { width: 1200, height: 650 };
    this.currentViewBox = { x: 0, y: 0, w: 1200, h: 650 };
    this.targetViewBox = { x: 0, y: 0, w: 1200, h: 650 };
    this.animatingCamera = false;
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.viewBoxAtDragStart = { ...this.currentViewBox };

    this.init();
  }

  init() {
    this.renderBaseMap();
    this.bindControls();
    this.bindMouseDragAndZoom();
  }

  renderBaseMap() {
    const markup = `
      <div class="map-focus-indicator" id="map-focus-indicator">Avrasya Bozkır Kuşağı</div>
      
      <div class="map-controls-toolbar">
        <button class="map-tool-btn" id="map-zoom-in" title="Yakınlaştır">+</button>
        <button class="map-tool-btn" id="map-zoom-out" title="Uzaklaştır">−</button>
        <button class="map-tool-btn" id="map-reset" title="Bölgeye Odakla (Sıfırla)">⟲</button>
      </div>

      <div class="map-hint-text">Haritayı sürükleyebilir, tekerlekle yakınlaştırabilirsiniz</div>

      <!-- Müze Etkileşimli Tooltip'i -->
      <div class="map-tooltip" id="map-museum-tooltip">
        <div class="map-tooltip-header">
          <span class="map-tooltip-title" id="tooltip-title">Merkez</span>
          <span class="map-tooltip-badge" id="tooltip-badge">Başkent</span>
        </div>
        <div class="map-tooltip-body" id="tooltip-body">Tarihsel açıklama</div>
      </div>

      <svg class="historical-svg-map" id="map-svg-element" 
           viewBox="0 0 ${this.baseDimensions.width} ${this.baseDimensions.height}" 
           xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        
        <defs>
          <!-- Gradyanlar -->
          <radialGradient id="steppeGoldGlowGradient" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#d4af37" stop-opacity="0.38" />
            <stop offset="60%" stop-color="#a67c1e" stop-opacity="0.18" />
            <stop offset="100%" stop-color="#07090e" stop-opacity="0.02" />
          </radialGradient>

          <linearGradient id="routeGoldFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f3d778" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#d4af37" stop-opacity="0.65" />
          </linearGradient>

          <filter id="museumGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Arka Plan Deniz Suları -->
        <rect class="map-water-bg" width="1200" height="650" />

        <!-- Koordinat ve Meridyen Kılavuz Hatları -->
        <g class="map-graticules" opacity="0.25">
          <line x1="0" y1="180" x2="1200" y2="180" class="map-graticule-line" />
          <line x1="0" y1="280" x2="1200" y2="280" class="map-graticule-line" />
          <line x1="0" y1="380" x2="1200" y2="380" class="map-graticule-line" />
          <line x1="0" y1="480" x2="1200" y2="480" class="map-graticule-line" />
          
          <line x1="200" y1="0" x2="200" y2="650" class="map-graticule-line" />
          <line x1="400" y1="0" x2="400" y2="650" class="map-graticule-line" />
          <line x1="600" y1="0" x2="600" y2="650" class="map-graticule-line" />
          <line x1="800" y1="0" x2="800" y2="650" class="map-graticule-line" />
          <line x1="1000" y1="0" x2="1000" y2="650" class="map-graticule-line" />
        </g>

        <!-- AVRASYA VE ANADOLU ANA KARA KÜTLESİ (Anatomik Olarak Gerçekçi Vektör Çizimi) -->
        <g id="map-landmass-layer">
          <path class="map-land-base" d="
            M 60,380 
            C 75,360 85,340 105,320 
            C 125,300 135,270 145,245 
            C 155,225 185,210 215,200 
            C 240,195 260,170 275,140 
            C 285,120 320,110 380,105 
            C 500,95 650,90 850,85 
            C 1000,85 1120,95 1180,110 
            L 1180,520 
            C 1140,510 1080,480 1040,460 
            C 980,440 920,450 860,460 
            C 800,470 760,490 710,510 
            C 650,525 580,510 520,490 
            C 470,480 430,465 390,460 
            C 340,460 280,475 230,470 
            C 180,465 140,440 100,430 
            C 70,420 55,400 60,380 Z
          " />

          <!-- AKDENİZ VE EGE SU BOŞLUĞU (İtalya, Yunanistan, Levant ve Mısır Kıyıları) -->
          <path class="map-inland-sea" d="
            M 60,385 
            C 110,380 160,350 195,335 
            C 215,325 210,355 228,380 
            C 235,395 220,405 215,410 
            C 225,412 245,390 252,368 
            C 260,345 250,325 270,335 
            C 285,345 292,370 305,385 
            C 315,395 328,385 325,365 
            C 322,345 340,335 345,325 
            C 350,335 340,355 352,368 
            C 365,380 405,372 445,368 
            C 460,365 448,390 445,415 
            C 440,440 400,445 365,440 
            C 300,430 220,440 150,430 
            C 100,420 70,405 60,385 Z
          " />

          <!-- GİRİT VE KIBRIS ADALARI -->
          <ellipse cx="335" cy="402" rx="16" ry="4" class="map-land-base" />
          <ellipse cx="420" cy="380" rx="14" ry="5" class="map-land-base" />

          <!-- KARADENİZ (Kırım Yarımadası, Azak Denizi, Sinop ve Boğazlar) -->
          <path class="map-inland-sea" d="
            M 367,300 
            C 355,290 350,274 353,258 
            C 356,248 368,245 378,243 
            C 388,242 396,240 405,240 
            C 408,243 410,248 412,254 
            C 408,260 412,266 418,270 
            C 426,273 435,269 442,262 
            C 442,252 440,245 444,238 
            C 452,233 462,233 468,236 
            C 466,245 456,252 448,260 
            C 455,268 470,282 482,298 
            C 485,304 478,311 468,312 
            C 452,310 435,306 422,305 
            C 414,307 410,295 404,296 
            C 396,298 392,305 385,306 
            C 376,305 372,302 367,300 Z
          " />

          <!-- HAZAR DENİZİ (Volga Girişi, Bakü/Abşeron Burnu, Derbent Kapısı ve Türkmen Koyu) -->
          <path class="map-inland-sea" d="
            M 525,232 
            C 517,236 514,244 515,254 
            C 517,266 520,275 524,286 
            C 526,293 534,297 542,298 
            C 544,301 535,305 530,310 
            C 525,320 526,332 530,342 
            C 538,348 554,348 562,340 
            C 566,330 562,315 558,306 
            C 555,300 565,296 567,286 
            C 565,280 556,282 552,284 
            C 548,276 544,265 538,255 
            C 535,245 532,236 525,232 Z
          " />

          <!-- ARAL GÖLÜ (Tarihsel Geniş Formu) -->
          <ellipse cx="628" cy="265" rx="16" ry="22" class="map-inland-sea" />

          <!-- BALKAŞ GÖLÜ (Hilal / Bumerang Şekli) -->
          <path class="map-lake" d="
            M 735,248 
            Q 760,236 786,246 
            Q 762,243 735,248 Z
          " />

          <!-- BAYKAL GÖLÜ (Derin Tektonik Hilal) -->
          <path class="map-lake" d="
            M 996,192 
            C 1002,176 1012,155 1024,138 
            C 1022,154 1014,174 1006,190 Z
          " />
        </g>

        <!-- ÖNEMLİ TARİHİ NEHİRLER (İnce Asil Su Damarları) -->
        <g id="map-rivers-layer">
          <!-- Tuna Nehri (Danube) -->
          <path class="map-river-path" d="M 225,235 C 255,232 272,226 288,235 C 302,244 318,266 338,262 C 352,258 362,252 372,246" />
          <text x="250" y="226" class="map-river-label">Tuna (Danube)</text>

          <!-- İdil (Volga) Nehri -->
          <path class="map-river-path" d="M 455,135 C 485,160 515,185 508,210 C 504,225 516,232 525,232" />
          <text x="475" y="152" class="map-river-label">İdil (Volga)</text>

          <!-- Dinyeper Nehri -->
          <path class="map-river-path" d="M 382,155 C 392,185 402,210 395,240" />
          <text x="368" y="175" class="map-river-label">Dinyeper</text>

          <!-- Seyhun (Syr Darya) -->
          <path class="map-river-path" d="M 745,285 C 720,272 675,262 636,252" />
          <text x="685" y="260" class="map-river-label">Seyhun</text>

          <!-- Ceyhun (Amu Darya) -->
          <path class="map-river-path" d="M 705,330 C 670,315 640,302 624,282" />
          <text x="645" y="318" class="map-river-label">Ceyhun</text>

          <!-- Orhun & Selenga Nehri -->
          <path class="map-river-path" d="M 952,242 C 966,228 978,212 998,190" />
          <text x="942" y="245" class="map-river-label">Orhun</text>
        </g>

        <!-- DAĞ KUŞAKLARI VE KABARTMALAR (Altaylar, Tanrı Dağları, Kafkaslar, Karpatlar, Toroslar) -->
        <g id="map-mountains-layer">
          <!-- Karpat Dağları (Pannonia'yı saran hilal) -->
          <path class="map-mountain-ridge" d="M 285,205 C 320,195 345,215 348,245" />
          <text x="300" y="200" class="map-mountain-label">Karpatlar</text>

          <!-- Kafkas Dağları (İki deniz arasındaki set) -->
          <path class="map-mountain-ridge" d="M 465,278 C 485,272 505,274 522,284" />
          <text x="475" y="270" class="map-mountain-label">Kafkaslar</text>

          <!-- Toros Dağları (Güney Anadolu) -->
          <path class="map-mountain-ridge" d="M 375,348 C 410,344 445,346 468,340" />
          <text x="405" y="342" class="map-mountain-label">Toroslar</text>

          <!-- Tanrı Dağları (Tian Shan) -->
          <path class="map-mountain-ridge" d="M 735,282 C 765,278 795,282 822,295" />
          <text x="755" y="274" class="map-mountain-label">Tanrı Dağları</text>

          <!-- Altay Dağları (Bozkırın kalbi) -->
          <path class="map-mountain-ridge" d="M 825,215 C 848,198 870,188 895,182" />
          <text x="850" y="180" class="map-mountain-label">Altay Dağları</text>

          <!-- Ural Dağları -->
          <path class="map-mountain-ridge" d="M 575,105 L 580,215" />
          <text x="584" y="150" class="map-mountain-label">Urallar</text>
        </g>

        <!-- BÜYÜK BOZKIR KUŞAĞI REFERANSI -->
        <g id="map-steppe-belt" opacity="0.6">
          <path class="map-steppe-corridor" d="
            M 285,235 
            C 380,225 500,215 620,220 
            C 750,225 880,210 1020,215
          " />
          <text x="540" y="212" class="map-steppe-text">Büyük Avrasya Bozkır Kuşağı</text>
        </g>

        <!-- SABİT COĞRAFİ METİNLER (Hafif ve Zarif) -->
        <g id="map-geo-labels">
          <text x="390" y="285" class="map-geographic-label">Karadeniz</text>
          <text x="532" y="325" class="map-geographic-label">Hazar Denizi</text>
          <text x="405" y="325" class="map-geographic-label">Anadolu</text>
          <text x="635" y="235" class="map-geographic-label">Maveraünnehir</text>
          <text x="965" y="265" class="map-geographic-label">Moğolistan Platosu</text>
        </g>

        <!-- DİNAMİK TARİHSEL ETKİ ALANI (INFLUENCE TERRITORY) KATMANI -->
        <g id="map-influence-layer" class="map-influence-group">
          <path id="map-influence-polygon" class="map-influence-territory" d="" />
        </g>

        <!-- DİNAMİK GÖÇ VE SEFER ROTALARI KATMANI -->
        <g id="map-routes-layer"></g>

        <!-- DİNAMİK STRATEJİK MERKEZLER (KEY PLACES) KATMANI -->
        <g id="map-places-layer" class="map-places-group"></g>
      </svg>

      <!-- Antik Pusula Gülü -->
      <svg class="map-compass-rose" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="44" stroke="var(--gold-primary)" stroke-width="1" stroke-dasharray="2, 4" />
        <polygon points="50,10 56,44 50,50 44,44" fill="var(--gold-light)" />
        <polygon points="50,90 56,56 50,50 44,56" fill="var(--gold-deep)" />
        <polygon points="10,50 44,44 50,50 44,56" fill="var(--gold-deep)" />
        <polygon points="90,50 56,44 50,50 56,56" fill="var(--gold-deep)" />
        <circle cx="50" cy="50" r="3.5" fill="var(--gold-light)" />
      </svg>
    `;

    this.container.innerHTML = markup;
    this.svgElement = document.getElementById("map-svg-element");
    this.influencePolygon = document.getElementById("map-influence-polygon");
    this.routesLayer = document.getElementById("map-routes-layer");
    this.placesLayer = document.getElementById("map-places-layer");
    this.focusIndicator = document.getElementById("map-focus-indicator");
    this.tooltipEl = document.getElementById("map-museum-tooltip");
  }

  /**
   * Dönem Değiştiğinde Haritayı Sinematik Şekilde Güncelle
   */
  setEpoch(epoch) {
    if (!epoch || !epoch.geography) return;
    this.currentEpoch = epoch;

    // 1. Bölge Başlık Rozeti
    if (this.focusIndicator) {
      this.focusIndicator.textContent = epoch.geography.regionName || epoch.title;
    }

    // 2. Etki Alanını Güncelle (Yumuşak Geçişle)
    if (this.influencePolygon && epoch.geography.territoryPath) {
      this.influencePolygon.style.opacity = "0";
      setTimeout(() => {
        this.influencePolygon.setAttribute("d", epoch.geography.territoryPath);
        this.influencePolygon.style.opacity = "0.78";
      }, 300);
    }

    // 3. Rotaları Çiz
    this.renderRoutes(epoch.geography.routes || []);

    // 4. Stratejik Merkezleri Render Et (Sadece Bu Döneme Ait Olanlar!)
    this.renderKeyPlaces(epoch.geography.keyPlaces || []);

    // 5. Kamerayı Yumuşakça İlgili Coğrafyaya Odakla (Pan + Zoom)
    if (epoch.geography.camera) {
      this.animateCameraTo(epoch.geography.camera.center, epoch.geography.camera.zoom);
    }
  }

  /**
   * Göç ve Sefer Çizgilerini Çiz
   */
  renderRoutes(routes) {
    if (!this.routesLayer) return;
    this.routesLayer.innerHTML = "";

    routes.forEach((r, idx) => {
      const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("class", "map-route-line");
      const dAttr = r.path || (r.from && r.to ? `M ${r.from.x},${r.from.y} Q ${(r.from.x + r.to.x)/2},${(r.from.y + r.to.y)/2 - 25} ${r.to.x},${r.to.y}` : "");
      pathEl.setAttribute("d", dAttr);
      pathEl.setAttribute("data-label", r.label || "");
      this.routesLayer.appendChild(pathEl);
    });
  }

  /**
   * Stratejik Merkezleri Temiz ve Kalabalıksız Olarak Bas
   */
  renderKeyPlaces(places) {
    if (!this.placesLayer) return;
    this.placesLayer.innerHTML = "";

    places.forEach(place => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", `map-place-node ${place.type || 'landmark'}`);
      g.setAttribute("data-place-id", place.id);
      g.setAttribute("transform", `translate(${place.x}, ${place.y})`);

      // Dış Parıldayan Halka
      const ripple = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      ripple.setAttribute("class", "map-place-pulse");
      ripple.setAttribute("cx", "0");
      ripple.setAttribute("cy", "0");
      ripple.setAttribute("r", "4");

      // Merkez Noktası
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "map-place-dot");
      dot.setAttribute("cx", "0");
      dot.setAttribute("cy", "0");

      // Etiket
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("class", "map-place-label");
      label.setAttribute("x", "0");
      label.setAttribute("y", "-9");
      label.setAttribute("text-anchor", "middle");
      label.textContent = place.name;

      g.appendChild(ripple);
      g.appendChild(dot);
      g.appendChild(label);

      // Tooltip Olayları
      g.addEventListener("mouseenter", (e) => this.showTooltip(place, e));
      g.addEventListener("mouseleave", () => this.hideTooltip());
      g.addEventListener("click", (e) => {
        e.stopPropagation();
        this.showTooltip(place, e);
      });

      this.placesLayer.appendChild(g);
    });
  }

  showTooltip(place, event) {
    if (!this.tooltipEl) return;

    const titleEl = document.getElementById("tooltip-title");
    const badgeEl = document.getElementById("tooltip-badge");
    const bodyEl = document.getElementById("tooltip-body");

    if (titleEl) titleEl.textContent = place.name;
    if (badgeEl) {
      badgeEl.textContent = place.type === "capital" ? "Başkent / Otağ" : (place.type === "kurgan" ? "Kurgan / Arkeoloji" : "Tarihi Merkez");
    }
    if (bodyEl) bodyEl.textContent = place.desc || place.note || "Tarihsel referans noktası.";

    // Konumlandırma
    const rect = this.container.getBoundingClientRect();
    const svgPoint = this.coordinateToScreen(place.x, place.y);

    if (svgPoint) {
      this.tooltipEl.style.left = `${svgPoint.x}px`;
      this.tooltipEl.style.top = `${svgPoint.y}px`;
      this.tooltipEl.classList.add("visible");
    }
  }

  hideTooltip() {
    if (this.tooltipEl) {
      this.tooltipEl.classList.remove("visible");
    }
  }

  coordinateToScreen(svgX, svgY) {
    if (!this.svgElement) return null;
    const pt = this.svgElement.createSVGPoint();
    pt.x = svgX;
    pt.y = svgY;
    const screenPt = pt.matrixTransform(this.svgElement.getScreenCTM());
    const containerRect = this.container.getBoundingClientRect();
    return {
      x: screenPt.x - containerRect.left,
      y: screenPt.y - containerRect.top
    };
  }

  /**
   * Sinematik Kamera Pan & Zoom Motoru (viewBox İnterpolasyonu)
   */
  animateCameraTo(center, zoom = 1.0, duration = 950) {
    if (!center) return;

    const targetW = Math.max(350, Math.min(1200, this.baseDimensions.width / zoom));
    const targetH = Math.max(200, Math.min(650, this.baseDimensions.height / zoom));
    
    // Merkezleme ve Sınırlar
    let targetX = center.x - targetW / 2;
    let targetY = center.y - targetH / 2;

    targetX = Math.max(0, Math.min(1200 - targetW, targetX));
    targetY = Math.max(0, Math.min(650 - targetH, targetY));

    const startX = this.currentViewBox.x;
    const startY = this.currentViewBox.y;
    const startW = this.currentViewBox.w;
    const startH = this.currentViewBox.h;

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Smooth Cubic In-Out Easing
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      this.currentViewBox.x = startX + (targetX - startX) * ease;
      this.currentViewBox.y = startY + (targetY - startY) * ease;
      this.currentViewBox.w = startW + (targetW - startW) * ease;
      this.currentViewBox.h = startH + (targetH - startH) * ease;

      this.applyViewBox();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.currentViewBox = { x: targetX, y: targetY, w: targetW, h: targetH };
        this.applyViewBox();
      }
    };

    requestAnimationFrame(step);
  }

  applyViewBox() {
    if (!this.svgElement) return;
    this.svgElement.setAttribute(
      "viewBox", 
      `${this.currentViewBox.x} ${this.currentViewBox.y} ${this.currentViewBox.w} ${this.currentViewBox.h}`
    );
  }

  /**
   * Manuel Sürükleme (Drag to Pan) ve Tekerlek Zoom Kontrolleri
   */
  bindMouseDragAndZoom() {
    if (!this.svgElement) return;

    // Mouse Drag
    this.svgElement.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return; // Yalnızca sol tık
      this.isDragging = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.viewBoxAtDragStart = { ...this.currentViewBox };
      this.hideTooltip();
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;

      const scale = this.currentViewBox.w / this.container.clientWidth;
      let newX = this.viewBoxAtDragStart.x - dx * scale;
      let newY = this.viewBoxAtDragStart.y - dy * scale;

      newX = Math.max(0, Math.min(1200 - this.currentViewBox.w, newX));
      newY = Math.max(0, Math.min(650 - this.currentViewBox.h, newY));

      this.currentViewBox.x = newX;
      this.currentViewBox.y = newY;
      this.applyViewBox();
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    // Touch Drag
    this.svgElement.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        this.viewBoxAtDragStart = { ...this.currentViewBox };
        this.hideTooltip();
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.dragStart.x;
      const dy = e.touches[0].clientY - this.dragStart.y;

      const scale = this.currentViewBox.w / this.container.clientWidth;
      let newX = this.viewBoxAtDragStart.x - dx * scale;
      let newY = this.viewBoxAtDragStart.y - dy * scale;

      newX = Math.max(0, Math.min(1200 - this.currentViewBox.w, newX));
      newY = Math.max(0, Math.min(650 - this.currentViewBox.h, newY));

      this.currentViewBox.x = newX;
      this.currentViewBox.y = newY;
      this.applyViewBox();
    }, { passive: true });

    window.addEventListener("touchend", () => {
      this.isDragging = false;
    });

    // Tekerlek ile Zoom
    this.container.addEventListener("wheel", (e) => {
      e.preventDefault();
      this.hideTooltip();

      const zoomFactor = e.deltaY < 0 ? 0.9 : 1.1;
      const newW = Math.max(320, Math.min(1200, this.currentViewBox.w * zoomFactor));
      const newH = Math.max(180, Math.min(650, this.currentViewBox.h * zoomFactor));

      // Fare merkezine doğru zoom
      const rect = this.container.getBoundingClientRect();
      const mouseRelX = (e.clientX - rect.left) / rect.width;
      const mouseRelY = (e.clientY - rect.top) / rect.height;

      let newX = this.currentViewBox.x + (this.currentViewBox.w - newW) * mouseRelX;
      let newY = this.currentViewBox.y + (this.currentViewBox.h - newH) * mouseRelY;

      newX = Math.max(0, Math.min(1200 - newW, newX));
      newY = Math.max(0, Math.min(650 - newH, newY));

      this.currentViewBox = { x: newX, y: newY, w: newW, h: newH };
      this.applyViewBox();
    }, { passive: false });
  }

  /**
   * Araç Çubuğu Butonları (+, -, ⟲)
   */
  bindControls() {
    const zoomIn = document.getElementById("map-zoom-in");
    const zoomOut = document.getElementById("map-zoom-out");
    const reset = document.getElementById("map-reset");

    if (zoomIn) {
      zoomIn.addEventListener("click", () => {
        const center = {
          x: this.currentViewBox.x + this.currentViewBox.w / 2,
          y: this.currentViewBox.y + this.currentViewBox.h / 2
        };
        const currentZoom = this.baseDimensions.width / this.currentViewBox.w;
        this.animateCameraTo(center, Math.min(2.5, currentZoom * 1.3), 350);
      });
    }

    if (zoomOut) {
      zoomOut.addEventListener("click", () => {
        const center = {
          x: this.currentViewBox.x + this.currentViewBox.w / 2,
          y: this.currentViewBox.y + this.currentViewBox.h / 2
        };
        const currentZoom = this.baseDimensions.width / this.currentViewBox.w;
        this.animateCameraTo(center, Math.max(0.9, currentZoom * 0.75), 350);
      });
    }

    if (reset) {
      reset.addEventListener("click", () => {
        if (this.currentEpoch && this.currentEpoch.geography && this.currentEpoch.geography.camera) {
          this.animateCameraTo(this.currentEpoch.geography.camera.center, this.currentEpoch.geography.camera.zoom, 600);
        } else {
          this.animateCameraTo({ x: 600, y: 325 }, 1.0, 600);
        }
      });
    }
  }
}

if (typeof window !== "undefined") {
  window.InteractiveHistoricalMap = InteractiveHistoricalMap;
}
