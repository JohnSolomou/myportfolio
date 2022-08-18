import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDo from "./img/ToDo.png";

// import Quizmodal from "./modals/Quizmodal";
import Todomodal from "./modals/Todomodal";

function Work() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div id="work">
      <div className="container">
        <div className="center justify-content-around">
          <div style={{ MaxwWidth: "15rem" }} className="">
            <img
              src={ToDo}
              alt=""
              style={{ width: "15rem" }}
              onClick={() => setOpenModal(true)}
            />
            <Todomodal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
