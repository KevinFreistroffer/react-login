import React from 'react';
import { Modal } from '@material-ui/core';

const modalBodyStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.25)',
};
const modalContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '300px',
  height: '300px',
  margin: 'auto auto',
  backgroundColor: 'white',
  padding: '3rem',
  color: 'white !important',
};

const modalTextStyles = {
  fontWeight: 'bold',
  fontSize: '1.25rem',
};

const modalDismissStyles = {
  color: 'rgba(0,0,0,0.5)',
  cursor: 'pointer',
};

const ErrorModal = (props) => {
  return (
    <Modal
      open={props.isOpen}
      // children={children}
      onClose={() => {}}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div id='modal-body' style={modalBodyStyles}>
        <div id='modal-content' style={modalContentStyles}>
          <p style={modalTextStyles}>{props.text}</p>
          <p style={modalDismissStyles} onClick={props.closeModal}>
            Dismiss
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
