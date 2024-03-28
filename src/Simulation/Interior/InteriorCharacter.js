import React from 'react';
import Status from './Status';
import CharacterLabel from '../CharacterLabel';

const InteriorCharacter = (props) => {

    return (
        <div 
            style={{ position:'absolute', 
            left:props.x,
            top:props.y-16,
            width:512 * props.widthMultiplier,
            height:896 * props.heightMultiplier}}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.iconFilename}`}
                width={512 * props.widthMultiplier}
                height={896 * props.heightMultiplier}
                style={{ 
                    position: 'absolute',
                    zIndex: 2,
                    top: '16px' }}/>
            <Status 
                agent={props.agent}/>
            <CharacterLabel 
                agent={props.agent}
                buttonSize='btn-lg'
                width={512 * props.widthMultiplier}
                height={896 * props.heightMultiplier}/>
        </div>
    );
}

export default InteriorCharacter