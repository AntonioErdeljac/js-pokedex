const { storage } = require('../constants');

const saveFavorites = (data = []) => {
  localStorage.setItem(storage.FAVORITES, JSON.stringify(data));
};

const loadFavorites = () => JSON.parse(localStorage.getItem(storage.FAVORITES) || '[]');

export default { saveFavorites, loadFavorites };
