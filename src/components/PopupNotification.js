import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupNotification = ({ show, handleClose, title, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleClose();
      }, 10000); 

      return () => clearTimeout(timer); 
    }
  }, [show, handleClose]);

  return (
    <Modal show={show} onHide={handleClose} centered style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupNotification;
