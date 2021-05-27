import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './featured.css';
import startupsData from './featured.json';
import SingleStartup from './singleStartup/SingleStartup';


const Featured = () => {
  const [startups , setStartups] = useState([])
  useEffect(()=>{
        setStartups(startupsData);
       },[])
    return (
         <div>
            <div className="row mt-5">
                <div className="col-sm-3 text-white ">
                  <div className="card-body feature">
                     <h5 className="card-title">Featured<br /> Startups</h5>
                    <p className="card-text">Invest in the <br />next billion dollar<br /> company today</p>
              </div>  
             </div>  
         
          <div className="col-sm-9">
          <Grid  container spacing={2}>
               {
                  startups.map(singleStartup =><Grid  item xs={12} md={6} lg={4} key={singleStartup.id}> <SingleStartup  singleStartup={singleStartup}></SingleStartup></Grid>)
               }
               </Grid>
          </div>
          </div>
        </div>
    );
};

export default Featured;