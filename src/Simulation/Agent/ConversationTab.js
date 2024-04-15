import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
  
const ConversationTab = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            {props.agent.conversations.map((data, index) => {
                return (
                    <div className="border border-dark" key={index}>
                        <Button onClick={() => navigate(`/conversation/${data._id}`)}>
                            {data.summary}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

export default ConversationTab