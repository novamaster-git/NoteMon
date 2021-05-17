import React from 'react';
import ReactModal from 'react-modal';
import '../App.css';
  ReactModal.setAppElement('#root');
const Modal = (props) => {
    return(
        <ReactModal isOpen={props.isOpen}>
          {props.children}
        </ReactModal>
    )
}
export default Modal;