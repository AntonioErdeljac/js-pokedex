import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Info from './index';

const EXPECTED_TEXT = 'Lorem';

const makeProps = ({ image, text } = {}) => ({
  image: image || null,
  text: text || EXPECTED_TEXT,
});

const renderComponent = (props) => {
  return shallow(<Info {...props} />);
};

describe('Info', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderComponent(makeProps());
  });

  it('renders correctly according to snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders passed text', () => {
    expect(wrapper.find('p').text()).toEqual(EXPECTED_TEXT);
  });
});
