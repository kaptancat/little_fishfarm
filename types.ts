

export enum BuildingStatus {
  OWNED = 'OWNED',
  RENTED = 'RENTED'
}

export type Language = 'TR' | 'EN' | 'ZH' | 'FR' | 'DE' | 'EL' | 'AR' | 'HI' | 'ES' | 'PT' | 'RU' | 'AZ';

export interface LanguageMeta {
    code: Language;
    name: string;
    flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
    { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'AZ', name: 'Azərbaycan', flag: '🇦🇿' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'ZH', name: '中国人', flag: '🇨🇳' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'EL', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'PT', name: 'Português', flag: '🇵🇹' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
];

export type Season = 'SPRING' | 'SUMMER' | 'AUTUMN' | 'WINTER';
export type Planet = 'EARTH' | 'MARS' | 'VENUS' | 'JUPITER' | 'SATURN' | 'URANUS' | 'NEPTUNE' | 'MERCURY';

export interface Translation {
  title: string;
  status: string;
  market: string;
  bulldoze: string;
  done: string;
  reset: string;
  floors: string;
  estPop: string;
  perfect: string;
  gameOver: string;
  finalHeight: string;
  newPop: string;
  whatToDo: string;
  rentBtn: string;
  rentDesc: string;
  sellBtn: string;
  sellDesc: string;
  cancelBtn: string;
  marketTitle: string;
  availableFunds: string;
  tabCrane: string;
  tabStyles: string;
  maxLevel: string;
  upgrade: string;
  equip: string;
  equipped: string;
  unlock: string;
  active: string;
  occupiedMsg: string;
  demolishMsg: string;
  resetMsg: string;
  season: string;
  spring: string;
  summer: string;
  autumn: string;
  winter: string;
  build: string;
  tabRocket: string;
  rocketArea: string;
  rocketBody: string;
  rocketModule: string;
  rocketShuttleBody: string;
  rocketShuttleEngine: string;
  rocketShuttleComp: string;
  rocketComplete: string;
  rocketLocked: string;
  rocketSiloMsg: string;
  demolishAction: string;
  marsTitle: string;
  venusTitle: string;
  jupiterTitle: string;
  saturnTitle: string;
  uranusTitle: string;
  neptuneTitle: string;
  mercuryTitle: string;
  travelToMars: string;
  returnToEarth: string;
  journeyToMars: string;
  journeyToVenus: string;
  journeyToJupiter: string;
  journeyToSaturn: string;
  journeyToUranus: string;
  journeyToNeptune: string;
  journeyToMercury: string;
  arrivalTime: string;
  landingAvailable: string;
  landOnMars: string;
  landOnVenus: string;
  landOnJupiter: string;
  landOnSaturn: string;
  landOnUranus: string;
  landOnNeptune: string;
  landOnMercury: string;
  popReqMars: string;
  popReqVenus: string;
  popReqJupiter: string;
  popReqSaturn: string;
  popReqUranus: string;
  popReqNeptune: string;
  popReqMercury: string;
  menuPlay: string;
  menuSave: string;
  menuAbout: string;
  menuReset: string;
  aboutText: string;
  gameSaved: string;
  settings: string;
  musicVol: string;
  sfxVol: string;
  help: string;
  helpTitle: string;
  helpText: string;
  adminMode: string;
  adminActive: string;
  autoPilot: string;
  rocketHp: string;
  launchFailed: string;
  stallWarning: string;
  puzzleTitle: string;
  puzzleTime: string;
  puzzleSolved: string;
  puzzleFailed: string;
  penaltyMsg: string;
  puzzleInstructions: string;
  language: string;
}

const baseTranslations: Translation = {
    title: "Build your tower universe",
    status: "Status",
    market: "Market",
    bulldoze: "Bulldoze",
    done: "Done",
    reset: "Reset City",
    floors: "Floors",
    estPop: "Est. Pop",
    perfect: "PERFECT!",
    gameOver: "Construction Finished",
    finalHeight: "Final Height",
    newPop: "New Population",
    whatToDo: "What would you like to do?",
    rentBtn: "RENT IT OUT",
    rentDesc: "Earn passive income",
    sellBtn: "SELL NOW",
    sellDesc: "Instant cash",
    cancelBtn: "Cancel",
    marketTitle: "Market",
    availableFunds: "Funds:",
    tabCrane: "Crane",
    tabStyles: "Styles",
    maxLevel: "MAX",
    upgrade: "Upgrade",
    equip: "Equip",
    equipped: "Equipped",
    unlock: "Unlock",
    active: "ACTIVE",
    occupiedMsg: "Area occupied.",
    demolishMsg: "Demolish?",
    resetMsg: "Reset all progress?",
    season: "Season",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    winter: "Winter",
    build: "Build",
    tabRocket: "Space",
    rocketArea: "Pad",
    rocketBody: "Hull",
    rocketModule: "Module",
    rocketShuttleBody: "Shuttle",
    rocketShuttleEngine: "Engine",
    rocketShuttleComp: "Computer",
    rocketComplete: "READY",
    rocketLocked: "LOCKED",
    rocketSiloMsg: "Rocket Silo",
    demolishAction: "DEMOLISH!",
    marsTitle: "Mars Colony",
    venusTitle: "Venus Base",
    jupiterTitle: "Jupiter Station",
    saturnTitle: "Saturn Rings",
    uranusTitle: "Uranus Outpost",
    neptuneTitle: "Neptune Deep",
    mercuryTitle: "Mercury Crater",
    travelToMars: "Go to Mars",
    returnToEarth: "Return Earth",
    journeyToMars: "TO MARS",
    journeyToVenus: "TO VENUS",
    journeyToJupiter: "TO JUPITER",
    journeyToSaturn: "TO SATURN",
    journeyToUranus: "TO URANUS",
    journeyToNeptune: "TO NEPTUNE",
    journeyToMercury: "TO MERCURY",
    arrivalTime: "Arrival:",
    landingAvailable: "Orbit",
    landOnMars: "Land Mars",
    landOnVenus: "Land Venus",
    landOnJupiter: "Land Jupiter",
    landOnSaturn: "Land Saturn",
    landOnUranus: "Land Uranus",
    landOnNeptune: "Land Neptune",
    landOnMercury: "Land Mercury",
    popReqMars: "Need 500 Pop",
    popReqVenus: "Need 2000 Pop",
    popReqMercury: "Need 3500 Pop",
    popReqJupiter: "Need 5000 Pop",
    popReqSaturn: "Need 10k Pop",
    popReqUranus: "Need 25k Pop",
    popReqNeptune: "Need 50k Pop",
    menuPlay: "PLAY",
    menuSave: "SAVE",
    menuAbout: "ABOUT",
    menuReset: "RESET",
    aboutText: "Build towers, grow population, explore space.",
    gameSaved: "Saved!",
    settings: "Settings",
    musicVol: "Music",
    sfxVol: "SFX",
    help: "Help",
    helpTitle: "Guide",
    helpText: "How to Play:\n\n1. BUILDING: Click an empty slot to build a tower. Drop blocks perfectly to gain Population combos.\n\n2. ECONOMY: Rent towers for passive income or Sell them for quick cash.\n\n3. SPACE TRAVEL:\n   - Go to Market > Space tab.\n   - Buy rocket parts (Hull, Engine, etc.).\n   - Once complete, click the Rocket Silo (Slot 16) to launch.\n   - Steer your rocket in the mini-game to reach orbit.\n   - If you have enough Population (e.g., 500 for Mars), you can land and build a new colony!\n\n4. PROGRESS: Upgrade your crane and unlock new styles in the Market.",
    adminMode: "Admin",
    adminActive: "ADMIN ACTIVE",
    autoPilot: "Auto-Pilot",
    rocketHp: "Integrity",
    launchFailed: "FAILED",
    stallWarning: "STALL",
    puzzleTitle: "Puzzle",
    puzzleTime: "Time",
    puzzleSolved: "Solved!",
    puzzleFailed: "Failed!",
    penaltyMsg: "Penalty Applied",
    puzzleInstructions: "Solve the puzzle",
    language: "Language"
};

export const TRANSLATIONS: Record<Language, Translation> = {
  EN: { ...baseTranslations },
  TR: {
    ...baseTranslations,
    title: "Build your tower universe",
    status: "Statü",
    market: "Market",
    bulldoze: "Yıkım Modu",
    done: "Bitti",
    reset: "Şehri Sıfırla",
    floors: "Kat",
    estPop: "Tahmini Nüfus",
    perfect: "MÜKEMMEL!",
    gameOver: "İnşaat Tamamlandı",
    finalHeight: "Final Yüksekliği",
    newPop: "Yeni Nüfus",
    whatToDo: "Bu bina ile ne yapmak istersin?",
    rentBtn: "KİRAYA VER",
    rentDesc: "Zamanla pasif gelir sağlar",
    sellBtn: "HEMEN SAT",
    sellDesc: "Anında nakit para",
    cancelBtn: "İptal Et",
    marketTitle: "İnşaat Pazarı",
    availableFunds: "Kasa:",
    tabCrane: "Vinç",
    tabStyles: "Stiller",
    maxLevel: "MAKS",
    upgrade: "Geliştir",
    equip: "Kullan",
    equipped: "Seçili",
    unlock: "Aç",
    active: "AKTİF",
    occupiedMsg: "Bu alan dolu.",
    demolishMsg: "Yıkılsın mı?",
    resetMsg: "Sıfırlansın mı?",
    season: "Mevsim",
    spring: "İlkbahar",
    summer: "Yaz",
    autumn: "Sonbahar",
    winter: "Kış",
    build: "İnşa Et",
    tabRocket: "Uzay",
    rocketArea: "Rampa",
    rocketBody: "Gövde",
    rocketModule: "Modül",
    rocketShuttleBody: "Mekik",
    rocketShuttleEngine: "Motor",
    rocketShuttleComp: "Bilgisayar",
    rocketComplete: "HAZIR",
    rocketLocked: "KİLİTLİ",
    rocketSiloMsg: "Roket Silosu",
    demolishAction: "YIK!",
    marsTitle: "Mars Kolonisi",
    venusTitle: "Venüs Üssü",
    mercuryTitle: "Merkür Üssü",
    jupiterTitle: "Jüpiter İstasyonu",
    saturnTitle: "Satürn Halkaları",
    uranusTitle: "Uranüs Buzulu",
    neptuneTitle: "Neptün Okyanusu",
    journeyToMars: "MARS YOLCULUĞU",
    journeyToVenus: "VENÜS YOLCULUĞU",
    journeyToMercury: "MERKÜR YOLCULUĞU",
    journeyToJupiter: "JÜPİTER YOLCULUĞU",
    journeyToSaturn: "SATÜRN YOLCULUĞU",
    journeyToUranus: "URANÜS YOLCULUĞU",
    journeyToNeptune: "NEPTÜN YOLCULUĞU",
    landingAvailable: "Yörüngeye Girildi",
    landOnMars: "Mars'a İniş",
    landOnVenus: "Venüs'e İniş",
    landOnMercury: "Merkür'e İniş",
    landOnJupiter: "Jüpiter'e İniş",
    landOnSaturn: "Satürn'e İniş",
    landOnUranus: "Uranüs'e İniş",
    landOnNeptune: "Neptün'e İniş",
    popReqMars: "500 Nüfus Gerekli",
    popReqVenus: "2000 Nüfus Gerekli",
    popReqMercury: "3500 Nüfus Gerekli",
    popReqJupiter: "5000 Nüfus Gerekli",
    popReqSaturn: "10.000 Nüfus Gerekli",
    popReqUranus: "25.000 Nüfus Gerekli",
    popReqNeptune: "50.000 Nüfus Gerekli",
    menuPlay: "OYNA",
    menuSave: "KAYDET",
    menuAbout: "HAKKINDA",
    menuReset: "SIFIRLA",
    aboutText: "Kuleler dik, nüfusu büyüt, uzaya açıl.",
    gameSaved: "Oyun Kaydedildi!",
    settings: "Ayarlar",
    musicVol: "Müzik",
    sfxVol: "Ses",
    help: "Yardım",
    helpTitle: "Oyun Rehberi",
    helpText: "NASIL OYNANIR?\n\n1. İNŞAAT: Boş bir alana tıkla ve kule dikmeye başla. Sallanan bloğu bir önceki bloğun tam üstüne denk getirerek bırak. Ne kadar hizalı olursa o kadar çok nüfus ve 'Mükemmel' kombo puanı kazanırsın.\n\n2. EKONOMİ:\n   - Kiraya Ver: Düzenli pasif gelir sağlar.\n   - Sat: Anında toplu para kazandırır.\n\n3. UZAY YOLCULUĞU & GEZEGENLER:\n   - Market > Uzay sekmesine git.\n   - Roket parçalarını sırayla satın al (Gövde, Motor vb.).\n   - Roket tamamlanınca (en sağ alt slotta) 'Fırlat' butonuna bas.\n   - Mini oyunda roketi kontrol et ve uzaya çık.\n   - Gittiğin gezegene inmek için belirli bir NÜFUS şartı vardır (Örn: Mars için 500, Jüpiter için 5000).\n   - Gereken nüfusa ulaştığında gezegenin kilidi açılır!\n\n4. İPUÇLARI:\n   - 20. ve 40. katlarda bulmaca çıkar.\n   - Yüksek katlarda (60+) uzay atmosferi başlar, yerçekimi azalır.",
    adminMode: "Yönetici",
    adminActive: "YÖNETİCİ AKTİF",
    autoPilot: "Oto-Pilot",
    rocketHp: "Sağlık",
    launchFailed: "BAŞARISIZ",
    stallWarning: "MOTOR DURDU",
    puzzleTitle: "Bulmaca",
    puzzleTime: "Süre",
    puzzleSolved: "Çözüldü!",
    puzzleFailed: "Başarısız!",
    penaltyMsg: "Ceza Kesildi",
    puzzleInstructions: "Parçaları birleştir.",
    language: "Dil"
  },
  AZ: {
    ...baseTranslations,
    title: "Qüllə kainatınızı qurun",
    status: "Status",
    market: "Market",
    bulldoze: "Söküntü",
    done: "Tamam",
    reset: "Sıfırla",
    floors: "Mərtəbə",
    estPop: "Təx. Əhali",
    perfect: "MÜKƏMMƏL!",
    gameOver: "Tikinti Bitdi",
    finalHeight: "Son Hündürlük",
    newPop: "Yeni Əhali",
    whatToDo: "Nə etmək istəyirsən?",
    rentBtn: "İCARƏYƏ VER",
    rentDesc: "Passiv gəlir qazan",
    sellBtn: "SAT",
    sellDesc: "Nağd pul",
    cancelBtn: "Ləğv et",
    marketTitle: "Market",
    availableFunds: "Büdcə:",
    tabCrane: "Kran",
    tabStyles: "Stillər",
    maxLevel: "MAKS",
    upgrade: "Yüksəlt",
    equip: "Seç",
    equipped: "Seçildi",
    unlock: "Aç",
    active: "AKTİV",
    occupiedMsg: "Bu yer doludur.",
    demolishMsg: "Sökülsün?",
    resetMsg: "Sıfırlansın?",
    season: "Mövsüm",
    spring: "Yaz",
    summer: "Yay",
    autumn: "Payız",
    winter: "Qış",
    build: "Tik",
    tabRocket: "Kosmos",
    rocketComplete: "HAZIR",
    rocketLocked: "KİLİDLİ",
    marsTitle: "Mars Koloniyası",
    venusTitle: "Venera Bazası",
    jupiterTitle: "Yupiter Stansiyası",
    journeyToMars: "MARS SƏYAHƏTİ",
    landOnMars: "Marsa Eniş",
    popReqMars: "500 Əhali Lazımdır",
    menuPlay: "OYNA",
    menuSave: "YADDA SAXLA",
    menuAbout: "HAQQINDA",
    menuReset: "SIFIRLA",
    gameSaved: "Yadda saxlanıldı!",
    settings: "Tənzimləmələr",
    musicVol: "Musiqi",
    sfxVol: "Səs",
    help: "Kömək",
    helpTitle: "Bələdçi",
    adminMode: "Admin",
    rocketHp: "Bütövlük",
    launchFailed: "UĞURSUZ",
    stallWarning: "MÜHƏRRİK DAYANDI",
    puzzleTitle: "Tapmaca",
    puzzleSolved: "Həll edildi!",
    puzzleFailed: "Uğursuz!",
    language: "Dil"
  },
  ZH: {
    ...baseTranslations,
    title: "建立你的塔楼宇宙",
    status: "状态",
    market: "市场",
    bulldoze: "拆除",
    done: "完成",
    reset: "重置",
    floors: "层数",
    estPop: "预计人口",
    perfect: "完美！",
    gameOver: "施工完成",
    finalHeight: "最终高度",
    newPop: "新增人口",
    whatToDo: "你想做什么？",
    rentBtn: "出租",
    rentDesc: "赚取被动收入",
    sellBtn: "出售",
    sellDesc: "立即获得现金",
    cancelBtn: "取消",
    marketTitle: "建筑市场",
    availableFunds: "资金：",
    tabCrane: "起重机",
    tabStyles: "样式",
    maxLevel: "最大",
    upgrade: "升级",
    equip: "装备",
    equipped: "已装备",
    unlock: "解锁",
    active: "活跃",
    occupiedMsg: "区域已被占用。",
    demolishMsg: "拆除建筑物？",
    resetMsg: "重置所有进度？",
    season: "季节",
    spring: "春",
    summer: "夏",
    autumn: "秋",
    winter: "冬",
    build: "建造",
    tabRocket: "太空",
    rocketArea: "发射台",
    rocketBody: "船体",
    rocketModule: "模块",
    rocketComplete: "准备发射",
    rocketLocked: "锁定",
    demolishAction: "拆除！",
    marsTitle: "火星殖民地",
    venusTitle: "金星基地",
    jupiterTitle: "木星站",
    journeyToMars: "火星之旅",
    landingAvailable: "进入轨道",
    landOnMars: "登陆火星",
    popReqMars: "需要500人口",
    menuPlay: "开始游戏",
    menuSave: "保存",
    menuAbout: "关于",
    menuReset: "重置",
    aboutText: "建造高塔，增加人口，探索太空。",
    gameSaved: "游戏已保存！",
    settings: "设置",
    musicVol: "音乐",
    sfxVol: "音效",
    help: "帮助",
    helpTitle: "指南",
    adminMode: "管理员",
    autoPilot: "自动驾驶",
    rocketHp: "完整性",
    launchFailed: "失败",
    stallWarning: "失速",
    puzzleTitle: "拼图",
    puzzleSolved: "成功！",
    puzzleFailed: "失败！",
    language: "语言"
  },
  FR: {
    ...baseTranslations,
    title: "Construisez votre univers",
    status: "Statut",
    market: "Marché",
    bulldoze: "Démolir",
    done: "Fait",
    reset: "Réinitialiser",
    floors: "Étages",
    estPop: "Pop. Est.",
    perfect: "PARFAIT!",
    gameOver: "Construction terminée",
    finalHeight: "Hauteur finale",
    newPop: "Nouvelle Population",
    whatToDo: "Que voulez-vous faire ?",
    rentBtn: "LOUER",
    rentDesc: "Revenu passif",
    sellBtn: "VENDRE",
    sellDesc: "Cash immédiat",
    cancelBtn: "Annuler",
    marketTitle: "Marché",
    availableFunds: "Fonds:",
    tabCrane: "Grue",
    tabStyles: "Styles",
    maxLevel: "MAX",
    upgrade: "Améliorer",
    equip: "Équiper",
    equipped: "Équipé",
    unlock: "Débloquer",
    active: "ACTIF",
    occupiedMsg: "Zone occupée.",
    demolishMsg: "Démolir ?",
    resetMsg: "Réinitialiser ?",
    season: "Saison",
    spring: "Printemps",
    summer: "Été",
    autumn: "Automne",
    winter: "Hiver",
    build: "Construire",
    tabRocket: "Espace",
    rocketComplete: "PRÊT",
    rocketLocked: "VERROUILLÉ",
    marsTitle: "Colonie Mars",
    venusTitle: "Base Vénus",
    journeyToMars: "VOYAGE VERS MARS",
    landingAvailable: "Orbite atteinte",
    landOnMars: "Atterrir",
    popReqMars: "500 Pop Requis",
    menuPlay: "JOUER",
    menuSave: "SAUVER",
    menuAbout: "À PROPOS",
    menuReset: "RAZ",
    gameSaved: "Sauvegardé!",
    settings: "Paramètres",
    musicVol: "Musique",
    sfxVol: "Sons",
    help: "Aide",
    helpTitle: "Guide",
    adminMode: "Admin",
    rocketHp: "Intégrité",
    launchFailed: "ÉCHEC",
    stallWarning: "DÉCROCHAGE",
    puzzleTitle: "Puzzle",
    puzzleSolved: "Résolu !",
    puzzleFailed: "Échoué !",
    language: "Langue"
  },
  DE: {
    ...baseTranslations,
    title: "Baue dein Universum",
    status: "Status",
    market: "Markt",
    bulldoze: "Abreißen",
    done: "Fertig",
    reset: "Zurücksetzen",
    floors: "Etagen",
    estPop: "Gesch. Bev.",
    perfect: "PERFEKT!",
    gameOver: "Bau beendet",
    finalHeight: "Endhöhe",
    newPop: "Neue Bevölkerung",
    whatToDo: "Was möchtest du tun?",
    rentBtn: "VERMIETEN",
    rentDesc: "Passives Einkommen",
    sellBtn: "VERKAUFEN",
    sellDesc: "Sofortiges Bargeld",
    cancelBtn: "Abbrechen",
    marketTitle: "Markt",
    availableFunds: "Geld:",
    tabCrane: "Kran",
    tabStyles: "Stile",
    maxLevel: "MAX",
    upgrade: "Verbessern",
    equip: "Ausrüsten",
    equipped: "Ausgerüstet",
    unlock: "Freischalten",
    active: "AKTIV",
    occupiedMsg: "Besetzt.",
    demolishMsg: "Abreißen?",
    resetMsg: "Alles zurücksetzen?",
    season: "Jahreszeit",
    spring: "Frühling",
    summer: "Sommer",
    autumn: "Herbst",
    winter: "Winter",
    build: "Bauen",
    tabRocket: "Weltraum",
    rocketComplete: "BEREIT",
    rocketLocked: "GESPERRT",
    marsTitle: "Mars Kolonie",
    venusTitle: "Venus Basis",
    journeyToMars: "REISE ZUM MARS",
    landOnMars: "Landen",
    popReqMars: "500 Bev. nötig",
    menuPlay: "SPIELEN",
    menuSave: "SPEICHERN",
    menuAbout: "ÜBER",
    menuReset: "RESET",
    gameSaved: "Gespeichert!",
    settings: "Einstellungen",
    musicVol: "Musik",
    sfxVol: "SFX",
    help: "Hilfe",
    helpTitle: "Anleitung",
    adminMode: "Admin",
    rocketHp: "Integrität",
    launchFailed: "FEHLGESCHLAGEN",
    stallWarning: "STALL",
    puzzleTitle: "Puzzle",
    puzzleSolved: "Gelöst!",
    puzzleFailed: "Fehlgeschlagen!",
    language: "Sprache"
  },
  ES: {
    ...baseTranslations,
    title: "Construye tu universo",
    status: "Estado",
    market: "Mercado",
    bulldoze: "Demoler",
    done: "Hecho",
    reset: "Reiniciar",
    floors: "Pisos",
    estPop: "Población Est.",
    perfect: "¡PERFECTO!",
    gameOver: "Construcción terminada",
    finalHeight: "Altura final",
    newPop: "Nueva Población",
    whatToDo: "¿Qué te gustaría hacer?",
    rentBtn: "ALQUILAR",
    rentDesc: "Ingresos pasivos",
    sellBtn: "VENDER",
    sellDesc: "Dinero inmediato",
    cancelBtn: "Cancelar",
    marketTitle: "Mercado",
    availableFunds: "Fondos:",
    tabCrane: "Grúa",
    tabStyles: "Estilos",
    maxLevel: "MÁX",
    upgrade: "Mejorar",
    equip: "Equipar",
    equipped: "Equipado",
    unlock: "Desbloquear",
    active: "ACTIVO",
    occupiedMsg: "Área ocupada.",
    demolishMsg: "¿Demoler?",
    resetMsg: "¿Reiniciar todo?",
    season: "Temporada",
    spring: "Primavera",
    summer: "Verano",
    autumn: "Otoño",
    winter: "Invierno",
    build: "Construir",
    tabRocket: "Espacio",
    rocketComplete: "LISTO",
    rocketLocked: "BLOQUEADO",
    marsTitle: "Colonia Marte",
    venusTitle: "Base Venus",
    journeyToMars: "VIAJE A MARTE",
    landOnMars: "Aterrizar",
    popReqMars: "Necesitas 500 Pob",
    menuPlay: "JUGAR",
    menuSave: "GUARDAR",
    menuAbout: "ACERCA DE",
    menuReset: "REINICIAR",
    gameSaved: "¡Guardado!",
    settings: "Ajustes",
    musicVol: "Música",
    sfxVol: "Efectos",
    help: "Ayuda",
    helpTitle: "Guía",
    adminMode: "Admin",
    rocketHp: "Integridad",
    launchFailed: "FALLO",
    stallWarning: "PÉRDIDA",
    puzzleTitle: "Rompecabezas",
    puzzleSolved: "¡Resuelto!",
    puzzleFailed: "¡Falló!",
    language: "Idioma"
  },
  PT: {
    ...baseTranslations,
    title: "Construa seu universo",
    status: "Status",
    market: "Mercado",
    bulldoze: "Demolir",
    done: "Pronto",
    reset: "Reiniciar",
    floors: "Andares",
    estPop: "População Est.",
    perfect: "PERFEITO!",
    gameOver: "Construção finalizada",
    finalHeight: "Altura final",
    newPop: "Nova População",
    whatToDo: "O que você gostaria de fazer?",
    rentBtn: "ALUGAR",
    rentDesc: "Renda passiva",
    sellBtn: "VENDER",
    sellDesc: "Dinheiro imediato",
    cancelBtn: "Cancelar",
    marketTitle: "Mercado",
    availableFunds: "Fundos:",
    tabCrane: "Guindaste",
    tabStyles: "Estilos",
    maxLevel: "MÁX",
    upgrade: "Melhorar",
    equip: "Equipar",
    equipped: "Equipado",
    unlock: "Desbloquear",
    active: "ATIVO",
    occupiedMsg: "Área ocupada.",
    demolishMsg: "Demolir?",
    resetMsg: "Reiniciar tudo?",
    season: "Estação",
    spring: "Primavera",
    summer: "Verão",
    autumn: "Outono",
    winter: "Inverno",
    build: "Construir",
    tabRocket: "Espaço",
    rocketComplete: "PRONTO",
    rocketLocked: "BLOQUEADO",
    marsTitle: "Colônia Marte",
    venusTitle: "Base Vênus",
    journeyToMars: "VIAGEM A MARTE",
    landOnMars: "Aterrar",
    popReqMars: "Precisa 500 Pop",
    menuPlay: "JOGAR",
    menuSave: "SALVAR",
    menuAbout: "SOBRE",
    menuReset: "REINICIAR",
    gameSaved: "Salvo!",
    settings: "Configurações",
    musicVol: "Música",
    sfxVol: "Efeitos",
    help: "Ajuda",
    helpTitle: "Guia",
    adminMode: "Admin",
    rocketHp: "Integridade",
    launchFailed: "FALHA",
    stallWarning: "PARADA",
    puzzleTitle: "Quebra-cabeça",
    puzzleSolved: "Resolvido!",
    puzzleFailed: "Falhou!",
    language: "Idioma"
  },
  RU: {
    ...baseTranslations,
    title: "Построй свою вселенную",
    status: "Статус",
    market: "Рынок",
    bulldoze: "Снос",
    done: "Готово",
    reset: "Сброс",
    floors: "Этажи",
    estPop: "Нас.",
    perfect: "ИДЕАЛЬНО!",
    gameOver: "Стройка завершена",
    finalHeight: "Высота",
    newPop: "Новое население",
    whatToDo: "Что делать дальше?",
    rentBtn: "АРЕНДА",
    rentDesc: "Пассивный доход",
    sellBtn: "ПРОДАТЬ",
    sellDesc: "Мгновенные деньги",
    cancelBtn: "Отмена",
    marketTitle: "Рынок",
    availableFunds: "Средства:",
    tabCrane: "Кран",
    tabStyles: "Стили",
    maxLevel: "МАКС",
    upgrade: "Улучшить",
    equip: "Выбрать",
    equipped: "Выбрано",
    unlock: "Открыть",
    active: "АКТИВНО",
    occupiedMsg: "Занято.",
    demolishMsg: "Снести?",
    resetMsg: "Сбросить всё?",
    season: "Сезон",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    winter: "Зима",
    build: "Строить",
    tabRocket: "Космос",
    rocketComplete: "ГОТОВО",
    rocketLocked: "ЗАКРЫТО",
    marsTitle: "Колония Марс",
    venusTitle: "База Венера",
    journeyToMars: "ПУТЬ НА МАРС",
    landOnMars: "Посадка",
    popReqMars: "Нужно 500 нас.",
    menuPlay: "ИГРАТЬ",
    menuSave: "СОХРАНИТЬ",
    menuAbout: "ОБ ИГРЕ",
    menuReset: "СБРОС",
    gameSaved: "Сохранено!",
    settings: "Настройки",
    musicVol: "Музыка",
    sfxVol: "Звуки",
    help: "Помощь",
    helpTitle: "Гайд",
    adminMode: "Админ",
    rocketHp: "Целостность",
    launchFailed: "ОШИБКА",
    stallWarning: "СВАЛИВАНИЕ",
    puzzleTitle: "Пазл",
    puzzleSolved: "Решено!",
    puzzleFailed: "Ошибка!",
    language: "Язык"
  },
  EL: {
    ...baseTranslations,
    title: "Χτίστε το σύμπαν σας",
    status: "Κατάσταση",
    market: "Αγορά",
    bulldoze: "Κατεδάφιση",
    done: "Τέλος",
    reset: "Επαναφορά",
    floors: "Όροφοι",
    estPop: "Πληθ.",
    perfect: "ΤΕΛΕΙΑ!",
    gameOver: "Τέλος κατασκευής",
    finalHeight: "Τελικό ύψος",
    newPop: "Νέος πληθυσμός",
    whatToDo: "Τι θέλετε να κάνετε;",
    rentBtn: "ΕΝΟΙΚΙΑΣΗ",
    rentDesc: "Παθητικό εισόδημα",
    sellBtn: "ΠΩΛΗΣΗ",
    sellDesc: "Άμεσα μετρητά",
    cancelBtn: "Ακύρωση",
    marketTitle: "Αγορά",
    availableFunds: "Ταμείο:",
    tabCrane: "Γερανός",
    tabStyles: "Στυλ",
    maxLevel: "MAX",
    upgrade: "Αναβάθμιση",
    equip: "Εξοπλισμός",
    equipped: "Επιλέχθηκε",
    unlock: "Ξεκλείδωμα",
    active: "ΕΝΕΡΓΟ",
    occupiedMsg: "Κατειλημμένο.",
    demolishMsg: "Κατεδάφιση;",
    resetMsg: "Επαναφορά;",
    season: "Εποχή",
    spring: "Άνοιξη",
    summer: "Καλοκαίρι",
    autumn: "Φθινόπωρο",
    winter: "Χειμώνας",
    build: "Χτίσιμο",
    tabRocket: "Διάστημα",
    rocketComplete: "ΕΤΟΙΜΟ",
    rocketLocked: "ΚΛΕΙΔΩΜΕΝΟ",
    marsTitle: "Αποικία Άρης",
    venusTitle: "Βάση Αφροδίτη",
    journeyToMars: "ΤΑΞΙΔΙ ΣΤΟΝ ΑΡΗ",
    landOnMars: "Προσγείωση",
    popReqMars: "Χρειάζονται 500 Πληθ.",
    menuPlay: "ΠΑΙΞΕ",
    menuSave: "ΑΠΟΘΗΚΕΥΣΗ",
    menuAbout: "ΣΧΕΤΙΚΑ",
    menuReset: "ΕΠΑΝΑΦΟΡΑ",
    gameSaved: "Αποθηκεύτηκε!",
    settings: "Ρυθμίσεις",
    musicVol: "Μουσική",
    sfxVol: "Ήχοι",
    help: "Βοήθεια",
    helpTitle: "Οδηγός",
    adminMode: "Διαχειριστής",
    rocketHp: "Ακεραιότητα",
    launchFailed: "ΑΠΟΤΥΧΙΑ",
    stallWarning: "ΑΠΩΛΕΙΑ",
    puzzleTitle: "Γρίφος",
    puzzleSolved: "Λύθηκε!",
    puzzleFailed: "Απέτυχε!",
    language: "Γλώσσα"
  },
  AR: {
    ...baseTranslations,
    title: "ابنِ كونك",
    status: "الحالة",
    market: "المتجر",
    bulldoze: "هدم",
    done: "تم",
    reset: "إعادة ضبط",
    floors: "طوابق",
    estPop: "السكان",
    perfect: "مذهل!",
    gameOver: "اكتمل البناء",
    finalHeight: "الارتفاع النهائي",
    newPop: "سكان جدد",
    whatToDo: "ماذا تريد أن تفعل؟",
    rentBtn: "تأجير",
    rentDesc: "دخل سلبي",
    sellBtn: "بيع",
    sellDesc: "نقد فوري",
    cancelBtn: "إلغاء",
    marketTitle: "السوق",
    availableFunds: "المال:",
    tabCrane: "رافعة",
    tabStyles: "أنماط",
    maxLevel: "الأقصى",
    upgrade: "تطوير",
    equip: "تجهيز",
    equipped: "مجهز",
    unlock: "فتح",
    active: "نشط",
    occupiedMsg: "مشغول.",
    demolishMsg: "هدم المبنى؟",
    resetMsg: "إعادة ضبط؟",
    season: "موسم",
    spring: "ربيع",
    summer: "صيف",
    autumn: "خريف",
    winter: "شتاء",
    build: "بناء",
    tabRocket: "فضاء",
    rocketComplete: "جاهز",
    rocketLocked: "مغلق",
    marsTitle: "مستعمرة المريخ",
    venusTitle: "قاعدة الزهرة",
    journeyToMars: "رحلة للمريخ",
    landOnMars: "هبوط",
    popReqMars: "تحتاج 500 ساكن",
    menuPlay: "لعب",
    menuSave: "حفظ",
    menuAbout: "حول",
    menuReset: "إعادة",
    gameSaved: "تم الحفظ!",
    settings: "إعدادات",
    musicVol: "موسيقى",
    sfxVol: "أصوات",
    help: "مساعدة",
    helpTitle: "دليل",
    adminMode: "مشرف",
    rocketHp: "سلامة",
    launchFailed: "فشل",
    stallWarning: "توقف",
    puzzleTitle: "لغز",
    puzzleSolved: "تم الحل!",
    puzzleFailed: "فشل!",
    language: "لغة"
  },
  HI: {
    ...baseTranslations,
    title: "अपनी दुनिया बनाएं",
    status: "स्थिति",
    market: "बाज़ार",
    bulldoze: "गिराना",
    done: "हो गया",
    reset: "रीसेट",
    floors: "मंजिलें",
    estPop: "जनसंख्या",
    perfect: "उत्तम!",
    gameOver: "निर्माण पूरा",
    finalHeight: "अंतिम ऊंचाई",
    newPop: "नई जनसंख्या",
    whatToDo: "आप क्या करना चाहेंगे?",
    rentBtn: "किराये पर",
    rentDesc: "निष्क्रिय आय",
    sellBtn: "बेचें",
    sellDesc: "नकद",
    cancelBtn: "रद्द करें",
    marketTitle: "बाज़ार",
    availableFunds: "कोष:",
    tabCrane: "क्रेन",
    tabStyles: "शैली",
    maxLevel: "अधिकतम",
    upgrade: "उन्नति",
    equip: "सुसज्जित",
    equipped: "सुसज्जित",
    unlock: "खोलें",
    active: "सक्रिय",
    occupiedMsg: "स्थान भरा है",
    demolishMsg: "गिरा दें?",
    resetMsg: "रीसेट करें?",
    season: "ऋतु",
    spring: "वसंत",
    summer: "गर्मी",
    autumn: "पतझड़",
    winter: "सर्दी",
    build: "निर्माण",
    tabRocket: "अंतरिक्ष",
    rocketComplete: "तैयार",
    rocketLocked: "बंद",
    marsTitle: "मंगल कॉलोनी",
    venusTitle: "शुक्र बेस",
    journeyToMars: "मंगल यात्रा",
    landOnMars: "लैंडिंग",
    popReqMars: "500 लोग चाहिए",
    menuPlay: "खेलें",
    menuSave: "सहेजें",
    menuAbout: "बारे में",
    menuReset: "रीसेट",
    gameSaved: "सहेजा गया!",
    settings: "सेटिंग्स",
    musicVol: "संगीत",
    sfxVol: "ध्वनि",
    help: "मदद",
    helpTitle: "गाइड",
    adminMode: "एड्मिन्",
    rocketHp: "अखंडता",
    launchFailed: "विफल",
    stallWarning: "रुकावट",
    puzzleTitle: "पहेली",
    puzzleSolved: "हल हो गया!",
    puzzleFailed: "विफल!",
    language: "भाषा"
  }
};

export interface BuildingStyle {
  id: string;
  name: string;
  cost: number;
  rentMultiplier: number;
  sellMultiplier: number;
  popMultiplier: number;
  color: string;
  accentColor: string;
}

export interface BuildingSlot {
  id: string;
  floors: number;
  pop: number;
  status: BuildingStatus;
  styleId: string;
  timestamp: number;
}

export interface UpgradeStats {
  speed: number; 
  accuracy: number; 
}

export interface CityMeta {
  cash: number;
  population: number;
  upgrades: UpgradeStats;
  unlockedStyles: string[];
  activeStyleId: string;
  lastIncomeTime: number;
  rentCyclesCount: number; 
  currentSeason: Season;
  history: { day: number; cash: number; pop: number }[];
  rocket: { 
    stage: number; // 0-3 for basic rocket, 4-6 for shuttle
    launched?: boolean;
    launchTime?: number; 
  };
  autoPilotCharges: number; // For rocket minigame
  marsUnlocked: boolean;
  venusUnlocked: boolean;
  jupiterUnlocked: boolean;
  saturnUnlocked: boolean;
  uranusUnlocked: boolean;
  neptuneUnlocked: boolean;
  mercuryUnlocked: boolean;
}

// 10 Minutes per cycle
export const MONTH_DURATION_MS = 600 * 1000; 
// 10 Minutes Journey to Mars/Planets
export const MARS_JOURNEY_DURATION_MS = 10 * 60 * 1000;

export const UPGRADES_CONFIG = {
  speed: { name: "Motor Torku", baseCost: 500, effect: 0.005, maxLevel: 5 },
  accuracy: { name: "Lazer Sabitleyici", baseCost: 1000, effect: 5, maxLevel: 3 }
};

export const STYLES_CONFIG: BuildingStyle[] = [
  { id: 'STONE_HOUSE', name: 'Taş Konut', cost: 0, rentMultiplier: 1.0, sellMultiplier: 1.0, popMultiplier: 1.0, color: '#a8a29e', accentColor: '#57534e' },
  { id: 'BRICK_ESTATE', name: 'Tuğla Malikane', cost: 2500, rentMultiplier: 1.3, sellMultiplier: 1.2, popMultiplier: 1.1, color: '#b91c1c', accentColor: '#fca5a5' },
  { id: 'MODERN_APARTMENT', name: 'Modern Daire', cost: 5000, rentMultiplier: 1.5, sellMultiplier: 1.5, popMultiplier: 1.2, color: '#3b82f6', accentColor: '#93c5fd' },
  { id: 'ECO_TOWER', name: 'Eko Kule', cost: 12000, rentMultiplier: 1.8, sellMultiplier: 1.6, popMultiplier: 1.4, color: '#059669', accentColor: '#6ee7b7' },
  { id: 'SKYSCRAPER_GLASS', name: 'Cam Gökdelen', cost: 25000, rentMultiplier: 2.5, sellMultiplier: 2.2, popMultiplier: 1.5, color: '#0ea5e9', accentColor: '#e0f2fe' },
  { id: 'GOLDEN_PLAZA', name: 'Altın Rezidans', cost: 50000, rentMultiplier: 3.2, sellMultiplier: 4.0, popMultiplier: 1.8, color: '#eab308', accentColor: '#fef08a' },
  { id: 'CYBER_CITADEL', name: 'Siber Kale', cost: 100000, rentMultiplier: 4.0, sellMultiplier: 3.0, popMultiplier: 2.0, color: '#7c3aed', accentColor: '#d8b4fe' },
  { id: 'QUANTUM_SPIRE', name: 'Kuantum Kule', cost: 250000, rentMultiplier: 6.0, sellMultiplier: 5.0, popMultiplier: 3.0, color: '#ec4899', accentColor: '#fbcfe8' }
];

export const MARS_STYLES_CONFIG: BuildingStyle[] = [
  { id: 'MARS_POD', name: 'Yaşam Kapsülü', cost: 0, rentMultiplier: 2.0, sellMultiplier: 1.5, popMultiplier: 1.5, color: '#f8fafc', accentColor: '#38bdf8' },
  { id: 'OXYGEN_PLANT', name: 'Oksijen Tesisi', cost: 10000, rentMultiplier: 3.0, sellMultiplier: 2.0, popMultiplier: 1.2, color: '#ecfeff', accentColor: '#f472b6' },
  { id: 'RED_MINE', name: 'Kızıl Maden', cost: 25000, rentMultiplier: 5.0, sellMultiplier: 3.0, popMultiplier: 1.0, color: '#cbd5e1', accentColor: '#f59e0b' },
  { id: 'BIO_DOME', name: 'Biyo Kubbe', cost: 75000, rentMultiplier: 6.0, sellMultiplier: 4.0, popMultiplier: 3.0, color: 'glass', accentColor: '#4ade80' },
  { id: 'FUSION_REACTOR', name: 'Füzyon Reaktörü', cost: 200000, rentMultiplier: 10.0, sellMultiplier: 5.0, popMultiplier: 2.0, color: '#1e293b', accentColor: '#a855f7' }
];

export const VENUS_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'ACID_SHELTER', name: 'Asit Sığınağı', cost: 0, rentMultiplier: 4.0, sellMultiplier: 2.0, popMultiplier: 1.5, color: '#3f3f46', accentColor: '#facc15' }, 
    { id: 'CLOUD_CITY', name: 'Bulut Şehri', cost: 50000, rentMultiplier: 5.0, sellMultiplier: 2.5, popMultiplier: 2.0, color: '#fde047', accentColor: '#a16207' },
    { id: 'THERMAL_PLANT', name: 'Termal Santral', cost: 150000, rentMultiplier: 8.0, sellMultiplier: 4.0, popMultiplier: 1.5, color: '#713f12', accentColor: '#ef4444' },
    { id: 'SKY_HABITAT', name: 'Gök Habitatı', cost: 500000, rentMultiplier: 12.0, sellMultiplier: 6.0, popMultiplier: 4.0, color: '#ecfeff', accentColor: '#06b6d4' }
];

