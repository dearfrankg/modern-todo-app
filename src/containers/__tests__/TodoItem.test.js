import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TodoItemContainer, { mapDispatchToProps } from 'containers/TodoItem';

const middlewares = [];
const mockStore = configureStore(middlewares);

const state = {};
const store = mockStore(state);

describe('TodoItem Container:', () => {
  it('should render correctly with default props', () => {
    expect(
      shallow(
        <Provider store={store}>
          <TodoItemContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  describe('should call actions', () => {
    const dispatchSpy = jest.fn();
    const { toggleTodo, deleteTodo, editTodo } = mapDispatchToProps(dispatchSpy);

    it('should call editTodo', () => {
      editTodo();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });

    it('should call toggleTodo', () => {
      toggleTodo();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });

    it('should call deleteTodo', () => {
      deleteTodo();
      const spyLastCall = dispatchSpy.mock.calls[0][0];
      expect(spyLastCall.type).toEqual(dispatchSpy.mock.calls[0][0].type);
    });
  });
});
