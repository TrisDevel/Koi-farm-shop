import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupNotification = ({ show, handleClose, title, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1000); 

      return () => clearTimeout(timer); 
    }
  }, [show, handleClose]);

  return (
    <Modal show={show} onHide={handleClose} centered style={{ background: 'transparent !important' }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#C54125', textAlign: 'center' }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'transparent' }}>
        <p>{message}</p>
      </Modal.Body>
    </Modal>
  );
};

export default PopupNotification;
