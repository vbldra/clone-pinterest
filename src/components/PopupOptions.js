import React from 'react';
import '../sass/popupOptions.scss';


function PopupOptions() {
    return (
        <div className="popup">
            <h3>Accounts</h3>
            <ul>
                <li>Add another account</li>
                <li>Unlock business tools</li>
            </ul>
            <h3>More options</h3>
            <ul>
                <li>Settings</li>
                <li>Tune your home feed</li>
                <li>Get help</li>
                <li>See terms and privacy</li>
                <li>Log out</li>
            </ul>
        </div>
    )
}

export default PopupOptions