import React from 'react';
import { shallow } from 'enzyme';

import { Info } from 'components';

describe('Info:', () => {
  it('should render correctly', () => {
    expect(shallow(<Info />)).toMatchSnapshot();
  });
});
