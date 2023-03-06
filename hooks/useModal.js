import { useState } from 'react';

// Define a custom hook that manages the state of multiple modals
export default function useModal() {
  // Initialize the state to an empty object
  const [modals, setModals] = useState({});

  // Define a function to toggle the state of a modal with a given ID
  const handleModal = (...ids) => {
    // Update the state by merging the previous state with the new state
    setModals(prevModals => {
      let updatedModals = { ...prevModals };
      ids.forEach(id => {
        updatedModals = { ...updatedModals, [id]: !updatedModals[id] };
      });
      console.log('updatedModals:', updatedModals);
      return updatedModals;
    });
  }

  // Return an object with the current state of the modals and the function to toggle their state
  return { modals, handleModal }
}



/*
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
*/