import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Checkbox from '.';
import CustomCheckbox from '../CustomCheckbox';

describe('Checkbox', () => {
  it('should be uncontrolled by default', () => {
    const onClick = jest.fn();
    const checkbox = (
      <Checkbox label="Apple" onClick={onClick} />
    );

    const component = mount(checkbox);
    const customCheckBox = component.find('CustomCheckbox');

    expect(customCheckBox.prop('checked')).toEqual(false);
    customCheckBox.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should be controlled when passed checked prop', () => {
    let component;

    component = mount(
      <Checkbox label="Apple" checked />,
    );

    const customCheckBox = component.find('CustomCheckbox');

    expect(customCheckBox.prop('checked')).toEqual(true);
    customCheckBox.simulate('change');
    expect(customCheckBox.prop('checked')).toEqual(true);
  });
});
