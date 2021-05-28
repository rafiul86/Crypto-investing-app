import React from 'react';
import { Link } from 'react-router-dom';
import progressbar from '../../../images/progressbar.png'
const ProgressList = ({featuredCourseDetails,list}) => {
    return (
        <div >
        <div className="activity-design">
            <div>
            <button className="btn-course-progress">completed</button>
            </div>
            <h3 className="text-white">{list.period}{' '} : {list.title}</h3>
            <img className="image-progress" src={progressbar}/>
            <p className="text-white">{list.completePercentage}</p>
        </div>
        </div>
    );
};

export default ProgressList;