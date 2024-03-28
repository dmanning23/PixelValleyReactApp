import React from 'react';

const Emoji = (props) => {

    return (
        <>
            {props.agent.emoji && (
                <p 
                    role="img" 
                    style={{position: 'absolute', zIndex: 5, paddingLeft: props.padding}}>
                    {props.agent.emoji}
                </p>
            )}
        </>
    );
}

export default Emoji