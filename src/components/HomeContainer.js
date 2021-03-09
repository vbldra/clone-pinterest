import React from 'react';
import DataApi from "./DataApi";


function HomeContainer() {
    return (
        <div className="container">
            <DataApi type="homePage"/>
        </div>
    )
}

export default HomeContainer