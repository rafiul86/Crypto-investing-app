import { Grid } from '@material-ui/core';
import React from 'react';
import './gallery.css';
import startupOne from '../../../../images/startupone.png'
import startupTwo from '../../../../images/startuptwo.png'
import startupThree from '../../../../images/startupthree.png'

const Gallery = () => {
    return (
        <div className="mt-5 mb-5 ms-3 ">
            <Grid container spacing={2}>
                <Grid item xs={10} md={5} lg={4}>
                    <img className='img-fluid' src={startupOne} />
                </Grid>
                <Grid item xs={10} md={5} lg={4}>
                    <img className='img-fluid' src={startupTwo} />
                </Grid>
                <Grid item xs={10} md={5} lg={4}>
                    <img className='img-fluid' src={startupThree} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Gallery;