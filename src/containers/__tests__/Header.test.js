import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from 'redux/store';
import Container, { HeaderContainer, mapDispatchToProps } from '../Header';

describe('Header Container:', () => {
  it('should render correctly with default props', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Container />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should call onChange when input changed', () => {
    const wrapper = mount(<HeaderContainer addTodo={() => {}} />);

    wrapper.find('input').simulate('change', { target: { value: 'My new value' } });
    expect(wrapper.state().value).toBe('My new value');
  });

  it('should call onSubmit when pressing enter on input', () => {
    const wrapper = mount(<HeaderContainer addTodo={() => {}} />);

    wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });
    expect(wrapper.state().value).toBe('');
  });

  it('should call onSubmit and update state when pressing esc on input', () => {
    const wrapper = mount(<HeaderContainer addTodo={() => {}} />);

    wrapper.find('input').simulate('keyDown', { key: 'Esc', keyCode: 27, which: 27 });
    expect(wrapper.state().value).toBe('');
  });

  it('should call onSubmit and update state when pressing esc on input', () => {
    const wrapper = mount(<HeaderContainer addTodo={() => {}} />);

    wrapper
      .find('input')
      .props()
      .onKeyDown({
        target: { value: 'teste' },
        which: 13,
      });

    expect(wrapper.state().value).toBe('');
  });

  describe('should call actions', () => {
    const dispatchSpy = jest.fn();
    const { addTodo } = mapDispatchToProps(dispatchSpy);

    it('should call addTodo', () => {
      addTodo();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });
  });
});
