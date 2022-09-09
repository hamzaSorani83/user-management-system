import React from 'react'

interface IProps {
  show: boolean;
  closeHandler: () => void;
}

const Overlay: React.FC<IProps> = ({show, closeHandler}) => {
  
  return (
    <>
      {show && 
      <div onClick={closeHandler} className='fixed left-0 top-0 bg-black/40 w-full h-screen z-50'></div>}
    </>
  )
}

export default Overlay