import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LocationLabel = (props) => {
    const navigate = useNavigate();

    const x = props.x + (props.width * 0.5);
    const y = props.y + (props.height * 0.8);
    return (
        <Button 
            style={{position:'absolute',
                zIndex:12, 
                marginTop:16,
                left: x,
                top: y,
                transform: 'translate( -50%)'}}
            type="button" 
            className="btn btn-secondary btn-sm" 
            onClick={() => navigate(`/location/${props.location._id}`)}>
            {props.location.name}
        </Button>
    );
}

export default LocationLabel;