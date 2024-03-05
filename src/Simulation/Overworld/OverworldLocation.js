import React from 'react';
import { Sprite } from '@pixi/react';
import building from "../../building.png"
import OverworldChibis from './OverworldChibis';

const OverworldLocation = (props) => {

    return (
        <>
            <Sprite
                image={building}
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