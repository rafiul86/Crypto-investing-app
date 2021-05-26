import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '../shared/navBar/NavBar'
import TopBar from './topBar/TopBar';
const Incubator = () => {
    const history = useHistory()
    const handleBack = () => {
        history.push('/')
    }
    const handleFundStartup =()=>{
        history.push('/fundStartUp')
    }
    return (
        <div>
            <NavBar />
            <TopBar handleBack={handleBack} handleFundStartup={handleFundStartup}/>
            
        </div>
    );
};

export default Incubator;