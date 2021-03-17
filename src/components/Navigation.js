import React, { useContext } from "react";
import "../sass/navigation.scss";
import { NavLink, useHistory } from "react-router-dom";
import { MessengerPiggeon } from "./App";

import IconFA from "./IconFA";
import PopupOptions from "./PopupOptions";
import PopupUpdates from "./PopupUpdates";
import PopupInbox from "./PopupInbox";


class Navigation extends React.Component {
    static contextType = MessengerPiggeon
    // const { dispatch, popups, searchText, setSearchText } = useContext(
    //     MessengerPiggeon
    // );
    // const history = useHistory();

    componentDidMount() {
        const mesPig = this.context
    }


    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.props.history.push("/search");
        this.mesPig.setSearchText(event.target.value);
    }

    render = () => {
        return (
            <nav>
                <div className="nav-left">
                    <NavLink className="nav-item" exact to="/">
                        <IconFA type="logo" />
                    </NavLink>
    
                    <NavLink
                        className="nav-item"
                        activeClassName="active"
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>
    
                    <NavLink
                        className="nav-item"
                        activeClassName="active"
                        exact
                        to="/following"
                    >
                        Following
                    </NavLink>
                </div>
    
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            value={this.mesPig.searchText}
                            type="text"
                            placeholder="Search"
                        />
                    </form>
                </div>
    
                <div className="nav-right">
                    <button
                        className="nav-item"
                        // onClick={() => {
                        //     dispatch({ type: "popupUpdatesVisible" });
                        // }}
                    >
                        <IconFA type="updates" />
                    </button>
                    {this.mesPig.popups.popupUpdatesVisible && <PopupUpdates />}
    
                    <button
                        className="nav-item"
                        // onClick={() => {
                        //     dispatch({ type: "popupInboxVisible" });
                        // }}
                    >
                        <IconFA type="inbox" />
                    </button>
                    {this.mesPig.popups.popupInboxVisible && <PopupInbox />}
    
                    {/* {user.username && 
                        <NavLink className="nav-item" exact to="/USER_NAME/_saved/">
                            <IconFA type="user" />
                        </NavLink> 
                    } */}
    
                    {/* <button
                        onClick={() => {
                            dispatch({ type: "popupOptionVisible" });
                        }}
                    >
                        <IconFA type="arrow" />
                    </button>
                    {popups.popupOptionVisible && <PopupOptions />} */}
                </div>
            </nav>
        );
    }
}

export default Navigation;
