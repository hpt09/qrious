import React from 'react'
import FamilyTree from './Components/FamilyTree'
import data from './Data/data'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <FamilyTree data={data} />
    </div>
  )
}

export default App
