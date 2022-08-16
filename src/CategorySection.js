import React, { useEffect, useState } from 'react'
import CategoryButton from './CategoryButton'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

// Creates the category section containing the category filtering buttons
function CategorySection({ setFiltering, updateCategory }){
    return(
        <div className="CategorySection">
            <h2>Filter By Category</h2>
            {/* On button click run the updateCategory function to filter the list */}
            <div className="Buttons">
                <CategoryButton onClick={() => updateCategory("Meat")} icon={meatIcon} />
                <CategoryButton onClick={() => updateCategory("Fruit")} icon={fruitIcon} />
                <CategoryButton onClick={() => updateCategory("Vegetable")} icon={vegetableIcon} />
                <CategoryButton onClick={() => updateCategory("Dairy")} icon={dairyIcon} />
            </div>
            <button className="btn" onClick={() => setFiltering(false)}>Show All</button>
        </div>
    )
}

export default CategorySection