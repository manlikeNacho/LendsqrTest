import React, { ReactNode, useEffect, useRef } from 'react';
import './modal.style.scss';

interface ModalProps {
    show: boolean;
    setShow: (v: boolean) => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, setShow, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setShow(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    if (!show) return null;

    return (
            <div className="modal-content" ref={modalRef}>
                {children}
            </div>
    );
};

export default Modal;
