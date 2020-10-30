import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import FavoriteButton from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((value) => value),
  useDispatch: jest.fn(() => () => {}),
}));

const makeProps = ({ src, name, index } = {}) => ({
  src: src || null,
  name: name || 'pikachu',
  index: index || 1,
});

const renderComponent = (props) => {
  return shallow(<FavoriteButton {...props} />);
};

describe('FavoriteButton', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = renderComponent(makeProps());

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
