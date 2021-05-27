import React from 'react';

const Activity = ({module}) => {
    const design={
        height :150,
        maxWidth : 600,
        backgroundColor : 'blue',
        margin : 5,
        padding : 10,       
    }
    return (
        <div style={design}>
            <h3 style={{alignItems : 'center', justifyContent : 'center'}}>{module.period}{' '} : {module.title}</h3>
        </div>
    );
};

export default Activity;