const generateImage = (index) => {
  const imageNumber = (index + 1).toString().padStart(3, '0');
  const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
  const extension = '.png';

  return `${url}${imageNumber}${extension}`;
};

export default { generateImage };
