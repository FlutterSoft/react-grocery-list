import React, {useState, useEffect} from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'

const LOCAL_STORAGE_KEY = 'groceryItems.itemss'

function Groceries({items, display, setItems, setFiltering}){
    return(
        <div>
            <AddItem items={items} setItems={setItems} setFiltering={setFiltering} />
            <ItemList display={display} setItems={setItems}  />            
        </div>

    )
}
export default Groceries




    // useEffect(() => {
    //     const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //     if (storedItems) setItems(storedItems)
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
    // }, [items])
