import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  icon: IconProp;
  name: string;
  children: ReactNode;
}

const InputField: React.FC<IProps> = ({icon, name, children}) => {
  return (
    <div className="Input-group mb-4 w-full">
      <div className="-mr-1 flex">
        <a href={`#${name}`} className="Input-group-text text-gray-500">
          <FontAwesomeIcon icon={icon} size="lg" />
        </a>
      </div>
      { children }
    </div>
  )
}
export default InputField