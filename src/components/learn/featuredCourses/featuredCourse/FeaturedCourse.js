import React from "react";
import progressbar from "../../../../images/progressbar.png";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FeaturedCourse = ({ featuredCourse }) => {
  return (
    <div className="card-container-mycourse">
      <div className="card-group">
        <h3>{featuredCourse.title}</h3>
        <h5>{featuredCourse.description}</h5>
      </div>
      <Tippy content="Learn the cutting edge crypto">
        <button className="mycourse-btn">
          {" "}
          <Link to={`/progress/${featuredCourse.id}`}>Learn</Link>
        </button>
      </Tippy>
      <h3 className="text-white-mycourse">{featuredCourse.module}</h3>
      <img className="image-progress" src={progressbar} />
      <p className="text-white">{featuredCourse.completePercentage}</p>
    </div>
  );
};

export default FeaturedCourse;
