import React, { ReactNode, useState } from "react";
import { IVarient } from "../Formik/FormComponent";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import { Overlay } from '../'

interface IProps {
  show: boolean;
  varient: IVarient;
  title: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  children: ReactNode
}

const Modal: React.FC<IProps> = ({ show, varient, title, className, headerClassName, bodyClassName, children }) => {
  const [showModal, setShowModal] = useState(show);
  const closeHandler = () => {
    setShowModal(false);
  }
  className = [className, showModal ? '' : 'hidden', "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 h-auto p-4 w-full max-w-md"].join(" ")
  
  return (
    <>
      <Overlay show={showModal} closeHandler={closeHandler} />
      <div className={className}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <ModalHeader title={title} closeHandler={closeHandler} className={headerClassName} />
          <ModalBody className={bodyClassName}>
            {children}
          </ModalBody>
        </div>
      </div>
    </>
    
  );
}

export default Modal