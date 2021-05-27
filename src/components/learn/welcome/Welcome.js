import React from 'react';
import SideBar from '../sideBar/SideBar';
import NavBar from '../../shared/navBar/NavBar'
import WelComeHeader from './welComeHeader/WelComeHeader';
import Activities from './activities/Activities';
import { useParams } from 'react-router';
import myCourseData from '../myCourses/myCourses.json'
const Welcome = () => {

    const {id} = useParams()
    const myCourse = myCourseData.find( myCourseDetails => myCourseDetails.id == id)
    console.log(myCourse)
    const handleClick = () =>{
        // this button is for resume the course
        console.log('start course here')
    }
    return (
        <div className="row">
            <NavBar />
            <div className="col-sm-3 col-md-3 col-lg-3">
            <SideBar />
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
            <WelComeHeader handleClick={handleClick}/>
            <Activities />
            </div>
        </div>
    );
};

export default Welcome;