import React from 'react';
import Item from './Item';
import RoundButton from './RoundButton'

function Container() {
    return (
        <>
            <Item />
            <Item />
            <Item />
            <Item />
            <RoundButton action="addNewItem" />
            <RoundButton action="helpCenter" />
        </>
    )
}

export default Container