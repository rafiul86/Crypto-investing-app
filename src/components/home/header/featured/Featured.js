import React from 'react';
import './featured.css'
const Featured = () => {
    return (
        <div>
            <div className="row mt-5">
  <div className="col-sm-3 text-white ">
      <div>
          <div>
              <div>
              <div className="card-body feature">
        <h5 className="card-title">Featured<br /> Startups</h5>
        <p className="card-text">Invest in the <br />next billion dollar<br /> company today</p>
      </div>
              </div>
          {/* <div>
          <svg width="44" height="44" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b)">
<circle cx="42" cy="42" r="42" fill="white" fill-opacity="0.2"/>
<circle cx="42" cy="42" r="41.5" stroke="white" stroke-opacity="0.4"/>
</g>
<path d="M54 42H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42 54L30 42L42 30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_b" x="-154" y="-154" width="392" height="392" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="77"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
</defs>
</svg>
 </div> */}
</div>
      </div>
      
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Featured;