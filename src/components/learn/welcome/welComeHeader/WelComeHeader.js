import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../../../../images/humanCircle.png';
import './welcomeHeader.css'

const WelComeHeader = ({handleClick}) => {
    return (
        <div>
            <Grid container>
                <Grid item xs={10} md={5} lg={6}>
                <img className="img-holder" src={image} />
                </Grid>
                <Grid item xs={10} md={5} lg={6}>
                    <div style={{textAlign : 'left'}}>
                    <h1 className="welcome-headline text-white">Welcome back, <br />
                    Shot</h1>
                    <p style={{fontStyle : 'italic', alignItems: 'center', color: "white"}}> 75% <span style={{fontStyle : 'italic' , color: "white"}}>Completed</span></p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default WelComeHeader;