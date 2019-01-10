import * as types from 'redux/types';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const toggleTodo = todo => ({ type: types.TOGGLE_TODO, todo });
export const completeAll = () => ({ type: types.COMPLETE_ALL });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
