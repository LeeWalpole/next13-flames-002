import { useState } from 'react';

export default function useModal() {
  const [modals, setModals] = useState({});
  const handleModal = (id) => {
    setModals(prevModals => {
      return {
        ...prevModals,
        [id]: !prevModals[id]
      }
    });
  }
  return { modals, handleModal }
}