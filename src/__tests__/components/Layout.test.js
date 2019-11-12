import React from 'react';
import Layout from '../../components/Layout/Layout';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Layout />);
});

it('finds the text Toolbar in the component', () => {
  const wrapper = mount(<Layout/>)
  expect(wrapper.text()).toEqual('Toolbar, SideDrawer, Backdrop')
});

it('finds the text Testing in the component', () => {
  const props =  { "value" : "Testing" }
  const wrapper = mount(<Layout {...props}/>)
  expect((wrapper).prop('value')).toEqual('Testing')
});
