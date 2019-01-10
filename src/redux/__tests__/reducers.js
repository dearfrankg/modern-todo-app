import todosReducer, { initialState } from '../reducers';
import * as types from '../types';

const todo = {
  completed: false,
  text: 'add todo',
  id: 1,
};

describe('Redux Reducers:', () => {
  it('should have a initialState', () => {
    expect(initialState.todos).toBeTruthy();
  });

  it('should return correctly when has no params', () => {
    expect(todosReducer()).toBe(false);
  });

  it('should return initial state when has no state given', () => {
    expect(todosReducer(undefined, 'action')).toEqual(initialState.todos);
  });

  it('should return correctly when action not match the patterns', () => {
    expect(todosReducer(undefined, 'something else')).toEqual(initialState.todos);
  });

  it('should return correctly when adding todos [1]', () => {
    expect(
      todosReducer(initialState.todos, {
        type: types.ADD_TODO,
        text: 'add todo',
      }),
    ).toEqual([todo]);
  });

  it('should return correctly when adding todos [2]', () => {
    expect(
      todosReducer([todo], {
        type: types.ADD_TODO,
        text: 'add todo',
      }),
    ).toEqual([{ ...todo, id: 2 }, todo]);
  });

  it('should return correctly when adding todos [3]', () => {
    expect(
      todosReducer([{ ...todo, id: 3 }, { ...todo, id: 1 }], {
        type: types.ADD_TODO,
        text: 'add todo',
      }),
    ).toEqual([{ ...todo, id: 4 }, { ...todo, id: 3 }, { ...todo, id: 1 }]);
  });

  it('should return correctly when adding todos [4]', () => {
    expect(
      todosReducer([{ ...todo, id: 1 }, { ...todo, id: 3 }], {
        type: types.ADD_TODO,
        text: 'add todo',
      }),
    ).toEqual([{ ...todo, id: 4 }, { ...todo, id: 1 }, { ...todo, id: 3 }]);
  });

  it('should return correctly when editing todos', () => {
    expect(
      todosReducer([todo], {
        type: types.EDIT_TODO,
        id: 1,
        text: 'text',
      }),
    ).toEqual([
      {
        completed: false,
        id: 1,
        text: 'text',
      },
    ]);
  });

  it('should return correctly when editing todos [2]', () => {
    expect(
      todosReducer([todo], {
        type: types.EDIT_TODO,
        id: 2,
        text: 'text',
      }),
    ).toEqual([
      {
        completed: false,
        id: 1,
        text: 'add todo',
      },
    ]);
  });

  it('should return correctly when deleting todos', () => {
    expect(
      todosReducer([todo], {
        type: types.DELETE_TODO,
        id: 1,
      }),
    ).toEqual([]);
  });

  it('should return correctly when toggling todos [1]', () => {
    expect(
      todosReducer([todo], {
        type: types.TOGGLE_TODO,
        todo: {
          completed: false,
          text: 'add todo',
          id: 1,
        },
      }),
    ).toEqual([
      {
        ...todo,
        completed: !todo.completed,
      },
    ]);
  });

  it('should return correctly when toggling todos [2]', () => {
    expect(
      todosReducer([todo, { ...todo, id: 2 }], {
        type: types.TOGGLE_TODO,
        todo: {
          ...todo,
          id: 2,
        },
      }),
    ).toEqual([
      todo,
      {
        ...todo,
        id: 2,
        completed: !todo.completed,
      },
    ]);
  });

  it('should return correctly when completing all todos', () => {
    expect(
      todosReducer([todo, { ...todo, id: 2 }], {
        type: types.COMPLETE_ALL,
      }),
    ).toEqual([
      {
        ...todo,
        completed: true,
      },
      {
        ...todo,
        id: 2,
        completed: true,
      },
    ]);
  });

  it('should return correctly when clearing all completed todos', () => {
    expect(
      todosReducer([todo, { ...todo, completed: true }], {
        type: types.CLEAR_COMPLETED,
      }),
    ).toEqual([todo]);
  });
});
