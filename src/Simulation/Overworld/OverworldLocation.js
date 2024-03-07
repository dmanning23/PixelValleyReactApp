import React from 'react';
import { Sprite } from '@pixi/react';
import OverworldChibis from './OverworldChibis';

const OverworldLocation = (props) => {

    return (
        <>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageFilename}`}
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                anchor={{ x: 0.5, y: 0.5 }} />

            <OverworldChibis
                location={props.location}
                x={props.x}
                y={props.y}
                widthMultiplier={props.widthMultiplier}
                heightMultiplier={props.heightMultiplier} />
        </>
    );
}

export default OverworldLocation