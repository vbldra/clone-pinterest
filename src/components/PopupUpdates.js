import React from 'react';
import '../sass/popupOptions.scss';


class PopupUpdates extends React.Component {
    render = () => {
        return (
            <div className="popup">
                <h3>Updates</h3>
                <div className="infoContainer">
                    <p>Some info</p>
                    <div>Pictures</div>
                </div>
            </div>
        )
    }
}

export default PopupUpdates