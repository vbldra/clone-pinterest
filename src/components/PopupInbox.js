import React from 'react';
import '../sass/popupOptions.scss';


class PopupInbox extends React.Component {
    render = () => {
        return (
            <div className="popup">
                <h2>Inbox</h2>
                <p>Share ideas with your friends</p>
                <p className="search">SEARCH BAR</p>
                <p>Suggested</p>
                <ul>
                    <li>Person</li>
                    <li>Person</li>
                    <li>Person</li>
                    <li>Person</li>
                </ul>
            </div>
        )
    }
}

export default PopupInbox