import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="Model">
      <div className="contaner">
        <button
          className="cancel-X"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="title">
          <h1>Are You Want to continue ?</h1>
        </div>
        <div className="body">
          <p>
            Next page is Awesome ! Yopu should move forword you will enjoy it.
          </p>
        </div>
        <div className="footer">
          <button
            className="cancel"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button className="continue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
