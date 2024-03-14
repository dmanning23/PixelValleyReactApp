import React from 'react';
import { Sprite } from '@pixi/react';
import OverworldChibis from './OverworldChibis';
import '@pixi/events';
import { Navigate } from "react-router-dom";

const OverworldLocation = (props) => {

    return (
        <>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageFilename}`}
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                anchor={{ x: 0.5, y: 0.5 }}
                eventMode={"static"}
                pointerdown={() => { 
                    console.log("click");
                    return <Navigate to={`/location/${props.location._id}`} replace={true}/>}}
            />

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