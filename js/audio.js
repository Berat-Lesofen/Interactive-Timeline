/**
 * Türk Tarihi — Zamanın İzinde
 * Web Audio API Ortam Ambiyansı ve Sinematik Ses Motoru
 * (Sıfır dış ses dosyası bağımlılığı, %100 yerli tarayıcı sentezleyicisi)
 */

class MuseumAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.gainNode = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.filterNode = null;

    this.toggleBtn = document.getElementById("audio-toggle-btn");
    this.iconEl = document.getElementById("audio-btn-icon");
    this.textEl = document.getElementById("audio-btn-text");

    this.init();
  }

  init() {
    if (!this.toggleBtn) return;

    this.toggleBtn.addEventListener("click", () => {
      this.toggleAudio();
    });
  }

  ensureContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  toggleAudio() {
    this.ensureContext();

    if (this.isPlaying) {
      this.stopDrone();
      this.isPlaying = false;
      this.updateUI(false);
    } else {
      this.startDrone();
      this.isPlaying = true;
      this.updateUI(true);
      // Başlangıç çanı
      this.playChime();
    }
  }

  startDrone() {
    if (!this.audioCtx) return;

    const t = this.audioCtx.currentTime;

    // Ana Master Gain
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, t);
    this.gainNode.gain.exponentialRampToValueAtTime(0.045, t + 3); // Çok yumuşak ve rahatsız etmeyen seviye

    // Alçak Geçiren Filtre (Bozkır Rüzgarı / Sıcaklık)
    this.filterNode = this.audioCtx.createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.setValueAtTime(140, t);

    // 1. Osilatör (Derin Bozkır Tonu - 55 Hz / A1)
    this.droneOsc1 = this.audioCtx.createOscillator();
    this.droneOsc1.type = "sine";
    this.droneOsc1.frequency.setValueAtTime(55, t);

    // 2. Osilatör (Genişlik Katan Sub-Harmonik - 82.4 Hz / E2)
    this.droneOsc2 = this.audioCtx.createOscillator();
    this.droneOsc2.type = "triangle";
    this.droneOsc2.frequency.setValueAtTime(82.4, t);

    this.droneOsc1.connect(this.filterNode);
    this.droneOsc2.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);

    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  stopDrone() {
    if (!this.audioCtx || !this.gainNode) return;
    const t = this.audioCtx.currentTime;
    this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, t);
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);

    setTimeout(() => {
      try {
        if (this.droneOsc1) this.droneOsc1.stop();
        if (this.droneOsc2) this.droneOsc2.stop();
      } catch (e) {}
    }, 1600);
  }

  playChime() {
    if (!this.isPlaying || !this.audioCtx) return;

    try {
      const t = this.audioCtx.currentTime;

      // Antik Bronz Çan Tınısı (Harmonik Zil)
      const osc = this.audioCtx.createOscillator();
      const chimeGain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, t); // D5
      osc.frequency.exponentialRampToValueAtTime(580, t + 1.2);

      chimeGain.gain.setValueAtTime(0.001, t);
      chimeGain.gain.exponentialRampToValueAtTime(0.08, t + 0.05);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);

      osc.connect(chimeGain);
      chimeGain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 2.6);
    } catch (e) {}
  }

  updateUI(active) {
    if (this.toggleBtn) {
      this.toggleBtn.classList.toggle("active", active);
    }
    if (this.textEl) {
      this.textEl.textContent = active ? "Ambiyans Açık" : "Ambiyans Sesi";
    }
  }
}

if (typeof window !== "undefined") {
  window.MuseumAudioEngine = MuseumAudioEngine;
}
