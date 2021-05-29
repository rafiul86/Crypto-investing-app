import React from "react";
import SideBar from "../sideBar/SideBar";
import NavBar from "../../shared/navBar/NavBar";
import "./tutorial.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tutorial = ({ progressDetails }) => {
  console.log(progressDetails);
  return (
    <div className="tutorial-container">
       <Tippy content="Click here to finish course">
      <button className="btn-tutorial-progress">progress</button>
      </Tippy>
      <div>
        <h3 className="text-display">Our journey</h3>
        <p className="text-display">{progressDetails.activity}</p>
      </div>
      <div>
        <h3 className="text-display">Our journey</h3>
        <p className="text-display">{progressDetails.activity}</p>
      </div>
    </div>
  );
};

export default Tutorial;
