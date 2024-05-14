import { useQuery } from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { GET_NEWSPAPER } from '../../Queries/GetNewspaper';
import Edition from './Edition';

const Newspaper = (props) => {

    const [showNewspaperEditions, setShowNewspaperEditions] = useState(false);

    const handleClose = () => setShowNewspaperEditions(false);
    const handleShow = () => setShowNewspaperEditions(true);

    const { loading, error, data } = useQuery(GET_NEWSPAPER, {
        variables: { newspaperId: props.newspaperId }
    });

    if (loading) {
        return (
            <ReactLoading type="spinningBubbles" color="#444" />
        );
    }
    else if (error) {
        return (
            <p>Something went wrong...</p>
        );
    }
    else {
        return (
            <div>
                <h1>{data.newspaper.newspaper.name}</h1>
                {data.newspaper.newspaper.editions.map((data, index) => {
                    return (
                        <div key={index} className="border border-dark">
                            <div style={{ display: 'flex' }}>
                                <Button style={{ flex: '1' }}
                                    onClick={handleShow}>
                                    <p>{data.date}</p>
                                </Button>
                                <Modal show={showNewspaperEditions} onHide={handleClose}>
                                    <Modal.Body>
                                        <Edition newspaperName={props.newspaperName}
                                            editionId={data._id} />
                                    </Modal.Body>
                                </Modal>
                            </div >
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Newspaper;