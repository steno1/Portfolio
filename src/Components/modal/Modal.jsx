// Importing the CSS file for modal styles

import "./modal.css";

import Card from '../card/Card';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useModalContext } from "../../Context/ModalContext";

// Importing necessary components and functions from libraries




// Importing the custom hook for accessing modal context


// Defining the Modal component
const Modal = ({ className, children }) => {
  // Using the useModalContext hook to get showModal state and closeModalHandler function
  const { showModal, closeModalHandler } = useModalContext();

  // Returning JSX to create the modal
  return (
    <Fragment>
      {/* Rendering the modal only if showModal is true */}
      {showModal && ReactDOM.createPortal(
        <>
          {/* Section acting as a backdrop; onClick triggers closeModalHandler */}
          <section id='backdrop' onClick={closeModalHandler}> </section>
          {/* Rendering the Card component with provided className and children */}
          <Card className={className}>
            {children}
          </Card>
        </>, document.querySelector("#overlays")
      )}
    </Fragment>
  );
};

// Exporting the Modal component as the default export
export default Modal;
