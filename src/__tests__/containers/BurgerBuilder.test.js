import React from 'react';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BurgerBuilder />);
});

it('finds the text Toolbar in the component', () => {
  const wrapper = mount(<BurgerBuilder/>)
  expect(wrapper.text()).toEqual('BurgerBuild Controls')
});

