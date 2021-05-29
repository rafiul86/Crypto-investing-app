import React from "react";
import "../myCourses.css";
import progressbar from "../../../../images/progressbar.png";
import { Link } from "react-router-dom";
const MyCourse = ({ myCourse }) => {
  return (
    <div className="card-container-mycourse">
      <div className="card-group">
        <h3>{myCourse.title}</h3>
        <h5>{myCourse.description}</h5>
      </div>
      <button className="mycourse-btn">
        {" "}
        <Link to={`/welcome/${myCourse.id}`}>Learn</Link>
      </button>
      <h3 className="text-white-mycourse">{myCourse.module}</h3>
      <img className="image-progress" src={progressbar} />
      <p className="text-white">{myCourse.completePercentage}</p>
    </div>
  );
};

export default MyCourse;
