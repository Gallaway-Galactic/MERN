import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import CodeEditor from './views/CodeEditor'

function App() {

  return (
    <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/algos" element={<CodeEditor />} />
        </Routes>
    </>
  )
}

export default App
