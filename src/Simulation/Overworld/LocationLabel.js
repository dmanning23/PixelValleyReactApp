import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LocationLabel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const y = 0 + (props.height * 0.8);
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
                className="btn btn-secondary btn-sm" 
                onClick={handleShow}>
                {props.location.name}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title >
                    <h1>{props.location.name}</h1>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {props.location.description}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LocationLabel;