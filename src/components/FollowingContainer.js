import React from 'react';
import Item from './Item';

function FollowingContainer() {
    return (
        <div>
            <p>Welcome to your new following tab!</p>
            <p>Discover ideas from people you follow...</p>
            <div className="flex-container">
                <Item />
            </div>
        </div>
    )
}

export default FollowingContainer