import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
                    
                    <img src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.portraitFilename}`}
                        style={{height: "50%", width: "50%"}}
                        width={256}
                        height={384} />
                    <div>
                        {props.agent.description}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CharacterLabel;