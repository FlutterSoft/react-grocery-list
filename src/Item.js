import React from 'react'

function Item( {item} ){
    return(
        <div>
            {item.name}
            - {item.category}
        </div>
    )
}

export default Item