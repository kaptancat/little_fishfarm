
export interface Vector2 {
  x: number;
  y: number;
}

export type FishType = 
  // Standard
  'goldfish' | 'neon' | 'betta' | 'guppy' | 'discus' | 'clownfish' | 'piranha' |
  // Fancy Goldfish (Japon Özel)
  'comet' | 'shubunkin' | 'ryukin' | 'oranda' | 'ranchu' | 'telescope' | 'bubble_eye' | 'pearlscale' |
  // Guppy Variants (Lepistes Özel)
  'guppy_moscow_blue' | 'guppy_moscow_green' | 'guppy_cobra_red' | 'guppy_cobra_green' | 'guppy_tuxedo_neon' | 
  'guppy_dragon_red' | 'guppy_full_black' | 'guppy_albino' | 'guppy_platinum' | 'guppy_blue_grass' | 
  'guppy_red_lace' | 'guppy_sunset' | 'guppy_koi' |
  // Tetra Variants (Tetra Özel)
  'tetra_black_neon' | 'tetra_glowlight' | 'tetra_rummy_nose' | 'tetra_diamond' | 'tetra_congo' | 
  'tetra_serpae' | 'tetra_bleeding_heart' | 'tetra_lemon' | 'tetra_emperor' | 'tetra_black_skirt' | 'tetra_buenos_aires' |
  // Small Peaceful
  'endler' | 'platy' | 'molly' | 'cardinal_tetra' | 'ember_tetra' | 'zebra_danio' | 'rasbora' | 'white_cloud' |
  'swordtail' | 'neon_rainbowfish' |
  // Cichlids
  'angelfish' | 'oscar' | 'ramirezi' | 'malawi' | 'tanganyika' | 'kribensis' | 'tilapia' |
  // Bottom / Algae
  'corydoras' | 'pleco' | 'otocinclus' | 'loach' | 'catfish' | 'siamese_algae_eater' |
  // Big/Predator
  'arapaima' | 'arowana' | 'peacock_bass' | 'alligator_gar' | 'bala_shark' |
  // Marine Reef
  'blue_tang' | 'yellow_tang' | 'butterflyfish' | 'marine_angelfish' | 'wrasse' | 'goby' | 'firefish' | 'anthias' | 'damsel' | 'mandarinfish' |
  // Marine Big/Ocean
  'tuna' | 'mahi_mahi' | 'swordfish' | 'marlin' | 'barracuda' | 'manta_ray' | 'grouper' | 'snapper' | 'seabream' |
  // Marine Odd/Bottom
  'lionfish' | 'scorpionfish' | 'anglerfish' | 'moray_eel' | 'flounder' | 'clown_triggerfish' | 'pufferfish' | 'seahorse' | 'seadragon' |
  // Polar / Cold Water
  'halibut' | 'cod' | 'haddock' | 'arctic_char' | 'capelin' | 'salmon' | 'trout' |
  // Brackish
  'archerfish' | 'monodactylus' | 'scat' | 'mudskipper' |
  // Commercial / Seafood / Local
  'torik' | 'bluefish' | 'mackerel' | 'whiting' | 'orkinos' | 'mullet' | 'turbot' | 'red_mullet' | 'red_seabream' | 'horse_mackerel' | 'anchovy' | 'sardine' |
  'hamsi' | 'cinekop' | 'levrek' | 'cupra' | 'palamut' | 'kofana' | 'pike' | 'chub' | 'carp' | 'wels_catfish' | 'pearl_mullet' | 'koi' |
  // Exotic
  'dragonfish' | 'oarfish' | 'mola_mola' |
  // Apex / Dangerous
  'great_white_shark' | 'tiger_shark' | 'bull_shark';

export type Gender = 'M' | 'F';

export enum LifeStage {
  EGG = 'EGG',
  FRY = 'FRY', // Baby
  ADULT = 'ADULT'
}

export type FishDisease = 'none' | 'ich' | 'fungus' | 'parasite';

export interface FishGenes {
  colorHex: string; // The primary body color
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

export interface FishState {
  id: string;
  type: FishType;
  gender: Gender;
  stage: LifeStage;
  genes: FishGenes;
  
  position: Vector2;
  velocity: Vector2;
  wanderOffset: number; // For smooth random movement
  
  size: number; // 0.2 (fry) to 1.0+ (adult)
  hunger: number; // 0-100 (0 = starving)
  health: number; // 0-100 (0 = dead)
  stress: number; // 0-100 (100 = panic)
  age: number; // in ticks
  
  disease: FishDisease; // Specific disease type
  isSick: boolean;
  location: 'main' | 'nursery'; // Where the fish is

  reproductiveProgress: number; // 0-100
  thoughts: string;
  category?: string;
}

export interface SpeciesInfo {
  id: string;
  name: string;
  scientificName?: string;
  price: number;
  currency: 'coin' | 'gem';
  type: 'fish';
  species: FishType;
  gender: Gender;
  color: string;
  category: string;
  // Stats
  phRange: [number, number];
  tempRange: [number, number]; // Celsius
  minTankSize: number; // Liters
  behavior: string;
  description?: string;
  minLevel?: number; // XP Level required to buy
  obtainable?: 'shop' | 'fishing' | 'task'; // Method of acquisition
}

export interface FoodParticle {
  id: string;
  position: Vector2;
  active: boolean;
  tankId: 'main' | 'nursery';
}

export interface Decoration {
  id: string;
  type: 'rock' | 'coral' | 'castle' | 'shipwreck' | 'volcano' | 'treasure';
  x: number;
  scale: number;
}

export interface Plant {
  id: string;
  type: 'fern' | 'amazon' | 'grass';
  x: number;
  growth: number; // 0.1 to 1.5
  health: number;
}

export interface Task {
  id: string;
  description: string;
  current: number;
  target: number;
  reward: number; // Coins
  gemReward?: number;
  xpReward: number;
  completed: boolean;
  type: 'feed' | 'clean' | 'buy' | 'breed';
}

export interface WaterParams {
  temperature: number; // Ideal: 24-26
  ammonia: number; // Ideal: 0, Toxic > 0.5
  oxygen: number; // Ideal: > 80
  ph: number; // Ideal 6.5 - 7.5
}

export interface Equipment {
  filterLevel: number; // 1: Sponge, 2: HOB, 3: Canister
  heater: boolean;
  airStone: boolean;
  lightLevel: number; // 1: Low, 2: Med, 3: High
  co2System: boolean;
}

export interface AppState {
  gameStarted: boolean;
  lastSaveTime: number; // For offline progress
  
  // Progression
  xp: number;
  level: number;
  nurseryUnlocked: boolean;

  money: number;
  gems: number; // Premium currency
  bait: number; // Fishing bait count
  
  waterParams: WaterParams;
  equipment: Equipment;
  lightOn: boolean;
  fishes: FishState[];
  decorations: Decoration[];
  plants: Plant[];
  food: FoodParticle[];
  
  algaeLevel: number; // 0-100
  tasks: Task[];
  
  inventory: {
    medicine_ich: number;    // Treats White Spot
    medicine_fungus: number; // Treats Fungus
    medicine_general: number;// Boosts health
  };

  tankLevel: number;
  tankCapacity: number;
  
  // Customization
  activeWallpaper: string;
  ownedWallpapers: string[];
}

export enum GamePhase {
  INTRO = 'INTRO',
  PLAYING = 'PLAYING',
  SHOWROOM = 'SHOWROOM',
  FISHING = 'FISHING',
}