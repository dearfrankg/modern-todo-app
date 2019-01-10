import React from 'react';
import {
  arrayOf, any, func, string,
} from 'prop-types';
import { Link } from 'react-router-dom';

import { getItemsLeftLabel, getListStatus } from 'helpers';
import * as filters from 'redux/types';

const propTypes = {
  todos: arrayOf(any).isRequired,
  clearCompleted: func.isRequired,
  activeFilter: string.isRequired,
};

const Footer = ({ todos, clearCompleted, activeFilter }) => {
  const hasTodos = todos.length > 0;
  const hasCompletedItems = getListStatus(todos).completedItems > 0;

  const footerComponent = (
    <div>
      <span className="todo-count">
        {getItemsLeftLabel(todos)}
      </span>

      <ul className="filters">
        <li>
          <Link className={activeFilter !== filters.SHOW_ALL ? '' : 'selected'} to="#/">
            All
          </Link>
        </li>
        <li>
          <Link className={activeFilter !== filters.SHOW_ACTIVE ? '' : 'selected'} to="#/active">
            Active
          </Link>
        </li>
        <li>
          <Link
            className={activeFilter !== filters.SHOW_COMPLETED ? '' : 'selected'}
            to="#/completed"
          >
            Completed
          </Link>
        </li>
      </ul>

      {hasCompletedItems && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );

  return (
    <footer className="footer">
      {hasTodos && footerComponent}
    </footer>
  );
};

Footer.propTypes = propTypes;

export default Footer;
