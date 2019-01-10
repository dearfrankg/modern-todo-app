import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from 'components';
import * as filters from 'redux/types';

const mock = {
  todos: [],
  clearCompleted: () => {},
  activeFilter: '',
};

describe('Footer:', () => {
  it('should render correctly with default props', () => {
    expect(shallow(<Footer {...mock} />)).toMatchSnapshot();
  });

  it('should render correctly SHOW_ALL filter', () => {
    expect(
      shallow(
        <Footer
          {...{
            ...mock,
            activeFilter: filters.SHOW_ALL,
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly SHOW_ACTIVE filter', () => {
    expect(
      shallow(
        <Footer
          {...{
            ...mock,
            activeFilter: filters.SHOW_ACTIVE,
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly SHOW_COMPLETED filter', () => {
    expect(
      shallow(
        <Footer
          {...{
            ...mock,
            activeFilter: filters.SHOW_COMPLETED,
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render correctly when completed items === 0', () => {
    expect(
      shallow(
        <Footer
          {...{
            ...mock,
            todos: [
              {
                id: 1,
                completed: true,
                text: 'text',
              },
            ],
          }}
        />,
      ),
    ).toMatchSnapshot();
  });
});
