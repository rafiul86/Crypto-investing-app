import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import featuredCoursesData from "./featuredCourses.json";
import FeaturedCourse from "./featuredCourse/FeaturedCourse";

const FeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  useEffect(() => {
    setFeaturedCourses(featuredCoursesData);
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "start", color: "white", padding : 30 }}>Featured Courses</h1>
      <Grid container spacing={4}>
        {featuredCourses.map((featuredCourse) => (
          <Grid item xs={12} md={6} lg={4} key={featuredCourse.id}>
            {" "}
            <FeaturedCourse featuredCourse={featuredCourse}></FeaturedCourse>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedCourses;
