import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import github from "../img/GitHub-Mark-32px.png";
import ToDo from "../img/ToDo.png";
export default function ToDoModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>To Do </h3>
        <a
          href="https://auth-fb-ar.firebaseapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="m-img" src={ToDo} alt="goes to " />
          <p>click for Demo</p>
        </a>
      </ModalHeader>
      <ModalBody>
        <p>
          Created To Do app using React, firebase authentication and
          firestore.This is my third application.
        </p>
      </ModalBody>
      <ModalFooter>
        <a href="https://github.com/JohnSolomou/capstone-3-todo-app">
          <img
            className="btn btn-outline-light btn-floating"
            src={github}
            alt=""
          />
        </a>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
}
