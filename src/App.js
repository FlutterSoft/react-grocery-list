import './App.css';
import React from 'react'
import {useState} from 'react'
import CategorySection from './CategorySection'
import ItemList from './ItemList'
import AddItem from './AddItem'
import Groceries from './Groceries'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [items, setItems] = useState([{id: uuidv4(), name: "Apple", category: "Fruit"},{id: uuidv4(), name: "Banana", category: "Fruit"},{id: uuidv4(), name: "Carrot", category: "Vegetable"},{id: uuidv4(), name: "Milk", category: "Dairy"},{id: uuidv4(), name: "Bacon", category: "Meat"} ])
  const [filtering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState()
  let display = (filtering) ? filtered : items



  function categoryFilter(cat){
    setFiltering(true)
    setFiltered(items.filter(item => item.category == cat))
  }


  return (
    <div className="App">
      <CategorySection onClick={categoryFilter} setFiltering={setFiltering} />
      <Groceries display={display} items={items} setItems={setItems} setFiltering={setFiltering} />

    </div>
  );
}

export default App;
