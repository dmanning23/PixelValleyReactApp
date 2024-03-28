import React from 'react';
import OverworldChibis from './OverworldChibis';
import { Link } from 'react-router-dom';
import LocationLabel from './LocationLabel';

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
            <Link 
                to={`/location/${props.location._id}`}>
                <img
                    src={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageFilename}`}
                    width={512 * props.widthMultiplier}
                    height={341 * props.heightMultiplier}
                />
            </Link>
            <OverworldChibis
                location={props.location}
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                widthMultiplier={props.widthMultiplier}
                heightMultiplier={props.heightMultiplier} />
            <LocationLabel 
                x={props.x}
                y={props.y}
                width={512 * props.widthMultiplier}
                height={341 * props.heightMultiplier}
                location={props.location} />
        </div>
    );
}

export default OverworldLocation