import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
const ModalComponent = (props) => {
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  return (
    <div>
      <Button onClick={toggle} color="primary">Click Me</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>
          Hi {props.inputName}
        </ModalHeader>
        <ModalBody>
          Lorem Ipsum
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>
            Submit
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
export default ModalComponent

