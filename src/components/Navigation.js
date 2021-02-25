import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import PopupOptions from './PopupOptions'
import PopupUpdates from './PopupUpdates'
import PopupInbox from './PopupInbox'
import Search from './Search';
import { MessengerPiggeon } from "./App";

function Navigation() {
    const {dispatch, popups, user} = useContext(MessengerPiggeon)
    return (
        <nav>
            <NavLink className="nav-item" exact to="/">P</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/following">Following</NavLink>
            <Search />

            <button 
                onClick={e => {
                    dispatch({type: "popupUpdatesVisible"})
                }
            }>+</button>                       
            {popups.popupUpdatesVisible && (
                <PopupUpdates />   
            )}
            <button 
                onClick={e => {
                    dispatch({type: "popupInboxVisible"})
                }
            }>+</button>                    
            {popups.popupInboxVisible && (
                <PopupInbox />   
            )}

            {user.username && <NavLink className="nav-item" exact to="/vbldra/_saved/">V</NavLink> }
            
            <button 
                onClick={e => {
                    dispatch({type: "popupOptionVisible"})
                }
            }>+</button>                       
            {popups.popupOptionVisible && (
                <PopupOptions />   
            )}
      </nav>
    )
}

export default Navigation