import React from 'react';
import NavBar from '../shared/navBar/NavBar';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import LearnHeader from './learnHeader/LearnHeader';
import MyCourses from './myCourses/MyCourses';

const Learn = () => {
    return (
        <div>
            <NavBar />
            <LearnHeader />
            <MyCourses />
            <FeaturedCourses />
        </div>
    );
};

export default Learn;