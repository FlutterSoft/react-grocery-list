import React from 'react'

function CategoryButton({icon, onClick}){
    return(
        <button className="CategoryButton"
            onClick={onClick}
        >
            <img className="CategoryIcon" src={icon}></img>
        </button>
    )
}
export default CategoryButton