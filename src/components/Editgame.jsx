    import React, { useState } from 'react'
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
    import Form from 'react-bootstrap/Form';
    import { useDispatch } from 'react-redux';
    import { addgame, editgame } from '../redux/gameslice';


    function Editgame({game}) {
    const [show, setShow] = useState(false);
    const dispatch=useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
        id: Math.random(),
        name: game.name,
        posterurl:game.posterurl,
        description: "",
    })
    return (
        <div>
        <Button className='mt-2 mr-28' style={{background:"#955149", border:"#955149"}} onClick={handleShow}>
            Edit 
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>edit Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder={game.name} onChange={(e)=>setedited({ ...edited,name:e.target.value })} />
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder={game.posterurl} onChange={(e)=>setedited({ ...edited,posterurl:e.target.value })} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(editgame({id:game.id,edited}));handleClose()}}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
    }

    export default Editgame