import React from 'react';
import { Sprite } from '@pixi/react';

const OverworldCharacter = (props) => {

    return (
        <>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedIconFilename}`}
                x={props.x}
                y={props.y}
                width={128 * props.widthMultiplier}
                height={224 * props.heightMultiplier}
                anchor={{ x: 0.5, y: 0.5 }} />
        </>
    );
}

export default OverworldCharacter