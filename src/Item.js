import React, {useRef} from 'react'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'
import deleteButtonIcon from './images/delete.png'

function Item( {items, item, deleteItem, setItems} ){
    const itemRef = useRef()
    let icon

    function deleteItem(id){
        const newItems = [...items].filter(item => item.id != id)
        setItems(newItems)
    }

    if (item.category === "Fruit"){
        icon = fruitIcon
    }
    else if(item.category === "Vegetable"){
        icon = vegetableIcon
    }
    else if(item.category === "Meat"){
        icon = meatIcon
    }
    else if(item.category === "Dairy"){
        icon = dairyIcon
    }    
    return(
        <li className="Item">
            <img className="ItemImg" src={icon}/> {item.name} 
            <button 
                ref={itemRef} 
                className="btn" 
                id="DeleteBtn" 
                onClick={() => deleteItem(item.id)}>
                    <img className="DeleteIcon" src={deleteButtonIcon}/>
            </button>     
        </li>
    )
}

export default Item