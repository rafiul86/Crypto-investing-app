import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '../shared/navBar/NavBar'
import StartupData from './startupData/StartupData';
import StartupDetails from './startupDetails/StartupDetails';
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
            <div className='row'>
            <div className='col-md-4'>
            <StartupData />
            </div>
            <div className='col-md-8'>
            <StartupDetails />
            </div>
            </div>
        </div>
    );
};

export default Incubator;