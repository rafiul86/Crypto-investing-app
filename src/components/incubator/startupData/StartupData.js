import React from 'react';

const StartupData = ({individualDetails}) => {
    return (
        <div className="bg-white">
            <h1>{individualDetails.location}</h1>
            <h1>{individualDetails.size}</h1>
        </div>
    );
};

export default StartupData;