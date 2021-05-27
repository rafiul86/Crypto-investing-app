import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar';
import { useParams } from 'react-router';
import featuredCoursesData from '../../learn/featuredCourses/featuredCourses.json';
import ProgressHeader from './progressHeader/ProgressHeader';
import ProgressList from './ProgressList';

const Progress = () => {

    const {id} = useParams();
    console.log(id)
    const featuredCourseDetails = featuredCoursesData.find( featuredCourse => featuredCourse.id == id)
    const handleClick = () =>{
        // this button is for resume the course
        
    }
    return (
        <div className="row">
            <NavBar />
            <div className="col-sm-3 col-md-3 col-lg-3">
            <SideBar />
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
                <ProgressHeader featuredCourseDetails={featuredCourseDetails}/>
                <ProgressList featuredCourseDetails={featuredCourseDetails}/>
            </div>
        </div>
    );
};



export default Progress;