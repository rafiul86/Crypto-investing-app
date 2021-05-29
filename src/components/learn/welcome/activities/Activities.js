import React, { useEffect, useState } from "react";
import Activity from "./activity/Activity";
import "./activities.css";
import modulesData from "./activities.json";
import { Grid } from "@material-ui/core";

const Activities = ({ myCourse }) => {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    setModules(modulesData);
  }, []);
  return (
    <div className="activity-holder">
      <Grid container>
        <Grid item xs={10} md={10} lg={10}>
          <div className="activity-container">
            <h3> Modules </h3>
            <h3>Calender</h3>
            <h3>Messages</h3>
          </div>
          {modules.map((module) => (
            <Activity module={module} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Activities;
