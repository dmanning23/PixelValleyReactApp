import React, { useState } from 'react';
import GameWindowSize from '../../GameWindowSize';
import BackButton from './BackButton';
import ConversationCharacters from './ConversationCharacters';
import { Row, Col } from 'react-bootstrap';
import ConversationBackground from './ConversationBackground';
import ChatCard from './ChatCard';
import ConversationCard from './ConversationCard';
import { CHAT_RESPONSE } from '../../Queries/ChatResponse';
import { useMutation } from "@apollo/client";
import ThinkingCard from './ThinkingCard';

const ChatScreen = (props) => {

    //State variables for navigating through the conversation
    const [isSummary, setIsSummary] = useState(true);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [isPlayerTurn, setPlayerTurn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dialogue, setDialogue] = useState([]);

    //Method for advancing the conversation
    const handleNext = (event) => {
        if (isSummary) {
            //set the summary to false so it shows the dialogue
            setIsSummary(false);
        }
        else{
            //move to the next dialogue option
            setDialogueIndex(dialogueIndex + 1);
        }

        setPlayerTurn(dialogueIndex >= dialogue.length - 1);
    };

    const [chatResponse] = useMutation(CHAT_RESPONSE);

    const handlePlayerText = async (event) => {
        setIsLoading(true);

        try {
            const playerQuestion = event.target[0].value;

            //call to the backend to get a response
            const { data } = await chatResponse({ variables: { conversationId: props.conversation._id, playerQuestion: playerQuestion } })

            //add the player text
            dialogue.push({"agentName": "Player", "text": playerQuestion})

            //add the agents' text
            data.chatResponse.dialogue.forEach((chat) => {
                dialogue.push({"agentName": chat.agentName, "text": chat.text})
            })

            //update the conversation object
            setDialogue(dialogue);

            setIsSummary(false);
            setPlayerTurn(false);
        }
        catch (error) {
            console.error('Error getting chat response:', error);
        }
        finally {
            
            setIsLoading(false);
        }
    }

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
                    <BackButton location={props.conversation.location}/>
                </Col>
            </Row>
            <ConversationCharacters
                isSummary={isSummary || isPlayerTurn}
                dialogueIndex={dialogueIndex}
                dialogue={dialogue} 
                agents={props.conversation.agents}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier}
                heightMultiplier={gameWindowSize.heightMultiplier} 
                y={currentY}/>
            {isLoading ? (
                <ThinkingCard type="spinningBubbles" color="#444"
                    width={gameWindowSize.width}
                    height={gameWindowSize.height} />
            ) : (
                    isPlayerTurn ? (
                    <ChatCard 
                        width={gameWindowSize.width}
                        height={gameWindowSize.height}
                        handlePlayerText={handlePlayerText} />
                ) : (
                    <ConversationCard 
                        isSummary={isSummary}
                        showNextButton={true}
                        dialogueIndex={dialogueIndex}
                        dialogue={dialogue} 
                        summary={props.conversation.summary}
                        width={gameWindowSize.width}
                        height={gameWindowSize.height}
                        handleNext={handleNext} />
                )
            )}
        </div>
    );
}

export default ChatScreen;