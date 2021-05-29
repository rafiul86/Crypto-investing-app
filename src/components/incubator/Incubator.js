import React from "react";
import { useHistory, useParams } from "react-router";
import NavBar from "../shared/navBar/NavBar";
import StartupData from "./startupData/StartupData";
import StartupDetails from "./startupDetails/StartupDetails";
import TopBar from "./topBar/TopBar";
import startupData from "../home/header/featured/featured.json";

const Incubator = () => {
  const { id } = useParams();
  const individualDetails = startupData.find(
    (individualData) => individualData.id == id
  );
  const history = useHistory();
  const handleBack = () => {
    history.push("/");
  };
  const handleFundStartup = () => {
    history.push("/fundStartUp");
  };
  return (
    <div>
      <NavBar />
      <TopBar handleBack={handleBack} handleFundStartup={handleFundStartup} />
      <div className="row">
        <div className="col-md-4">
          <StartupData individualDetails={individualDetails} />
        </div>
        <div className="col-md-8">
          <StartupDetails individualDetails={individualDetails} />
        </div>
      </div>
    </div>
  );
};

export default Incubator;
