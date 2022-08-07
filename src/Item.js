import React from 'react'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'
import deleteButtonIcon from './images/delete.png'

function Item( {items, item, deleteItem, setItems, filtering, setFiltering} ){
    let icon
    let categories =[{index: 0, category: "Meat"}, {index: 1, category: "Fruit"},{index: 2, category: "Vegetable"}, {index: 3, category: "Dairy"}]

    function deleteItem(id){
        const newItems = [...items].filter(item => item.id != id)
        setItems(newItems)
        setFiltering(false)
    }
    function changeCategory(id){
        const newItems = [...items]
        let current = newItems.find( item => item.id == id )
        let currentCategory = categories.find(e => e.category == current.category)
        let next = currentCategory.index < categories.length-1 ? currentCategory.index + 1 : 0
        let nextCategory = categories.find(e => e.index == next)
        current.category = nextCategory.category
        console.log(current)
        setItems(newItems)
        if(filtering){
            setFiltering(false)
        }
        
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
            <img className="ItemImg" onClick={() => changeCategory(item.id)} src={icon}/> {item.name} 
            <button 
                className="btn" 
                id="DeleteBtn" 
                onClick={() => deleteItem(item.id)}>
                    <img className="DeleteIcon" src={deleteButtonIcon}/>
            </button>     
        </li>
    )
}

export default Item