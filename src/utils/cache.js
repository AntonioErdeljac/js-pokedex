import { storage } from '../constants';

const saveFavorites = (data = []) => {
  localStorage.setItem(storage.FAVORITES, JSON.stringify(data));
};

const loadFavorites = () => JSON.parse(localStorage.getItem(storage.FAVORITES) || '[]');

const saveMuted = (isMuted) => {
  localStorage.setItem(storage.MUTED, isMuted);
};

const loadMuted = () => {
  return JSON.parse(localStorage.getItem(storage.MUTED) || 'false');
};

export default { saveFavorites, loadFavorites, saveMuted, loadMuted };
