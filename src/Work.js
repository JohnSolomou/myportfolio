import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDo from "./img/ToDo.png";
import bh from "./img/bh.png";
import quiz2 from "./img/quiz2.jpg";
import Quizzzy from "./img/Quizzzy.png";
import Admin from "./img/React_Admin_App.png";
import cp from "./img/chesterpizza.png";
import ModalRoot from "./modals/components/ModalRoot";
import ModalService from "./modals/Services/ModalService";
import QuizzzyModal from "./components/QuizzzyModal";
import BHRecipeModal from "./components/BHRecipeModal";
import NetflixAdminModal from "./components/NetflixAdminModal";
import ReactQuizModal from "./components/ReactQuizModal";
// import chesterpizza from "./components/Chesterpizza";
import ToDoModal from "./components/ToDoModal";
import { Card, Badge } from "react-bootstrap";

function Work() {
  const addModal = () => {
    ModalService.open(QuizzzyModal);
  };
  const addModal2 = () => {
    ModalService.open(BHRecipeModal);
  };
  const addModal3 = () => {
    ModalService.open(ToDoModal);
  };

  const addModal4 = () => {
    ModalService.open(NetflixAdminModal);
  };
  return (
    <div className="work pac">
      <div className=" pad">
        <h2 id="title" className=" mywork center ">
          My Work
        </h2>
        <div className=" row align-items-center overflow-auto justify-content-between ">
          <ModalRoot />
          <Card
            className="work-img img-zoom-container pb"
            style={{ width: "18rem", marginBottom: "40Px" }}
          >
            <a
              href="https://john-solomou-netflix-admin.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img
                style={{ maxHeight: 131 }}
                variant="top"
                src={Admin}
                className="img-fluid"
              />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>
                Netflix Admin<Badge pill>click below for more info</Badge>
              </Card.Title>

              <div className=" col">
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal4}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="work-img img-zoom-container pb"
            style={{ width: "18rem", marginBottom: "40Px" }}
          >
            <a
              href="https://john-solomou-bhrecipe.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img variant="top" src={bh} className="img-fluid" />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>
                BHRecipe<Badge pill>click below for more info</Badge>
              </Card.Title>

              <div>
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal2}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="work-img img-zoom-container pb"
            style={{ width: "18rem", marginBottom: "40Px" }}
          >
            <a
              href="https://auth-fb-ar.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img variant="top" src={ToDo} className="img-fluid" />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>
                To Do<Badge pill>click below for more info</Badge>
              </Card.Title>

              <div>
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal3}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="work-img img-zoom-container pb"
            style={{ width: "18rem", marginBottom: "40Px" }}
          >
            <a
              href="https://quizzzy-45030.web.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img
                style={{ maxHeight: 131 }}
                variant="top"
                src={quiz2}
                className="img-fluid"
              />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>
                React Quizzzy <Badge pill>Coming Soon</Badge>
              </Card.Title>

              <div className=" col">
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal4}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Work;
