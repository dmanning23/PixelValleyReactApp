import React from 'react';
import Emoji from './Emoji';
import CharacterLabel from '../Agent/CharacterLabel';

const OverworldCharacter = (props) => {

    return (
        <div
            style={{ 
            position: 'absolute',
            left: props.x,
            top: props.y,
            width: 128 * props.widthMultiplier,
            height: 224 * props.heightMultiplier}}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.resizedIconFilename}`}
                width={128 * props.widthMultiplier}
                height={224 * props.heightMultiplier}
                style={{position: 'absolute', zIndex: 4}}/>
            <Emoji 
                padding='12px' 
                agent={props.agent}/>
            <CharacterLabel 
                agent={props.agent}
                buttonSize='btn-sm'
                width={128 * props.widthMultiplier}
                height={224 * props.heightMultiplier}/>
        </div>
    );
}

export default OverworldCharacter