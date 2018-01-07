import React from 'react';
import renderer from 'react-test-renderer';

import CustomCheckbox from '.';

describe('CustomCheckbox', () => {
  it('default input to match snapshot', () => {
    const tree = renderer.create(<CustomCheckbox />);
    expect(tree).toMatchSnapshot();
  });

  it('checkbox with unchecked value to match snapshot', () => {
    const tree = renderer.create(<CustomCheckbox checked={false} name="Example" />);
    expect(tree).toMatchSnapshot();
  });
});
