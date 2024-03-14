import React from 'react';
import OverworldCharacter from './OverworldCharacter';

const OverworldCharacters = (props) => {

    //Create a list of the x and y for each character
    let characters = [];
    let createCharacter = function(agent, x, y) {
        characters.push({agent: agent, x: x, y:y});
    };

    //add the chibi heads for characters that are inside
    if (props.scenario.outsideAgents.length > 0) {
        let characterWidth = (148 * props.heightMultiplier)
        let totalWidth = (characterWidth * props.scenario.outsideAgents.length)
        let characterX = ((props.width / 2) - (totalWidth / 2)) + (characterWidth / 2)
        let characterY = props.y
        for (let i = 0; i < props.scenario.outsideAgents.length; i++) {
            createCharacter(props.scenario.outsideAgents[i], characterX, characterY)
            characterX += characterWidth
        }
    }

    const listCharacters = characters.map((character) => 
        <OverworldCharacter
            key={character.agent._id}
            agent={character.agent} 
            x={character.x}
            y={character.y}
            widthMultiplier={props.widthMultiplier}
            heightMultiplier={props.heightMultiplier}/>
    );

    return (
        <>
            {listCharacters.length > 0 ? ( 
                <>{listCharacters}</>
            ):(
                <></>
            )}
        </>
    );
}

export default OverworldCharacters;