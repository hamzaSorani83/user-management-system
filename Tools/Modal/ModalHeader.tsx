import React from 'react'

interface IProps {
  title: string;
  closeHandler: () => void;
  className?: string;
}

const ModalHeader: React.FC<IProps> = ({ className, closeHandler, title }) => {
  className = [className, "flex justify-between items-center w-full p-6 pb-0"].join(" ");
  
  return (
    <div className={className}>
      <h3 className="mb-4 capitalize text-xl font-medium text-gray-900 dark:text-white">
        { title }
      </h3>
    <button onClick={closeHandler} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-2 -mt-4 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Close modal</span>
      </button> 
  </div>
  )
}

export default ModalHeader