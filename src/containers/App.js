import React from "react";
import { arrayOf, any, func } from "prop-types";
import { connect } from "react-redux";

import { Header, TodoList, Footer } from "containers";
import { Info } from "components";

import { completeAll as completeAllAction } from "redux/actions";
import { getAllCompleted } from "helpers";
import withStore from "hoc";

const propTypes = {
  todos: arrayOf(any).isRequired,
  completeAll: func.isRequired
};

export const AppContainer = ({ todos, completeAll }) => {
  const hasTodos = todos.length > 0;
  const isAllChecked = getAllCompleted(todos);

  return (
    <div>
      <section className="todoapp">
        <Header />

        {hasTodos && (
          <div>
            <section className="main">
              <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={completeAll}
                checked={isAllChecked}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>

              <TodoList />
            </section>
            <Footer />
          </div>
        )}
      </section>

      <Info />
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  completeAll: () => dispatch(completeAllAction())
});

AppContainer.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(withStore(AppContainer, ["todos"]));
