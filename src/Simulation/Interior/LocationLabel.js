import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LocationLabel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button 
                style={{zIndex:4, marginTop:16}}
                type="button" 
                className="btn btn-secondary btn-lg" 
                onClick={handleShow}>
                <h3>{props.location.name}</h3>
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