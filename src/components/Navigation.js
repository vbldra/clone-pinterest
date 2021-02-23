import React from 'react';
import Search from './Search';
import NavButton from './NavButton';
import AccountMenu from './AccountMenu'

function Navigation() {
    return (
        <nav>
            <ul>
                <NavButton type="logo" />
                <NavButton type="home" />
                <NavButton type="following" />
                <Search />
                <NavButton type="updates" />
                <NavButton type="inbox" />
                <NavButton type="account" />
                <AccountMenu />
            </ul>
        </nav>
    )
}

export default Navigation