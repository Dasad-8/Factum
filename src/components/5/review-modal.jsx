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
              top: '40px',
              left: '360px',
              right: '360px',
              bottom: '40px',
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
            <form onSubmit={onSubmit} action="">
                <label className="label-form" htmlFor="firstName">
                    Ваше ім'я: 
                    <input name="firstName" type="text" placeholder="ваше ім'я" /></label>
                <label htmlFor="review">
                    Напишите ваши враження про нас:
                    <input name="review" type="text" placeholder="текст відгука" /></label>
                <button>Відправити</button>
            </form>
        </Modal>
    );
};

export default ReviewModal;