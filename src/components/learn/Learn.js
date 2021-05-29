import React from "react";
import NavBar from "../shared/navBar/NavBar";
import FeaturedCourses from "./featuredCourses/FeaturedCourses";
import LearnHeader from "./learnHeader/LearnHeader";
import MyCourses from "./myCourses/MyCourses";
import "./bottomLearn.css";
const Learn = () => {
  return (
    <div>
      <NavBar />
      <LearnHeader />
      <div className="bottom-body">
        <MyCourses />
        <FeaturedCourses />
      </div>
    </div>
  );
};

export default Learn;
