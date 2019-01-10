import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { Header } from 'components';
import { addTodo as addTodoAction } from 'redux/actions';

const propTypes = {
  addTodo: func.isRequired,
};

export class HeaderContainer extends Component {
  constructor() {
    super();

    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 27) this.setState({ value: '' });
    if (e.which === 13 || e.which === 9) {
      if (text.length !== 0) {
        this.props.addTodo(text);
        this.setState({ value: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Header
        value={this.state.value}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodoAction(text)),
});

HeaderContainer.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(HeaderContainer);
