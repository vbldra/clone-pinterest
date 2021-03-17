import React from 'react';

class Item extends React.Component {
    render = () => {
        return (
                <div className="item">
                    <img src={this.props.photo.urls.regular}></img>
                    <h2>{this.props.photo.description ? this.props.photo.description : "Photo"}</h2>
                    <p>{this.props.photo.alt_description}</p>
                    <div className="profile_container">
                        <img className="profile_image" src={this.props.photo.user.profile_image.small}/>
                        <a
                            className="credit"
                            target="_blank"
                            href={`https://unsplash.com/@${this.props.photo.user.username}`}
                        >
                        {this.props.photo.user.name}
                        </a>
                    </div>
                </div>
            )

    }
}

export default Item