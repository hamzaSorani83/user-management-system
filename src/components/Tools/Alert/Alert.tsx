import React, { ReactNode } from 'react'
import { IVarient } from '../../Tools/Formik/FormComponent';

export interface IProps {
  varient: IVarient;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

export interface IAlert {
  varient: IVarient;
  message: ReactNode;
}

const Alert: React.FC<IProps> = ({varient, className, children, ...rest}) => {
  const alertVarient = "Alert" + varient[0].toUpperCase() + varient.substring(1);
  className = ['Alert', alertVarient , className].join(" ");
  
  return (
    <div className={className} {...rest}>
      { children }
    </div>
  )
}

export default Alert