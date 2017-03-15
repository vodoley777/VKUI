import './Button.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Button');

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.object,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    appearance: PropTypes.oneOf(['primary', 'default', 'danger']),
    children: PropTypes.node
  };
  static defaultProps = {
    style: {},
    alignment: 'left',
    appearance: 'default',
    children: ''
  };
  render () {
    const { style, children, alignment, appearance } = this.props;
    const modifiers = {
      'Button--left': alignment === 'left',
      'Button--center': alignment === 'center',
      'Button--right': alignment === 'right',
      'Button--primary': appearance === 'primary',
      'Button--default': appearance === 'default',
      'Button--danger': appearance === 'danger'
    };
    const nativeProps = removeObjectKeys(this.props, ['alignment', 'appearance']);

    return (
      <Tappable
        component="button"
        className={classnames(baseClassNames, modifiers)}
        style={style}
        {...nativeProps}
      >
        {children}
      </Tappable>
    );
  }
}