export const JUPITER_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'GAS_PLATFORM', name: 'Gaz Platformu', cost: 0, rentMultiplier: 8.0, sellMultiplier: 3.0, popMultiplier: 2.0, color: '#78350f', accentColor: '#fdba74' },
    { id: 'ORBITAL_STATION', name: 'Yörünge İstasyonu', cost: 250000, rentMultiplier: 10.0, sellMultiplier: 4.0, popMultiplier: 3.0, color: '#e5e5e5', accentColor: '#3b82f6' },
    { id: 'STORM_HARVESTER', name: 'Fırtına Toplayıcı', cost: 1000000, rentMultiplier: 15.0, sellMultiplier: 5.0, popMultiplier: 1.5, color: '#7f1d1d', accentColor: '#ef4444' },
    { id: 'GRAVITY_ANCHOR', name: 'Kütle Çapası', cost: 5000000, rentMultiplier: 25.0, sellMultiplier: 10.0, popMultiplier: 5.0, color: '#171717', accentColor: '#a855f7' }
];

export const MERCURY_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'HEAT_SHIELD', name: 'Isı Kalkanı', cost: 0, rentMultiplier: 6.0, sellMultiplier: 2.5, popMultiplier: 1.5, color: '#57534e', accentColor: '#ef4444' },
    { id: 'SOLAR_ARRAY', name: 'Güneş Paneli', cost: 100000, rentMultiplier: 9.0, sellMultiplier: 3.5, popMultiplier: 2.0, color: '#1c1917', accentColor: '#facc15' },
    { id: 'CRATER_BASE', name: 'Krater Üssü', cost: 300000, rentMultiplier: 12.0, sellMultiplier: 5.0, popMultiplier: 2.5, color: '#78716c', accentColor: '#e7e5e4' }
];

