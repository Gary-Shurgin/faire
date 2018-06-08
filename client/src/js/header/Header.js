import React from 'react';
import MenuBar from './MenuBar'
import LoginMenu from './LoginMenu'

const Header = () => (
    <div className='ans-header'>
        <div className='ans-main-title'>Midrealm Arts &amp; Sciences</div>
        <div className='ans-menu'>
            <MenuBar />
            <LoginMenu />
        </div>
    </div>

)

export default Header;