import React from 'react'
import CategoryButton from './CategoryButton'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

function CategorySection({onClick, setFiltering}){

    return(
        <div className="CategorySection">
            <div className="Buttons">
                <CategoryButton onClick={() => onClick("Meat")} icon={meatIcon} />
                <CategoryButton onClick={() => onClick("Fruit")} icon={fruitIcon} />
                <CategoryButton onClick={() => onClick("Vegetable")} icon={vegetableIcon} />
                <CategoryButton onClick={() => onClick("Dairy")} icon={dairyIcon} />
            </div>
            <button className="btn" onClick={() => setFiltering(false)}>Reset</button>

        </div>

    )
}

export default CategorySection