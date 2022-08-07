import React from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

function ItemList({ items }){

    return(
        items.map(item => {
            return <Item key={uuidv4()} item={item}/>
        })
    )
}
export default ItemList