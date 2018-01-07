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
};

Checkbox.defaultProps = {
  onClick: ()=> {},
};

export default Checkbox;
