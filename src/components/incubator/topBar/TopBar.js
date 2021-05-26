import React from 'react';
import arrowLeft from '../../../images/Arrow left.png';
import mangoswap from '../../../images/mangoswap.png';
import fundRaise from '../../../images/fundRaise.png';
import './topBar.css'

const TopBar = ({ handleBack,handleFundStartup }) => {
    return (
        <div className="topBar-container">
            <img onClick={ handleBack }  src={arrowLeft}/>
            <div style={{display:'flex'}}>
            <img src={mangoswap} title="Mangoswap"/>
            <h1>Mangoswap</h1>
            </div>
            <img src={fundRaise}/>
            <button onClick={ handleFundStartup } className="btn-container">Fund Startup</button>
        </div>
    );
};

export default TopBar;