import { storage } from '../constants';

const getter = (key, fallback) => JSON.parse(localStorage.getItem(key) || fallback);
const setter = (key, data, shouldStringify) => {
  let finalData = data;

  if (shouldStringify) {
    finalData = JSON.stringify(finalData);
  }

  localStorage.setItem(key, finalData);
};

export default {
  saveFavorites: (data) => setter(storage.PD_FAVORITES, data, true),
  loadFavorites: () => getter(storage.PD_FAVORITES, '[]'),
  saveMuted: (data) => setter(storage.PD_MUTED, data, false),
  loadMuted: () => getter(storage.PD_MUTED, 'false'),
  saveItems: (data) => setter(storage.PD_ITEMS, data, true),
  loadItems: () => getter(storage.PD_ITEMS, '[]'),
  saveNextQuery: (data) => setter(storage.PD_NEXT_QUERY, data, true),
  loadNextQuery: () => getter(storage.PD_NEXT_QUERY, '{}'),
};
