import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  // props is a special variable that React will pass to our function
  // function always start with capital letter(to differentiate from html tags)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen ? <Modal /> : null}
        {modalIsOpen && <Backdrop />}
      </div>
    </div>
  );
}

export default Todo;
