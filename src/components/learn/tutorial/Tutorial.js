import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar'
const Tutorial = () => {
    return (
        <div className="row">
            <NavBar />
            <div className="col-sm-3 col-md-3 col-lg-3">
            <SideBar />
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
            
            <h1>This is tutorial Activity</h1>
            </div>
        </div>
    );
};

export default Tutorial;