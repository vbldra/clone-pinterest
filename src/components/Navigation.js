import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import PopupOptions from './PopupOptions'
import PopupUpdates from './PopupUpdates'
import PopupInbox from './PopupInbox'
import PopupAdd from './PopupAdd'
import PopupHelp from './PopupHelp'
import Search from './Search';

function Navigation(props) {
    // const [popupUpdatesVisible, setPopupUpdatesVisible] = useState(false);
    // const [popupInboxVisible, setPopupInboxVisible] = useState(false);
    // const [popupOptionVisible, setPopupOptionVisible] = useState(false);
    // const [popupAddVisible, setPopupAddVisible] = useState(false);
    // const [popupHelpVisible, setPopupHelpVisible] = useState(false);
    
    // function closePopup() {
    //     setPopupUpdatesVisible(false)
    //     setPopupInboxVisible(false)
    //     setPopupOptionVisible(false)
    //     setPopupAddVisible(false)
    //     setPopupHelpVisible(false)
    // }

    return (
        <nav>
            <NavLink className="nav-item" exact to="/">P</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" exact to="/following">Following</NavLink>
            <Search />
            <button 
                onClick={e => {
                    props.dispatch({type: "popupUpdatesVisible"})
                }
            }>+</button>                       
            {props.popups.popupUpdatesVisible && (
                <PopupUpdates />   
            )}
            <button 
                onClick={e => {
                    props.dispatch({type: "popupInboxVisible"})
                }
            }>+</button>                    
            {props.popups.popupInboxVisible && (
                <PopupInbox />   
            )}
            {/* <NavLink className="nav-item" exact to="/vbldra/_saved/">V</NavLink> 
            <button 
                onClick={e => {
                    closePopup()
                    setPopupOptionVisible(!popupOptionVisible)
                }
            }>+</button>                       
            {popupOptionVisible && (
                <PopupOptions />   
            )} */}
      </nav>
    )
}

export default Navigation