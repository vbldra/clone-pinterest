import React from 'react';
import DataApi from "./DataApi";
// import {MessengerPiggeon} from './App'


function HomeContainer() {
    // const user = useContext(MessengerPiggeon)
    // console.log(user)
    return (
        <div className="container">
            <DataApi type="homePage"/>
        </div>
    )
}

export default HomeContainer