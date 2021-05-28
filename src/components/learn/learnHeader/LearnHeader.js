import { Grid } from '@material-ui/core';
import React from 'react';
import globe from '../../../images/Globe.png';
import './learnHeader.css'
const LearnHeader = () => {
    return (
        <div style={{height : '600px'}} className="row align-items-center">
            <Grid container>
                <Grid item xs={12} md={5} lg={6}>
                <img className="img-container img-fluid" src={globe} />
                </Grid>
               
               <Grid item xs={12} md={5} lg={6}>
                    <h1 className="learn-headline">Learn high in demand <br />
                    IT Skills & Get Crypto</h1>
                    <h3 style={{fontStyle : 'italic', alignItems: 'center'}}>powered by <span style={{fontStyle : 'italic' , color: "white"}}> KoinStreet</span></h3>
                </Grid>
              
            </Grid>
        </div>
    );
};

export default LearnHeader;