import React from 'react';
import DataApi from "./DataApi";

function FollowingContainer() {
    
    return (
        <div className="container">
            <p>Welcome to your new following tab!</p>
            <p>Discover ideas from people you follow...</p>
            <DataApi type="followingPage"/>
        </div>
    )
}

export default FollowingContainer