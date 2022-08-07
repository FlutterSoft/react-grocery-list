import React, { useState, useRef } from 'react'

function AddItem( {items, setItems}){

    const itemNameRef = useRef()
    const itemCatRef = useRef()

    function handleSubmit(e){
        const name = itemNameRef.current.value
        const category = itemCatRef.current.value

        e.preventDefault()
        if(name === '') return 

        setItems(prevItems => {
            return [...prevItems, {id: name, name: name, category: category}]
        })
        itemNameRef.current.value = null
    }


    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Add New Grocery Item</h3>
            <label>
                Name:
                <input 
                    type="text" 
                    placeholder="Enter Food Name" 
                    ref={itemNameRef}
                />
                <select ref={itemCatRef} >
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
            </label>               
            <button type="submit">Add</button>
        </form>
    </div>
    )
}

export default AddItem