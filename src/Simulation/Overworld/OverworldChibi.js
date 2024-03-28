import React from 'react';
import Emoji from './Emoji';

const OverworldChibi = (props) => {

    return (
        <div 
            style={{ 
            position: 'absolute',
            left: props.x,
            top: props.y,
            width: 96 * props.widthMultiplier,
            height: 96 * props.heightMultiplier}}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedChibiFilename}`}
                width={96 * props.widthMultiplier}
                height={96 * props.heightMultiplier}
                style={{position: 'absolute', zIndex: 3}}/>
            <Emoji agent={props.agent}
                style={{position: 'absolute', zIndex: 5}}/>
        </div>
    );
}

export default OverworldChibi