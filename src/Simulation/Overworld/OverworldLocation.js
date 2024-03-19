import React from 'react';
import OverworldChibis from './OverworldChibis';
import { useNavigate, Link } from 'react-router-dom';
import {  } from 'react-router-dom';

const OverworldLocation = (props) => {

    //TODO: zIndex should be cleaned up 
    const locationStyle = {
        position: 'absolute',
        zIndex: 2,
        left: props.x,
        top: props.y
    };

    return (
        <Link to={`/location/${props.location._id}`}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageFilename}`}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                style={locationStyle}
            />
            <OverworldChibis
                location={props.location}
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                widthMultiplier={props.widthMultiplier}
                heightMultiplier={props.heightMultiplier} />
        </Link>
    );
}

export default OverworldLocation