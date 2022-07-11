import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import Quiz from "../img/Quizzzy.png";
import github from "../img/GitHub-Mark-32px.png";
export default function QuizzzyModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Quizzzy</h3>
        <a
          href="https://mighty-retreat-41731.herokuapp.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <img className="m-img" src={Quiz} alt="goes to Quizzzy.com" />
          <p>click for Demo</p>
        </a>
      </ModalHeader>

      <ModalBody>
        <p>
          Created a Quiz app. This is an application for teachers to add a quiz
          for students to take.This application is using HTML, CSS, Javascript,
          svg, and local storage.This was my first application.
        </p>
      </ModalBody>
      <ModalFooter>
        <a href="https://github.com/JohnSolomou/quizzzy">
          <img
            className="btn btn-outline-light btn-floating"
            alt=""
            src={github}
          />
        </a>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
}
