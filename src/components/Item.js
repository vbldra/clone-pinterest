import React from 'react';

function Item(props) {
    return (
            <div className="item">
                <img src={props.photo.urls.regular}></img>
                <p>{props.photo.alt_description}</p>
                <a
                    className="credit"
                    target="_blank"
                    href={`https://unsplash.com/@${props.photo.user.username}`}
                >
                {props.photo.user.name}
                </a>
            </div>
        )
}

export default Item