export const SATURN_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'RING_STATION', name: 'Halka İstasyonu', cost: 0, rentMultiplier: 12.0, sellMultiplier: 4.0, popMultiplier: 3.0, color: '#d4d4d8', accentColor: '#facc15' },
    { id: 'HEX_TOWER', name: 'Altıgen Kule', cost: 500000, rentMultiplier: 18.0, sellMultiplier: 6.0, popMultiplier: 4.0, color: '#fef3c7', accentColor: '#b45309' },
    { id: 'TITAN_HABITAT', name: 'Titan Habitatı', cost: 2000000, rentMultiplier: 30.0, sellMultiplier: 10.0, popMultiplier: 5.0, color: '#064e3b', accentColor: '#34d399' }
];

export const URANUS_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'ICE_SPIRE', name: 'Buz Kulesi', cost: 0, rentMultiplier: 20.0, sellMultiplier: 5.0, popMultiplier: 3.5, color: '#cffafe', accentColor: '#22d3ee' },
    { id: 'DIAMOND_MINE', name: 'Elmas Madeni', cost: 1000000, rentMultiplier: 40.0, sellMultiplier: 15.0, popMultiplier: 6.0, color: '#ecfeff', accentColor: '#a5f3fc' }
];

export const NEPTUNE_STYLES_CONFIG: BuildingStyle[] = [
    { id: 'DEEP_RIG', name: 'Derin Sondaj', cost: 0, rentMultiplier: 35.0, sellMultiplier: 8.0, popMultiplier: 4.0, color: '#172554', accentColor: '#3b82f6' },
    { id: 'WIND_TURBINE_N', name: 'Fırtına Türbini', cost: 2500000, rentMultiplier: 60.0, sellMultiplier: 20.0, popMultiplier: 8.0, color: '#1e3a8a', accentColor: '#60a5fa' }
];

export const RANKS = [
    { l: 0, n: "Köy" }, 
    { l: 1000, n: "Kasaba" }, 
    { l: 10000, n: "İlçe" }, 
    { l: 100000, n: "Şehir" }, 
    { l: 750000, n: "Büyükşehir" }, 
    { l: 5000000, n: "Metropol" }
];
