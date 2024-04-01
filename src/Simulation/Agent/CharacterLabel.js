import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Agent from '../../Queries/GetAgent';

const CharacterLabel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const y = 0 + (props.height * 0.9);
    return (
        <>
            <Button 
                style={{position:'absolute',
                    zIndex:5, 
                    marginTop:16,
                    left: '50%',
                    top: y,
                    transform: 'translate( -50%)'}}
                type="button" 
                className={`btn btn-secondary ${props.buttonSize}` }
                onClick={handleShow}>
                {props.agent.name}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title >
                    <h1>{props.agent.name}</h1>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Agent agentId={props.agent._id}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CharacterLabel;