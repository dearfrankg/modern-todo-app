import React from 'react';
import { objectOf, arrayOf, any } from 'prop-types';

import { TodoItem } from 'containers';
import * as filters from 'redux/types';
import { getFilterFromPath } from 'helpers';
import withStore from 'hoc';

const propTypes = {
  todos: arrayOf(any).isRequired,
  router: objectOf(any).isRequired,
};

export const showAll = () => true;
export const showActive = todo => !todo.completed;
export const showCompleted = todo => todo.completed;

export const TODO_FILTERS = {
  [filters.SHOW_ALL]: showAll,
  [filters.SHOW_ACTIVE]: showActive,
  [filters.SHOW_COMPLETED]: showCompleted,
};

const TodoListContainer = ({ router, todos }) => {
  const filter = getFilterFromPath(router.location.hash || '#/');
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);

  const list = [];

  filteredTodos.forEach(item => list.push(<TodoItem key={item.id} todo={item} />));

  return (
    <ul className="todo-list">
      {list}
    </ul>
  );
};

TodoListContainer.propTypes = propTypes;

export default withStore(TodoListContainer, ['todos', 'router']);
