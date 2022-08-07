import React from 'react'
import CategoryButton from './CategoryButton'
import meatIcon from './images/meat.png'
import fruitIcon from './images/fruit.png'
import vegetableIcon from './images/vegetable.png'
import dairyIcon from './images/dairy.png'

function CategorySection({ items, setFiltering, setFiltered }){
    
    function categoryFilter(cat){
        setFiltering(true)
        setFiltered(items.filter(item => item.category == cat))
      }
      

    return(
        <div className="CategorySection">
            <div className="Buttons">
                <CategoryButton onClick={() => categoryFilter("Meat")} icon={meatIcon} />
                <CategoryButton onClick={() => categoryFilter("Fruit")} icon={fruitIcon} />
                <CategoryButton onClick={() => categoryFilter("Vegetable")} icon={vegetableIcon} />
                <CategoryButton onClick={() => categoryFilter("Dairy")} icon={dairyIcon} />
            </div>
            <button className="btn" onClick={() => setFiltering(false)}>Show All</button>
        </div>
    )
}

export default CategorySection