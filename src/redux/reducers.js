import * as types from 'redux/types';

export const initialState = {
  todos: [],
};

const todos = (state = initialState.todos, action) => {
  if (!action) return false;

  switch (action.type) {
    case types.ADD_TODO: {
      const maxId =
        state.length === 0
          ? 0
          : state.reduce((prev, current) => (prev.id > current.id ? prev : current)).id;

      return [
        {
          id: maxId + 1,
          text: action.text,
          completed: false,
        },
        ...state,
      ];
    }

    case types.DELETE_TODO: {
      return state.filter(todo => todo.id !== action.id);
    }

    case types.EDIT_TODO: {
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, text: action.text };

        return todo;
      });
    }

    case types.TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.todo.id) return { ...todo, completed: !action.todo.completed };

        return todo;
      });
    }

    case types.COMPLETE_ALL: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
      }));
    }

    case types.CLEAR_COMPLETED: {
      return state.filter(todo => todo.completed === false);
    }

    default:
      return state;
  }
};

export default todos;
