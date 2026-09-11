/**
 * Türk Tarihi — Zamanın İzinde
 * Tarihsel Veri Modeli
 * 
 * Felsefe:
 * 1. Az sayıda ana dönem (18 büyük dönüm noktası)
 * 2. Keskin kopuşlar yerine tarihsel süreklilik (Continuity)
 * 3. Çok sayıda devleti ana timeline'a yığmak yerine "Yan Dallar" (Sub-Branches) mimarisi
 */

const HISTORICAL_EPOCHS = [
  {
    id: "sakalar",
    order: 1,
    periodBadge: "MÖ 8. YÜZYIL — MÖ 3. YÜZYIL",
    title: "Sakalar",
    subtitle: "Bozkırın İlk Süvarileri ve Kurgan Medeniyeti",
    tagline: "Tuna'dan Altaylar'a uzanan Avrasya bozkırlarında atlı göçebe kültürünün ilk büyük mimarları.",
    lead: "Sakalar (İskitler), Karadeniz'in kuzeyinden Orta Asya içlerine kadar uzanan muazzam bir coğrafyada atı ilk kez kitlesel olarak savaş stratejisine dönüştürmüş, altın işlemeciliğinde eşsiz bir Bozkır Hayvan Üslubu geliştirmiştir.",
    geography: {
      focus: "steppes-central",
      regionName: "Karadeniz'in Kuzeyi, Kafkaslar, Tanrı Dağları & Altay Bozkırları",
      capitalOrCenter: "Ötüken ve Çu-İli Vadisi Havzası",
      territoryPath: "M 280,240 Q 360,210 460,230 Q 560,220 660,250 Q 640,290 520,300 Q 380,310 270,270 Z",
      centerCoords: { x: 470, y: 250 },
      routes: [
        { from: { x: 580, y: 250 }, to: { x: 320, y: 260 }, label: "Batı Bozkır Göçü & Yayılımı" }
      ]
    },
    rulers: [
      { name: "Tomris Hatun", title: "Massaget / Saka Hükümdarı", note: "Pers Kralı Kyros'u mağlup ederek bozkırın bağımsızlık sembolü haline gelen tarihin ilk kadın hükümdarlarından biri." },
      { name: "Alp Er Tunga", title: "Destansı Saka Kağanı", note: "Şehname'de Efrasiyab olarak anılan, bozkır kavimlerini bir çatı altında toplayan efsanevi lider." },
      { name: "Madyas", title: "Saka Hükümdarı", note: "Ön Asya akınlarını yönetmiş, Mezopotamya ve Anadolu'ya kadar uzanan seferleri idare etmiştir." }
    ],
    culture: {
      art: "Bozkır Hayvan Üslubu: Altın, geyik, pars, kartal ve kurt motifleriyle süslenmiş zırhlar ve koşum takımları.",
      lifestyle: "Atlı bozkır göçebeliği, okçuluk, pantolon ve çizme kullanımının Avrasya'ya yayılması.",
      legacy: "Avrasya bozkır kuşağında binlerce yıl sürecek kurgan mezar geleneği ve atlı savaş doktrininin temeli.",
      symbols: ["Altın Geyik", "Kurgan", "Bozkır Atı", "Bileşik Yay"]
    },
    artifacts: [
      {
        name: "Esik Kurganı — Altın Elbiseli Adam",
        century: "MÖ 4. Yüzyıl",
        location: "Almatı yakınları, Kazakistan",
        desc: "4000'den fazla saf altın levhadan oluşan zırhı ve üzerindeki 26 harflik erken Türk yazısı ibaresiyle bozkır medeniyetinin zirve eseri."
      },
      {
        name: "Pazırık Kurganı & Halısı",
        century: "MÖ 5. — 3. Yüzyıl",
        location: "Altay Dağları",
        desc: "Buzulların içinde günümüze dek korunan, dünyanın en eski düğümlü yün halısı. Üzerindeki atlı ve sığın motifleri bozkır dokuma sanatının kanıtıdır."
      }
    ],
    subBranches: [
      {
        name: "Massagetler",
        period: "MÖ 6. — 4. Yüzyıl",
        region: "Aral Gölü ve Hazar Denizi Doğusu",
        desc: "Tomris Hatun önderliğinde Pers İmparatorluğu'na karşı bozkır bağımsızlığını savunan güçlü Saka topluluğu."
      },
      {
        name: "Kuzey Karadeniz İskitleri",
        period: "MÖ 7. — 3. Yüzyıl",
        region: "Dinyester, Dinyeper ve Kırım Havzası",
        desc: "Yunan kolonileriyle ticaret yapan, zengin altın kurganlarıyla bilinen batı Saka kanadı."
      },
      {
        name: "Tohar / Hotan Sakaları",
        period: "MÖ 2. Yy — MS 10. Yy",
        region: "Tarım Havzası ve İpek Yolu Güzergâhı",
        desc: "İpek Yolu'nun vaha kentlerine yerleşerek zengin bir kültür ve tercüme geleneği inşa eden doğu kolu."
      }
    ],
    milestones: [
      { year: "MÖ 7. Yüzyıl", event: "Kafkasları aşarak Anadolu ve Ön Asya'ya yapılan büyük Saka seferleri." },
      { year: "MÖ 530", event: "Tomris Hatun'un Ahameniş hükümdarı Büyük Kyros'u yendiği tarihi meydan savaşı." },
      { year: "MÖ 4. Yüzyıl", event: "Altay ve Tanrı Dağları havzasında zengin kurgan kültürünün ve altın madenciliğinin zirveye ulaşması." }
    ],
    continuity: "Sakaların atlı kültür, savaş taktikleri ve kurgan geleneği, doğrudan Asya Hun İmparatorluğu'nun devlet ve toplum modeline devredilmiştir."
  },
  {
    id: "asya-hunlari",
    order: 2,
    periodBadge: "MÖ 3. YÜZYIL — MS 216",
    title: "Asya Hunları",
    subtitle: "Merkezi Bozkır İmparatorluğu ve Onlu Teşkilat",
    tagline: "Ötüken merkezli ilk büyük Türk devlet teşkilatı, Çin Seddi'ni aşan disiplinli ordu yapısı.",
    lead: "Teoman ile başlayıp Mete Han'ın dehasıyla Avrasya'nın en kudretli devletine dönüşen Büyük Hun İmparatorluğu, Türk devlet geleneğinin temelini oluşturan onlu askeri sistemi ve kurultay meclisini tarihe kazandırmıştır.",
    geography: {
      focus: "steppes-east",
      regionName: "Ötüken, Moğolistan Platosu, Baykal Gölü'nden Sarı Nehir'e",
      capitalOrCenter: "Ötüken (Kutsal Orman)",
      territoryPath: "M 520,190 Q 640,160 760,190 Q 820,240 780,290 Q 670,330 540,300 Q 480,250 520,190 Z",
      centerCoords: { x: 650, y: 230 },
      routes: [
        { from: { x: 680, y: 220 }, to: { x: 620, y: 310 }, label: "Baideng Kuşatması Seferi (MÖ 200)" },
        { from: { x: 560, y: 240 }, to: { x: 420, y: 260 }, label: "Batıya Göç Dalgası (MS 1. Yüzyıl)" }
      ]
    },
    rulers: [
      { name: "Mete Han (Mao-tun)", title: "Hun Kağanı (MÖ 209 — MÖ 174)", note: "Kara Kuvvetleri'nin kuruluş yılı kabul edilen MÖ 209'da tahta çıkmış; ıslıklı ok, onlu teşkilat ve vatan toprağı bilincini kurmuştur." },
      { name: "Teoman (Tuman)", title: "İlk Bilinen Hun Yabgusu (MÖ 220 — MÖ 209)", note: "Dağınık bozkır boylarını ilk kez tek bir siyasi çatı altında toplamayı başaran kurucu kağan." },
      { name: "Ki-ok Kağan", title: "Hun Hükümdarı", note: "İpek Yolu ticaretini denetim altına alarak Hun İmparatorluğu'nun ekonomik altın çağını yönetmiştir." },
      { name: "Çi-çi Yabgu", title: "Batı Hun Lideri", note: "Bağımsızlık ülküsünü 'Teslim olmak atalarımızın töresine sığmaz' diyerek savunan hürriyet timsali." }
    ],
    culture: {
      art: "Ejder, pars ve kartal tasvirli bronz kazanlar, kemik yay kaplamaları, altın kemer tokaları.",
      lifestyle: "Yurt (çadır) mimarisi, mevsimsel göç yolları, sıkı askeri disiplin ve töre hukuku.",
      legacy: "Modern orduların temelini oluşturan 10'lu, 100'lü, 1000'li tümen sistemi ve kurultay geleneği.",
      symbols: ["Islıklı Ok", "Töreli Kurultay", "Güneş-Ay Damgası", "Hun Kazanı"]
    },
    artifacts: [
      {
        name: "Noin-Ula Kurganı İpekleri ve Bronzları",
        century: "MÖ 1. Yüzyıl",
        location: "Selenga Nehri Vadisi, Moğolistan",
        desc: "Gelişmiş ordu teçhizatı, kürk ve nakışlı keçe döşemelerle donatılmış Hun kağan kurganı buluntuları."
      },
      {
        name: "Hun Islıklı Oku & Kemik Yay Parçaları",
        century: "MÖ 2. Yüzyıl",
        location: "Orhun Havzası",
        desc: "Mete Han'ın ordularında yön ve hedef koordinasyonu sağlayan, psikolojik üstünlük kuran akustik ok ucu teknolojisi."
      }
    ],
    subBranches: [
      {
        name: "Doğu Hunları (Güneş Kanadı)",
        period: "MÖ 54 — MS 216",
        region: "Orhun ve Gobi Hattı",
        desc: "İç çatışmalar sonrası Çin ile diplomatik denge arayan, sonrasında bağımsızlık için direnen ana gövde."
      },
      {
        name: "Batı Hunları (Çi-çi Kanadı)",
        period: "MÖ 54 — MÖ 36",
        region: "Talas Vadisi ve Balkaş Gölü",
        desc: "Çin egemenliğini reddederek batıya çekilen ve Talas boylarında müstahkem kaleler inşa eden öncü kol."
      },
      {
        name: "Ak Hunlar (Eftalitler)",
        period: "MS 440 — 570",
        region: "Afganistan, Horasan ve Kuzey Hindistan",
        desc: "Hun mirasçısı olarak Sasani İmparatorluğu'nu vergiye bağlayan, İpek Yolu'nun güney geçitlerini tutan kudretli devlet."
      }
    ],
    milestones: [
      { year: "MÖ 209", event: "Mete Han'ın tahta geçişi ve ilk düzenli ordunun (Onlu Teşkilat) kurulması." },
      { year: "MÖ 200", event: "Baideng Muharebesi: 320 bin kişilik Çin ordusunun Mete Han tarafından kuşatılıp vergiye bağlanması." },
      { year: "MÖ 54", event: "Ho-han-yeh ve Çi-çi arasındaki 'İstiklal ve Boyun Eğme' tartışmasıyla Hunların ikiye ayrılması." }
    ],
    continuity: "Asya'da kalan Hun boyları Göktürklerin çekirdek boylarını oluştururken, batıya göçen Hun dalgaları Avrupa Hun İmparatorluğu'nu ve Kavimler Göçü'nü tetikleyecektir."
  },
  {
    id: "avrupa-hunlari",
    order: 3,
    periodBadge: "MS 375 — 469",
    title: "Avrupa Hunları",
    subtitle: "Kavimler Göçü ve Roma Dünyasının Sarsılışı",
    tagline: "Volga'yı aşarak tüm Avrupa haritasını yeniden çizen, Attila ile iki Roma'yı diz çöktüren fırtına.",
    lead: "Balamir önderliğinde İdil (Volga) nehrini geçerek Kavimler Göçü'nü başlatan Avrupa Hunları, Orta Çağ'ın kapılarını açmıştır. 'Tanrı'nın Kırbacı' olarak anılan Attila döneminde Macaristan ovalarından Konstantinopolis ve Roma kapılarına kadar uzanan cihanşümul bir güç doğmuştur.",
    geography: {
      focus: "europe-danube",
      regionName: "Tuna Boyları, Macaristan Ovaları (Pannonia), Ren Nehri ve Balkanlar",
      capitalOrCenter: "Tuna / Tisa Havzası Karargâhı (Budapeşte civarı)",
      territoryPath: "M 220,230 Q 340,210 440,220 Q 420,300 340,320 Q 240,320 200,280 Q 180,240 220,230 Z",
      centerCoords: { x: 310, y: 260 },
      routes: [
        { from: { x: 440, y: 230 }, to: { x: 260, y: 260 }, label: "375 Kavimler Göçü Akını" },
        { from: { x: 280, y: 270 }, to: { x: 190, y: 290 }, label: "451 Katalon (Campus Mauriacus) Seferi" },
        { from: { x: 280, y: 270 }, to: { x: 240, y: 340 }, label: "452 İtalya ve Roma Seferi" }
      ]
    },
    rulers: [
      { name: "Attila", title: "Hun İmparatoru (434 — 453)", note: "Doğu ve Batı Roma'yı aynı anda vergiye bağlayan, Avrupa edebiyatı ve destanlarında (Nibelungenlied) adalet ve kudretiyle anılan efsanevi lider." },
      { name: "Balamir", title: "Avrupa Hunlarının Kurucusu (374 — 378)", note: "İdil nehrini aşarak Ostrogot ve Vizigotları mağlup edip Kavimler Göçü dalgasını başlatan hakan." },
      { name: "Uldız", title: "Hun Kağanı (400 — 410)", note: "'Güneşin battığı yere kadar her yeri zaptedebilirim' sözüyle Türk cihan hakimiyeti mefkuresini Avrupa'ya haykıran lider." },
      { name: "Rua", title: "Hun Kağanı", note: "Bizans'ı ağır haraca bağlayan ve Attila ile Bleda'nın tahta geçişine güçlü bir imparatorluk bırakan hükümdar." }
    ],
    culture: {
      art: "Altın eyer kaplamaları, granat taşlı kılıç kabzaları, Hun tipi çift taraflı uzun süvari kılıçları.",
      lifestyle: "Tuna boylarında kurulan ahşap saraylar, bozkır misafirperverliği ve hızlı hareket kabiliyeti.",
      legacy: "Avrupa'nın etnik ve siyasi haritasının kökten değişimi; feodalizmin doğuşu ve Macaristan isminin kökeni.",
      symbols: ["Çift Başlı Kartal / Tuğ", "Tanrı'nın Kamçısı", "Altın Kılıç", "Tuna Akıncısı"]
    },
    artifacts: [
      {
        name: "Szeged-Nagyszéksós Altın Hazinesi",
        century: "MS 5. Yüzyıl",
        location: "Macaristan Ulusal Müzesi",
        desc: "Attila dönemine ait altın koşum takımları, boyun halkaları ve kadehleriyle Hun aristokrasisinin ihtişamını sergileyen define."
      },
      {
        name: "Pannonia Hun Kılıcı ve Granat Kakmalı Tokalar",
        century: "MS 420 — 450",
        location: "Viyana Sanat Tarihi Müzesi",
        desc: "Bozkır maden işçiliği ile Got/Roma süsleme sanatının birleştiği Hun askeri elit teçhizatı."
      }
    ],
    subBranches: [
      {
        name: "İrnek ve Karadeniz Hunları (Bulgarların Doğuşu)",
        period: "469 — 6. Yüzyıl",
        region: "Karadeniz'in Kuzeyi ve Dinyester",
        desc: "Attila'nın küçük oğlu İrnek önderliğinde Karadeniz boylarına çekilen ve daha sonra Büyük Bulgar Devleti'nin çekirdeğini oluşturan Hun boyları."
      },
      {
        name: "Avar Kağanlığı",
        period: "562 — 805",
        region: "Orta Avrupa ve Macaristan Havzası",
        desc: "Hun mirasını Orta Avrupa'da devralarak İstanbul'u kuşatan ve üzengi teknolojisini Batı dünyasına tanıtan devam devleti."
      }
    ],
    milestones: [
      { year: "375", event: "Balamir'in İdil'i geçmesi ve Kavimler Göçü'nün patlak vermesi." },
      { year: "447", event: "II. Balkan Seferi ve Bizans'ın Anatolios Antlaşması ile ağır yıllık vergilere bağlanması." },
      { year: "451", event: "Katalon Savaşı (Campus Mauriacus): Attila ile Roma-Germen ittifakının tarihin en kanlı meydan muharebesinde karşılaşması." },
      { year: "452", event: "Attila'nın İtalya Seferi; Papa I. Leo'nun ricası üzerine Roma'nın bağışlanması." }
    ],
    continuity: "Avrupa Hunlarının yıkılışından sonra Karadeniz ve Tuna boylarındaki boylar Hazar ve Bulgar devletlerine dönüşürken, doğudaki anavatan Altaylar'da 'Türk' adını taşıyan ilk büyük kağanlık yükselecektir."
  },
  {
    id: "gokturkler",
    order: 4,
    periodBadge: "MS 552 — 744",
    title: "Göktürkler",
    subtitle: "Kutsal Ad: Türk Kağanlığı ve Bengü Taşlar",
    tagline: "'Türk' adını resmi devlet ismi kılan, Mançurya'dan Karadeniz'e uzanan cihanşümul bozkır devleti.",
    lead: "Bumin Kağan'ın Ötüken'de kurduğu Göktürk Kağanlığı, Türk adını tarihin merkezine kazımıştır. Kardeşi İstemi Yabgu ile İpek Yolu'nu denetleyen devlet; Bilge Kağan, Kül Tigin ve Bilge Tonyukuk döneminde dikilen Orhun Abideleri ile Türk dilinin, töresinin ve bağımsızlık felsefesinin bengü taşlarını dikmiştir.",
    geography: {
      focus: "eurasia-wide",
      regionName: "Kore Yarımadası'ndan Hazar ve Kırım'a Kadar Tüm Avrasya Kuşağı",
      capitalOrCenter: "Ötüken (Kutsal Kağanlık Merkezi)",
      territoryPath: "M 320,240 Q 520,180 780,200 Q 840,260 760,310 Q 540,320 340,300 Q 300,260 320,240 Z",
      centerCoords: { x: 570, y: 240 },
      routes: [
        { from: { x: 620, y: 220 }, to: { x: 380, y: 250 }, label: "İstemi Yabgu'nun Batı Seferleri" },
        { from: { x: 420, y: 270 }, to: { x: 350, y: 310 }, label: "Sasani ve Bizans Elçilik Yolları" }
      ]
    },
    rulers: [
      { name: "Bumin Kağan", title: "Göktürk Kağanlığının Kurucusu (İl Kağan)", note: "Avar (Jujan) tahakkümüne son vererek 552 yılında bağımsız Türk Kağanlığı'nı ilan eden kurucu ata." },
      { name: "İstemi Yabgu", title: "Batı Kanadı Yabgusu (552 — 576)", note: "İpek Yolu'nu kontrol etmek için Sasani ve Bizans ile ustaca diplomatik ittifaklar kuran strateji dehası." },
      { name: "Kutluk (İlteriş) Kağan", title: "İkinci Göktürk Kağanlığı Kurucusu", note: "50 yıllık Çin esaretine son vererek boyları yeniden toplayan, devleti 'İlteriş' (İli derleyip toplayan) unvanıyla dirilten önder." },
      { name: "Bilge Kağan & Kül Tigin", title: "Devletin Zirve Dönemi", note: "Milletini 'Gece uyumadan, gündüz oturmadan' doyuran kağan ve orduların yenilmez başkumandanı." },
      { name: "Bilge Tonyukuk", title: "Başvezir ve İlk Türk Tarihçisi", note: "Üç kağana vezirlik yapmış, Orhun Abideleri'nin ilkini dikerek devlet aklını taşlara kazımış bilge siyasetçi." }
    ],
    culture: {
      art: "Orhun Türk Alfabesi ile yazılan bengü taşlar, balbal heykelleri, kurt başlı altın tuğlar.",
      lifestyle: "Töre nizamı, kurultay meclisi, Gök Tengri inancı ve bozkır konfederasyonu.",
      legacy: "İlk Türkçe yazılı edebiyat ve tarih vesikaları, ebedi devlet (İl) anlayışı ve 'Türk' milli kimliği.",
      symbols: ["Kurt Başlı Sancak", "Bengü Taş", "Balbal", "Orhun Tamgaları"]
    },
    artifacts: [
      {
        name: "Orhun Abideleri (Kül Tigin, Bilge Kağan, Tonyukuk)",
        century: "MS 720 — 735",
        location: "Orhun Vadisi, Moğolistan",
        desc: "Türk milletinin bağımsızlık manifestosu, devlet felsefesi ve dilimizin en eski abidevi şaheseri olan yazıtlar."
      },
      {
        name: "Kül Tigin Büstü ve Mermer Kartal",
        century: "MS 732",
        location: "Moğolistan Tarih Müzesi",
        desc: "Kül Tigin anıt mezar kompleksinde bulunan, gerçekçi yüz hatlarıyla Göktürk portre sanatının başyapıtı."
      }
    ],
    subBranches: [
      {
        name: "Doğu Göktürk Kağanlığı",
        period: "581 — 630",
        region: "Ötüken ve Moğolistan Platosu",
        desc: "Kağanlığın kutsal merkezini elinde tutan, Çin entrikaları ve kıtlıklar sonucu 50 yıllık bir esaret dönemine giren ana kanat."
      },
      {
        name: "Batı Göktürk Kağanlığı (On Oklar)",
        period: "581 — 659",
        region: "Seyhun, Ceyhun, Tanrı Dağları ve Hazar Boyları",
        desc: "On Ok boy teşkilatıyla İpek Yolu ticaretini idare eden, Bizans ile ilk doğrudan diplomatik ilişkileri kuran zengin kanat."
      },
      {
        name: "İkinci Göktürk (Kutluk) Kağanlığı",
        period: "682 — 744",
        region: "Ötüken Merkezli Bütün Avrasya",
        desc: "Kürşad ve Kutluk Kağan ruhuyla Çin'e isyan edip devleti yeniden kuran, Orhun Abideleri'ni diken rönesans dönemi."
      }
    ],
    milestones: [
      { year: "552", event: "Bumin Kağan'ın Avarları yenerek Ötüken'de bağımsız Türk Kağanlığı'nı kurması." },
      { year: "568", event: "Bizans elçisi Zemarkhos'un İstemi Yabgu'nun Tanrı Dağları'ndaki altın çadırına gelişi." },
      { year: "682", event: "Kutluk (İlteriş) Kağan'ın 17 arkadaşıyla başlattığı ihtilal sonucu İkinci Göktürk Devleti'nin dirilişi." },
      { year: "732-735", event: "Kül Tigin ve Bilge Kağan bengü taşlarının Orhun boylarına dikilmesi." }
    ],
    continuity: "Göktürklerin yıkılışından sonra bozkır idaresi Uygurlara, batıdaki bozkırlar ise Karluk, Türgiş ve Hazar Kağanlığı'na geçerek İslamiyet ile temas dönemini hazırlayacaktır."
  },
  {
    id: "donusum-ve-yeni-yapilar",
    order: 5,
    periodBadge: "MS 744 — 840",
    title: "Türk Dünyasının Dönüşümü",
    subtitle: "Uygurlar, Şehirleşme ve Yeni Siyasi Yapılanmalar",
    tagline: "Çadırlardan saraylara, taş yazıtlardan matbaaya; bozkırdan yerleşik medeniyete ilk büyük adım.",
    lead: "Ötüken'den Karabalgasun'a, oradan Turfan havzasına geçen Uygurlar; matbaayı, fresk sanatını, vaha şehirciliğini ve kütüphaneleri Türk kültürüne kazandırdı. Bu sırada batıda Hazar Kağanlığı Kafkaslar'da bir barış çağı kuruyor, Karluk ve Türgişler İpek Yolu'nu şekillendiriyordu.",
    geography: {
      focus: "central-tarim",
      regionName: "Karabalgasun, Tarım Havzası, Turfan, Hazar Denizi ve Yedisu",
      capitalOrCenter: "Karabalgasun & Ordubalık (Daha sonra Turfan / Koço)",
      territoryPath: "M 360,230 Q 560,190 740,210 Q 720,290 560,310 Q 400,310 350,270 Z",
      centerCoords: { x: 550, y: 250 },
      routes: [
        { from: { x: 620, y: 220 }, to: { x: 560, y: 280 }, label: "Tarım Havzası Şehirleşme Göçü" }
      ]
    },
    rulers: [
      { name: "Kutluk Bilge Kül Kağan", title: "Uygur Kağanlığı Kurucusu (744)", note: "Göktürk mirasçılarını birleştirerek Karabalgasun'da devleti kuran kurucu bilge." },
      { name: "Bögü Kağan", title: "Maniheizm'i Kabul Eden Kağan", note: "Tarihte ilk kez bir Türk devletinin inanç ekseninde yerleşik hayata ve şehirciliğe geçişini başlatan hükümdar." },
      { name: "Bulan Kağan", title: "Hazar Hakanı", note: "Kafkasya'da Hazar Barışı'nı (Pax Chazarica) tesis ederek dinler arası hoşgörüyü kurumsallaştıran lider." }
    ],
    culture: {
      art: "Uygur matbaası, ksilografi, Turfan mağara freskleri, Soğd kökenli Uygur Alfabesi.",
      lifestyle: "Yerleşik tarım, şehir mimarisi, sulama kanalları, vaha ticareti ve hukuk vesikaları.",
      legacy: "Moğol bürokrasisini ve yazısını eğiten Uygur kâtiplik geleneği, zengin kütüphaneler.",
      symbols: ["Uygur Yazması", "Maniheist Fresk", "Pax Chazarica", "Ordubalık Sarayı"]
    },
    artifacts: [
      {
        name: "Karabalgasun Yazıtı",
        century: "MS 821",
        location: "Orhun Vadisi",
        desc: "Türkçe, Soğdca ve Çince olmak üzere üç dilde yazılmış, Uygur Kağanlığı'nın ihtişamını anlatan abidevi stel."
      },
      {
        name: "Turfan Vaha Freskleri ve Hukuk Belgeleri",
        century: "MS 9. — 10. Yüzyıl",
        location: "Berlin Asya Sanatları Müzesi",
        desc: "Faiz, tapu, kiralama ve köle azadı gibi ileri düzey hukuki belgeleri içeren ilk Türkçe arşiv metinleri."
      }
    ],
    subBranches: [
      {
        name: "Hazar Kağanlığı (Pax Chazarica)",
        period: "650 — 965",
        region: "Kafkaslar, Don-Volga Havzası ve Kırım",
        desc: "İslamiyet, Hristiyanlık ve Museviliğin bir arada barış içinde yaşadığı, Doğu Avrupa ticaretini koruyan Türk devleti."
      },
      {
        name: "Karluk ve Türgiş Boy Birlikleri",
        period: "7. — 10. Yüzyıl",
        region: "Yedisu, Çu ve Talas Vadisi",
        desc: "Kendi adına ilk para basan Bagatur Tarkan'ın Türgişleri ve ileride Karahanlıların temelini atacak olan Karluklar."
      },
      {
        name: "Koço ve Kansu Uygur Hanlıkları",
        period: "850 — 13. Yüzyıl",
        region: "Doğu Türkistan ve İpek Yolu Vahaları",
        desc: "Kırgız istilası sonrası güneye inerek Turfan ve Kansu'da benzersiz bir kültür ve sanat merkezi kuran kol."
      }
    ],
    milestones: [
      { year: "744", event: "Ötüken'de Uygur Kağanlığı'nın kurulması ve Karabalgasun şehrinin inşası." },
      { year: "762", event: "Bögü Kağan'ın Mani dinini kabul etmesi ve ilk yerleşik Türk şehir hayatının doğuşu." },
      { year: "840", event: "Kırgız akınları sonucu Uygurların Tarım Havzası'na inerek medeniyetlerini vaha şehirlerinde sürdürmesi." }
    ],
    continuity: "Uygurların kâtiplik ve şehir kültürü ile Karlukların İpek Yolu hakimiyeti, Türklerin İslam diniyle tanışması için elverişli bir zemin hazırlamıştır."
  },
  {
    id: "islam-iliskileri-ve-ilk-adımlar",
    order: 6,
    periodBadge: "MS 751 — 9. YÜZYIL",
    title: "İslam Dünyasıyla Karşılaşma",
    subtitle: "Talas Savaşı, Samarra Dönemi ve İlk Valilikler",
    tagline: "Bozkırın yiğit savaşçılarından İslam hilafetinin başkumandanlarına: Tarihin yönünü değiştiren kavuşma.",
    lead: "751 Talas Savaşı'nda Karlukların Abbasilerin yanında yer almasıyla başlayan yakınlaşma, dünya tarihini kökten değiştirdi. Samarra askeri ordugâh şehrini kuran Türk komutanlar hilafet ordusunun bel kemiği haline gelirken, Mısır'da Tolunoğulları ve İhşîdîler ile ilk Müslüman Türk hanedanları yükseldi.",
    geography: {
      focus: "middle-east-caucuses",
      regionName: "Talas Vadisi, Horasan, Bağdat, Samarra ve Nil Vadisi (Mısır)",
      capitalOrCenter: "Samarra & Fustat (Kahire)",
      territoryPath: "M 260,300 Q 380,280 480,310 Q 420,390 320,390 Q 240,360 260,300 Z",
      centerCoords: { x: 370, y: 340 },
      routes: [
        { from: { x: 520, y: 270 }, to: { x: 380, y: 340 }, label: "Talas'tan Bağdat'a Askeri ve Ticari Akış" },
        { from: { x: 360, y: 350 }, to: { x: 270, y: 370 }, label: "Mısır'a Ulaşım (Tolunoğlu Ahmed)" }
      ]
    },
    rulers: [
      { name: "Tolunoğlu Ahmed", title: "Mısır'da Tolunoğulları Kurucusu (868 — 884)", note: "Bağdat'tan gelip Mısır'da bağımsız bir Türk devleti kuran, Kahire'de kendi adını taşıyan muazzam camiyi inşa ettiren hükümdar." },
      { name: "Afşin & Boğa el-Kebir", title: "Samarra Ordu Başkumandanları", note: "Abbasi hilafetini Bizans ve Babek isyanlarına karşı savunan, ordu yönetimini devralan büyük Türk generalleri." },
      { name: "Muhammed bin Tuğç", title: "İhşîdîler (Akşitler) Kurucusu", note: "Mısır ve Hicaz'ı yöneten, Mekke ve Medine'ye hizmet eden ilk Türk hükümdar hanedanı." }
    ],
    culture: {
      art: "Samarra stili sıva süslemeleri (beveled style), Tolunoğlu Camii sarmal minaresi.",
      lifestyle: "Askeri garnizon şehirleri, Avasım (sınır muhafızlığı) teşkilatı, kağıt üretiminin Semerkant üzerinden İslam dünyasına yayılışı.",
      legacy: "Türklerin İslam dünyasının siyasi ve askeri liderliğini üstlenmesinin ilk basamağı.",
      symbols: ["Tolunoğlu Camii", "Samarra Kulesi", "Talas Okları", "Semerkant Kağıdı"]
    },
    artifacts: [
      {
        name: "Tolunoğlu Ahmed Camii ve Ahşap Minberi",
        century: "MS 879",
        location: "Kahire, Mısır",
        desc: "Bozkır ahşap işçiliği ile İslami mimariyi birleştiren, Kahire'nin en eski ve sağlam ayakta kalan abidevi camisi."
      },
      {
        name: "Samarra Balkuwara Sarayı Sıva Panoları",
        century: "MS 9. Yüzyıl",
        location: "Irak Ulusal Müzesi & Berlin Pergamon",
        desc: "Türk süvarilerinin ordugâh kenti Samarra'da ortaya çıkan, bozkır stilize hayvan-bitki formlarını yansıtan stucco süslemeleri."
      }
    ],
    subBranches: [
      {
        name: "Tolunoğulları Devleti",
        period: "868 — 905",
        region: "Mısır, Suriye ve Filistin",
        desc: "Mısır'da bağımsızlığını ilan eden ilk Türk devleti; modern hastaneler (Maristan) ve mimari eserler bırakmıştır."
      },
      {
        name: "İhşîdîler (Akşitler)",
        period: "935 — 969",
        region: "Mısır, Suriye ve Hicaz",
        desc: "Kutsal topraklara (Mekke ve Medine) ilk kez hakim olan ve koruyuculuğunu üstlenen Türk hanedanı."
      },
      {
        name: "Abbasi Türk Emirü'l-Ümeraları",
        period: "836 — 945",
        region: "Bağdat, Samarra ve Mezopotamya",
        desc: "Hilafet sarayında vezirleri ve halifeleri tayin edebilecek güce ulaşan Türk komutanlar oligarşisi."
      }
    ],
    milestones: [
      { year: "751", event: "Talas Savaşı: Karlukların desteğiyle Abbasi ordusunun Çin ordusunu mağlup etmesi." },
      { year: "836", event: "Halife Mutasım tarafından yalnızca Türk muhafızlar için Bağdat'ın kuzeyinde Samarra kentinin inşası." },
      { year: "868", event: "Tolunoğlu Ahmed'in Kahire'de bağımsızlığını ilan ederek Mısır'da ilk Türk devrini başlatması." }
    ],
    continuity: "Bu temaslar, Orta Asya'da Karahanlılar ve Gazneliler eliyle kitlesel İslamlaşmanın ve ilk büyük Türk-İslam devletlerinin kurulmasına giden kapıyı açmıştır."
  },
  {
    id: "karahanlilar-ve-turk-islam",
    order: 7,
    periodBadge: "MS 840 — 1212",
    title: "Karahanlılar ve Türk-İslam Rönesansı",
    subtitle: "Satuk Buğra Han, Kaşgar ve İlk Abidevi Eserler",
    tagline: "Bozkır töresi İslam ahlakıyla yoğruldu; Kaşgar ve Semerkant ilim ve irfanın başkentine dönüştü.",
    lead: "Orta Asya'da İslamiyet'i resmi din olarak kabul eden ilk büyük Türk devleti olan Karahanlılar; Türkçe'yi ilim, edebiyat ve devlet dili olarak yüceltmiştir. Kaşgarlı Mahmud'un Divânu Lugâti't-Türk'ü ve Yusuf Has Hacib'in Kutadgu Bilig'i bu çağda insanlığa armağan edilmiştir.",
    geography: {
      focus: "central-transoxiana",
      regionName: "Maveraünnehir, Balasagun, Kaşgar, Semerkant ve Fergana Vadisi",
      capitalOrCenter: "Balasagun & Kaşgar (Daha sonra Semerkant)",
      territoryPath: "M 440,250 Q 560,220 640,260 Q 600,320 500,340 Q 420,310 440,250 Z",
      centerCoords: { x: 530, y: 280 },
      routes: [
        { from: { x: 580, y: 260 }, to: { x: 480, y: 300 }, label: "İpek Yolu İlim ve Kervan Güzergâhı" }
      ]
    },
    rulers: [
      { name: "Satuk Buğra Han (Abdülkerim)", title: "İslam'ı Kabul Eden İlk Karahanlı Hakanı", note: "İslamiyet'i devletin resmi inancı ilan eden, Türk-İslam sentezinin kurucu simgesi." },
      { name: "Bilge Kül Kadir Han", title: "Karahanlıların Kurucusu (840)", note: "Uygur Kağanlığı'nın dağılmasıyla Karluk, Yağma ve Çiğil boylarını birleştirerek devleti kuran hakan." },
      { name: "Yusuf Kadir Han", title: "Devletin En Parlak Devri Hükümdarı", note: "Kaşgar'ı ilim merkezine çeviren ve Gazneli Mahmud ile tarihi Maveraünnehir görüşmesini yapan kağan." }
    ],
    culture: {
      art: "İlk Türk-İslam kervansarayları (Ribat-ı Melik), minareler (Kalyan, Burana), türbe mimarisi.",
      lifestyle: "Yerleşik medrese sistemi, tasavvufun ilk tohumları (Hoca Ahmed Yesevi öncülü ortam), Türkçe divan geleneği.",
      legacy: "Kutadgu Bilig, Divânu Lugâti't-Türk, Atabetü'l-Hakayık ve Divan-ı Hikmet.",
      symbols: ["Kutadgu Bilig", "Burana Kulesi", "Ribat-ı Melik Kapısı", "Kaşgar Hilali"]
    },
    artifacts: [
      {
        name: "Kaşgarlı Mahmud — Divânu Lugâti't-Türk",
        century: "1072 — 1074",
        location: "Millet Kütüphanesi, İstanbul",
        desc: "Türk dilinin zenginliğini Araplara öğretmek için yazılan, içinde ilk Türk dünya haritasını barındıran eşsiz ansiklopedik başyapıt."
      },
      {
        name: "Yusuf Has Hacib — Kutadgu Bilig (Mutluluk Veren Bilgi)",
        century: "1069",
        location: "Kaşgar",
        desc: "Adalet, akıl, devlet ve insan onurunu alegorik karakterlerle anlatan Türk siyasetname geleneğinin kurucu eseri."
      }
    ],
    subBranches: [
      {
        name: "Gazneliler (Alp Tigin & Sultan Mahmud)",
        period: "963 — 1186",
        region: "Afganistan, Horasan ve Kuzey Hindistan",
        desc: "Hindistan'a 17 sefer düzenleyerek İslamiyet'i alt kıtaya yayan, 'Sultan' unvanını ilk kullanan hükümdar Mahmud'un devleti."
      },
      {
        name: "Doğu Karahanlı Devleti",
        period: "1042 — 1211",
        region: "Kaşgar ve Balasagun Havzası",
        desc: "Kültür ve edebiyat merkezi olarak Türkçe eserlerin kaleme alındığı doğu kanadı."
      },
      {
        name: "Batı Karahanlı Devleti",
        period: "1042 — 1212",
        region: "Buhara, Semerkant ve Fergana",
        desc: "İslam medeniyetinin büyük medrese ve mimari eserlerini inşa eden batı kanadı."
      }
    ],
    milestones: [
      { year: "840", event: "Bilge Kül Kadir Han tarafından Karahanlı Devleti'nin kurulması." },
      { year: "940 civarı", event: "Satuk Buğra Han'ın İslamiyet'i kabulü ve Türk boylarının topluca İslam dairesine girişi." },
      { year: "1074", event: "Kaşgarlı Mahmud'un Divânu Lugâti't-Türk'ü Bağdat'ta halifeye takdim etmesi." }
    ],
    continuity: "Karahanlılar ile filizlenen Türk-İslam devlet nizamı, Gazneliler ve Büyük Selçuklu İmparatorluğu ile Yakın Doğu'nun ve Anadolu'nun kaderini tayin edecektir."
  },
  {
    id: "buyuk-selcuklular",
    order: 8,
    periodBadge: "1037 — 1157",
    title: "Büyük Selçuklu Dönemi",
    subtitle: "Dandanakan'dan Malazgirt'e Cihanşümul İmparatorluk",
    tagline: "Horasan'dan yükselen Selçuklu güneşi, İslam dünyasını birleştirdi ve Anadolu'nun kapılarını ardına kadar açtı.",
    lead: "Tuğrul ve Çağrı Beylerin Dandanakan zaferiyle kurduğu Büyük Selçuklu İmparatorluğu, Sultan Alparslan ile 1071'de Malazgirt'te Bizans ordusunu dize getirmiştir. Vezir Nizamülmülk'ün kurduğu Nizamiye Medreseleri ve Melikşah'ın refah çağı, Doğu'nun altın çağı olmuştur.",
    geography: {
      focus: "persia-anatolia",
      regionName: "Horasan, İran Platosu, Irak, Suriye ve Kafkaslar",
      capitalOrCenter: "Nişabur, Rey, İsfahan ve Merv",
      territoryPath: "M 280,310 Q 420,250 560,280 Q 580,350 480,370 Q 340,380 280,310 Z",
      centerCoords: { x: 440, y: 310 },
      routes: [
        { from: { x: 540, y: 280 }, to: { x: 380, y: 310 }, label: "Horasan'dan Rey ve İsfahan'a İntikal" },
        { from: { x: 420, y: 300 }, to: { x: 320, y: 290 }, label: "1071 Malazgirt Seferi Yolu" }
      ]
    },
    rulers: [
      { name: "Sultan Alparslan", title: "Büyük Selçuklu Sultanı (1063 — 1072)", note: "26 Ağustos 1071'de Malazgirt Ovası'nda Bizans İmparatoru Romen Diyojen'i mağlup ederek Türklerin Anadolu yurdunu kesinleştiren fatih." },
      { name: "Tuğrul ve Çağrı Beyler", title: "Kurucu Kardeşler (1037 — 1063)", note: "Biri askeri dahi, diğeri devlet aklı olan; Bağdat'a girerek 'Doğunun ve Batının Sultanı' unvanını alan kurucular." },
      { name: "Sultan Melikşah & Nizamülmülk", title: "Selçuklu Zirvesi (1072 — 1092)", note: "Devletin sınırlarını Aral'dan Akdeniz'e genişleten cihan padişahı ve Siyasetname'nin yazarı efsanevi vezir-i azam." },
      { name: "Sultan Sencer", title: "Son Büyük Selçuklu Sultanı", note: "Merv şehrini Doğu'nun incisi haline getiren, Selçuklu kudretinin son büyük temsilcisi." }
    ],
    culture: {
      art: "Selçuklu yıldızı ve geometrik taçkapılar, firuze çiniler, kümbet mimarisi (Merv Sencer Türbesi).",
      lifestyle: "Nizamiye Medreseleri ile kurulan dünyanın ilk modern üniversite ağı, ikta askeri-arazi sistemi.",
      legacy: "İslam dünyasının Haçlı ve iç tehditlere karşı korunması, Celali Takvimi (Ömer Hayyam).",
      symbols: ["Çift Başlı Selçuklu Kartalı", "Sekiz Köşeli Yıldız", "Taçkapı", "Kümbet"]
    },
    artifacts: [
      {
        name: "İsfahan Mescid-i Cuma Kümbetleri",
        century: "1088",
        location: "İsfahan, İran",
        desc: "Melikşah ve Nizamülmülk adına inşa edilen, Selçuklu tuğla işçiliğinin ve kubbe mühendisliğinin zirvesi."
      },
      {
        name: "Nizamülmülk — Siyâsetnâme",
        century: "1091",
        location: "Bağdat / İsfahan",
        desc: "Adalet, istihbarat, devlet terbiyesi ve halkın haklarını korumayı emreden Doğu'nun en ünlü devlet yönetimi kılavuzu."
      }
    ],
    subBranches: [
      {
        name: "Kirman Selçukluları",
        period: "1048 — 1187",
        region: "Güney İran ve Umman Denizi Kıyıları",
        desc: "Kavurd Bey tarafından kurulan, deniz ticareti ve liman güvenliğini sağlayan Selçuklu hanedanı."
      },
      {
        name: "Suriye Selçukluları",
        period: "1078 — 1117",
        region: "Şam, Halep ve Kudüs",
        desc: "Tutuş önderliğinde kurulan, Haçlı seferlerinin ilk dalgalarını karşılayan cephe devleti."
      },
      {
        name: "Irak Selçukluları & Atabeylikler",
        period: "1118 — 1194",
        region: "Bağdat, Musul ve Azerbaycan",
        desc: "Zengiler (Nureddin Zengi), İldenizliler ve Böriler gibi İslam dünyasını savunan kahraman atabeyliklerin beşiği."
      }
    ],
    milestones: [
      { year: "1040", event: "Dandanakan Muharebesi: Selçukluların Gaznelileri yenerek resmen bağımsız devlet olması." },
      { year: "1055", event: "Tuğrul Bey'in Bağdat'a girerek Halife tarafından 'Doğu'nun ve Batı'nın Sultanı' ilan edilmesi." },
      { year: "1071", event: "Malazgirt Meydan Muharebesi: Sultan Alparslan'ın Bizans'ı mağlup edip Anadolu kapılarını açması." }
    ],
    continuity: "Malazgirt'ten sonra Alparslan'ın 'Toprak fethedenin malıdır' emriyle Anadolu fütuhata açılmış, Anadolu Selçuklu Devleti ve ilk Türk beylikleri filizlenmiştir."
  },
  {
    id: "anadoluya-gecis-ve-yerlesme",
    order: 9,
    periodBadge: "1075 — 12. YÜZYIL",
    title: "Anadolu'ya Geçiş ve İlk Beylikler",
    subtitle: "Yeni Yurt, İlk Akınlar ve Mayalanma",
    tagline: "Kutalmışoğlu Süleyman Şah İznik'e ulaştı; Danişmentliler, Mengücekliler, Saltuklular Anadolu toprağını nakış gibi işledi.",
    lead: "Malazgirt'in ardından Anadolu'ya sel gibi akan Türkmen boyları, dağları, yaylaları ve vadileri vatan kıldı. İznik'ten Erzurum'a, Sivas'tan Diyarbakır'a kadar kurulan ilk beylikler; inşa ettikleri medreseler, darüşşifalar ve kervansaraylarla Anadolu'yu bir Türk-İslam yurduna dönüştürdü.",
    geography: {
      focus: "anatolia-core",
      regionName: "İznik, Erzurum, Sivas, Divriği, Mardin ve Harput",
      capitalOrCenter: "İznik (İlk Merkez) & Konya",
      territoryPath: "M 220,280 Q 280,270 340,280 Q 330,320 280,330 Q 220,320 220,280 Z",
      centerCoords: { x: 280, y: 295 },
      routes: [
        { from: { x: 380, y: 290 }, to: { x: 230, y: 280 }, label: "1075 İznik'e Uzanış ve Fütûhat" }
      ]
    },
    rulers: [
      { name: "Kutalmışoğlu Süleyman Şah", title: "Türkiye Selçuklularının Kurucusu", note: "1075'te İznik'i fethederek başkent yapan ve devleti Bizans'ın yanı başında kuran vizyoner lider." },
      { name: "Danişment Gazi", title: "Danişmentliler Kurucusu", note: "Sivas, Tokat ve Malatya'da Haçlı ordularına karşı destansı savunmalar yapan Danişmendnâme kahramanı." },
      { name: "Çaka Bey", title: "İlk Türk Denizcisi", note: "İzmir'de kurduğu ilk Türk tersanesi ve donanmasıyla Ege adalarını fetheden amiral." },
      { name: "Saltuk Bey & Mengücek Gazi", title: "Doğu Anadolu Fatihleri", note: "Erzurum ve Erzincan'da ilk kalıcı Türk eserlerini yükselten öncüler." }
    ],
    culture: {
      art: "Divriği Ulu Camii taş bezemeleri, Çifte Minareli Medrese taçkapıları, Artuklu köprüleri.",
      lifestyle: "Ahilik teşkilatının temelleri, gaza ve fütüvvet ruhu, Türkmen aşiretlerinin yayla-kışlak iskanı.",
      legacy: "Anadolu'nun tapusunun Türklere geçişi, Batı kaynaklarında bölgeden ilk kez 'Turchia' (Türkiye) olarak bahsedilmesi.",
      symbols: ["Malabadi Köprüsü", "Divriği Taçkapısı", "Çaka Bey Kadırgası", "İznik Surları"]
    },
    artifacts: [
      {
        name: "Divriği Ulu Camii ve Darüşşifası",
        century: "1228 (Temeli 12. yy Mengücek)",
        location: "Divriği, Sivas (UNESCO)",
        desc: "Güneş açısına göre ikindi vaktinde namaz kılan insan gölgesi beliren taş işçiliğinin dünyadaki en muazzam başyapıtı."
      },
      {
        name: "Malabadi Köprüsü",
        century: "1147 (Artuklular)",
        location: "Silvan, Diyarbakır",
        desc: "Zamanının dünyadaki en geniş kemerli taş köprüsü, Türk mühendisliğinin eşsiz anıtı."
      }
    ],
    subBranches: [
      {
        name: "Danişmentliler",
        period: "1071 — 1178",
        region: "Sivas, Tokat, Niksar, Kayseri",
        desc: "Anadolu'nun ilk tıp medresesi Yağıbasan Medresesi'ni kuran ve Haçlıları hezimete uğratan güçlü beylik."
      },
      {
        name: "Saltuklular",
        period: "1072 — 1202",
        region: "Erzurum, Kars ve Bayburt",
        desc: "Erzurum Kale Camii ve Mama Hatun Kümbeti ile Doğu Anadolu'ya damga vuran ilk beylik."
      },
      {
        name: "Artuklular",
        period: "1102 — 1409",
        region: "Mardin, Hasankeyf ve Harput",
        desc: "Mühendis El-Cezeri'nin ilk robotik ve otomasyon makinelerini geliştirdiği bilim vadisi."
      },
      {
        name: "Çaka Beyliği",
        period: "1081 — 1093",
        region: "İzmir ve Ege Kıyıları",
        desc: "Türk Deniz Kuvvetleri'nin kuruluş yılı kabul edilen 1081'de ilk donanmayı inşa eden denizci beylik."
      }
    ],
    milestones: [
      { year: "1075", event: "Kutalmışoğlu Süleyman Şah'ın İznik'i fethederek Türkiye Selçuklu Devleti'ni kurması." },
      { year: "1081", event: "Çaka Bey'in ilk Türk donanmasını İzmir'de denize indirmesi." },
      { year: "1176", event: "Miryokefalon Zaferi: II. Kılıçarslan'ın Bizans ordusunu ezmesi ve Anadolu'nun kesin olarak Türk yurdu olduğunun tescili." }
    ],
    continuity: "İlk beyliklerin harmanladığı topraklar üzerinde başkenti Konya olan Anadolu Selçuklu Devleti yükselecek ve Akdeniz'den Karadeniz'e bir refah imparatorluğu kuracaktır."
  },
  {
    id: "anadolu-selcuklulari",
    order: 10,
    periodBadge: "1077 — 1308",
    title: "Anadolu Selçuklu Devleti",
    subtitle: "Medeniyetlerin Beşiği: Konya, Kervansaraylar ve Ahilik",
    tagline: "İpek Yolu kervanları sigortalandı, Mevlana ve Yunus Emre'nin hoşgörü felsefesiyle toprak yoğruldu.",
    lead: "I. Alaeddin Keykubad devrinde altın çağını yaşayan Türkiye Selçukluları; Alanya ve Sinop tersaneleriyle denizlere açılmış, uçsuz bucaksız kervansaray ağlarıyla dünyada ilk devlet ticaret sigortasını uygulamıştır. Bu devir, Mevlana Celaleddin-i Rumi, Hacı Bektaş-ı Veli ve Ahî Evran'ın manevi iklimiyle aydınlanmıştır.",
    geography: {
      focus: "anatolia-konya",
      regionName: "Konya, Alanya, Sinop, Kayseri, Sivas ve Erzurum",
      capitalOrCenter: "Konya (Darü'l-Mülk)",
      territoryPath: "M 210,280 Q 280,260 360,270 Q 350,330 270,340 Q 200,320 210,280 Z",
      centerCoords: { x: 275, y: 300 },
      routes: [
        { from: { x: 260, y: 310 }, to: { x: 250, y: 330 }, label: "Alanya Tersanesi ve Akdeniz Yolu" },
        { from: { x: 260, y: 310 }, to: { x: 270, y: 270 }, label: "Sinop Karadeniz Ticaret Hattı" }
      ]
    },
    rulers: [
      { name: "I. Alâeddin Keykubad", title: "Selçuklu'nun En Parlak Sultanı (1220 — 1237)", note: "Devlete altın çağını yaşatan; Sinop ve Alanya'yı fethedip kervansaraylar, kaleler ve kütüphanelerle donatan büyük hükümdar." },
      { name: "II. Kılıçarslan", title: "Miryokefalon Fatihi (1156 — 1192)", note: "Anadolu'nun tapusunu ebediyen mühürleyen, 11 oğluna ülkeyi paylaştırarak töreyi koruyan sultan." },
      { name: "I. Gıyaseddin Keyhüsrev", title: "Denizlerin Fatihi", note: "Antalya'yı fethederek Anadolu Selçuklularını uluslararası deniz ticaretinin merkezine yerleştiren hükümdar." }
    ],
    culture: {
      art: "Sultanhanı kervansarayları, Karatay ve İnce Minareli Medrese çinileri, taş portalleri.",
      lifestyle: "Ahilik teşkilatı (esnaf dayanışması ve ahlakı), Mevlevilik ve dervişlik irfanı.",
      legacy: "Anadolu'nun zengin mimari mirası, Türkçe'nin halk edebiyatı ve tasavvufla mayalanması.",
      symbols: ["Mevlana Sikkesi", "Karatay Çinisi", "Sultanhanı Kemerleri", "Selçuklu Şahini"]
    },
    artifacts: [
      {
        name: "Sultanhanı Kervansarayı (Aksaray)",
        century: "1229",
        location: "Aksaray — Konya Yolu",
        desc: "Tüccarların 3 gün boyunca ücretsiz konakladığı, hastanesi ve mescidi bulunan devasa Selçuklu kervan sarayı."
      },
      {
        name: "Karatay ve İnce Minareli Medreseleri",
        century: "1251 — 1264",
        location: "Konya",
        desc: "Kubbesindeki turkuaz çinilerle gökyüzü rasathanesini andıran Selçuklu yükseköğrenim anıtı."
      }
    ],
    subBranches: [
      {
        name: "Ahilik Teşkilatı (Ahi Evran)",
        period: "13. Yüzyıl",
        region: "Kırşehir, Konya, Kayseri",
        desc: "Mesleki ahlak, adalet, üretici hakları ve gerektiğinde şehri savunan halk ordusu niteliğindeki eşsiz sivil teşkilat."
      },
      {
        name: "Uç Türkmen Boyları",
        period: "13. Yüzyıl Sonu",
        region: "Batı Anadolu Sınır Boyları",
        desc: "Kösedağ Savaşı sonrasında Selçuklu merkezinin zayıflamasıyla bağımsızlaşan ve Osmanlı'yı doğuracak olan gazi beylikler."
      }
    ],
    milestones: [
      { year: "1176", event: "Miryokefalon Muharebesi ile Bizans'ın Anadolu'dan Türkleri çıkarma ümidinin tamamen yok olması." },
      { year: "1221", event: "I. Alâeddin Keykubad'ın Alanya'yı (Alaiye) fethedip Akdeniz tersanesini inşa etmesi." },
      { year: "1243", event: "Kösedağ Savaşı: Moğol İstilası ve Anadolu'da İkinci Beylikler döneminin başlaması." }
    ],
    continuity: "Kösedağ Savaşı Selçuklu merkezi otoritesini kırsa da, uç beylikleri içindeki Osmanoğulları Söğüt'te cihanşümul bir imparatorluğun tohumunu atacaktır."
  },
  {
    id: "beylikler-ve-osmanlinin-dogusu",
    order: 11,
    periodBadge: "1299 — 1451",
    title: "Beylikler ve Osmanlı'nın Doğuşu",
    subtitle: "Söğüt'ten Rumeli'ye: Gaza Ruhu ve Teşkilatlanma",
    tagline: "Şeyh Edebali'nin öğüdü Osman Gazi'nin kılıcıyla birleşti; Söğüt'ten Balkanlar'a uzanan çınar kök saldı.",
    lead: "Moğol fırtınasının ardından Karamanoğulları, Candaroğulları ve Karesioğulları Anadolu'da beylikler kurarken, Bizans sınırındaki Kayı boyu Osman Gazi önderliğinde gazaya yöneldi. Orhan Gazi ile devletleşen, I. Murad ve Yıldırım Bayezid ile Balkanlar'ı vatan kılan Osmanlı, Çelebi Mehmed ile Fetret Devri'nden yeniden doğdu.",
    geography: {
      focus: "marmara-balkans",
      regionName: "Söğüt, Bursa, Edirne, Kosova ve Niğbolu",
      capitalOrCenter: "Söğüt -> Bursa -> Edirne",
      territoryPath: "M 180,240 Q 240,230 300,260 Q 280,310 210,310 Q 170,280 180,240 Z",
      centerCoords: { x: 235, y: 265 },
      routes: [
        { from: { x: 230, y: 280 }, to: { x: 210, y: 250 }, label: "1353 Çimpe Kalesi ve Rumeli'ye Geçiş" },
        { from: { x: 210, y: 250 }, to: { x: 180, y: 230 }, label: "1389 I. Kosova ve Balkan Fütûhatı" }
      ]
    },
    rulers: [
      { name: "Osman Gazi", title: "Osmanlı'nın Kurucusu (1299 — 1326)", note: "'İnsanı yaşat ki devlet yaşasın' nasihatiyle adil devletin temelini Söğüt ve Domaniç'te atan kurucu gazi." },
      { name: "Orhan Gazi", title: "Devlet Teşkilatının Kurucusu", note: "Bursa'yı başkent yapan, ilk divan, ilk medrese ve ilk düzenli orduyu (Yaya ve Müsellem) kuran teşkilatçı hükümdar." },
      { name: "I. Murad (Hüdavendigar)", title: "Şehit Padişah (1362 — 1389)", note: "Edirne'yi fethedip başkent yapan, Yeniçeri Ocağı'nı ve Tımar sistemini kurup I. Kosova Savaşı'nda şehit düşen hükümdar." },
      { name: "Yıldırım Bayezid & Çelebi Mehmed", title: "Yükseliş ve İkinci Kurucu", note: "Niğbolu'da Haçlı ordusunu imha eden Bayezid ve Fetret Devri'nin ardından devleti toparlayan Çelebi Mehmed." }
    ],
    culture: {
      art: "Bursa Yeşil Külliyesi, İznik çinileri, ters T planlı erken Osmanlı camileri.",
      lifestyle: "İstimalet (hoşgörü ve adaletle fethedilen halkı kazanma politikası), İskân siyaseti, Ahiler desteği.",
      legacy: "Balkanlar'da kalıcı İslam ve Türk varlığı, Tımar ve Devşirme askeri-idari sistemi.",
      symbols: ["Kayı Tamgası", "Çınar Ağacı", "Bursa Ulu Camii", "Yeniçeri Börkü"]
    },
    artifacts: [
      {
        name: "Bursa Ulu Camii ve Şadırvanı",
        century: "1399",
        location: "Bursa",
        desc: "Yıldırım Bayezid tarafından Niğbolu zaferi şükrü olarak yaptırılan, içinde şadırvanı ve dev hat yazıları bulunan erken Osmanlı şaheseri."
      },
      {
        name: "Edirne Eski Camii ve Rüstem Paşa Kervansarayı",
        century: "1414",
        location: "Edirne",
        desc: "Balkan seferlerinin üssü Edirne'de kurulan erken imparatorluk anıtları."
      }
    ],
    subBranches: [
      {
        name: "Karamanoğulları Beyliği",
        period: "1256 — 1487",
        region: "Konya, Karaman, Larende",
        desc: "1277'de Karamanoğlu Mehmed Bey'in 'Bugünden sonra divanda, dergahta ve mecliste Türkçeden başka dil kullanılmaya' fermanıyla Türkçe bayraktarlığı yapan beylik."
      },
      {
        name: "Karesioğulları Beyliği",
        period: "1297 — 1360",
        region: "Balıkesir ve Çanakkale",
        desc: "Osmanlı'ya katılan ilk beylik olup denizcilik tecrübesi ve Evrenos Gazi gibi komutanlarıyla Rumeli fethini başlatan güç."
      },
      {
        name: "Candaroğulları & Germiyanoğulları",
        period: "13. — 15. Yüzyıl",
        region: "Kastamonu, Sinop ve Kütahya",
        desc: "Karadeniz donanması ve zengin çini sanatıyla Osmanlı'ya miras bırakan köklü Anadolu beylikleri."
      }
    ],
    milestones: [
      { year: "1299", event: "Osman Gazi adına ilk hutbenin okunması ve bağımsızlık ilanı." },
      { year: "1353", event: "Çimpe Kalesi'nin alınmasıyla Türklerin Rumeli ve Avrupa topraklarına ilk adımı atması." },
      { year: "1389", event: "I. Kosova Meydan Muharebesi ile Balkanlar'da Türk hakimiyetinin kırılmaz hale gelmesi." },
      { year: "1402", event: "Ankara Savaşı ve 11 yıl sürecek Fetret Devri'nin başlaması." }
    ],
    continuity: "Fetret Devri'ni atlatarak daha güçlü teşkilatlanan Osmanlı, II. Mehmed'in tahta çıkışıyla dünya tarihini değiştirecek İstanbul'un fethine yürüyecektir."
  },
  {
    id: "istanbulun-fethi-ve-yukselis",
    order: 12,
    periodBadge: "1451 — 1520",
    title: "İstanbul'un Fethi ve Cihan Devleti",
    subtitle: "Çağ Kapatıp Çağ Açan Dönüm Noktası",
    tagline: "'Ya ben İstanbul'u alırım, ya İstanbul beni!' Fatih'in azmi ve dehasıyla Doğu Roma tarihe karıştı.",
    lead: "21 yaşındaki II. Mehmed, gemileri karadan Haliç'e indirip Şahi toplarıyla kadim Bizans surlarını aşarak 29 Mayıs 1453'te İstanbul'u fethetti. Doğu Roma İmparatorluğu sona erdi, Orta Çağ kapandı ve Osmanlı Devleti bir cihan imparatorluğuna dönüştü. Ayasofya fethin sembolü, Topkapı Sarayı ise dünyanın yönetim merkezi oldu.",
    geography: {
      focus: "balkans-anatolia-aegean",
      regionName: "İstanbul, Boğazlar, Mora, Karadeniz Havzası ve Kırım",
      capitalOrCenter: "Konstantiniyye / İstanbul (Payitaht)",
      territoryPath: "M 180,220 Q 240,210 320,240 Q 300,320 200,310 Q 160,260 180,220 Z",
      centerCoords: { x: 235, y: 260 },
      routes: [
        { from: { x: 220, y: 250 }, to: { x: 240, y: 260 }, label: "1453 İstanbul Kuşatması ve Fethi" },
        { from: { x: 240, y: 260 }, to: { x: 290, y: 200 }, label: "1475 Kırım'ın Fethi ve Karadeniz Türk Gölü" }
      ]
    },
    rulers: [
      { name: "Fatih Sultan Mehmed", title: "Cihan Padişahı (1451 — 1481)", note: "7 dil bilen, rönesans aydını, Şahi toplarını bizzat tasarlayan, İstanbul'u fethedip Karadeniz ve Ege'yi denetim altına alan çağ açıcı deha." },
      { name: "II. Bayezid", title: "Sultan-ı Veli (1481 — 1512)", note: "Endülüs'ten sürülen yüz binlerce Musevi ve Müslümanı Osmanlı gemileriyle kurtaran, Edirne Darüşşifası'nı kuran adil hükümdar." },
      { name: "Yavuz Sultan Selim", title: "8 Yıla 80 Yıllık İş Sığdıran Sultan (1512 — 1520)", note: "Çaldıran, Mercidabık ve Ridaniye zaferleriyle Memlûk Devleti'ne son verip kutsal emanetleri ve Hilafeti İstanbul'a getiren fatih." }
    ],
    culture: {
      art: "Topkapı Sarayı mimarisi, Ali Kuşçu matematik ve astronomi ekolü, Bellini'nin Fatih portresi, Fatih Kanunnamesi.",
      lifestyle: "Hoşgörüye dayalı millet sistemi, Ortodoks patrikhanesinin himayesi, Enderun mektebi.",
      legacy: "İstanbul'un ebedi Türk payitahtı oluşu, Doğu Akdeniz ticaret tekelinin Osmanlı'ya geçmesi.",
      symbols: ["Ayasofya-i Kebir", "Şahi Topu", "Tuğra", "Topkapı Bâbüsselâm"]
    },
    artifacts: [
      {
        name: "Fatih Sultan Mehmed Ahidnâmesi",
        century: "1463",
        location: "Bosna Fojnica Fransisken Manastırı",
        desc: "Fethin ardından Bosna Hristiyanlarına inanç ve ibadet özgürlüğü tanıyan, dünyanın en eski insan hakları beyannamelerinden biri."
      },
      {
        name: "Piri Reis'in Dünya Haritası",
        century: "1513",
        location: "Topkapı Sarayı Müzesi",
        desc: "Ceylan derisi üzerine çizilen, Güney Amerika ve Antarktika kıyılarını şaşırtıcı bir doğrulukla gösteren kartografya şaheseri."
      }
    ],
    subBranches: [
      {
        name: "Kırım Hanlığı (Giras Hanedanı)",
        period: "1441 — 1783",
        region: "Kırım, Bahçesaray ve Deşt-i Kıpçak",
        desc: "Cengiz Han soyundan gelen, Osmanlı ile stratejik ittifak kurarak kuzey steplerini koruyan Türk süvari gücü."
      },
      {
        name: "Enderun ve İlmiye Teşkilatı",
        period: "15. — 19. Yüzyıl",
        region: "Topkapı Sarayı",
        desc: "Hangi dinden veya ırktan olursa olsun yetenekli gençleri dünya çapında vezirler, hattatlar ve komutanlar yapan meritokratik mektep."
      }
    ],
    milestones: [
      { year: "29 Mayıs 1453", event: "İstanbul'un fethi; Doğu Roma'nın yıkılışı ve Orta Çağ'ın sona ermesi." },
      { year: "1475", event: "Gedik Ahmed Paşa'nın Kırım'ı fethi ve Karadeniz'in bir 'Türk Gölü' haline gelmesi." },
      { year: "1517", event: "Ridaniye Zaferi ile Mısır'ın fethi, Kutsal Emanetlerin ve Hilafet makamının İstanbul'a intikali." }
    ],
    continuity: "Yavuz'un hazineyi ağzına kadar doldurup teslim ettiği imparatorluk, oğlu Kanuni Sultan Süleyman döneminde üç kıtada gücünün zirvesine ulaşacaktır."
  },
  {
    id: "klasik-osmanli-donemi",
    order: 13,
    periodBadge: "1520 — 1683",
    title: "Klasik Osmanlı Dönemi",
    subtitle: "Muhteşem Süleyman, Mimar Sinan ve Üç Kıtada Cihan Hakimiyeti",
    tagline: "Viyana kapılarından Basra Körfezi'ne, Kırım'dan Cezayir'e uzanan adalet ve nizam asrı.",
    lead: "Kanuni Sultan Süleyman devrinde Osmanlı İmparatorluğu askeri, hukuki, mimari ve idari açıdan cihanın zirvesine oturmuştur. Mohaç Meydan Muharebesi 2 saatte kazanılmış, Preveze ile Akdeniz bir Türk gölüne dönmüş, Koca Sinan taşları konuşturarak Süleymaniye ve Selimiye ile silueti ebedileştirmiştir.",
    geography: {
      focus: "three-continents",
      regionName: "Orta Avrupa, Balkanlar, Kırım, Anadolu, Orta Doğu ve Kuzey Afrika",
      capitalOrCenter: "İstanbul (Dersaadet)",
      territoryPath: "M 140,190 Q 300,160 440,240 Q 420,380 260,390 Q 140,360 140,280 Z",
      centerCoords: { x: 260, y: 280 },
      routes: [
        { from: { x: 240, y: 260 }, to: { x: 170, y: 210 }, label: "1526 Mohaç ve Viyana Sefer Kolu" },
        { from: { x: 240, y: 270 }, to: { x: 190, y: 340 }, label: "1538 Preveze Deniz Zaferi" }
      ]
    },
    rulers: [
      { name: "Kanuni Sultan Süleyman", title: "Muhteşem Kanuni (1520 — 1566)", note: "46 yıllık saltanatında adaleti kanunlarla sistemleştiren, imparatorluğu gücünün zirvesine ulaştıran cihan padişahı." },
      { name: "Barbaros Hayreddin Paşa", title: "Kaptan-ı Derya", note: "Preveze Zaferi ile Haçlı donanmasını bozguna uğratıp Akdeniz'i bir Osmanlı gölü kılan efsanevi denizci." },
      { name: "Mimar Sinan", title: "Ser Mimârân-ı Cihan", note: "Çıraklık (Şehzade), Kalfalık (Süleymaniye) ve Ustalık (Selimiye) eserleriyle dünya mimarlık tarihinin zirvesi." },
      { name: "Sokollu Mehmed Paşa", title: "Büyük Sadrazam", note: "Üç padişaha vezirlik yapan; Süveyş ve Don-Volga kanalı projeleriyle küresel jeopolitiği yüzyıllar önce planlayan devlet adamı." }
    ],
    culture: {
      art: "Mimar Sinan eserleri, İznik çinileri (firuze ve mercan kırmızısı), Baki ve Fuzuli divan şiiri, Şeyh Hamdullah hat ekolü.",
      lifestyle: "Vakıf medeniyeti: Aşevleri, hastaneler, kütüphaneler ve köprülerin vakıflarca idare edilmesi.",
      legacy: "Balkanlar'da ve Orta Doğu'da yüzyıllarca sürecek etnik ve dini barış (Pax Ottomanica).",
      symbols: ["Selimiye Kubbesi", "Kanunname", "Barbaros Sancağı", "Hilal ve Yıldız"]
    },
    artifacts: [
      {
        name: "Edirne Selimiye Camii",
        century: "1575",
        location: "Edirne (UNESCO)",
        desc: "Mimar Sinan'ın 'Ustalık eserim' dediği, Ayasofya'yı aşan tek kubbesi ve dört köşedeki ince minareleriyle dünya mimarlık anıtı."
      },
      {
        name: "Kanuni Sultan Süleyman Kılıcı ve Zırhı",
        century: "16. Yüzyıl",
        location: "Topkapı Sarayı Silah Koleksiyonu",
        desc: "Üzerine Kur'an ayetleri ve adalet duaları kakılmış, çelik dövme sanatının zirvesini gösteren padişah teçhizatı."
      }
    ],
    subBranches: [
      {
        name: "Garp Ocakları (Cezayir, Tunus, Trablusgarp)",
        period: "16. — 19. Yüzyıl",
        region: "Kuzey Afrika ve Batı Akdeniz",
        desc: "Turgut Reis, Kılıç Ali Paşa ve leventlerin Atlas Okyanusu'na kadar uzanan deniz hakimiyeti."
      },
      {
        name: "Erdel, Eflak ve Boğdan Voyvodalıkları",
        period: "16. — 18. Yüzyıl",
        region: "Romanya ve Macaristan Sınırları",
        desc: "İçişlerinde serbest, Osmanlı himayesinde Avrupa ile denge kuran stratejik tampon beylikler."
      }
    ],
    milestones: [
      { year: "1526", event: "Mohaç Meydan Muharebesi: Macar Krallığı'nın 2 saatte mağlup edilmesi." },
      { year: "1538", event: "Preveze Deniz Zaferi: Barbaros'un Andrea Doria komutasındaki birleşik Haçlı filosunu imhası." },
      { year: "1683", event: "II. Viyana Kuşatması ve Osmanlı ordusunun Avrupa'da duraksama ve savunma evresine girmesi." }
    ],
    continuity: "1683 Viyana bozgunu ve Karlofça Antlaşması, devleti askeri zaferlerden iç modernleşme ve diplomatik dönüşüm arayışına yöneltecektir."
  },
  {
    id: "donusum-ve-modernlesme",
    order: 14,
    periodBadge: "1699 — 1839",
    title: "Dönüşüm ve Modernleşme",
    subtitle: "Lale Devri, Nizam-ı Cedid ve Yenileşme Hamleleri",
    tagline: "Avrupa'nın bilim ve tekniğiyle yüzleşme; matbaanın gelişi, ilk elçilikler ve yeni ordunun doğuşu.",
    lead: "Karlofça ile sınırların genişlemesi durduğunda, Osmanlı aydınları ve padişahları dünyadaki değişimi kavramaya odaklandı. İbrahim Müteferrika ilk Türk matbaasını kurdu, Lale Devri ile sanat ve tercüme hareketi başladı. III. Selim Nizam-ı Cedid ile modern orduyu ve daimi elçilikleri kurarken, II. Mahmud Yeniçeri Ocağı'nı kaldırarak modern devlet teşkilatını inşa etti.",
    geography: {
      focus: "balkans-anatolia-egypt",
      regionName: "İstanbul, Balkan Cephesi, Mısır ve Boğazlar",
      capitalOrCenter: "İstanbul",
      territoryPath: "M 170,220 Q 280,210 380,260 Q 340,360 220,340 Q 160,300 170,220 Z",
      centerCoords: { x: 250, y: 270 },
      routes: [
        { from: { x: 240, y: 260 }, to: { x: 180, y: 220 }, label: "Avrupa Daimi Elçilikleri Ağı" }
      ]
    },
    rulers: [
      { name: "III. Selim", title: "Modernleşmenin Öncüsü (1789 — 1807)", note: "Bestekâr ve reformcu padişah; Nizam-ı Cedid ordusunu kurmuş, Paris ve Londra'da ilk daimi sefaretleri açmıştır." },
      { name: "II. Mahmud", title: "Modern Devletin Kurucusu (1808 — 1839)", note: "1826'da Vaka-i Hayriye ile Yeniçeri Ocağı'nı kaldırıp modern bakanlıkları, Mekteb-i Tıbbiye ve Harbiye'yi kuran padişah." },
      { name: "İbrahim Müteferrika", title: "İlk Türk Matbaacısı", note: "1727'de kurduğu basımevi ile lügatler, tarih ve coğrafya kitapları basarak Türk aydınlanmasının fitilini ateşleyen bilgin." }
    ],
    culture: {
      art: "Osmanlı Baroğu ve Rokokosu, Nuruosmaniye Camii, III. Ahmed Çeşmesi, Nedim divan şiiri.",
      lifestyle: "Matbaanın yaygınlaşması, modern kılık-kıyafet reformu, ilk resmi gazete (Takvim-i Vekayi).",
      legacy: "Modern bürokrasi, Harbiye ve Tıbbiye ile yetişen Cumhuriyet'in kurucu kadrolarının altyapısı.",
      symbols: ["III. Ahmed Çeşmesi", "Müteferrika Matbaası", "Takvim-i Vekayi", "Nizam-ı Cedid Bayrağı"]
    },
    artifacts: [
      {
        name: "İbrahim Müteferrika Matbaa Baskıları (Kitab-ı Cihannüma)",
        century: "1732",
        location: "İstanbul",
        desc: "Kâtip Çelebi'nin dünya coğrafyasını haritalarla anlatan, matbaada basılan ilk resimli başyapıt eseri."
      },
      {
        name: "Nuruosmaniye Camii ve Külliyesi",
        century: "1755",
        location: "Çemberlitaş, İstanbul",
        desc: "Klasik Osmanlı çizgileri ile Avrupa barok sanatının sentezlendiği modernleşme devri mimarisinin incisi."
      }
    ],
    subBranches: [
      {
        name: "Mısır Hidivliği (Kavalalı Mehmed Ali Paşa)",
        period: "1805 — 1914",
        region: "Mısır, Sudan ve Şam",
        desc: "Mısır'da güçlü bir sanayi ve ordu kurarak Osmanlı merkeziyle rekabet eden fakat modernleşmeyi hızlandıran hanedan."
      },
      {
        name: "Nizam-ı Cedid Ordusu",
        period: "1793 — 1807",
        region: "Levend ve Üsküdar Kışlaları",
        desc: "Fransız usulü eğitilip donatılan ve Akka Kalesi önünde Napolyon Bonapart'ı hezimete uğratan modern Türk birliği."
      }
    ],
    milestones: [
      { year: "1727", event: "İlk resmi Türk matbaasının İbrahim Müteferrika tarafından açılması." },
      { year: "1798", event: "Akka Savunması: Cezzar Ahmed Paşa komutasındaki Nizam-ı Cedid'in Napolyon'u durdurması." },
      { year: "1826", event: "Vaka-i Hayriye: Yeniçeri Ocağı'nın kaldırılarak Asakir-i Mansure-i Muhammediye ordusunun kurulması." }
    ],
    continuity: "II. Mahmud'un bürokratik ve askeri reformları, 1839'da Gülhane Parkı'nda okunacak Tanzimat Fermanı'nın hukuki zeminini hazırlamıştır."
  },
  {
    id: "tanzimat-ve-mesrutiyet",
    order: 15,
    periodBadge: "1839 — 1918",
    title: "Tanzimat, Meşrutiyet ve Son Dönem",
    subtitle: "Hukuk Devleti, Çanakkale Direnişi ve İmparatorluğun Sonu",
    tagline: "Fermanlar, meclisler, fikir cereyanları; Çanakkale'de 'Geçilmez' yazan kahramanlık destanı.",
    lead: "Gülhane Hatt-ı Hümayunu ile kanun önünde eşitlik ilan edildi, 1876'da Kanun-i Esasi ile ilk anayasal meşrutiyet meclisi açıldı. Namık Kemal'in hürriyet haykırışları, II. Abdülhamid devrinin demiryolları ve eğitim hamleleri bu döneme damga vurdu. I. Dünya Savaşı'nın çetin cephelerinde, bilhassa Çanakkale'de Türk milleti bağımsızlık ateşini yaktı.",
    geography: {
      focus: "balkans-anatolia-mideast",
      regionName: "İstanbul, Çanakkale Boğazı, Balkanlar, Hicaz Demiryolu Hattı ve Kafkaslar",
      capitalOrCenter: "İstanbul",
      territoryPath: "M 200,240 Q 280,230 360,280 Q 320,350 240,340 Q 190,290 200,240 Z",
      centerCoords: { x: 255, y: 275 },
      routes: [
        { from: { x: 240, y: 265 }, to: { x: 215, y: 275 }, label: "1915 Çanakkale Boğazı Savunma Hattı" },
        { from: { x: 240, y: 265 }, to: { x: 310, y: 360 }, label: "Hicaz Demiryolu Hattı" }
      ]
    },
    rulers: [
      { name: "Sultan II. Abdülhamid", title: "34 Yıllık Denge Siyaseti (1876 — 1909)", note: "Hicaz Demiryolu'nu inşa ettiren, Anadolu'da binlerce rüştiye ve idadi açarak modern eğitimin mimarı olan padişah." },
      { name: "Mustafa Reşid Paşa", title: "Tanzimat'ın Mimarı", note: "1839'da Gülhane Hatt-ı Hümayunu'nu ilan ederek padişahın yetkilerini kanunla sınırlayan öncü sadrazam." },
      { name: "Yarbay Mustafa Kemal", title: "Anafartalar Kahramanı (1915)", note: "'Ben size taarruzu değil, ölmeyi emrediyorum!' emriyle Conkbayırı ve Anafartalar'da düşmanı durdurup milletin kalbine giren dahi asker." },
      { name: "Cevat (Çobanlı) & Seyit Onbaşı", title: "18 Mart Boğaz Kahramanları", note: "276 kiloluk mermiyi sırtlayarak Ocean zırhlısını vuran ve Boğaz'ı düşman donanmasına kapatan efsaneler." }
    ],
    culture: {
      art: "Osman Hamdi Bey (Kaplumbağa Terbiyecisi, Sanayi-i Nefise Mektebi), Şinasi, Namık Kemal hürriyet edebiyatı.",
      lifestyle: "İlk anayasa (Kanun-i Esasi), Mebusan Meclisi, Darülfünun (Üniversite) ve telgraf hatları ağı.",
      legacy: "Milli mücadeleyi yönetecek kurmay kadronun, öğretmenlerin, doktorların ve subayların yetiştiği çağ.",
      symbols: ["Çanakkale Şehitliği", "Hicaz Lokomotifi", "Kaplumbağa Terbiyecisi", "Kanun-i Esasi"]
    },
    artifacts: [
      {
        name: "Osman Hamdi Bey — Kaplumbağa Terbiyecisi",
        century: "1906",
        location: "Pera Müzesi, İstanbul",
        desc: "Türk müzeciliğinin kurucusu Osman Hamdi Bey'in sabır, aydınlanma ve modernleşmeyi simgeleyen dünyaca ünlü tablosu."
      },
      {
        name: "Çanakkale Seddülbahir & Conkbayırı Siper Teçhizatı",
        century: "1915",
        location: "Çanakkale Destanı Tanıtım Merkezi",
        desc: "Havada birbirine çarpan mermiler, Mehmetçiğin çarıkları ve kırık süngüleriyle bağımsızlık azminin somut tanıkları."
      }
    ],
    subBranches: [
      {
        name: "Genç Osmanlılar ve Jön Türk Hareketi",
        period: "1865 — 1908",
        region: "İstanbul, Paris, Cenevre",
        desc: "Namık Kemal, Ziya Paşa ve Mithat Paşa'nın meşrutiyet, meclis ve hürriyet için yürüttüğü fikir mücadelesi."
      },
      {
        name: "Hicaz Demiryolu Mühendisliği",
        period: "1900 — 1908",
        region: "Şam, Amman, Medine",
        desc: "Yalnızca Müslümanların bağışlarıyla inşa edilen, gürültü olmasın diye Medine yakınlarında raylarına keçe döşenen medeniyet projesi."
      }
    ],
    milestones: [
      { year: "3 Kasım 1839", event: "Tanzimat Fermanı'nın okunmasıyla hukuk devletine ilk adımın atılması." },
      { year: "23 Aralık 1876", event: "I. Meşrutiyet'in ilanı ve Türk tarihinin ilk anayasası Kanun-i Esasi'nin yürürlüğe girmesi." },
      { year: "18 Mart 1915", event: "Çanakkale Deniz Zaferi ile İtilaf donanmasının Boğaz'a gömülmesi." },
      { year: "30 Ekim 1918", event: "Mondros Mütarekesi ile Osmanlı ordularının terhis edilmesi ve vatanın işgale uğraması." }
    ],
    continuity: "Mondros'un karanlığı içinde çöken imparatorluğun küllerinden, Mustafa Kemal Paşa'nın liderliğinde Türk milletinin topyekun Milli Mücadelesi doğacaktır."
  },
  {
    id: "milli-mucadele",
    order: 16,
    periodBadge: "1919 — 1923",
    title: "Millî Mücadele",
    subtitle: "Samsun'dan İzmir'e: 'Ya İstiklal Ya Ölüm!'",
    tagline: "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.",
    lead: "19 Mayıs 1919'da Mustafa Kemal Paşa'nın Samsun'a ayak basmasıyla yakılan meşale; Havza, Amasya, Erzurum ve Sivas kongreleriyle milli bir iradeye dönüştü. 23 Nisan 1920'de Ankara'da TBMM açılarak egemenlik millete verildi. İnönü'de, Sakarya'da ve Başkomutanlık Meydan Muharebesi'nde dünyanın en meşru kurtuluş savaşı zaferle taçlandırıldı.",
    geography: {
      focus: "turkey-war-independence",
      regionName: "Samsun, Amasya, Erzurum, Sivas, Ankara, Sakarya, Dumlupınar ve İzmir",
      capitalOrCenter: "Ankara (Milli Mücadele Karargâhı)",
      territoryPath: "M 200,270 Q 280,260 360,270 Q 340,320 260,330 Q 190,310 200,270 Z",
      centerCoords: { x: 270, y: 290 },
      routes: [
        { from: { x: 240, y: 260 }, to: { x: 275, y: 265 }, label: "19 Mayıs 1919 Samsun Çıkışı" },
        { from: { x: 275, y: 265 }, to: { x: 340, y: 275 }, label: "Erzurum ve Sivas Kongreleri Hattı" },
        { from: { x: 260, y: 290 }, to: { x: 210, y: 290 }, label: "Büyük Taarruz: 'Ordular İlk Hedefiniz Akdenizdir!'" }
      ]
    },
    rulers: [
      { name: "Mustafa Kemal Paşa (Atatürk)", title: "TBMM Başkanı ve Başkomutan", note: "Milli Mücadele'nin dahi önderi, Sakarya'da 'Hattı müdafaa yoktur sathı müdafaa vardır' doktriniyle emperyalizmi dize getiren gazi mareşal." },
      { name: "İsmet Paşa (İnönü)", title: "Batı Cephesi Komutanı", note: "I. ve II. İnönü'de 'Milletin makus talihini yenen', Mudanya ve Lozan'da Türkiye'nin tapusunu söke söke alan diplomat-asker." },
      { name: "Fevzi Paşa (Çakmak)", title: "Genelkurmay Başkanı", note: "Milli Mücadele'nin ikinci Mareşali, askeri lojistiğin ve Büyük Taarruz planlarının usta kurmayı." },
      { name: "Kâzım Karabekir Paşa", title: "Doğu Cephesi Komutanı", note: "Gümrü Antlaşması ile Doğu sınırını çizen, Kars'ı ve yetim çocukları bağrına basan 'Albayrak' kahramanı." }
    ],
    culture: {
      art: "Mehmet Akif Ersoy — İstiklal Marşı, Halide Edib Adıvar (Ateşten Gömlek), Ruhi Arel tabloları.",
      lifestyle: "Kuvâ-yi Milliye ruhu, İnebolu'dan kağnılarla cephane taşıyan Şerife Bacılar ve Türk kadınlarının destanı.",
      legacy: "Sömürge altındaki tüm mazlum milletlere örnek olan ilk muzaffer anti-emperyalist kurtuluş savaşı.",
      symbols: ["İstiklal Madalyası", "İlk Meclis Binası", "Kağnı ve Mermi", "Kalpak"]
    },
    artifacts: [
      {
        name: "İstiklal Marşı Orijinal Elyazması",
        century: "1921",
        location: "TBMM Müzesi & Askeri Müze",
        desc: "Mehmet Akif Ersoy'un Taceddin Dergâhı'nda orduya ve millete hitaben kaleme aldığı bağımsızlık andı."
      },
      {
        name: "Atatürk'ün Kocatepe Seyir Dürbünü ve Çizmeleri",
        century: "1922",
        location: "Anıtkabir Müzesi",
        desc: "26 Ağustos 1922 sabahı Kocatepe sırtlarında Büyük Taarruz emrinin verildiği tarihi anın eşyaları."
      }
    ],
    subBranches: [
      {
        name: "Kuvâ-yi Milliye ve Müdafaa-i Hukuk Cemiyetleri",
        period: "1918 — 1921",
        region: "Tüm Anadolu ve Trakya",
        desc: "İşgallere karşı halkın kendi bağrından çıkardığı, düzenli ordu kurulana dek düşmanı oyalayan sivil direniş gücü."
      },
      {
        name: "İstiklal Yolu Lojistiği (İnebolu — Ankara)",
        period: "1919 — 1922",
        region: "İnebolu, Kastamonu, Çankırı, Ankara",
        desc: "Denizden kaçırılan cephanelerin kağnılarla kar kış altında cepheye taşındığı kutsal lojistik hattı."
      }
    ],
    milestones: [
      { year: "19 Mayıs 1919", event: "Mustafa Kemal Paşa'nın Samsun'a çıkışı ve milli direnişin başlaması." },
      { year: "23 Nisan 1920", event: "Ankara'da Türkiye Büyük Millet Meclisi'nin açılması." },
      { year: "13 Eylül 1921", event: "22 gün 22 gece süren Sakarya Meydan Muharebesi zaferi." },
      { year: "30 Ağustos 1922", event: "Büyük Taarruz ve Başkomutanlık Meydan Muharebesi ile vatanın düşmandan temizlenmesi." },
      { year: "24 Temmuz 1923", event: "Lozan Barış Antlaşması ile Türkiye Cumhuriyeti'nin bağımsızlığının tüm dünyaca tescili." }
    ],
    continuity: "Askeri zafer kazanılmış, vatan kurtarılmıştır; sırada bu zaferi ebedi kılacak olan en büyük eser vardır: Cumhuriyet!"
  },
  {
    id: "turkiye-cumhuriyeti",
    order: 17,
    periodBadge: "1923 — 1950",
    title: "Türkiye Cumhuriyeti",
    subtitle: "Aydınlanma Devrimi ve Çağdaş Devlet İnşası",
    tagline: "'Egemenlik kayıtsız şartsız milletindir.' Bozkırın ortasında yükselen parlayan Cumhuriyet güneşi.",
    lead: "29 Ekim 1923'te ilan edilen Türkiye Cumhuriyeti, tebaa yerine eşit vatandaşlık bilincini getirdi. Harf Devrimi, Medeni Kanun, kadınlara seçme-seçilme hakkı, demiryolları ve yerli sanayi hamleleriyle Anadolu bir aydınlanma laboratuvarına dönüştü. Atatürk'ün çizdiği 'Muasır medeniyet seviyesinin üzerine çıkma' hedefi devlet felsefesi oldu.",
    geography: {
      focus: "modern-turkey",
      regionName: "Misak-ı Milli Sınırları, Ankara (Başkent), Hatay ve 81 İl",
      capitalOrCenter: "Ankara (Cumhuriyetin Kalbi)",
      territoryPath: "M 190,260 Q 280,250 380,260 Q 360,320 260,330 Q 180,310 190,260 Z",
      centerCoords: { x: 275, y: 285 },
      routes: [
        { from: { x: 275, y: 285 }, to: { x: 230, y: 265 }, label: "Demirağlar Hamlesi (Demiryolu Ağı)" },
        { from: { x: 275, y: 285 }, to: { x: 300, y: 330 }, label: "1939 Hatay'ın Anavatana Katılışı" }
      ]
    },
    rulers: [
      { name: "Gazi Mustafa Kemal Atatürk", title: "İlk Cumhurbaşkanı ve Kurucu Ata (1923 — 1938)", note: "Devrimleriyle Türk milletini çağdaş dünyanın öncü saflarına taşıyan, 'Yurtta barış, dünyada barış' ilkesinin evrensel mimarı." },
      { name: "İsmet İnönü", title: "İkinci Cumhurbaşkanı (1938 — 1950)", note: "Türkiye'yi II. Dünya Savaşı felaketinin yıkımından ustalıkla koruyan ve çok partili demokrasiye geçişi sağlayan devlet adamı." },
      { name: "Vecihi Hürkuş & Nuri Demirağ", title: "Cumhuriyet Sanayisinin Öncüleri", note: "İlk yerli Türk uçaklarını, paraşütlerini ve demiryolu hatlarını tırnaklarıyla inşa eden havacılık ve sanayi kahramanları." }
    ],
    culture: {
      art: "Türk Beşleri (Cemal Reşit Rey vb.), İbrahim Çallı resimleri, Türk Tarih ve Dil Kurumları, Köy Enstitüleri.",
      lifestyle: "Harf İnkılabı, Millet Mektepleri, kadın hakları (1934), laiklik, sanayi fabrikaları (Sümerbank, Şişecam).",
      legacy: "Bölgesinde laik, demokratik, bağımsız ve kurumları köklü tek modern Türk devleti.",
      symbols: ["Güneş Dil Teorisi", "Sümerbank Deseni", "Köy Enstitüsü Feneri", "Anıtkabir"]
    },
    artifacts: [
      {
        name: "Atatürk'ün Nutuk'u (Söylev)",
        century: "1927",
        location: "Ankara",
        desc: "1919'dan 1927'ye dek bir milletin ölüm kalım savaşını ve Cumhuriyet'in doğumunu anlatan eşsiz tarihi belge ve Gençliğe Hitabe."
      },
      {
        name: "Anıtkabir",
        century: "1953 (Tamamlanışı)",
        location: "Rasattepe, Ankara",
        desc: "Hitit, Selçuklu ve Osmanlı mimari çizgilerini modern bir üslupla birleştiren Türk milletinin ebedi hürmetgâhı."
      }
    ],
    subBranches: [
      {
        name: "Köy Enstitüleri Modeli",
        period: "1940 — 1954",
        region: "Anadolu'nun Dört Bir Yanı (21 Enstitü)",
        desc: "Köy çocuklarını öğretmen, ziraatçı, hekim ve müzisyen olarak yetiştiren dünyaca takdir edilen özgün eğitim modeli."
      },
      {
        name: "İlk Sanayi ve Havacılık Hamlesi (Kayseri & Eskişehir)",
        period: "1926 — 1945",
        region: "Kayseri Uçak Fabrikası (TOMTAŞ), Eskişehir",
        desc: "Cumhuriyet'in kendi motorunu, uçağını ve dokumasını ürettiği erken sanayi mucizesi."
      }
    ],
    milestones: [
      { year: "29 Ekim 1923", event: "Türkiye Cumhuriyeti'nin ilanı ve Atatürk'ün ilk Cumhurbaşkanı seçilmesi." },
      { year: "1 Kasım 1928", event: "Yeni Türk Harflerinin Kabulü ve Millet Mektepleri seferberliği." },
      { year: "1934", event: "Türk kadınına milletvekili seçme ve seçilme hakkının birçok Avrupa ülkesinden önce tanınması." },
      { year: "1939", event: "Hatay Devleti Meclisi'nin oybirliğiyle Türkiye Cumhuriyeti'ne katılması." }
    ],
    continuity: "Kurucu ilkeler ve sağlam temeller üzerinde yükselen Cumhuriyet, 20. yüzyılın ikinci yarısında çok partili hayata geçerek günümüz Türkiye'sine bağlanacaktır."
  },
  {
    id: "gunumuz-turkiyesi",
    order: 18,
    periodBadge: "1950 — GÜNÜMÜZ",
    title: "Cumhuriyet Sonrası ve Günümüz",
    subtitle: "Bölgesel Güç, Küresel Vizyon ve Türk Dünyası Birlikteliği",
    tagline: "Kıbrıs Barış Harekâtı'ndan Türk Devletleri Teşkilatı'na, teknolojiden uzaya uzanan çağdaş Türkiye.",
    lead: "Çok partili demokrasi tecrübesiyle olgunlaşan Türkiye; 1974 Kıbrıs Barış Harekâtı ile soydaşlarının hakkını korumuş, sanayi ve teknoloji atılımlarıyla bölgesel bir cazibe merkezine dönüşmüştür. Bugün Türk Devletleri Teşkilatı çatısı altında Asya'dan Avrupa'ya uzanan kardeş cumhuriyetlerle kurulan köprü, bin yıllık tarihin ortak geleceğe yürüyüşüdür.",
    geography: {
      focus: "turkic-world-global",
      regionName: "Türkiye, Kıbrıs, Azerbaycan, Kazakistan, Özbekistan, Kırgızistan ve Türkmenistan",
      capitalOrCenter: "Ankara & Türk Dünyası Başkentleri",
      territoryPath: "M 180,260 Q 320,240 540,250 Q 560,330 360,340 Q 180,330 180,260 Z",
      centerCoords: { x: 340, y: 280 },
      routes: [
        { from: { x: 275, y: 285 }, to: { x: 420, y: 295 }, label: "Bakü-Tiflis-Ceyhan ve Zengezur Koridoru" },
        { from: { x: 275, y: 285 }, to: { x: 520, y: 280 }, label: "Türk Devletleri Teşkilatı Entegrasyon Hattı" }
      ]
    },
    rulers: [
      { name: "Devlet İnsanları & Diplomatlar", title: "Demokrasi ve Barış Hamleleri", note: "Çok partili hayata geçiş, 1974 Kıbrıs Barış Harekâtı (Bülent Ecevit & Necmettin Erbakan) ve çağdaş diplomatik atılımlar." },
      { name: "Rauf Denktaş & Fazıl Küçük", title: "Kuzey Kıbrıs Türk Cumhuriyeti Liderleri", note: "Kıbrıs Türkü'nün varoluş mücadelesine ömrünü adayan efsanevi devlet adamları." },
      { name: "Bilim İnsanları ve Mühendisler", title: "Teknoloji ve Bilim Öncüleri", note: "Nobel ödüllü Aziz Sancar'dan savunma sanayii mühendislerine, uzay araştırmacılarından dünya çapındaki hekimlere uzanan beyin gücü." }
    ],
    culture: {
      art: "Modern Türk edebiyatı (Yaşar Kemal, Nazım Hikmet, Sezai Karakoç), çağdaş sinema ve tiyatro.",
      lifestyle: "Dijital dönüşüm, yüksek teknoloji sanayii, Avrasya enerji koridorları, genç ve dinamik nüfus.",
      legacy: "Bozkırdan başlayan 3000 yıllık yolculuğun; bilimin, hürriyetin ve kardeşliğin ışığında devam eden meşalesi.",
      symbols: ["Türk Devletleri Teşkilatı Bayrağı", "Togg & İHA/SİHA", "Çanakkale 1915 Köprüsü", "Göktürk Uydusu"]
    },
    artifacts: [
      {
        name: "Türk Devletleri Teşkilatı Nahçıvan Anlaşması",
        century: "2009",
        location: "Nahçıvan — İstanbul",
        desc: "Türkiye, Azerbaycan, Kazakistan ve Kırgızistan'ın ortak tarihi ve geleceği kurumsal bir çatı altında birleştirdiği tarihi belge."
      },
      {
        name: "1915 Çanakkale Köprüsü ve Altyapı Şaheserleri",
        century: "2022",
        location: "Çanakkale Boğazı",
        desc: "2023 metrelik orta açıklığıyla dünyanın en uzun asma köprüsü, Cumhuriyet'in 100. yılına ithaf edilen Türk mühendislik gururu."
      }
    ],
    subBranches: [
      {
        name: "Kuzey Kıbrıs Türk Cumhuriyeti (KKTC)",
        period: "1983 — Günümüz",
        region: "Lefkoşa, Gazimağusa, Girne",
        desc: "Doğu Akdeniz'de Türk varlığının ve egemenliğinin vazgeçilmez kalesi olan kardeş cumhuriyet."
      },
      {
        name: "Bağımsız Türk Cumhuriyetleri",
        period: "1991 — Günümüz",
        region: "Azerbaycan, Kazakistan, Özbekistan, Kırgızistan, Türkmenistan",
        desc: "Sovyetler Birliği'nin dağılmasıyla bağımsızlığına kavuşan, kökleri Sakalar ve Göktürklere uzanan kardeş devletler ailesi."
      }
    ],
    milestones: [
      { year: "1950", event: "İlk demokratik iktidar değişimiyle çok partili dönemin kökleşmesi." },
      { year: "20 Temmuz 1974", event: "Kıbrıs Barış Harekâtı ile Ada'da soykırımın önlenmesi ve barışın tesisi." },
      { year: "1991", event: "Kardeş Türk Cumhuriyetlerinin bağımsızlıklarını ilan etmesi ve Türkiye'nin ilk tanıyan ülke oluşu." },
      { year: "2009 — Günümüz", event: "Türk Devletleri Teşkilatı'nın kurulması ve 21. yüzyıl Türk asrı vizyonunun güçlenmesi." }
    ],
    continuity: "Zamanın izinde Sakalar ile başlayan yolculuk, bugün bağımsız Türk cumhuriyetlerinin el ele verdiği köklü bir medeniyet yürüyüşü olarak geleceğe akmaktadır."
  }
];

if (typeof window !== "undefined") {
  window.HISTORICAL_EPOCHS = HISTORICAL_EPOCHS;
}
