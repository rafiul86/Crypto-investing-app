import React from 'react';
import Featured from './featured/Featured';
import Gallery from './gallery/Gallery';
import HeaderMain from './headerMain/HeaderMain';
import Upcoming from './upcoming/Upcoming';

const Header = () => {
    return (
        <div>
            <HeaderMain />
            <Featured />
            <Gallery />
            <Upcoming />
        </div>
    );
};

export default Header;