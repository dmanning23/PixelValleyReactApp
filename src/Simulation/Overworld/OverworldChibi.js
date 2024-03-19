import React from 'react';

const OverworldChibi = (props) => {

    const chibiStyle = {
        position: 'absolute',
        zIndex: 3,
        left: props.x,
        top: props.y
    };

    return (
        <img
            src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedChibiFilename}`}
            width={96 * props.widthMultiplier}
            height={96 * props.heightMultiplier}
            style={chibiStyle}/>
    );
}

export default OverworldChibi