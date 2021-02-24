import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import PopupOptions from './PopupOptions'
import PopupUpdates from './PopupUpdates'
import PopupInbox from './PopupInbox'
import Search from './Search';

function Navigation() {
    const [updatesPopupVisible, setUpdatesPopupVisible] = useState(false);
    const [inboxPopupVisible, setInboxPopupVisible] = useState(false);
    const [optionPopupVisible, setOptionPopupVisible] = useState(false);
    
    function closePopup() {
        setUpdatesPopupVisible(false)
        setInboxPopupVisible(false)
        setOptionPopupVisible(false)
    }

    return (
        <nav>
            <NavLink className="nav-item" exact to="/">P</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/following">Following</NavLink>
            <Search />
            <button 
                onClick={e => {
                    closePopup()
                    setUpdatesPopupVisible(!updatesPopupVisible)
                }
            }>+</button>
            {updatesPopupVisible && (
                <PopupUpdates />   
            )}
            <button 
                onClick={e => {
                    closePopup()
                    setInboxPopupVisible(!inboxPopupVisible)
                }
            }>+</button>
            {inboxPopupVisible && (
                <PopupInbox />   
            )}
            <NavLink className="nav-item" exact to="/vbldra/_saved/">V</NavLink> {/*link to account name*/}
            <button 
                onClick={e => {
                    closePopup()
                    setOptionPopupVisible(!optionPopupVisible)
                }
            }>+</button>
            {optionPopupVisible && (
                <PopupOptions />   
            )}
      </nav>
    )
}

export default Navigation