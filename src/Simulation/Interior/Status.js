import React from 'react';

const Status = (props) => {

    return (
        <div  className="d-flex"
            role="img" 
            style={{position: 'absolute', zIndex: 5, padding:'8px'}}>
            <h3 style={{ padding:'4px'}}>{props.agent.emoji}</h3>
            <p className="text-light" style={{fontWeight: 600}}>{props.agent.status}</p>
        </div>
    );
}

export default Status