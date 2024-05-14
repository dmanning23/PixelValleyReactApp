import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OverworldLabel = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                style={{ zIndex: 4 }}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={handleShow}>
                <h3>{props.scenario.name}</h3>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        <h1>{props.scenario.name}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h3>{props.scenario.currentDateTime}</h3>
                        {props.scenario.description}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OverworldLabel;