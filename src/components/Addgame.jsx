import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addgame } from '../redux/gameslice';


function Addgame() {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newgame, setnewgame] = useState({
    id: Math.random(),
    name: "",
    posterurl: "",
    description: "",
  })
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" onChange={(e)=>setnewgame({ ...newgame,name:e.target.value })} />
          <Form.Label>Image</Form.Label>
          <Form.Control placeholder="URL" onChange={(e)=>setnewgame({ ...newgame,posterurl:e.target.value })} />
          {/* <Form.Label>description</Form.Label>
          <Form.Control placeholder="description" onChange={(e)=>setnewgame({ ...newgame,description:e.target.value })} /> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addgame(newgame));handleClose()}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addgame