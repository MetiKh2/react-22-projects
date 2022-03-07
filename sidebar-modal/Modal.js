import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useGGlobalContext} from "./Context";
const Modal = () => {
    const {isModalOpen,closeModal}=useGGlobalContext()
    return (
        <div className={`modal-overlay ${isModalOpen?'show-modal':''}`}>
            <div className={'modal-container'}>
                <h3>Modal Content</h3>
                <button onClick={closeModal} className={'close-modal-btn'}><CloseIcon/></button>
            </div>
        </div>
    );
};

export default Modal;