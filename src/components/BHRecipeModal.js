import React from "react";
import ModalFooter from "../modals/components/ModalFooter";
import Modal from "../modals/components/Modal";
import ModalBody from "../modals/components/ModalBody";
import ModalHeader from "../modals/components/ModalHeader";
import bh from "../img/bh.png";
import github from "../img/GitHub-Mark-32px.png";
export default function BHRecipeModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>BH Recipe</h3>
        <a
          href="https://bhrecipe.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="m-img" src={bh} alt="goes to BHRecipe.com" />
          <p>click for Demo</p>
        </a>
      </ModalHeader>
      <ModalBody>
        <p>
          This is a Gluten-free Search app. Use this application to find
          delicious alternative with out the gluten. Developed front-end user
          experience using HTML, CSS, CSS Grid, Javascript, and RESTful APIs.
          click here for github.This was my second application.
        </p>
      </ModalBody>
      <ModalFooter>
        <a href="https://github.com/JohnSolomou/capstone2">
          <img
            className="btn btn-outline-light btn-floating"
            src={github}
            alt="goes to github"
          />
        </a>
        <button onClick={props.close} className="btn btn-primary">
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}
