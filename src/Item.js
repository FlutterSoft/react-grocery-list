import React from 'react'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'
import deleteButtonIcon from './images/delete.png'

function Item( {items, item, setItems, filtering, updateCategory, currentCategoryFilter} ){
    let icon
    // set array of objects containing the different categories 
    let categories =[{index: 0, category: "Meat"}, {index: 1, category: "Fruit"},{index: 2, category: "Vegetable"}, {index: 3, category: "Dairy"}]

    // function to delete the item selected when click on X
    function deleteItem(id){
        const newItems = [...items].filter(item => item.id !== id)
        setItems(newItems)
        if(filtering){
            updateCategory(currentCategoryFilter, newItems)
        }    
    }

    // function to change the category of the current item
    // ---- This mutates the array! Bad ----
    function changeCategory(id){
        const newItems = [...items] // copy items array
        let current = newItems.find( item => item.id === id ) // find item clicked
        let currentCategory = categories.find(e => e.category === current.category) // find current category
        let next = currentCategory.index < categories.length-1 ? currentCategory.index + 1 : 0 // determine what the next category index should be 
        let nextCategory = categories.find(e => e.index === next) // find next category in categories array by index
        
        setItems(items.map(item => {
            if(item.id === current.id){
                return {id: item.id, name: item.name, category: nextCategory.category}
            }
            else{
                return item
            }
        }))
        // current.category = nextCategory.category // update current item category
        // setItems(newItems) // set State of items
        
        if(filtering){
            updateCategory(currentCategoryFilter) // if filter is on then re run the filter
        }
    }
    // set icon variable for it to be read by src in list of each item
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
            <img className="ItemImg" draggable="false" onClick={() => changeCategory(item.id)} src={icon}/> {item.name} 
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