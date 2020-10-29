const generateImage = (index) => {
  if (!index) {
    return null;
  }

  const imageNumber = index.toString().padStart(3, '0');
  const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  const extension = '.png';

  return `${url}${imageNumber}${extension}`;
};

export default { generateImage };
