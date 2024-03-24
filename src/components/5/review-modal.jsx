import React from "react";
import Modal from 'react-modal';
import './review-modal.css';

const ReviewModal = ({ isOpen, closeModaL }) => {

    const onSubmit = (e) => {
        e.preventDefault (); //не обновляет страницу сайта
        alert("Дякую за відгук");
        closeModaL();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModaL} 
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.80)',
            },
            content: {
              position: 'absolute',
              top: '120px',
              left: '460px',
              right: '460px',
              bottom: '120px',
              border: '1px solid #ccc',
              background: '#F0F0F0',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '5px',
              outline: 'none',
              padding: '45px 85px 60px 85px',
            }
          }}
        >
            <h2>Залишити відгук</h2>
            <form className="modal-form" onSubmit={onSubmit} action="">
                <label className="modal-label" htmlFor="firstName">
                    Ваше ім'я: <br />
                    <input className="modal-input" name="firstName" type="text" placeholder="ваше ім'я" /></label>
                <label className="modal-label" htmlFor="review">
                    Напишите ваши враження про нас: <br />
                    <input className="modal-input" name="review" type="text" placeholder="текст відгука" /></label>
                <button className="form-btn">Відправити</button>
            </form>
        </Modal>
    );
};

export default ReviewModal;