import { Grid } from "@material-ui/core";
import React from "react";
import "./headerMain.css";
import mobile from "../../../../images/mobile.png";
import { useHistory } from "react-router";

const HeaderMain = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/featured");
  };
  return (
    <div className="header-container">
      <Grid container>
        <Grid item xs={0} md={6} lg={6}></Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ display: "grid" }}>
            <h1
              className="mt-5"
              style={{
                color: "white",
                fontSize: "50px",
                textAlign: "left",
                marginLeft: 15,
              }}
            >
              Invest directly into <br /> minority innovations
            </h1>
            <button onClick={handleClick} className="btn-container">
              View Startups
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderMain;
