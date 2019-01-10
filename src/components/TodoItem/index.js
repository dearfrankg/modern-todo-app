import React from "react";
import { objectOf, any, func, bool, string } from "prop-types";
import classNames from "classnames";

const propTypes = {
  inputRef: func.isRequired,
  todo: objectOf(any).isRequired,
  toggleTodo: func.isRequired,
  editing: bool.isRequired,
  editText: string.isRequired,
  deleteTodo: func.isRequired,
  handleEdit: func.isRequired,
  handleKeyDown: func.isRequired,
  handleChange: func.isRequired,
  handleSubmit: func.isRequired
};

const TodoItem = ({
  inputRef,
  todo,
  toggleTodo,
  editing,
  editText,
  deleteTodo,
  handleEdit,
  handleKeyDown,
  handleChange,
  handleSubmit
}) => (
  <li
    key={todo.id}
    className={classNames({
      completed: todo.completed,
      editing
    })}
  >
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo)}
      />

      <label onDoubleClick={handleEdit}>{todo.text}</label>

      <button className="destroy" onClick={() => deleteTodo(todo.id)} />
    </div>

    <input
      ref={inputRef}
      className="edit"
      value={editText}
      onBlur={handleSubmit}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  </li>
);

TodoItem.propTypes = propTypes;

export default TodoItem;
