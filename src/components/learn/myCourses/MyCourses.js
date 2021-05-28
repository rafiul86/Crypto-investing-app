import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MyCourse from './myCourse/MyCourse';
import myCoursesData from './myCourses.json'
const MyCourses = () => {
    const [myCourses, setMyCourses] = useState([])
    useEffect(()=>{
        setMyCourses(myCoursesData)
    },[])
    return (
        <div>
            <h1 style={{textAlign : 'start' , color : 'white'}}>My Courses</h1>
            <Grid  container spacing={4}>
               {
                  myCourses.map(myCourse =><Grid  item xs={12} md={6} lg={4} key={myCourse.id}> <MyCourse  myCourse={myCourse}></MyCourse></Grid>)
               }
               </Grid>
        </div>
    );
};

export default MyCourses;