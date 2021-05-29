import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MyCourse from "./myCourse/MyCourse";
import myCoursesData from "./myCourses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  useEffect(() => {
    setMyCourses(myCoursesData);
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
        <h1 style={{ textAlign: "start", color: "white", padding : 30 }}>Featured Courses</h1>
        </div>
        <div className="col-sm-8">
        <div style={{ borderTop: "3px solid #fff ", margin: 60 }}></div>
        </div>
      </div>
      <Grid container spacing={4}>
        {myCourses.map((myCourse) => (
          <Grid item xs={12} md={6} lg={4} key={myCourse.id}>
            {" "}
            <MyCourse myCourse={myCourse}></MyCourse>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyCourses;
