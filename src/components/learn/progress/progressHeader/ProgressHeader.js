import React from 'react';
import progressbar from '../../../../images/progressbar.png';
import '../progress.css'

const ProgressHeader = ({featuredCourseDetails}) => {
    return (
        <div className="progress-header-container">
           <h1>{featuredCourseDetails.period}</h1>
           <h4>Progress</h4>
           <h4>{featuredCourseDetails.module}</h4>
           <img className="image-progress" src={progressbar}/>
           <h4>{featuredCourseDetails.completePercentage}</h4>
        </div>
    );
};

export default ProgressHeader;