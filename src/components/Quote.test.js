import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Quote character='name' image='img.jpg' quote='quotey mcquote' />);
    expect(wrapper).toMatchSnapshot();
  });
});
