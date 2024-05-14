import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewspaperButton from './NewspaperButton';

const NewspapersButton = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                style={{
                    position: 'absolute',
                    zIndex: 4,
                    marginTop: 32,
                    marginRight: 32,
                    right: 0,
                    top: 0,
                }}
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={handleShow}>
                <h3>🗞</h3>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        <h1>Newspapers</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {props.scenario.newspapers.map((data, index) => {
                            return (
                                <div key={index} className="border border-dark">
                                    <NewspaperButton newspaper={data}
                                        closeParent={handleClose} />
                                </div>
                            );
                        })}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NewspapersButton;