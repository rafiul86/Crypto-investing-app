import React, { useEffect, useState } from 'react';
import Activity from './activity/Activity';
import './activities.css';
import modulesData from './activities.json';
import { Grid } from '@material-ui/core';

const Activities = ({myCourse}) => {
    const [modules, setModules] = useState([]);
    useEffect(()=>{
            setModules(modulesData)
    },[])
    return (
        <div className="activity-holder">
            <div className="activity-container">
                <h3> Module </h3>
                <h3>Calender</h3>
                <h3>Messages</h3>
            </div>
           {
                  modules.map(module=> <Activity  module={module} />)
           }
        </div>
    );
};

export default Activities;