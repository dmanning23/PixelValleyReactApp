import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LocationNavigationButton = (props) => {
    const navigate = useNavigate();

    return (
        <Button
            style={{ zIndex: 4 }}
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => navigate(`/location/${props.location._id}`)}>
            <h3>{props.text}</h3>
        </Button>
    );
}

export default LocationNavigationButton;