import React from 'react';
import { objectOf, any } from 'prop-types';
import { connect } from 'react-redux';

import { Footer } from 'components';
import { clearCompleted } from 'redux/actions';
import { getFilterFromPath } from 'helpers';
import withStore from 'hoc';

const propTypes = {
  router: objectOf(any).isRequired,
};

export const FooterContainer = props => (
  <Footer {...props} activeFilter={getFilterFromPath(props.router.location.hash || '#/')} />
);

export const mapDispatchToProps = dispatch => ({
  clearCompleted: () => dispatch(clearCompleted()),
});

FooterContainer.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(withStore(FooterContainer, ['todos', 'router']));
