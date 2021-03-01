import React, { useState, useContext, useEffect } from 'react';
import Item from './Item';
// import {MessengerPiggeon} from './App'


function HomeContainer(props) {
    // const user = useContext(MessengerPiggeon)
    // console.log(user)
    

    
    return (
        <div className="container">
            <div className="flex-container">
                
                {props.data.map((photo, index)=> <Item key={index} photo={photo}/>)}
                
            </div>
        </div>
    )
}

export default HomeContainer