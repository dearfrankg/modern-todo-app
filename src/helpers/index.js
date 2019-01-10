import React from 'react';
import * as filters from 'redux/types';

export const getListStatus = (todos) => {
  if (!todos) return false;

  const completedItems = todos.filter(todo => todo.completed).length;
  const notCompletedItems = todos.filter(todo => !todo.completed).length;

  return {
    completedItems,
    notCompletedItems,
  };
};

export const getAllCompleted = (todos) => {
  if (!todos) return false;

  return todos.filter(todo => todo.completed).length === todos.length;
};

export const getItemsLeftLabel = (todos) => {
  if (!todos) return false;

  const length = getListStatus(todos).notCompletedItems;

  if (length > 1) {
    return (
      <span>
        <strong>{length}</strong> items left
      </span>
    );
  }
  if (length === 1) {
    return (
      <span>
        <strong>{length}</strong> item left
      </span>
    );
  }

  return <span>0 items left</span>;
};

export const getFilterFromPath = (path) => {
  if (!path) return false;

  switch (path) {
    case '#/':
      return filters.SHOW_ALL;

    case '#/active':
      return filters.SHOW_ACTIVE;

    case '#/completed':
      return filters.SHOW_COMPLETED;

    default:
      return filters.SHOW_ALL;
  }
};
