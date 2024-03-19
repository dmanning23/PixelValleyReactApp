import React from 'react';

const OverworldCharacter = (props) => {

    const characterStyle = {
        position: 'absolute',
        zIndex: 4,
        left: props.x,
        top: props.y
    };

    return (
        <>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedIconFilename}`}
                width={128 * props.widthMultiplier}
                height={224 * props.heightMultiplier}
                style={characterStyle}/>
        </>
    );
}

export default OverworldCharacter