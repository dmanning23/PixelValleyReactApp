import React from 'react';

const ConversationCharacter = (props) => {

    //TODO: catch empty conversations!

    //decide whether we are going to filter this character
    let isFiltered = !props.isSummary;
    if (props.dialogueIndex < props.dialogue.length) {
        //get the character that is currently talking
        const currentDialogue = props.dialogue[props.dialogueIndex];
        const isCurrentCharacter = props.agent.name === currentDialogue.agentName;
        isFiltered = !props.isSummary && !isCurrentCharacter;
    }

    return (
        <div 
            style={{ position:'absolute', 
            left:props.x,
            top:props.y-16,
            width:512 * props.widthMultiplier,
            height:768 * props.heightMultiplier}}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.portraitFilename}`}
                width={512 * props.widthMultiplier}
                height={768 * props.heightMultiplier}
                style={{ 
                    position: 'absolute',
                    zIndex: 2,
                    top: '16px',
                    filter: isFiltered ? ' grayscale(30%) brightness(45%) ' : '' }}/>
        </div>
    );
}

export default ConversationCharacter