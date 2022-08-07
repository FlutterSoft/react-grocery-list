import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


function AddItem( {items, setItems}){
    const itemNameRef = useRef()
    const itemCatRef = useRef()

    function handleSubmit(e){
        const name = itemNameRef.current.value
        const category = itemCatRef.current.value

        e.preventDefault()
        if(name === '') return 

        setItems(prevItems => {
            return [...prevItems, {id: uuidv4(), name: name, category: category}]
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
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                </select>
            </label>               
            <button type="submit">Add</button>
        </form>
    </div>
    )
}

export default AddItem