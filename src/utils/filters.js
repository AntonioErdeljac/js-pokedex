import { orderBy } from 'lodash';

const search = (data, value) => {
  if (!value) {
    return data;
  }

  return data.filter((item) => item.name.toLowerCase().match(value.toLowerCase()));
};

const sort = (data, value) => {
  if (!value) {
    return data;
  }

  return orderBy(data, ['name'], [value]);
};

export default {
  search,
  sort,
};
