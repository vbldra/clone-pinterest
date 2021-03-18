import React from "react";
import "../sass/navigation.scss";
import { NavLink } from "react-router-dom";

import { MessengerPiggeon } from "../context/context";
import IconFA from "./IconFA";
import PopupUpdates from "./PopupUpdates";
import PopupInbox from "./PopupInbox";

class Navigation extends React.Component {
    static contextType = MessengerPiggeon;

    handleSubmit = (event) => {
        event.preventDefault();
    };

    handleChange = (event) => {
        this.props.history.push("/search");
        this.context.setSearchText(event.target.value);
    };

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
                            value={this.context.searchText}
                            type="text"
                            placeholder="Search"
                        />
                    </form>
                </div>

                <div className="nav-right">
                    <button
                        className="nav-item"
                        onClick={() => {
                            this.context.dispatch({
                                type: "popupUpdatesVisible",
                            });
                        }}
                    >
                        <IconFA type="updates" />
                    </button>
                    {this.context.popups.popupUpdatesVisible && (
                        <PopupUpdates />
                    )}

                    <button
                        className="nav-item"
                        onClick={() => {
                            this.context.dispatch({
                                type: "popupInboxVisible",
                            });
                        }}
                    >
                        <IconFA type="inbox" />
                    </button>
                    {this.context.popups.popupInboxVisible && <PopupInbox />}
                </div>
            </nav>
        );
    };
}

export default Navigation;
