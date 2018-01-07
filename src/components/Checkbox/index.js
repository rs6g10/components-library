import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CustomCheckbox from '../CustomCheckbox';
import './styles.css';

/**
 * Checkbox input component.
 */
let spanEl;
let labelEl;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    if(this.props.disabled) {
      return;
    }
    const that = this;
    const [event] = args;
    this.setState({
      checked: !that.state.checked,
    });
    if (event.target === spanEl || event.target === labelEl) {
      event.stopPropagation();
      return;
    }

    this.props.onClick(...args);
  }

  render() {
    const { className, label } = this.props;
    return (
      <label
        ref={(el) => {
          labelEl = el;
        }}
        className={classnames('label', className)}
        onClick={this.handleClick}
      >
        <CustomCheckbox checked={this.state.checked} {...this.props} />
        <span
          className="name"
          ref={(el) => {
            spanEl = el;
          }}
        >
        {label}
      </span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  /**
   * The text you'd like to show next to the checkbox.
   */
  label: PropTypes.string.isRequired,

  /**
   * Any additional css classes.
   */
  className: PropTypes.string,

  /**
   * Function called when checkbox/label is clicked.
   */
  onClick: PropTypes.func,
  /**
   * If the checkbox has a default value of checked or not
   */
  checked: PropTypes.bool,
  /**
   * If the checkbox is disabled or not
   */
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  onClick: () => {
  },
  checked: false,
};

export default Checkbox;
