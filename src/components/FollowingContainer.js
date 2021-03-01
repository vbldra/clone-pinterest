import React from 'react';
import Item from './Item';

function FollowingContainer(props) {
    return (
        <div className="container">
            <p>Welcome to your new following tab!</p>
            <p>Discover ideas from people you follow...</p>
            <div className="flex-container">
                {props.data.map((photo, index)=> <Item key={index} photo={photo}/>)}
            </div>
        </div>
    )
}

export default FollowingContainer