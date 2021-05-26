import React from 'react';
import Activity from './activity/Activity';
import './activities.css'
const Activities = () => {
    return (
        <div className="activity-holder">
            <div className="activity-container">
                <h3> Module </h3>
                <h3>Calender</h3>
                <h3>Messages</h3>
            </div>
            <Activity />
        </div>
    );
};

export default Activities;