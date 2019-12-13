import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Enter FirstName and LastName" });
    } else {
      console.log(firstName, lastName);
      //   Clear fields
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div className="modal" id="add-tech-modal">
      <div className="modal-content">
        <div className="row">
          <div className="input-field">
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
