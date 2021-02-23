import React from 'react';
import Item from './Item'

function Account() {
    return (
        <div className="container">
            <h1>YourName</h1>
            <p>@name</p>
            <p>num-followers + num-following</p>
            <div className="flex-container">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}

export default Account