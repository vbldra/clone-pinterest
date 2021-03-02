import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MessengerPiggeon } from "./App"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChevronDown, faCommentDots, faUser} from '@fortawesome/free-solid-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

import PopupOptions from './PopupOptions'
import PopupUpdates from './PopupUpdates'
import PopupInbox from './PopupInbox'
import Search from './Search'

function Navigation() {
    const {dispatch, popups, user} = useContext(MessengerPiggeon)
    return (
        <nav>
            <NavLink className="nav-item" exact to="/">
                <FontAwesomeIcon icon={faPinterest} />
            </NavLink>

            <NavLink className="nav-item" activeClassName="active" exact to="/">
                Home
            </NavLink>

            <NavLink className="nav-item" activeClassName="active" exact to="/following">
                Following
            </NavLink>

            <Search />

            <button onClick={() => {
                    dispatch({type: "popupUpdatesVisible"})
                }}>
                <FontAwesomeIcon icon={faBell} />
            </button>
            {popups.popupUpdatesVisible && <PopupUpdates />}

            <button onClick={() => {
                    dispatch({type: "popupInboxVisible"})
                }}>
                <FontAwesomeIcon icon={faCommentDots} />
            </button>    
            {popups.popupInboxVisible && <PopupInbox />}

            {user.username && 
                <NavLink className="nav-item" exact to="/USER_NAME/_saved/">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink> 
            }
            
            <button onClick={() => {
                    dispatch({type: "popupOptionVisible"})
                }}>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>   
            {popups.popupOptionVisible && <PopupOptions />}
      </nav>
    )
}

export default Navigation