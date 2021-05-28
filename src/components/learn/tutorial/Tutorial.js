import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar'
const Tutorial = ({progressDetails}) => {
    return (
        <div className="activity-design">
            <div>
            <button className="btn-course-progress">completed</button>
            </div>
            <h3 className="text-white">{progressDetails.header}{' '} : {progressDetails.title}</h3>
            <p className="text-white">{progressDetails.completePercentage}</p>
        </div>
    );
};

export default Tutorial;