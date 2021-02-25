import React, { useContext } from 'react';
import Item from './Item';
// import {MessengerPiggeon} from './App'


function HomeContainer() {
    // const user = useContext(MessengerPiggeon)
    // console.log(user)
    return (
        <div className="container">
            <div className="flex-container">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
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

export default HomeContainer