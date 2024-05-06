import React from 'react';
import ConversationCharacter from './ConversationCharacter';

const ConversationCharacters = (props) => {

    //Create a list of the x and y for each character
    let characters = [];
    let createCharacter = function(agent, x, y) {
        characters.push({agent: agent, x: x, y:y});
    };

    //character size = 512 * 896

    //add the chibi heads for characters that are inside
    if (props.agents.length > 0) {
        let characterWidth = (512 * props.widthMultiplier) + 64
        let totalWidth = (characterWidth * props.agents.length)
        let characterX = ((props.width / 2) - (totalWidth / 2))
        let characterY = props.y
        for (let i = 0; i < props.agents.length; i++) {
            createCharacter(props.agents[i], characterX, characterY)
            characterX += characterWidth
        }
    }

    const listCharacters = characters.map((character, index) => 
        <ConversationCharacter
            key={index}
            isSummary={props.isSummary}
            dialogueIndex={props.dialogueIndex}
            dialogue={props.dialogue} 
            agent={character.agent} 
            x={character.x}
            y={character.y}
            widthMultiplier={props.widthMultiplier}
            heightMultiplier={props.heightMultiplier} />
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

export default ConversationCharacters;