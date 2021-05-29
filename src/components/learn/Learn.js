import React from "react";
import NavBar from "../shared/navBar/NavBar";
import FeaturedCourses from "./featuredCourses/FeaturedCourses";
import LearnHeader from "./learnHeader/LearnHeader";
import MyCourses from "./myCourses/MyCourses";
import "./bottomLearn.css";
const Learn = () => {
  const handleBlur = () => {
    console.log("desired course from database");
  };
  return (
    <div>
      <NavBar />
      <LearnHeader />
      <div className="bottom-body">
        <form style={{ padding: 60, alignSelf: "center" }}>
          <div className="row">
            <div className="col-sm-8">
              <input
                type="name"
                className="form-control"
                onBlur={handleBlur}
                name="name"
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-light">
                Filter Search
              </button>
            </div>
          </div>
        </form>
        <MyCourses />
        <FeaturedCourses />
      </div>
    </div>
  );
};

export default Learn;
