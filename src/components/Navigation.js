import React, { useContext } from 'react'
import '../sass/navigation.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { MessengerPiggeon } from "./App"

import IconFA from "./IconFA";
import PopupOptions from './PopupOptions'
import PopupUpdates from './PopupUpdates'
import PopupInbox from './PopupInbox'

function Navigation() {
    const {dispatch, popups, searchText, setSearchText} = useContext(MessengerPiggeon)
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleChange(event) {
        history.push("/search")
        setSearchText(event.target.value)
    }
    
    return (
        <nav>
            <div className="nav-left">
                <NavLink className="nav-item" exact to="/">
                    <IconFA type="logo" />
                </NavLink>

                <NavLink className="nav-item" activeClassName="active" exact to="/">
                    Home
                </NavLink>

                <NavLink className="nav-item" activeClassName="active" exact to="/following">
                    Following
                </NavLink>
            </div>

            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={searchText} type="text"/>
                    <button type="submit"><IconFA type="search"/></button>
                </form>
            </div>

            <div className="nav-right">
                <button className="nav-item" onClick={() => {
                        dispatch({type: "popupUpdatesVisible"})
                    }}>
                    <IconFA type="updates" />
                </button>
                {popups.popupUpdatesVisible && <PopupUpdates />}

                <button className="nav-item" onClick={() => {
                        dispatch({type: "popupInboxVisible"})
                    }}>
                    <IconFA type="inbox" />
                </button>    
                {popups.popupInboxVisible && <PopupInbox />}

                {/* {user.username && 
                    <NavLink className="nav-item" exact to="/USER_NAME/_saved/">
                        <IconFA type="user" />
                    </NavLink> 
                } */}
                
                <button onClick={() => {
                        dispatch({type: "popupOptionVisible"})
                    }}>
                    <IconFA type="arrow" />
                </button>   
                {popups.popupOptionVisible && <PopupOptions />}
            </div>
      </nav>
    )
}

export default Navigation