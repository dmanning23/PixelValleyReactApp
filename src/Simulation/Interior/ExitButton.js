import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ExitButton = (props) => {
    const navigate = useNavigate();

    return (
        <Button 
            style={{zIndex:4}}
            type="button" 
            className="btn btn-secondary btn-lg" 
            onClick={() => navigate("/")}>
            <h3>Exit</h3>
        </Button>
    );
}

export default ExitButton;