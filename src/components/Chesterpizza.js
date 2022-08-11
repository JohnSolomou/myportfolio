import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import chesterpizza from "../img/chesterpizza.png";
import github from "../img/GitHub-Mark-32px.png";
export default function BHRecipeModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Chester Pizza</h3>
        <a
          href="https://shrouded-dawn-00073.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="m-img"
            src={chesterpizza}
            alt="goes to pizza store website"
          />
          <p>click for Demo</p>
        </a>
      </ModalHeader>
      <ModalBody>
        <p>
          This is a Pizza store website UI only , backend in progress. click
          here for github.This was my second application.
        </p>
      </ModalBody>
      <ModalFooter>
        <a href="https://github.com/JohnSolomou/chesterpizza">
          <img
            className="btn btn-outline-light btn-floating"
            src={github}
            alt="goes to github"
          />
        </a>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
}
