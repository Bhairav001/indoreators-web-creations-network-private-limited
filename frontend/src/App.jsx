
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Table from "./components/Table"
import CreateNote from "./task-two/CreateNote"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <>
      <Navbar/>
    <Routes>
       <Route path="/" element={<Table/>}/>
       <Route path="/createNote" element={<CreateNote/>
}/>
    </Routes>
      </>
  </div>
  )
}

export default App
