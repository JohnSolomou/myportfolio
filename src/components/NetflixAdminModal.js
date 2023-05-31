import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import Admin from "../img/React_Admin_App.png";
import github from "../img/GitHub-Mark-32px.png";
export default function ReactQuizModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>React Netflix Admin App</h3>
        <a href="https://john-solomou-netflix-admin.netlify.app/">
          <img
            className="m-img"
            src={Admin}
            alt="goes to netflix admin login"
          />
          <p>click to go to Netflix Admin Login</p>
        </a>
      </ModalHeader>
      <ModalBody>
        <p className="text-danger">
          {" "}
          you can use my login jsolomou@gmail.com password of 1234
        </p>
        <p>
          Netflix Admin Application was an addition to my netflix clone app that
          is still in progress. I am using mongo db with both this application
          and my netflix clone for users and for movies.
        </p>
      </ModalBody>
      <ModalFooter>
        <a
          href="https://github.com/JohnSolomou/admin"
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
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}
