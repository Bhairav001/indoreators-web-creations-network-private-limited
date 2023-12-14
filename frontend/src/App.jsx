
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Table from "./components/Table"
import CreateNote from "./task-two/CreateNote"
import Navbar from "./components/Navbar"
import Crud from "./task-two/Crud"

function App() {

  return (
    <div>
      <>
      <Navbar/>
    <Routes>
       <Route path="/" element={<Table/>}/>
       <Route path="/createNote" element={<CreateNote/>}/>
       <Route path="/crud" element={<Crud/>}/>
    </Routes>
      </>
  </div>
  )
}

export default App
