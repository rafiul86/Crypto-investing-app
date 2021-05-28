import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import circle from '../../../images/circle.png'

import { faCircle } from '@fortawesome/free-solid-svg-icons';

const StartupData = ({individualDetails}) => {

    return (
        <div className="bg-white">
            <div className="founded-style">
            <h4>Founded {individualDetails.founded}</h4>
            </div>
            <div className="row">
            <div className="text-design">
                <div className="web-style">
                <p>Website</p>
                <h6 className="icon-incubator">{individualDetails.website}</h6>
                </div>
                <FontAwesomeIcon className="icon-incubator" icon={faTwitter} />
                <FontAwesomeIcon className="icon-incubator" icon={faLinkedin} />
                <FontAwesomeIcon className="icon-incubator" icon={faFacebook} />
                </div>
          </div>
          <h4>{individualDetails.location}</h4>
            <h4>{individualDetails.size}</h4>
            <ul>
                <h3 className="text-left">Meet the team</h3>
                <div className="d-flex">
                <h2><FontAwesomeIcon className="icon-container" icon={faCircle} /></h2>
                <div className="founder-style">
                    <h5>Founder</h5>
                     <li className="member-list">  {individualDetails.member.founder}</li>
                </div>
                </div>
                <div className="d-flex">
                <h2><FontAwesomeIcon className="icon-container" icon={faCircle} /></h2>
                <div className="founder-style">
                    <h5>Co-ounder</h5>
                     <li className="member-list">  {individualDetails.member.coFounder}</li>
                </div>
                </div>
                <div className="d-flex">
                <h2><FontAwesomeIcon className="icon-container" icon={faCircle} /></h2>
                <div className="founder-style">
                    <h5>Head of growth</h5>
                     <li className="member-list">  {individualDetails.member.headOfGrowth}</li>
                </div>
                </div>
                <div className="d-flex">
                <h2><FontAwesomeIcon className="icon-container" icon={faCircle} /></h2>
                <div className="founder-style">
                    <h5>Head of product</h5>
                     <li className="member-list">  {individualDetails.member.headOfProduct}</li>
                </div>
                </div> 
            </ul>
            <div>
                <h3 className="tag-left">Tags</h3>
                <button className="btn-tag">Crypto</button>
                <button className="btn-tag">Exchange</button>
                <button className="btn-tag">NFT</button>
                <button className="btn-tag">Clockchain</button>
            </div>
        </div>
    );
};

export default StartupData;