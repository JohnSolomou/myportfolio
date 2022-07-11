import React from "react";
export default function Modal(props) {
  return (
    <div className="col">
      <div className="modal d-block mt-5">
        <div className="modal-dialog">
          <div className="modal-content">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
