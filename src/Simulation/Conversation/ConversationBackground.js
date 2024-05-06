import React from 'react';

const ConversationBackground = (props) => {

    //get the background image. Is there a location attached to the conversation?
    let backgroundImg = "";
    if (props.conversation.location) {
        //Use the location where the conversation took place
        backgroundImg = props.conversation.location.resizedImageInteriorFilename;
    }
    else if (props.conversation.scenario) {
        //Use the scenario where the conversation took place (outside?)
        backgroundImg = props.conversation.scenario.imageFilename;
    }   
    else if (props.conversation.initiatingAgent) {
        //Else use the location of the initiating agent
        backgroundImg = props.conversation.initiatingAgent.agentLocation.scenario.imageFilename;
        if (props.conversation.initiatingAgent.agentLocation.location) {
            backgroundImg = props.conversation.initiatingAgent.agentLocation.location.resizedImageInteriorFilename;
        }
    }

    return (
        <img
            src={`https://dyifmflum502e.cloudfront.net/${backgroundImg}`}
            width={props.width}
            height={props.height}
            style={{position: 'absolute', 
                zIndex: -1, 
                filter: 'grayscale(20%) brightness(45%) blur(2px)'}}>
        </img>
      );
}

export default ConversationBackground;