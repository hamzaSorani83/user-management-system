import React, { ReactNode } from 'react'
import { IVarient } from '../../FormComponent';

export interface IButton {
  varient: IVarient;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button: React.FC<IButton> = ({varient, className, children, ...rest}) => {
  const buttonVarient = "Btn" + varient[0].toUpperCase() + varient.substring(1);
  className = ['Btn', buttonVarient , className].join(" ");
  
  return (
    <button className={className} {...rest}>
      { children }
    </button>
  )
}

export default Button