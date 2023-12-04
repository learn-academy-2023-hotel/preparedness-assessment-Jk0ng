import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [inputName, setInputName] = useState()
  // const addName = () => {
  //   setInputName(inputName = Input)
  // }
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name" >Enter your name</Label>
          <Input />
        </div>
        <ModalComponent inputName = {inputName}/>
        <Button>Reset</Button>
      </div>
    </div>
  )
}

export default App
