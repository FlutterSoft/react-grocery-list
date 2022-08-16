import React from 'react'

function CategoryButton({icon, onClick}){
    return(
        <button className="CategoryButton"
            onClick={onClick}>
            <img className="CategoryIcon" src={icon}></img>
            <span>{icon.slice(icon.indexOf('media/')+6, icon.indexOf('.'))}</span> 
        </button>
    )
}
export default CategoryButton