import './App.css';
import React, {useEffect} from 'react'
import {useState} from 'react'
import CategorySection from './CategorySection'
import AddItem from './AddItem'
import ItemList from './ItemList'

// Local storage key for storing list
const LOCAL_STORAGE_KEY = 'groceryItems.itemss'

// Main app
function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })

  // State for current category filtering
  const [currentCat, setCurrentCat] = useState('')

  // State for if currently filtering by category
  const [filtering, setFiltering] = useState(false)

  // State for current filtered items
  const [filtered, setFiltered] = useState()

  // Sets the list to be rendered to either the items state or filtering
  let display = (filtering) ? filtered : items

  // Set local storage item to the items list whenever [items] changes
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  // Function to change state of current category
  function updateCategory(cat, toFilter = items){
      setCurrentCat(cat)
      categoryFilter(cat, toFilter)
  }
  // Function to set category filtered list of items
  function categoryFilter(cat, toFilter){
    setFiltering(true)
    setFiltered(toFilter.filter(item => item.category == cat))
  }

  // JSX Return
  return (
    <div className="App">
      <h1>Grocery List</h1>
      <p>Enter food name, select category and click add!</p>
      <p>Click one of the four category icons to filter by that category. </p>
      <p>Click the icon next to a food name to cycle through the categories.</p>
      <span>And don't worry, you won't lose your list if you close the page!</span>
      <div className="ListSection">
        <CategorySection items={items} setFiltered={setFiltered} setFiltering={setFiltering} currentCat={currentCat} setCurrentCat={setCurrentCat} updateCategory={updateCategory} />
        <AddItem items={items} setItems={setItems} setFiltering={setFiltering} />
        <ItemList display={display} setItems={setItems} items={items} filtering={filtering} setFiltering={setFiltering} currentCat={currentCat} setCurrentCat={setCurrentCat} updateCategory={updateCategory} currentCategoryFilter={currentCat} />   
      </div>
    </div>
  );
}

export default App;
