import React from 'react';
import Featured from './featured/Featured';
import HeaderMain from './headerMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <HeaderMain />
            <Featured />
        </div>
    );
};

export default Header;