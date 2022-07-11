import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import quiz2 from "../img/quiz2.jpg";
import github from "../img/GitHub-Mark-32px.png";
export default function ReactQuizModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>React Quizzzy</h3>
        <a href="https://quizzzy-45030.web.app/">
          <img className="m-img" src={quiz2} alt="goes to Quizzzy.com" />
          <p>click for Demo</p>
        </a>
      </ModalHeader>
      <ModalBody>
        <p className="text-danger"> This is an app in progress.</p>
        <p>
          Recreated my Quiz app using React with hooks. This is an application
          for anyone to add a quiz for anyone to take. This application is using
          HTML, CSS, Javascript, svg, postgreSQL, has sign in and private routes
          with firebase authentication. This is my latest project.
        </p>
      </ModalBody>
      <ModalFooter>
        <a
          href="https://github.com/JohnSolomou/react-quizzzy"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="btn btn-outline-light btn-floating"
            alt="github"
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
