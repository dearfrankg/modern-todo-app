/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import { objectOf, func, any } from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'redux/actions';

import { TodoItem } from 'components';

const propTypes = {
  todo: objectOf(any).isRequired,
  toggleTodo: func.isRequired,
  deleteTodo: func.isRequired,
  editTodo: func.isRequired,
};

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export class TodoItemContainer extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      editText: '',
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.state.editing) {
      this.inputNode.focus();
    }
  }

  handleEdit() {
    const { text } = this.props.todo;

    this.setState({
      editing: true,
      editText: text,
    });
  }

  handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({
        editText: this.props.todo.text,
        editing: false,
      });
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit();
    }
  }

  handleChange(event) {
    this.setState({
      editText: event.target.value,
    });
  }

  handleSubmit() {
    const val = this.state.editText.trim();

    if (val) {
      this.props.editTodo(this.props.todo.id, val);
      this.setState({
        editText: val,
        editing: false,
      });
    } else {
      this.setState({
        editText: this.props.todo.text,
        editing: false,
      });
    }
  }

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;
    const { editing, editText } = this.state;

    return (
      <TodoItem
        key={todo.id}
        inputRef={node => (this.inputNode = node)}
        todo={todo}
        editing={editing}
        editText={editText}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        handleEdit={this.handleEdit}
        handleKeyDown={this.handleKeyDown}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  editTodo: (id, text) => dispatch(actions.editTodo(id, text)),
  toggleTodo: todo => dispatch(actions.toggleTodo(todo)),
  deleteTodo: id => dispatch(actions.deleteTodo(id)),
});

TodoItemContainer.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(TodoItemContainer);
