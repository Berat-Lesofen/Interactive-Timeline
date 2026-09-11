# Türk Tarihi — Zamanın İzinde (Dijital Tarih Müzesi)

> **Bozkırlardan Anadolu'ya, Anadolu'dan Cumhuriyet'e uzanan büyük yolculuk.**

Bu proje, klasik kronolojik devlet listelerinden ve Wikipedia tarzı metin yığınlarından farklı olarak, ziyaretçiyi Avrasya bozkırlarından üç kıtaya, Selçuklu medeniyetinden modern Cumhuriyet'e uzanan tarihsel akışta gezdiren, **karanlık, sofistike ve sinematik bir dijital tarih müzesi** deneyimidir.

---

## 🏛️ Tasarım Felsefesi & Temel Kurallar

1. **Az Sayıda Büyük Dönem (18 Dönüm Noktası):**
   - Her küçük devlet ana zaman çizgisine ayrı bir düğüm yapılmamış; Türk tarihinin ana omurgasını oluşturan 18 büyük çağ ve dönüm noktası esas alınmıştır.
   - Ani "bir devlet bitti, ertesi devlet başladı" kesintileri yerine **Tarihsel Süreklilik (Continuity)** bağı kurulmuştur.

2. **Yan Dallar ve Genişleyebilir Arşiv Çekmecesi (Expandable Side Drawer):**
   - Bir dönemdeki alt hanedanlar, kollar, beylikler ve devam devletleri (örn: Göktürkler -> Doğu, Batı, II. Göktürk; Selçuklular -> Kirman, Suriye, Atabeylikler; Anadolu Beylikleri vb.) ana ekranı boğmadan **"Detaylı Arşiv ve Yan Dallar"** çekmecesinde sunulur.

3. **Sinematik Split-Stage Sahnesi:**
   - **Sol Taraf (Sabit Sahne):** Ziyaretçi scroll ettikçe dönem rozeti, başlığı, merkez şehri ve **Avrasya-Anadolu SVG Tarih Haritası** canlı olarak güncellenir. İlgili coğrafi hakimiyet alanı yumuşak geçişle aydınlanır, göç ve sefer yolları canlanır.
   - **Sağ Taraf (Anlatı Akışı):** Hükümdarlar, kültür-sanat sembolleri, dönüm noktası ve süreklilik bağını içeren şık müze kartları akar.

4. **Canlı Zaman Scrubber'ı (Living Scrubber):**
   - Ekranın sağ kenarında 18 dönemi altın noktacıklarla temsil eden dikey interaktif zaman çubuğu. Sayfa kaydıkça parıldayan aktif düğüm ilerler, tıklandığında ilgili döneme pürüzsüz kayar.

5. **Sıfır Dış Bağımlılık & Tarayıcı İçi Ambiyans Sentezleyicisi:**
   - Harici ses dosyası indirmeyi gerektirmeyen, **Web Audio API** ile saf kodla üretilen zarif bozkır esintisi ve dönem geçiş çanı.

---

## 📂 Proje Yapısı

```
İnteractive-Timeline/
├── index.html               # Semantik HTML5 ana vitrini, Hero bölümü ve HUD
├── css/
│   ├── style.css            # Tasarım sistemi, renkler, tipografi, Hero ve Quick-Jump
│   ├── timeline.css         # Split-stage sahnesi, dönem kartları ve kenar scrubber'ı
│   ├── map.css              # Etkileşimli SVG harita, ışıldayan bölgeler ve göç çizgileri
│   └── modal.css            # Müze arşiv çekmecesi, yan dallar ve sekme stilleri
├── js/
│   ├── data.js              # 18 dönemin tam omurgası, şahsiyetleri ve kültürel mirası
│   ├── map.js               # SVG harita koordinatları, sınır animasyonu ve odak motoru
│   ├── modal.js             # Yan dallar ve derin arşiv çekmecesinin mantığı
│   ├── audio.js             # Web Audio API ile üretilen ambiyans sentezleyicisi
│   ├── timeline.js          # IntersectionObserver ile scroll ve scrubber senkronizasyonu
│   └── app.js               # Parçacık tuvali, klavye yön tuşları ve genel koordinasyon
└── README.md
```

---

## 🧭 Klavye Kısayolları ve Etkileşim

- **Aşağı / Yukarı Yön Tuşları (↓ / ↑) veya PageDown / PageUp:** Bir sonraki / bir önceki döneme yumuşak geçiş yapar.
- **ESC:** Açık olan Arşiv Çekmecesini veya Dönemler Seçim Menüsünü kapatır.
- **Dönemler (18) Butonu:** 18 büyük dönemin listelendiği modalı açar, istenen döneme tek tıkla zıplar.
- **Ambiyans Sesi Butonu:** Bozkır rüzgarı ve antik bronz çan sesini açıp kapatır.

---

## 🚀 Çalıştırma

Herhangi bir sunucu kurulumuna veya derleme aracına ihtiyaç duymadan doğrudan `index.html` dosyasına çift tıklayarak tarayıcınızda açabilirsiniz.
