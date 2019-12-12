import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogForm = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Enter all the details" });
    } else {
      console.log(message, attention, tech);
    }
  };
  return (
    <div className="modal" id="add-log-modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <div className="input-field">
            <input
              name="message"
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message">Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Select technician..
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Tracy Booth">Tracy Booth</option>
              <option value="Mark">Mark</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};
export default AddLogForm;
