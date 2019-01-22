/* eslint-disable no-undef */
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1')).toMatchSelector('.greeting');
  expect(wrapper).toHaveText('hello world, albert!');
});
