/**
 * Türk Tarihi — Zamanın İzinde
 * Sinematik Web Audio API Ambiyans ve Bozkır Ses Motoru
 * 
 * Özellikler:
 * 1. Sıfır dış dosya / sıfır telif riski: %100 Web Audio API sentezleyicisi
 * 2. Varsayılan olarak AÇIK ve düşük seviyeli (%20-25 sinematik ses)
 * 3. Tarayıcı autoplay politikası ile tam uyumlu: İlk kullanıcı etkileşiminde (scroll, click, keydown)
 *    rahatsız edici popup göstermeden pürüzsüzce başlar.
 * 4. Çok katmanlı bozkır atmosferi:
 *    - Katman 1: Pembe gürültü ve LFO ile dalgalanan bozkır rüzgârı (Steppe Wind)
 *    - Katman 2: Çift osilatörlü sıcak kök uğultusu (Root Drone)
 *    - Katman 3: Altai bozkır gırtlak ezgisi / sygyt harmonik tınısı (Throat Singing Shimmer)
 *    - Katman 4: Dönem geçişlerinde antik bronz çan / singing bowl tınısı
 * 5. 18 döneme göre yumuşakça değişen tonal merkez ve filtre renkleri (Dynamic Epoch Soundscapes)
 */

class MuseumAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;          // Varsayılan olarak AÇIK
    this.isInitialized = false;     // AudioContext başladı mı?
    this.masterGainValue = 0.22;    // %22 sinematik başlangıç seviyesi
    this.lastChimeTime = 0;

    // DOM Elemanları
    this.toggleBtn = document.getElementById("audio-toggle-btn");
    this.iconEl = document.getElementById("audio-btn-icon");
    this.textEl = document.getElementById("audio-btn-text");

    // Ses Düğümleri
    this.masterGain = null;
    this.compressor = null;

    // Katman 1: Rüzgar
    this.windSource = null;
    this.windGain = null;
    this.windFilter = null;
    this.windLFO = null;

    // Katman 2: Kök Drone
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneFilter = null;
    this.droneGain = null;

    // Katman 3: Gırtlak Ezgisi (Throat Shimmer)
    this.throatOsc = null;
    this.throatFormantFilter = null;
    this.throatGain = null;
    this.throatLFO = null;

    // Dönem Ses Profilleri (Frekans, Filtre ve Harmonikler)
    this.epochProfiles = {
      "sakalar": { root: 55.0, windCutoff: 380, throatFreq: 660, chimeFreq: 440, name: "Antik Bozkır & Kurgan" },
      "asya-hunlari": { root: 55.0, windCutoff: 420, throatFreq: 660, chimeFreq: 440, name: "Ötüken Bozkırı" },
      "avrupa-hunlari": { root: 65.4, windCutoff: 480, throatFreq: 523, chimeFreq: 523, name: "Tuna Seferi" },
      "gokturkler": { root: 73.4, windCutoff: 400, throatFreq: 734, chimeFreq: 587, name: "Bengü Taş & Kurt Tuğu" },
      "donusum-ve-yeni-yapilar": { root: 82.4, windCutoff: 440, throatFreq: 659, chimeFreq: 659, name: "Vaha & Uygur Şehirciliği" },
      "islam-iliskileri-ve-ilk-adımlar": { root: 82.4, windCutoff: 410, throatFreq: 587, chimeFreq: 587, name: "Samarra & Talas" },
      "karahanlilar-ve-turk-islam": { root: 55.0, windCutoff: 360, throatFreq: 587, chimeFreq: 440, name: "Kaşgar İrfanı" },
      "buyuk-selcuklular": { root: 55.0, windCutoff: 390, throatFreq: 660, chimeFreq: 440, name: "Horasan & İsfahan" },
      "anadoluya-gecis-ve-yerlesme": { root: 65.4, windCutoff: 430, throatFreq: 523, chimeFreq: 523, name: "Anadolu Yaylaları" },
      "anadolu-selcuklulari": { root: 65.4, windCutoff: 380, throatFreq: 523, chimeFreq: 523, name: "Konya & Ahilik Dinginliği" },
      "beylikler-ve-osmanlinin-dogusu": { root: 73.4, windCutoff: 420, throatFreq: 587, chimeFreq: 587, name: "Söğüt Çınarı" },
      "istanbulun-fethi-ve-yukselis": { root: 73.4, windCutoff: 450, throatFreq: 734, chimeFreq: 587, name: "Konstantiniyye Fethi" },
      "klasik-osmanli-donemi": { root: 73.4, windCutoff: 410, throatFreq: 734, chimeFreq: 587, name: "Cihan Devleti" },
      "donusum-ve-modernlesme": { root: 82.4, windCutoff: 460, throatFreq: 659, chimeFreq: 493, name: "Yenileşme Esintisi" },
      "tanzimat-ve-mesrutiyet": { root: 82.4, windCutoff: 430, throatFreq: 659, chimeFreq: 493, name: "Çanakkale & Hürriyet" },
      "milli-mucadele": { root: 87.3, windCutoff: 500, throatFreq: 698, chimeFreq: 698, name: "İstiklal Uyanışı" },
      "turkiye-cumhuriyeti": { root: 87.3, windCutoff: 460, throatFreq: 698, chimeFreq: 698, name: "Cumhuriyet Güneşi" },
      "gunumuz-turkiyesi": { root: 55.0, windCutoff: 420, throatFreq: 660, chimeFreq: 440, name: "Çağdaş Avrasya Vizyonu" }
    };

    this.init();
  }

  init() {
    // 1. Buton UI Başlangıç Durumu (Varsayılan Açık)
    this.updateUI(true);

    // 2. Buton Tıklama (Mute / Unmute Geçişi)
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener("click", () => {
        this.toggleMute();
      });
    }

    // 3. Autoplay Politikası: İlk Kullanıcı Etkileşiminde Sessizce Başlat
    this.setupAutoplayListener();
  }

  setupAutoplayListener() {
    const startOnGesture = () => {
      if (!this.isMuted && !this.isInitialized) {
        this.startEngine();
      }
      // Dinleyicileri temizle
      events.forEach(evt => window.removeEventListener(evt, startOnGesture));
    };

    const events = ["click", "scroll", "keydown", "touchstart", "wheel", "pointerdown"];
    events.forEach(evt => {
      window.addEventListener(evt, startOnGesture, { once: true, passive: true });
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

  startEngine() {
    if (this.isInitialized) return;
    this.ensureContext();
    if (!this.audioCtx) return;

    const t = this.audioCtx.currentTime;

    // --- MASTER CHAIN ---
    // Dinamik Kompresör (Kulak tırmalamayan, sıcak ve dengeli çıkış)
    this.compressor = this.audioCtx.createDynamicsCompressor();
    this.compressor.threshold.setValueAtTime(-18, t);
    this.compressor.knee.setValueAtTime(12, t);
    this.compressor.ratio.setValueAtTime(4, t);
    this.compressor.attack.setValueAtTime(0.01, t);
    this.compressor.release.setValueAtTime(0.25, t);
    this.compressor.connect(this.audioCtx.destination);

    // Master Gain
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, t);
    // 2 saniye içinde %22 seviyesine yumuşakça ramp et
    this.masterGain.gain.exponentialRampToValueAtTime(this.masterGainValue, t + 2.2);
    this.masterGain.connect(this.compressor);

    // --- KATMAN 1: BOZKIR RÜZGÂRI ---
    this.buildWindLayer(t);

    // --- KATMAN 2: KADİM KÖK DRONE ---
    this.buildDroneLayer(t);

    // --- KATMAN 3: GIRTLAK EZGİSİ / ALTAI ŞİMMER ---
    this.buildThroatLayer(t);

    this.isInitialized = true;
    this.isMuted = false;
    this.updateUI(true);

    // İlk açılışta çok zarif bir başlangıç çanı çal
    setTimeout(() => {
      this.playChime(440);
    }, 400);
  }

  buildWindLayer(t) {
    // 2 saniyelik pembe gürültü buffer'ı oluştur (doğal rüzgâr hışırtısı)
    const bufferSize = this.audioCtx.sampleRate * 2;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }

    this.windSource = this.audioCtx.createBufferSource();
    this.windSource.buffer = noiseBuffer;
    this.windSource.loop = true;

    // Rüzgar Filtresi (Alçak Geçiren)
    this.windFilter = this.audioCtx.createBiquadFilter();
    this.windFilter.type = "lowpass";
    this.windFilter.frequency.setValueAtTime(380, t);
    this.windFilter.Q.setValueAtTime(1.8, t);

    // Rüzgar Kazancı
    this.windGain = this.audioCtx.createGain();
    this.windGain.gain.setValueAtTime(0.09, t);

    // Rüzgar LFO'su (Esinti dalgalanması)
    this.windLFO = this.audioCtx.createOscillator();
    this.windLFO.type = "sine";
    this.windLFO.frequency.setValueAtTime(0.08, t); // 12 saniyede bir esinti
    const lfoGain = this.audioCtx.createGain();
    lfoGain.gain.setValueAtTime(120, t);

    this.windLFO.connect(lfoGain);
    lfoGain.connect(this.windFilter.frequency);

    this.windSource.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.masterGain);

    this.windSource.start(t);
    this.windLFO.start(t);
  }

  buildDroneLayer(t) {
    // 1. Kök Osilatör (Sinüs - Derin A1 55 Hz)
    this.droneOsc1 = this.audioCtx.createOscillator();
    this.droneOsc1.type = "sine";
    this.droneOsc1.frequency.setValueAtTime(55.0, t);

    // 2. Harmonik Osilatör (Üçgen Dalga - Hafif detune 3 cents)
    this.droneOsc2 = this.audioCtx.createOscillator();
    this.droneOsc2.type = "triangle";
    this.droneOsc2.frequency.setValueAtTime(82.4, t); // E2 (Kökün beşte biri / zenginlik)

    // Drone Filtresi
    this.droneFilter = this.audioCtx.createBiquadFilter();
    this.droneFilter.type = "lowpass";
    this.droneFilter.frequency.setValueAtTime(160, t);

    // Drone Kazancı
    this.droneGain = this.audioCtx.createGain();
    this.droneGain.gain.setValueAtTime(0.11, t);

    this.droneOsc1.connect(this.droneFilter);
    this.droneOsc2.connect(this.droneFilter);
    this.droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    this.droneOsc1.start(t);
    this.droneOsc2.start(t);
  }

  buildThroatLayer(t) {
    // Bozkır Gırtlak Ezgisi (Khoomei / Sygyt formülü)
    // Zengin harmonikli testere dişi dalgası, rezonant formant filtresiyle boğaz şarkısı tınısı üretir
    this.throatOsc = this.audioCtx.createOscillator();
    this.throatOsc.type = "sawtooth";
    this.throatOsc.frequency.setValueAtTime(55.0, t);

    // Yüksek Q Bandpass Filtre (Gırtlak ıslığı / Formant rezonansı)
    this.throatFormantFilter = this.audioCtx.createBiquadFilter();
    this.throatFormantFilter.type = "bandpass";
    this.throatFormantFilter.frequency.setValueAtTime(660, t); // 12. Harmonik
    this.throatFormantFilter.Q.setValueAtTime(14, t);

    // Gırtlak Kazancı (Çok hafif, derinden gelen mistik yankı)
    this.throatGain = this.audioCtx.createGain();
    this.throatGain.gain.setValueAtTime(0.038, t);

    // Nefes LFO'su (Gırtlak sesinin hafifçe nefes alıp vermesi)
    this.throatLFO = this.audioCtx.createOscillator();
    this.throatLFO.type = "sine";
    this.throatLFO.frequency.setValueAtTime(0.06, t); // 16 saniyelik nefes döngüsü
    const throatLFOGain = this.audioCtx.createGain();
    throatLFOGain.gain.setValueAtTime(0.02, t);

    this.throatLFO.connect(throatLFOGain);
    throatLFOGain.connect(this.throatGain.gain);

    this.throatOsc.connect(this.throatFormantFilter);
    this.throatFormantFilter.connect(this.throatGain);
    this.throatGain.connect(this.masterGain);

    this.throatOsc.start(t);
    this.throatLFO.start(t);
  }

  /**
   * Mute / Unmute Geçişi
   */
  toggleMute() {
    this.ensureContext();

    if (!this.isInitialized) {
      this.startEngine();
      return;
    }

    const t = this.audioCtx.currentTime;

    if (!this.isMuted) {
      // Sessize al (Fade out)
      this.isMuted = true;
      if (this.masterGain) {
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, t);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      }
      this.updateUI(false);
    } else {
      // Sesi aç (Fade in)
      this.isMuted = false;
      if (this.masterGain) {
        this.masterGain.gain.setValueAtTime(0.0001, t);
        this.masterGain.gain.exponentialRampToValueAtTime(this.masterMasterLevel(), t + 0.8);
      }
      this.updateUI(true);
      this.playChime(440);
    }
  }

  masterMasterLevel() {
    return this.masterGainValue;
  }

  /**
   * Dönem Değiştiğinde Atmosferi Yumuşakça Güncelle (Dynamic Epoch Soundscape)
   */
  setEpoch(epoch, triggerChime = true) {
    if (!epoch) return;

    // Ses kapalıysa veya motor henüz başlamamışsa sadece kaydet
    if (!this.audioCtx || !this.isInitialized) return;

    const profile = this.epochProfiles[epoch.id] || {
      root: 55.0,
      windCutoff: 400,
      throatFreq: 660,
      chimeFreq: 440
    };

    const t = this.audioCtx.currentTime;
    const rampDuration = 2.0; // 2 saniye içinde pürüzsüz geçiş

    try {
      // 1. Kök Osilatörleri Yeni Frekansa Taşı
      if (this.droneOsc1) {
        this.droneOsc1.frequency.setTargetAtTime(profile.root, t, rampDuration * 0.4);
      }
      if (this.droneOsc2) {
        this.droneOsc2.frequency.setTargetAtTime(profile.root * 1.5, t, rampDuration * 0.4);
      }

      // 2. Rüzgar Filtresini Ayarla
      if (this.windFilter) {
        this.windFilter.frequency.setTargetAtTime(profile.windCutoff, t, rampDuration * 0.5);
      }

      // 3. Gırtlak Şarkısı Formant Rezonansını Ayarla
      if (this.throatFormantFilter) {
        this.throatFormantFilter.frequency.setTargetAtTime(profile.throatFreq, t, rampDuration * 0.5);
      }

      // 4. Dönem Geçiş Çanı (Cooldown ile birbirine binmeyi önle)
      if (triggerChime && !this.isMuted) {
        const now = performance.now();
        if (now - this.lastChimeTime > 2200) {
          this.playChime(profile.chimeFreq);
          this.lastChimeTime = now;
        }
      }
    } catch (e) {
      // Tarayıcı kaynaklı geçiş hatalarını sessizce yut
    }
  }

  /**
   * Antik Bronz Çan / Tibet Singing Bowl Tınısı
   */
  playChime(freq = 440) {
    if (this.isMuted || !this.audioCtx || this.audioCtx.state !== "running") return;

    try {
      const t = this.audioCtx.currentTime;

      // 1. Ana Frekans Osilatörü
      const osc1 = this.audioCtx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, t);
      osc1.frequency.exponentialRampToValueAtTime(freq * 0.995, t + 2.5);

      // 2. Bronz Harmonik Kısmi Ton (2.76x oran - Antik çanların tipik tınısı)
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq * 2.76, t);

      // Kazanç Zarfı (Zarif vuruş ve uzun sönümlenme)
      const chimeGain = this.audioCtx.createGain();
      chimeGain.gain.setValueAtTime(0.0001, t);
      chimeGain.gain.exponentialRampToValueAtTime(0.07, t + 0.03);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);

      const chimeGain2 = this.audioCtx.createGain();
      chimeGain2.gain.setValueAtTime(0.0001, t);
      chimeGain2.gain.exponentialRampToValueAtTime(0.025, t + 0.02);
      chimeGain2.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);

      osc1.connect(chimeGain);
      osc2.connect(chimeGain2);

      chimeGain.connect(this.masterGain || this.compressor);
      chimeGain2.connect(this.masterGain || this.compressor);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 2.9);
      osc2.stop(t + 2.0);
    } catch (e) {}
  }

  /**
   * HUD Üzerindeki Buton Görünümünü Güncelle
   */
  updateUI(isOpen) {
    if (this.toggleBtn) {
      this.toggleBtn.classList.toggle("active", isOpen);
      this.toggleBtn.setAttribute("title", isOpen ? "Ambiyansı Kapat (Mute)" : "Ambiyansı Aç (Unmute)");
      this.toggleBtn.setAttribute("aria-pressed", isOpen ? "true" : "false");
    }

    if (this.textEl) {
      this.textEl.textContent = isOpen ? "Ambiyans Açık" : "Ambiyans Kapalı";
    }

    if (this.iconEl) {
      if (isOpen) {
        // Ses Açık İkonu (Hoparlör + Dalgalar)
        this.iconEl.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" stroke-width="2" fill="none"/>
        `;
      } else {
        // Ses Kapalı İkonu (Hoparlör + Çarpı)
        this.iconEl.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="none" stroke="currentColor" stroke-width="2"/>
          <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/>
          <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>
        `;
      }
    }
  }
}

if (typeof window !== "undefined") {
  window.MuseumAudioEngine = MuseumAudioEngine;
}
