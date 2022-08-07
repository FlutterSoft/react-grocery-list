import React from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

function ItemList({ display, setItems, items, filtering, setFiltering}){
    let list = display.map(item => {
        return <Item key={uuidv4()} item={item} items={items} setItems={setItems} filtering={filtering}  setFiltering={setFiltering}/>
    })
    
    return(
        <ul>
            {list}
        </ul>

    )
}
export default ItemList