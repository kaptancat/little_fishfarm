
import { useState, useEffect, useCallback } from 'react';
import { CityMeta, BuildingSlot, BuildingStatus, STYLES_CONFIG, MARS_STYLES_CONFIG, MONTH_DURATION_MS, Season, Planet } from './types';

const INITIAL_META: CityMeta = {
  cash: 5000,
  population: 15, 
  upgrades: { speed: 0, accuracy: 0 },
  unlockedStyles: ['STONE_HOUSE', 'MARS_POD'],
  activeStyleId: 'STONE_HOUSE',
  lastIncomeTime: Date.now(),
  rentCyclesCount: 0,
  currentSeason: 'SPRING',
  history: [],
  rocket: { stage: 0, launched: false },
  marsUnlocked: false,
  venusUnlocked: false,
  jupiterUnlocked: false,
  saturnUnlocked: false,
  uranusUnlocked: false,
  neptuneUnlocked: false,
  mercuryUnlocked: false
};

const SEASONS: Season[] = ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'];

export const useCityState = () => {
  // EARTH DATA
  const [cityData, setCityData] = useState<(BuildingSlot | null)[]>(() => {
    const saved = localStorage.getItem('grandCityDataV7');
    if (saved) return JSON.parse(saved);
    const initialData = Array(16).fill(null);
    initialData[0] = {
      id: 'starter-home',
      floors: 3,
      pop: 15,
      status: BuildingStatus.RENTED,
      styleId: 'STONE_HOUSE',
      timestamp: Date.now()
    };
    return initialData;
  });

  // MARS DATA
  const [marsData, setMarsData] = useState<(BuildingSlot | null)[]>(() => {
    const saved = localStorage.getItem('grandMarsDataV7');
    if (saved) return JSON.parse(saved);
    return Array(16).fill(null); // Empty map for Mars
  });

  const [meta, setMeta] = useState<CityMeta>(() => {
    const saved = localStorage.getItem('grandCityMetaV7');
    if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.rocket) parsed.rocket = { stage: 0, launched: false };
        if (parsed.marsUnlocked === undefined) parsed.marsUnlocked = false;
        if (parsed.venusUnlocked === undefined) parsed.venusUnlocked = false;
        if (parsed.jupiterUnlocked === undefined) parsed.jupiterUnlocked = false;
        if (parsed.saturnUnlocked === undefined) parsed.saturnUnlocked = false;
        if (parsed.uranusUnlocked === undefined) parsed.uranusUnlocked = false;
        if (parsed.neptuneUnlocked === undefined) parsed.neptuneUnlocked = false;
        if (parsed.mercuryUnlocked === undefined) parsed.mercuryUnlocked = false;
        // Check unlocked styles to include Mars default
        if (!parsed.unlockedStyles.includes('MARS_POD')) parsed.unlockedStyles.push('MARS_POD');
        return parsed;
    }
    return INITIAL_META;
  });

  // Persistence
  useEffect(() => {
    localStorage.setItem('grandCityDataV7', JSON.stringify(cityData));
    localStorage.setItem('grandMarsDataV7', JSON.stringify(marsData));
    localStorage.setItem('grandCityMetaV7', JSON.stringify(meta));
  }, [cityData, marsData, meta]);

  // Recalculate population whenever grids change
  useEffect(() => {
    const earthPop = cityData.reduce((acc, slot) => acc + (slot ? slot.pop : 0), 0);
    const marsPop = marsData.reduce((acc, slot) => acc + (slot ? slot.pop : 0), 0);
    setMeta(prev => ({ ...prev, population: earthPop + marsPop }));
  }, [cityData, marsData]);

  // Passive Income Loop
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - meta.lastIncomeTime;

      if (elapsed >= MONTH_DURATION_MS) {
        // Calculate Earth Rent
        let rentIncome = 0;
        cityData.forEach(slot => {
          if (slot && slot.status === BuildingStatus.RENTED) {
            const style = STYLES_CONFIG.find(s => s.id === slot.styleId) || STYLES_CONFIG[0];
            rentIncome += slot.floors * 100 * style.rentMultiplier;
          }
        });

        // Calculate Mars Rent
        marsData.forEach(slot => {
          if (slot && slot.status === BuildingStatus.RENTED) {
            const style = MARS_STYLES_CONFIG.find(s => s.id === slot.styleId) || MARS_STYLES_CONFIG[0];
            rentIncome += slot.floors * 200 * style.rentMultiplier; // Higher rent on Mars
          }
        });

        // Calculate Pop Income (Tax)
        const popIncome = meta.population * 2;
        const totalIncome = Math.round(rentIncome + popIncome);

        setMeta(prev => {
            const newHistory = [...prev.history, { day: prev.history.length + 1, cash: prev.cash + totalIncome, pop: prev.population }];
            if (newHistory.length > 50) newHistory.shift();
            
            let nextCycleCount = (prev.rentCyclesCount || 0) + 1;
            let nextSeason = prev.currentSeason || 'SPRING';
            if (nextCycleCount >= 3) {
                const currentIdx = SEASONS.indexOf(nextSeason);
                nextSeason = SEASONS[(currentIdx + 1) % 4];
                nextCycleCount = 0; 
            }

            return {
              ...prev,
              cash: prev.cash + totalIncome,
              lastIncomeTime: now,
              history: newHistory,
              rentCyclesCount: nextCycleCount,
              currentSeason: nextSeason
            };
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [meta.lastIncomeTime, cityData, marsData, meta.population]);

  const addBuilding = useCallback((index: number, building: BuildingSlot, planet: Planet) => {
    if (planet === 'EARTH') {
        setCityData(prev => {
            const next = [...prev];
            next[index] = building;
            return next;
        });
    } else {
        setMarsData(prev => {
            const next = [...prev];
            next[index] = building;
            return next;
        });
    }
  }, []);

  const updateCash = useCallback((amount: number) => {
    setMeta(prev => ({ ...prev, cash: prev.cash + amount }));
  }, []);
    
  const removeBuilding = useCallback((index: number, planet: Planet) => {
    if (planet === 'EARTH') {
        setCityData(prev => {
            const next = [...prev];
            next[index] = null;
            return next;
        });
    } else {
        setMarsData(prev => {
            const next = [...prev];
            next[index] = null;
            return next;
        });
    }
    updateCash(100);
  }, [updateCash]);

  const unlockStyle = useCallback((styleId: string, cost: number) => {
    if (meta.cash >= cost && !meta.unlockedStyles.includes(styleId)) {
      setMeta(prev => ({
        ...prev,
        cash: prev.cash - cost,
        unlockedStyles: [...prev.unlockedStyles, styleId],
        activeStyleId: styleId
      }));
      return true;
    }
    return false;
  }, [meta.cash, meta.unlockedStyles]);

  const setActiveStyle = useCallback((styleId: string) => {
      setMeta(prev => ({...prev, activeStyleId: styleId}));
  }, []);

  const buyUpgrade = useCallback((type: 'speed' | 'accuracy', cost: number) => {
      if (meta.cash >= cost) {
          setMeta(prev => ({
              ...prev,
              cash: prev.cash - cost,
              upgrades: {
                  ...prev.upgrades,
                  [type]: prev.upgrades[type] + 1
              }
          }));
          return true;
      }
      return false;
  }, [meta.cash]);

  const buyRocketPart = useCallback(() => {
    const stage = meta.rocket?.stage || 0;
    if (stage >= 3) return false;

    const costs = [5000, 7000, 10000];
    const cost = costs[stage];
    
    if (meta.cash >= cost) {
      setMeta(prev => ({
        ...prev,
        cash: prev.cash - cost,
        rocket: { ...prev.rocket, stage: (prev.rocket?.stage || 0) + 1 }
      }));
      if (stage === 0) {
          setCityData(prev => {
              const next = [...prev];
              next[15] = null;
              return next;
          });
      }
      return true;
    }
    return false;
  }, [meta.cash, meta.rocket?.stage]);
  
  const launchRocket = useCallback(() => {
    setMeta(prev => ({
      ...prev,
      rocket: { 
          ...prev.rocket, 
          stage: prev.rocket.stage, 
          launched: true,
          launchTime: Date.now() // Record launch time
      }
    }));
  }, []);

  const unlockMars = useCallback(() => {
      setMeta(prev => ({ ...prev, marsUnlocked: true }));
  }, []);

  const resetCity = useCallback(() => {
      const initialData = Array(16).fill(null);
      initialData[0] = {
        id: 'starter-home',
        floors: 3,
        pop: 15,
        status: BuildingStatus.RENTED,
        styleId: 'STONE_HOUSE',
        timestamp: Date.now()
      };
      setCityData(initialData);
      setMarsData(Array(16).fill(null));
      setMeta({ ...INITIAL_META, lastIncomeTime: Date.now(), rocket: { stage: 0, launched: false } });
      
      localStorage.removeItem('grandCityDataV7');
      localStorage.removeItem('grandMarsDataV7');
      localStorage.removeItem('grandCityMetaV7');
      
      window.location.reload();
  }, []);

  return {
    cityData,
    marsData,
    meta,
    addBuilding,
    removeBuilding,
    updateCash,
    unlockStyle,
    setActiveStyle,
    buyUpgrade,
    resetCity,
    buyRocketPart,
    launchRocket,
    unlockMars
  };
};
