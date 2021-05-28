import React from 'react';
import progressbar from '../../../../images/progressbar.png';
import '../progress.css'

const ProgressHeader = ({featuredCourseDetails}) => {
    return (
        <div className="progress-header-container">
          <div className="progress-head-period">
          <h1>{featuredCourseDetails.period}</h1>
          </div>
           <div className="progress-head-period">
           <h4>Progress</h4>
           </div>
           <h4 className="text-white">{featuredCourseDetails.module}</h4>
           <img className="image-progress" src={progressbar}/>
           <h4 className="text-white">{featuredCourseDetails.completePercentage}</h4>
        </div>
    );
};

export default ProgressHeader;