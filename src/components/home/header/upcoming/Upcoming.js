import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import upcomingsData from "./upcoming.json";
import UpcomingOne from "./upcomingOne/UpcomingOne";

const Upcoming = () => {
  const [startups, setStartups] = useState([]);
  useEffect(() => {
    setStartups(upcomingsData);
  }, []);
  return (
    <div>
      <div className="row mt-5">
        <div className="col-sm-3 text-white ">
          <div className="card-body feature">
            <h5 className="card-title">
              Upcoming
              <br /> Startups
            </h5>
            <p className="card-text">
              Invest in the <br />
              next billion dollar
              <br /> company today
            </p>
          </div>
        </div>

        <div className="col-sm-9">
          <Grid container spacing={4}>
            {startups.map((singleStartup) => (
              <Grid item xs={12} md={6} lg={4} key={singleStartup.id}>
                {" "}
                <UpcomingOne singleStartup={singleStartup}></UpcomingOne>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
