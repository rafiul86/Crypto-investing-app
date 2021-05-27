import React from 'react';
import { Link } from 'react-router-dom';

const ProgressList = ({featuredCourseDetails,list}) => {
    return (
        <div>
            <h1>Activity - {list.id} <Link to={`/progressAnalysis/${list.id}`}>{list.title}</Link></h1>
            
        </div>
    );
};

export default ProgressList;