import Button from 'react-bootstrap/Button';
import { CHAT_REQUEST } from '../../Queries/ChatRequest';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";

const TalkButton = (props) => {

    const navigate = useNavigate();

    function selectIds(objects) {
        return objects.map(obj => obj._id);
    }

    const agentIds= selectIds(props.location.agents);

    const [createChat, { loading, data }] = useMutation(
        CHAT_REQUEST, { 
            variables: {
                scenarioId: props.location.scenarioId,
                locationId: props.location._id,
                agentIds: agentIds,
            }
        }
    );
    
    if (data && data.chatRequest.conversation) {
        const chatId = data.chatRequest.conversation._id;
        navigate(`/chat/${chatId}`)
    }

    return (
        <Button 
            style={{position:'absolute',
                zIndex:4, 
                marginTop:16,
                left: '50%',
                top: 72,
                transform: 'translate( -50%)'}}
            type="button" 
            className="btn btn-secondary btn-lg"
            onClick={() => createChat()} >
            <h4>Talk</h4>
        </Button>
    );
}

export default TalkButton;