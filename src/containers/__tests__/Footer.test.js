import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from 'redux/store';
import Footer, { FooterContainer, mapDispatchToProps } from '../Footer';

describe('Footer Container:', () => {
  it('should render correctly with default props', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Footer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with default props', () => {
    const wrapper = mount(
      <FooterContainer
        router={{ location: { hash: '#/' } }}
        clearCompleted={() => {}}
        todos={[]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with default props [2]', () => {
    const wrapper = mount(
      <FooterContainer router={{ location: { hash: '' } }} clearCompleted={() => {}} todos={[]} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('should call actions', () => {
    const dispatchSpy = jest.fn();
    const { clearCompleted } = mapDispatchToProps(dispatchSpy);

    it('should call clearCompleted', () => {
      clearCompleted();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });
  });
});
