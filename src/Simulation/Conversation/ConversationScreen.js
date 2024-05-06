import React, { useState } from 'react';
import GameWindowSize from '../../GameWindowSize';
import BackButton from './BackButton';
import ConversationCharacters from './ConversationCharacters';
import { Row, Col } from 'react-bootstrap';
import ConversationCard from './ConversationCard';
import ConversationBackground from './ConversationBackground';

const ConversationScreen = (props) => {

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

    return (
        <div style={{position: 'relative'}}>
            <ConversationBackground
                conversation={props.conversation}
                width={gameWindowSize.width}
                height={gameWindowSize.height}>
            </ConversationBackground>
            <Row style={{padding: '16px'}}>
                <Col xs={6} md={3}>
                    <BackButton location={props.location}/>
                </Col>
            </Row>
            <ConversationCharacters
                isSummary={isSummary}
                dialogueIndex={dialogueIndex}
                dialogue={props.conversation.dialogue} 
                agents={props.conversation.agents}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier}
                heightMultiplier={gameWindowSize.heightMultiplier} 
                y={currentY} />
            <ConversationCard 
                isSummary={isSummary}
                dialogueIndex={dialogueIndex}
                dialogue={props.conversation.dialogue} 
                summary={props.conversation.summary}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                handleNext={handleNext} />
        </div>
      );
}

export default ConversationScreen;