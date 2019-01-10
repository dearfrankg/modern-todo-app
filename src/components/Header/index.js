import React from 'react';
import { string, func } from 'prop-types';

const propTypes = {
  value: string.isRequired,
  handleSubmit: func.isRequired,
  handleChange: func.isRequired,
};

const Header = ({ value, handleSubmit, handleChange }) => (
  <header className="header">
    <h1>
todos
    </h1>

    <input
      autoFocus
      placeholder="What needs to be done?"
      type="text"
      className="new-todo"
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  </header>
);

Header.propTypes = propTypes;

export default Header;
