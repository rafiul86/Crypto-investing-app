import React from 'react';
import { Link } from 'react-router-dom';
import mangoswap from '../../../../../images/mangoswap.png';
import fundraise from '../../../../../images/fundRaise.png'


const UpcomingOne = ({singleStartup}) => {
    
    return (
      <div className="card-container">
        <div className='title-container'>
          <img style={{width : 35 , height : 35}} src={mangoswap}/>
          <h3> {singleStartup.title}</h3>
        </div>
        <p className='card-description'>{singleStartup.description}</p>
        <img className='card-image' src={fundraise} />
        <button className='btn-left'  size="small"><Link className='link-style' to='/fundStartUp'>Fund Startup</Link></button>
        <button className='btn-right'  size="small"><Link className='link-style' to={`/incubator/${singleStartup.id}`}>Learn More</Link></button>
      </div>
    );
};

export default UpcomingOne;