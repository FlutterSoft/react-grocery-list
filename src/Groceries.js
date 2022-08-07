import React, {useState} from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'

function Groceries(){
    const [items, setItems] = useState([{ id: 1, name: 'Apples', category: 'Fruit'},{ id: 2, name: 'Potatoes', category: 'Vegetables'}])
    return(
        <div>
            <AddItem items={items} setItems={setItems} />
            <ItemList items={items}  />            
        </div>

    )
}
export default Groceries