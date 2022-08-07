import React from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'


function Groceries({items, display, setItems, setFiltering}){
    return(
        <div>
            <AddItem items={items} setItems={setItems} setFiltering={setFiltering} />
            <ItemList display={display} setItems={setItems} items={items}/>            
        </div>

    )
}
export default Groceries

