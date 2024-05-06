import React from 'react';

const Status = (props) => {

    return (
        <div  className="d-flex"
            role="img" 
            style={{position: 'absolute', zIndex: 5, padding:'8px'}}>
            <h3 style={{ padding:'48px 72px'}}>{props.agent.emoji}</h3>
            
        </div>
    );
}

export default Status