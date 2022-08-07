import React from 'react'

function CategoryButton({icon}){
    return(
        <button className="CategoryButton">
            <img className="CategoryIcon" src={icon}></img>
        </button>
    )
}
export default CategoryButton