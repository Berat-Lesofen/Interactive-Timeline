/**
 * Türk Tarihi — Zamanın İzinde
 * Ana Uygulama Koordinatörü ve Parçacık Motoru
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Arka Plan Ambiyans Parçacıklarını Başlat
  initAmbientCanvas();

  // 2. Alt Sistemleri Başlat
  const mapEngine = new window.InteractiveHistoricalMap("historical-map-container");
  const modalEngine = new window.MuseumArchiveModal();
  const audioEngine = new window.MuseumAudioEngine();

  const timelineEngine = new window.HistoricalTimelineEngine({
    map: mapEngine,
    modal: modalEngine,
    audio: audioEngine
  });

  // 3. Hızlı Dönem Menüsü (Quick Jump) Olayları
  const quickJumpBtn = document.getElementById("quick-jump-toggle-btn");
  const quickJumpPanel = document.getElementById("quick-jump-panel");
  const quickJumpClose = document.getElementById("quick-jump-close-btn");
  const heroQuickJumpBtn = document.getElementById("hero-quick-jump-btn");

  if (quickJumpBtn && quickJumpPanel) {
    quickJumpBtn.addEventListener("click", () => {
      quickJumpPanel.classList.add("open");
    });
  }

  if (heroQuickJumpBtn && quickJumpPanel) {
    heroQuickJumpBtn.addEventListener("click", () => {
      quickJumpPanel.classList.add("open");
    });
  }

  if (quickJumpClose && quickJumpPanel) {
    quickJumpClose.addEventListener("click", () => {
      quickJumpPanel.classList.remove("open");
    });
  }

  if (quickJumpPanel) {
    quickJumpPanel.addEventListener("click", (e) => {
      if (e.target === quickJumpPanel) {
        quickJumpPanel.classList.remove("open");
      }
    });
  }

  // 4. Hero "Zamanın İzinde İlerle" ve Keşfet Butonları
  const startJourneyBtn = document.getElementById("hero-start-btn");
  const scrollPromptBtn = document.getElementById("hero-scroll-prompt");

  const scrollToFirstEpoch = (e) => {
    if (e) e.preventDefault();
    const firstCard = document.querySelector(".epoch-card");
    if (firstCard) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = firstCard.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  if (startJourneyBtn) startJourneyBtn.addEventListener("click", scrollToFirstEpoch);
  if (scrollPromptBtn) scrollPromptBtn.addEventListener("click", scrollToFirstEpoch);

  // 5. Klavye Kısayolları (Yön Tuşları ile Dönemler Arası Gezinme)
  document.addEventListener("keydown", (e) => {
    // Çekmece veya Quick Jump açıksa yön tuşlarını devre dışı bırak
    if (modalEngine.isOpen || (quickJumpPanel && quickJumpPanel.classList.contains("open"))) {
      return;
    }

    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      const nextIndex = Math.min(timelineEngine.activeEpochIndex + 1, timelineEngine.epochs.length - 1);
      const nextEpoch = timelineEngine.epochs[nextIndex];
      if (nextEpoch) timelineEngine.scrollToEpoch(nextEpoch.id);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      const prevIndex = Math.max(timelineEngine.activeEpochIndex - 1, 0);
      const prevEpoch = timelineEngine.epochs[prevIndex];
      if (prevEpoch) timelineEngine.scrollToEpoch(prevEpoch.id);
    }
  });
});

/**
 * Tuval üzerinde uçuşan altın/kemik tozu ve bozkır yıldız parçacıkları
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particlesCount = Math.min(width > 768 ? 55 : 25, 70);
  const particles = [];

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25 - 0.08,
      alpha: Math.random() * 0.55 + 0.15,
      hue: Math.random() > 0.4 ? 43 : 36 // Altın & Bronz tonları
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 65%, 65%, ${p.alpha})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = `hsla(${p.hue}, 80%, 60%, 0.4)`;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });
}
