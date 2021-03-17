import React from 'react';
import DataApi from "./DataApi";

class HomeContainer extends React.Component {
    render = () => {
        return (
            <div className="container">
                <DataApi type="homePage"/>
            </div>
        )
    }
}

export default HomeContainer