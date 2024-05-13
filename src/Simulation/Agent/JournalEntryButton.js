import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import JournalEntry from '../../Queries/GetJournalEntry';
import { useState } from 'react';

const JournalEntryButton = (props) => {

    const [showJournalEntry, setShowJournalEntry] = useState(false);

    const handleClose = () => setShowJournalEntry(false);
    const handleShow = () => setShowJournalEntry(true);

    return (
        <div style={{ display: 'flex' }}>
            <Button style={{ flex: '1' }}
                onClick={handleShow}>
                <p>{props.journalEntry.dateTime}</p>
                <p>{props.journalEntry.summary}</p>
            </Button>
            <Modal show={showJournalEntry} onHide={handleClose}>
                <Modal.Body>
                    <JournalEntry journalEntryId={props.journalEntry._id} />
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default JournalEntryButton;