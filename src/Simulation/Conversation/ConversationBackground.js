import React, { useState } from 'react';
import GameWindowSize from '../../GameWindowSize';
import BackButton from './BackButton';
import ConversationCharacters from './ConversationCharacters';
import { Row, Col } from 'react-bootstrap';
import ConversationCard from './ConversationCard';

const ConversationBackground = (props) => {

    //State variables for navigating through the conversation
    const [isSummary, setIsSummary] = useState(true);
    const [dialogueIndex, setDialogueIndex] = useState(0);

    const increment = () => setDialogueIndex(prevIndex => prevIndex + 1);

    //Method for advancing the conversation
    const handleNext = (event) => {
        if (isSummary) {
            //set the summary to false so it shows the dialogue
            setIsSummary(false);
        }
        else{
            //move to the next dialogue option
            increment();
        }
    };

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    let currentY = gameWindowSize.height * 0.02

    //get the background image
    let backgroundImg = props.conversation.initiatingAgent.agentLocation.scenario.imageFilename;
    if (props.conversation.initiatingAgent.agentLocation.location) {
        backgroundImg = props.conversation.initiatingAgent.agentLocation.location.resizedImageInteriorFilename;
    }

    return (
        <div style={{position: 'relative'}}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${backgroundImg}`}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                style={{position: 'absolute', 
                    zIndex: -1, 
                    filter: 'grayscale(20%) brightness(45%) blur(2px)'}}>
            </img>
            <Row style={{padding: '16px'}}>
                <Col xs={6} md={3}>
                    <BackButton location={props.location}/>
                </Col>
            </Row>
            <ConversationCharacters
                conversation={props.conversation} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier}
                heightMultiplier={gameWindowSize.heightMultiplier} 
                y={currentY}
                isSummary={isSummary}
                dialogueIndex={dialogueIndex}/>
            <ConversationCard 
                conversation={props.conversation} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                isSummary={isSummary}
                dialogueIndex={dialogueIndex}
                handleNext={handleNext} />
        </div>
      );
}

export default ConversationBackground;