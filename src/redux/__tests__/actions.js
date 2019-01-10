import { addTodo, deleteTodo, editTodo, toggleTodo, completeAll, clearCompleted } from '../actions';

import * as types from '../types';

describe('Redux Actions:', () => {
  it('addTodo():', () =>
    expect(addTodo('add todo')).toMatchObject({
      type: types.ADD_TODO,
      text: 'add todo',
    }));

  it('editTodo():', () =>
    expect(editTodo(12, 'text')).toMatchObject({
      type: types.EDIT_TODO,
      id: 12,
      text: 'text',
    }));

  it('deleteTodo():', () =>
    expect(deleteTodo(12)).toMatchObject({
      type: types.DELETE_TODO,
      id: 12,
    }));

  it('toggleTodo():', () =>
    expect(toggleTodo({ id: 1, completed: false })).toMatchObject({
      type: types.TOGGLE_TODO,
      todo: {
        id: 1,
        completed: false,
      },
    }));

  it('completeAll():', () =>
    expect(completeAll()).toMatchObject({
      type: types.COMPLETE_ALL,
    }));

  it('clearCompleted():', () =>
    expect(clearCompleted()).toMatchObject({
      type: types.CLEAR_COMPLETED,
    }));
});
