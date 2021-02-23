import React from 'react';
import Search from './Search'

function Navigation() {
    return (
        <nav>
            {/* <img>Logo</img> */}
            <ul>
                <li>Home</li>
                <li>Following</li>
                <Search />
                {/* <Updates />
                <Inbox />
                <Account />
                <AccountMenu /> */}
            </ul>
        </nav>
    )
}

export default Navigation