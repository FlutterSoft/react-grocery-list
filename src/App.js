import './App.css';
import {useState} from 'react'
import CategorySection from './CategorySection'
import ItemList from './ItemList'
import AddItem from './AddItem'
import Groceries from './Groceries'
function App() {



  return (
    <div className="App">
      <h1>  Header </h1>
      <CategorySection />
      <Groceries />

    </div>
  );
}

export default App;
