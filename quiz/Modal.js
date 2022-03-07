import React from 'react'
import { useGlobalContext } from './context'
import {useQuizState} from "./context/QuizContext";

const Modal = () => {
    const { isModalOpen, closeModal,successMessage} = useQuizState()
    return (
        <div
            className={`${
                isModalOpen ? 'modal-container isOpen' : 'modal-container'
            }`}
        >
            <div className='modal-content'>
                <h2>congrats!</h2>
                <p>
                    {successMessage}
                </p>
                <button className='close-btn' onClick={closeModal}>
                    play again
                </button>
            </div>
        </div>
    )
}

export default Modal