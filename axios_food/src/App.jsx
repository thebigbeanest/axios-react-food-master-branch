import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import RecipeDetails from './Components/RecipeDetails'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
    </Routes>

  )
}

export default App
