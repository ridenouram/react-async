import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quote component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Quotes quotes={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
