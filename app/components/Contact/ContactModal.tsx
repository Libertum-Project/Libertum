'use client';
import React, { useRef, useEffect } from 'react';
import css from './ContactModal.module.css';
import { ContactForm } from './contactForm';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={css.container}>
      <div ref={modalRef} className={css.modal}>
        <div className={css.formContainer}>
          <button onClick={onClose} className={css.buttonClose}>
            x
          </button>
          <ContactForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
