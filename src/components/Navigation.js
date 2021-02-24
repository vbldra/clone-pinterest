import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import PopupOptions from './PopupOptions'
import Search from './Search';
import NavButton from './NavButton';

function Navigation() {
    const [optionPopupVisible, setOptionPopupVisible] = useState(false);

    return (
        <nav>
            <NavLink className="nav-item" exact to="/">P</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/following">Following</NavLink>
            <Search />
            <NavButton 
                type="updates" />
            <NavButton 
                type="inbox" />
            <NavLink className="nav-item" exact to="/vbldra/_saved/">V</NavLink> {/*link to account name*/}
            <button onClick={() => setOptionPopupVisible(!optionPopupVisible)}>
              +
            </button>
            {optionPopupVisible && (
                <PopupOptions />   
            )}
      </nav>
    )
}

export default Navigation