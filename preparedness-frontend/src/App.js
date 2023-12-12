import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [inputName, setInputName] = useState(" ")

  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  
  const handleChange = (e) => {
    setInputName(e.target.value)
  }
 
  const reset = () => {
    setInputName(" ")
  }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name" >Enter your name</Label>
          <Input type="text" value={inputName} onChange={handleChange} />
        </div>
        <ModalComponent modal={modal} toggle={toggle} inputName={inputName} />
        <Button className="button" color="primary" onClick={toggle}>
          Click me
        </Button >
        <Button className="button" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default App
