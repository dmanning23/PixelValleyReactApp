import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const BackButton = (props) => {
    const navigate = useNavigate();

    return (
        <Button 
            style={{zIndex:4}}
            type="button" 
            className="btn btn-secondary btn-lg" 
            onClick={() => navigate(-1)}>
            <h3>Back</h3>
        </Button>
    );
}

export default BackButton;