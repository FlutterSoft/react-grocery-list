import React from 'react'
import CategoryButton from './CategoryButton'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

function CategorySection(){
    return(
        <div className="CategorySection">
            <CategoryButton icon={meatIcon} />
            <CategoryButton icon={fruitIcon} />
            <CategoryButton icon={vegetableIcon} />
            <CategoryButton icon={dairyIcon} />
        </div>

    )
}

export default CategorySection