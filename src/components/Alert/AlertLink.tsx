import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';

export interface IProps {
  link: string;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button: React.FC<IProps> = ({link, className, children, ...rest}) => {
  className = ['Alert underline' , className].join(" ");
  
  return (
    <Link to={link} className={className} {...rest}>
      { children }
    </Link>
  )
}

export default Button