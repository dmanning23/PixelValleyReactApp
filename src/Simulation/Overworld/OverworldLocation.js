import React from 'react';
import OverworldChibis from './OverworldChibis';

const OverworldLocation = (props) => {

    //TODO: zIndex should be cleaned up 
    const locationStyle = {
        position: 'absolute',
        zIndex: 2,
        left: props.x,
        top: props.y
    };

    return (
        <div  
            id={props.location.name}
            className="d-flex" 
            style={locationStyle}
            width={512 * props.widthMultiplier}
            height={341 * props.heightMultiplier}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageFilename}`}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
            />
            <OverworldChibis
                location={props.location}
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                widthMultiplier={props.widthMultiplier}
                heightMultiplier={props.heightMultiplier} />
            
        </div>
    );
}

export default OverworldLocation