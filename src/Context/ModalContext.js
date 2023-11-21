// Importing necessary functions from React library

import { createContext, useContext, useState } from "react";

// Creating a context for managing the modal state and actions
const ModalContext = createContext();

// Creating and exporting a ModalProvider component
export const ModalProvider = ({ children }) => {
  // Using useState hook to manage the showModal state
  const [showModal, setShowModal] = useState(false);

  // Function to show the modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  // Function to close/hide the modal
  const closeModalHandler = () => {
    setShowModal(false);
  };

  // Returning the ModalProvider with a value prop containing modal-related data and functions
  return (
    <ModalContext.Provider value={{ showModal, showModalHandler, closeModalHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to consume the modal context anywhere in the app
export const useModalContext = () => {
  return useContext(ModalContext);
};
