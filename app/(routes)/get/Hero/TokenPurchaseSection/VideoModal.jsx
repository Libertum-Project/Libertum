'use client'
import { useState, useRef  } from 'react';
import css from "./VideoModal.module.css"

const VideoModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  const handleCloseModal = (event) => {
    if (!videoRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div className={css.modal} onClick={handleCloseModal} ref={modalRef}>
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeButton}>x</button>
        <video controls className={css.video} ref={videoRef}>
          <source src="/howtobuyVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
