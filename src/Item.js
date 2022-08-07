import React from 'react'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

function Item( {item} ){
    let icon
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
        <div className="Item">
            <img className="ItemImg" src={icon}/> {item.name} - {item.category}       
        </div>
    )
}

export default Item