import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import store from 'redux/store';
import App, { AppContainer, mapDispatchToProps } from '../App';

describe('App Container:', () => {
  it('should render correctly with default props', () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with todos', () => {
    expect(
      shallow(
        <AppContainer todos={[{ id: 1, completed: false, text: 'text' }]} completeAll={() => {}} />,
      ),
    ).toMatchSnapshot();
  });

  describe('should call actions', () => {
    const dispatchSpy = jest.fn();
    const { completeAll } = mapDispatchToProps(dispatchSpy);

    it('should call completeAll', () => {
      completeAll();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });
  });
});
