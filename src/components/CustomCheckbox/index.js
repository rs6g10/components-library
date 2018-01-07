import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

/**
 * Custom Checkbox component used as part of the <Checkbox> component.
 * This mimics an <input /> native component mimicking the checkbox behaviour.
 */
const CustomCheckbox = ({ checked, name, boxClassName, checkClassName }) => (
  <div>
    <span className={classnames(boxClassName, 'check')}>
      <i className={classnames(checkClassName, 'check')} style={{ visibility: checked ? 'visible' : 'hidden' }} />
    </span>
    <span className="name">{name}</span>
  </div>
);

CustomCheckbox.propTypes = {
  /**
   * Controlled value for custom checkbox. This currently supports only
   * type `boolean`. This can be further extended to support `indeterminate`.
   * That would mean, the value of prop `checked` could then be one of types
   * [true, false, 'indeterminate'] and an `indeterminate` type could just mean
   * a different classname, this is because for the sake of simplicity of this
   * component for being the first draft version.
   */
  checked: PropTypes.bool,
  /**
   * Indicates the `label` of the custom checkbox field
   */
  name: PropTypes.string,
  /**
   * Any additional css classes for the checkbox `box` container
   */
  boxClassName: PropTypes.string,
  /**
   * Any additional css classes for the `check` style and not the container.
   */
  checkClassName: PropTypes.string,
};

CustomCheckbox.defaultProps = {
  checked: false,
  name: '',
}

export default CustomCheckbox;
