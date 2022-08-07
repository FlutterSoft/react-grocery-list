import './App.css';
import React, {useEffect} from 'react'
import {useState} from 'react'
import CategorySection from './CategorySection'
import Groceries from './Groceries'

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
