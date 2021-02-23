import React from 'react';

function NavButton(props) {
    return (
        <div className="nav-item" >
            {props.type}
        </div>
    ) 
}

export default NavButton