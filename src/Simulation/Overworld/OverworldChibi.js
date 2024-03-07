import React from 'react';
import { Sprite } from '@pixi/react';

const OverworldChibi = (props) => {

        //chibi.scale *= 0.8
    return (
        <>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedChibiFilename}`}
                x={props.x}
                y={props.y}
                width={108 * props.widthMultiplier}
                height={108 * props.heightMultiplier}
                anchor={{ x: 0.5, y: 0.5 }} />
        </>
    );
}

export default OverworldChibi