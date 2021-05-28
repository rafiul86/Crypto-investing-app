import React from 'react';
import './activity.css';
import progressbar from '../../../../../images/progressbar.png'

const Activity = ({module}) => {
    
    return (
        <div className="activity-design">
            <div>
            <button className="btn-course-progress">completed</button>
            </div>
            <h3 className="text-white">{module.period}{' '} : {module.title}</h3>
            <img className="image-progress" src={progressbar}/>
            <p className="text-white">{module.completePercentage}</p>
        </div>
    );
};

export default Activity;