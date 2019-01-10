import React from 'react';
import { shallow } from 'enzyme';

import { TodoItem } from 'components';

const todo = {
  completed: true,
  todo: {},
  id: 1,
  text: 'text',
  inputRef: () => false,
  editing: false,
  editText: '',
  handleEdit: () => false,
  handleKeyDown: () => false,
  handleChange: () => false,
  handleSubmit: () => false,
};

describe('TodoItem:', () => {
  let wrapper;
  const toggleTodoSpy = jest.fn();
  const deleteTodoSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <TodoItem
        {...{
          ...todo,
          toggleTodo: toggleTodoSpy,
          deleteTodo: deleteTodoSpy,
        }}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleTodo correctly', () => {
    wrapper.find('.toggle').simulate('change');
    expect(toggleTodoSpy).toBeCalled();
  });

  it('should call deleteTodo correctly', () => {
    wrapper.find('button').simulate('click');
    expect(deleteTodoSpy).toBeCalled();
  });
});
