import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Newspaper from './Newspaper';
import { useState } from 'react';

const NewspaperButton = (props) => {

    const [showNewspaper, setShowNewspaper] = useState(false);

    const handleClose = () => setShowNewspaper(false);
    const handleShow = () => setShowNewspaper(true);

    return (
        <div style={{ display: 'flex' }}>
            <Button style={{ flex: '1' }}
                onClick={handleShow}>
                <p>{props.newspaper.name}</p>
                <p>{props.newspaper.description}</p>
            </Button>
            <Modal show={showNewspaper} onHide={handleClose}>
                <Modal.Body>
                    <Newspaper newspaperId={props.newspaper._id}
                        newspaperName={props.newspaper.name} />
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default NewspaperButton;