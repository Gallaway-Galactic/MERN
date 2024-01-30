import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Create from './views/Create'
import ViewOne from './views/ViewOne'
import Edit from './views/Edit'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/books/:id" element={<ViewOne />} />
          <Route path="/books/:id/update" element={<Edit />} />
        </Routes>
    </>
  )
}

export default App
