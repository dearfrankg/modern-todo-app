import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { initialState } from 'redux/reducers';
import * as filters from 'redux/types';
import TodoListContainer, {
  TODO_FILTERS,
  showAll,
  showCompleted,
  showActive,
} from 'containers/TodoList';

const middlewares = [];
const mockStore = configureStore(middlewares);

const state = {
  router: {
    location: {
      hash: '#/',
    },
  },
  todos: initialState.todos,
};
const store = mockStore(state);

describe('TodoList Container:', () => {
  it('should render correctly with default props', () => {
    expect(
      shallow(
        <Provider store={store}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with default filter', () => {
    expect(
      mount(
        <Provider store={store}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with default filter but hash empty[2]', () => {
    const localState = {
      router: {
        location: {
          hash: '',
        },
      },
      todos: initialState.todos,
    };
    const localStore = mockStore(localState);

    expect(
      mount(
        <Provider store={localStore}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with SHOW_ACTIVE filter', () => {
    const localState = {
      router: {
        location: {
          hash: '#/active',
        },
      },
      todos: initialState.todos,
    };
    const localStore = mockStore(localState);

    expect(
      mount(
        <Provider store={localStore}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly with SHOW_COMPLETED filter', () => {
    const localState = {
      router: {
        location: {
          hash: '#/completed',
        },
      },
      todos: initialState.todos,
    };
    const localStore = mockStore(localState);

    expect(
      mount(
        <Provider store={localStore}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly when filter selected and some todos', () => {
    const localState = {
      router: {
        location: {
          hash: '#/completed',
        },
      },
      todos: [{ id: 1, text: 'text', completed: true }],
    };
    const localStore = mockStore(localState);

    expect(
      mount(
        <Provider store={localStore}>
          <TodoListContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });

  describe('TODO_FILTERS:', () => {
    it('should return correctly with SHOW_ALL', () => {
      expect(TODO_FILTERS[filters.SHOW_ALL]).toBe(showAll);
      expect(showAll()).toBe(true);
    });

    it('should return correctly with SHOW_COMPLETED', () => {
      expect(TODO_FILTERS[filters.SHOW_COMPLETED]).toBe(showCompleted);
      expect(showCompleted({ completed: true })).toBe(true);
    });

    it('should return correctly with SHOW_ACTIVE', () => {
      expect(TODO_FILTERS[filters.SHOW_ACTIVE]).toBe(showActive);
      expect(showActive({ completed: false })).toBe(true);
    });
  });
});
