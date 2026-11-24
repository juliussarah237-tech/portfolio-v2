// Global modal state — lets any component (CertificateCard, ProjectCard, etc.)
// open the shared <Modal> with arbitrary content, without prop-drilling
// open/close state down through every section.
//
// Usage:
//   // wrap once near the root:
//   <ModalProvider><App /></ModalProvider>
//
//   // anywhere deep in the tree:
//   const { openModal, closeModal } = useModal();
//   openModal(<CertificateDetail cert={cert} />);
import { createContext, useContext, useState, useCallback } from 'react';
import Modal from '../components/common/Modal';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [content, setContent] = useState(null);
  const isOpen = content !== null;

  const openModal = useCallback((node) => setContent(node), []);
  const closeModal = useCallback(() => setContent(null), []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a <ModalProvider>');
  }
  return ctx;
}