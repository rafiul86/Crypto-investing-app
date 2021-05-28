import React, { useEffect, useState } from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar';
import { useParams } from 'react-router';
import featuredCoursesData from '../../learn/featuredCourses/featuredCourses.json';
import ProgressHeader from './progressHeader/ProgressHeader';
import ProgressList from './ProgressList';
import progressData from './progress.json';


const Progress = () => {

    const {id} = useParams();

    const featuredCourseDetails = featuredCoursesData.find( featuredCourse => featuredCourse.id == id)
    const [lists , setLists] = useState([])
    useEffect(()=>{
        setLists(progressData)
    },[])
    return (
        <div className="row">
            <NavBar />
            <div className="col-sm-3 col-md-3 col-lg-3">
            <SideBar />
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
                <ProgressHeader featuredCourseDetails={featuredCourseDetails}/>
                <div className="progress-container">
                    {
                        lists.map(list => <ProgressList list={list}/>)
                    }
                </div>
            </div>
        </div>
    );
};



export default Progress;