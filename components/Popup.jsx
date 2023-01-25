import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, id, children }) => {
  const modalRoot = useRef(null);
  useEffect(() => {
    if (!modalRoot.current) {
      modalRoot.current = document.createElement(`div-${id}`);
      document.body.appendChild(modalRoot.current);
    }
    return () => document.body.removeChild(modalRoot.current);
  }, [id]);
  if (!isOpen) {
    return null
  }

  return createPortal(children, modalRoot.current);
}

export default Modal
