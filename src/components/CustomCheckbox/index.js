import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

/**
 * Custom Checkbox component used as part of the <Checkbox> component.
 * This mimics an <input /> native component mimicking the checkbox behaviour.
 */
const CustomCheckbox = ({ checked, disabled, boxClassName, checkClassName }) => (
  <span className={classnames(boxClassName, 'checkbox', disabled ? 'disabled' : '')}>
      <i className={classnames(checkClassName, 'check')}
         style={{ visibility: checked ? 'visible' : 'hidden' }} />
    </span>
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
   * Any additional css classes for the checkbox `box` container
   */
  boxClassName: PropTypes.string,
  /**
   * Any additional css classes for the `check` style and not the container.
   */
  checkClassName: PropTypes.string,
  /**
   * If the element needs to be disabled
   */
  disabled: PropTypes.bool,
};

CustomCheckbox.defaultProps = {
  checked: false,
};

export default CustomCheckbox;
