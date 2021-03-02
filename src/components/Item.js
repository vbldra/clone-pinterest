import React from 'react';

function Item(props) {
    return (
            <div className="item">
                <img src={props.photo.urls.regular}></img>
                <h2>{props.photo.description ? props.photo.description : "Photo"}</h2>
                <p>{props.photo.alt_description}</p>
                <div className="profile_container">
                    <img className="profile_image" src={props.photo.user.profile_image.small}/>
                    <a
                        className="credit"
                        target="_blank"
                        href={`https://unsplash.com/@${props.photo.user.username}`}
                    >
                    {props.photo.user.name}
                    </a>
                </div>
            </div>
        )
}

export default Item