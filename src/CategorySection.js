import React from 'react'
import CategoryButton from './CategoryButton'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

function CategorySection({items, onClick}){

    return(
        <div className="CategorySection">
            <CategoryButton onClick={() => onClick("Meat")} icon={meatIcon} />
            <CategoryButton onClick={() => onClick("Fruit")} icon={fruitIcon} />
            <CategoryButton onClick={() => onClick("Vegetable")} icon={vegetableIcon} />
            <CategoryButton onClick={() => onClick("Dairy")} icon={dairyIcon} />
        </div>

    )
}

export default CategorySection