import { AiOutlineClose } from "react-icons/ai";
import './modal.scss';

const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
    { isOpen && (
     <div className='modal'>
      <div className="modal__wrapper">
        <div className="modal__content">
          <button className='modal__btn' onClick={() => onClose()}>
            <AiOutlineClose />
          </button>
          {children}
        </div>
      </div>
     </div>
    )}
    </>
  )
}

export default Modal