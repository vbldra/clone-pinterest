import React from 'react';
import DataApi from "./DataApi";

class FollowingContainer extends React.Component {
    render = () => {
        return (
            <div className="container">
                <p>Welcome to your new following tab!</p>
                <p>Discover ideas from people you follow...</p>
                <DataApi type="followingPage"/>
            </div>
        )
    }
}

export default FollowingContainer