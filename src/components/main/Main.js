import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import crypto from "../../images/crypto.jpg";
import NavBar from "../shared/navBar/NavBar";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const Main = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/learn");
  };
  return (
    <div className="mb-5">
      <NavBar />
      <Grid container>
        <Grid item xs={10} md={5} lg={6}>
          <img className="img-holder" src={crypto} />
        </Grid>
        <Grid item xs={10} md={5} lg={6}>
          <div style={{ textAlign: "left" }}>
            <h1 className="welcome-headline text-white">
              Minority programmers association <br />
              Code, Culture, Community
            </h1>
            <h3
              style={{
                fontStyle: "italic",
                alignItems: "center",
                color: "white",
              }}
            >
              Sanctuary of{" "}
              <span style={{ fontStyle: "italic", color: "#151371" }}>
                Legends
              </span>
            </h3>
            <Tippy content="Jump into the startups">
              <button className="btn-resume" onClick={handleClick}>
                Start journey
              </button>
            </Tippy>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
