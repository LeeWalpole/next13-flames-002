import { useState } from 'react';
import Modal from '../components/ModalNav';

const ParentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [childModalIsOpen, setChildModalIsOpen] = useState(false);

  const openChildModal = () => {
    setIsOpen(false);
    setChildModalIsOpen(true);
  }

  const closeParentModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Parent Modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} id="parent-modal" setIsOpen={setIsOpen}>
          <h2>Parent Modal Content</h2>
          <button onClick={openChildModal}>Open Child Modal</button>
          <button onClick={closeParentModal}>Close Parent Modal</button>
        </Modal>
      )}
      {childModalIsOpen && (
        <Modal isOpen={childModalIsOpen} id="child-modal" setIsOpen={setChildModalIsOpen} parentSetIsOpen={setIsOpen}>
          <h2>Child Modal Content</h2>
          <button onClick={() => setChildModalIsOpen(false)}>Close Child Modal</button>
        </Modal>
      )}
    </>
  );
}

export default ParentModal;
