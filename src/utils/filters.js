const search = (data, value) => {
  if (!value) {
    return data;
  }

  return data.filter((item) => item.name.toLowerCase().match(value.toLowerCase()));
};

export default {
  search,
};
