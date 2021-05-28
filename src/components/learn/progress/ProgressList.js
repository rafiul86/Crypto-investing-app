import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import progressbar from '../../../images/progressbar.png'

const ProgressList = ({list}) => {
        
    return (
        <div >
        <div className="activity-design">
            <div>
            <button className="btn-course-progress">completed</button>
            </div>
            <h3 className="text-white"><Link to={`/progressAnalysis/${list.id}`}>{list.period}{' '} : {list.title}</Link></h3>
            <img className="image-progress" src={progressbar}/>
            <p className="text-white">{list.completePercentage}</p>
        </div>
        </div>
    );
};

export default ProgressList;