import React from 'react';
import { Sprite } from '@pixi/react';

const InteriorCharacter = (props) => {

    const characterStyle = {
        position: 'absolute',
        zIndex: 2,
        left: props.x,
        top: props.y
    };

    return (
        <img
            src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.iconFilename}`}
            width={512 * props.widthMultiplier}
            height={896 * props.heightMultiplier}
            style={ characterStyle }/>
    );
}

export default InteriorCharacter