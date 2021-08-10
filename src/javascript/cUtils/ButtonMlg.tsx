/* eslint-disable react/button-has-type */
// ---Dependencys
import React, { ReactElement } from 'react';

// ------------------------------------------ TYPES-----------------------------------------
type Variant = 'transparent-white' | 'yellow' | 'block' | 'blue' | 'purple' | 'red' | 'green' | 'blue-outline' | 'yellow-outline' ;
type WidthB =`${number}${'px' | '%'}` | 'block'

interface Props {
    htmlType: 'submit' | 'button';
    label?: string;
    variant: Variant;
    size: 'big' | 'small' | 'mini' ;
    widthB?: WidthB;
    icon?: ReactElement;
    estilo?: string;
    value?: string | number;
    onClick?: () => any;
    someID?: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ButtonMlg (props: Props) : ReactElement {
  const {
    htmlType,
    label,
    variant,
    size,
    widthB,
    icon,
    estilo,
    value,
    onClick,
    someID
  } = props;

  function onClickEvent() {
    if(variant !== 'block' && onClick){
      onClick();
    }
  }

  const checkVariant = () => {
    switch (variant) {
      case 'yellow':
        return 'btn-mlg-yellow';
      case 'block':
        return 'btn-mlg-block';
      case 'blue':
        return 'btn-mlg-blue';
      case 'purple':
        return 'btn-mlg-purple';
      case 'red':
        return 'btn-mlg-red';
      case 'green':
        return 'btn-mlg-green';
      case 'blue-outline':
        return 'btn-mlg-blue-outline';
      case 'yellow-outline':
        return 'btn-mlg-yellow-outline';
      case 'transparent-white':
        return 'btn-mlg-transparent-white';
      default:
        return 'btn-mlg-yellow';
    }
  };
  const checkSize = () => {
    switch (size) {
      case 'big':
        return 'btn-mlg-big ';
      case 'small':
        return 'btn-mlg-small ';
      case 'mini':
        return 'btn-mlg-mini ';
      default:
        return '';
    }
  };
  const checkWidth = () => {
    let ancho = '125px';
    if (widthB && widthB !== 'block') {
      ancho = widthB;
    }
    if (widthB === 'block') {
      return {};
    }
    return { width: ancho };
  };
  if (htmlType === 'submit') {
    const newLocal = (
      <button
        type={variant === 'block' ? 'button' : 'submit'}
        style={checkWidth()}
        value={value}
        id={someID}
        onClick={onClickEvent}
        className={estilo || 'btn-mlg ' + checkVariant() + ' ' + checkSize()}
      >
        {icon}
        {label}
      </button>
    );
    return newLocal;
  }
  return (
    <button
      type="button"
      style={checkWidth()}
      value={value}
      id={someID}
      onClick={onClickEvent}
      className={estilo || 'btn-mlg ' + checkVariant() + ' ' + checkSize()}
    >
      {icon}
      {label}
    </button>
  );
}

export default ButtonMlg;
