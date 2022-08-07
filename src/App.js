import './App.css';
import React, {useEffect} from 'react'
import {useState} from 'react'
import CategorySection from './CategorySection'
import AddItem from './AddItem'
import ItemList from './ItemList'

const LOCAL_STORAGE_KEY = 'groceryItems.itemss'

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  
  const [filtering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState()
  let display = (filtering) ? filtered : items


  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])




  return (
    <div className="App">
      <h1>Grocery List</h1>
      <p>Enter food name, select category and click add!</p>
      <p>Click one of the four category icons to filter by that category. </p>
      <p>Click the icon next to a food name to cycle through the categories.</p>
      <span>And don't worry, you won't lose your list if you close the page!</span>
      <div className="ListSection">
        <CategorySection items={items} setFiltered={setFiltered} setFiltering={setFiltering} />
        <AddItem items={items} setItems={setItems} setFiltering={setFiltering} />
        <ItemList display={display} setItems={setItems} items={items} filtering={filtering} setFiltering={setFiltering}/>   
      </div>

    </div>
  );
}

export default App;
