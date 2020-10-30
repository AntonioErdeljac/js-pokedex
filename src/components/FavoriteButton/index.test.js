import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import FavoriteButton from './index';

jest.mock('react-redux', () => ({
  useSelector: jest.fn((value) => value),
  useDispatch: jest.fn(() => () => {}),
}));

describe('FavoriteButton', () => {
  it('renders correctly according to snapshot', () => {
    const wrapper = shallow(<FavoriteButton />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
