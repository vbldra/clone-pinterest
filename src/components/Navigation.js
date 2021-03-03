import React, { useContext } from 'react'
import './navigation.scss'
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
            <div className="nav-left">
                <NavLink className="nav-item" exact to="/">
                    <FontAwesomeIcon className="icon logo" icon={faPinterest} />
                </NavLink>

                <NavLink className="nav-item" activeClassName="active" exact to="/">
                    Home
                </NavLink>

                <NavLink className="nav-item" activeClassName="active" exact to="/following">
                    Following
                </NavLink>
            </div>

            <Search />

            <div className="nav-right">
                <button className="nav-item" onClick={() => {
                        dispatch({type: "popupUpdatesVisible"})
                    }}>
                    <FontAwesomeIcon className="icon" icon={faBell} />
                </button>
                {popups.popupUpdatesVisible && <PopupUpdates />}

                <button className="nav-item" onClick={() => {
                        dispatch({type: "popupInboxVisible"})
                    }}>
                    <FontAwesomeIcon className="icon" icon={faCommentDots} />
                </button>    
                {popups.popupInboxVisible && <PopupInbox />}

                {user.username && 
                    <NavLink className="nav-item" exact to="/USER_NAME/_saved/">
                        <FontAwesomeIcon className="icon user-icon" icon={faUser} />
                    </NavLink> 
                }
                
                <button onClick={() => {
                        dispatch({type: "popupOptionVisible"})
                    }}>
                    <FontAwesomeIcon className="icon arrow-icon" icon={faChevronDown} />
                </button>   
                {popups.popupOptionVisible && <PopupOptions />}
            </div>
      </nav>
    )
}

export default Navigation