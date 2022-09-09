import React, { ReactNode } from 'react'

interface IProps {
  className?: string;
  children: ReactNode
}

const ModalBody: React.FC<IProps> = ({ children, className }) => {
  className = [className, "py-6 px-6 lg:px-8"].join(" ");
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default ModalBody