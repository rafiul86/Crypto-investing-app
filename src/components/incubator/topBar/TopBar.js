import React from 'react';
import arrowLeft from '../../../images/Arrow left.png';
import mangoswap from '../../../images/mangoswap.png';
import fundRaise from '../../../images/fundRaise.png';
import './topBar.css'
import { Grid } from '@material-ui/core';

const TopBar = ({ handleBack,handleFundStartup }) => {
    // This title is startup name as dynamic data , will come from database dynamically
    let title
    return (
        <div className="topBar-container">
            <img  onClick={ handleBack }  src={arrowLeft}/>
            <div  style={{display:'flex'}}>
            <img src={mangoswap} title="Mangoswap"/>
            <h1>{title ? title : 'Mangoswap'}</h1>
            </div>
            <img  src={fundRaise}/>
            <button onClick={ handleFundStartup } className="btn-container">Fund Startup</button>
        </div>
    );
};

export default TopBar;