import React from 'react';
import { shallow } from 'enzyme';

import { Header } from 'components';

const mock = {
  value: '',
  handleSubmit: () => {},
  handleChange: () => {},
};

describe('Header:', () => {
  it('should render correctly', () => {
    expect(shallow(<Header {...mock} />)).toMatchSnapshot();
  });
});
