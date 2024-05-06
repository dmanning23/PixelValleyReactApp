import {gql, useQuery} from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import ConversationScreen from '../Simulation/Conversation/ConversationScreen';
import { useParams } from 'react-router-dom';
import ChatScreen from '../Simulation/Conversation/ChatScreen';

const GET_CONVERSATION = gql`
    query Conversation($conversationId: ID!)
    {
        conversation(id: $conversationId)
        {
            conversation
            {
                _id
                summary
                dialogue
                {
                    agentName
                    text
                }
                location
                {
                    resizedImageInteriorFilename
                }
                scenario
                {
                    imageFilename
                }
                initiatingAgent
                {
                    agentLocation
                    {
                        location
                        {
                            resizedImageInteriorFilename
                        }
                        scenario
                        {
                            imageFilename
                        }
                    }
                }
                agents
                {
                    _id
                    name
                    agentDescription
                    {
                        portraitFilename
                    }
                }
            }
        },
    }`

const Conversation = (props) => {

    let { id } = useParams();

    const {loading, error, data} = useQuery(GET_CONVERSATION, {
        variables: {conversationId: id}
    });

    if (loading) {
        return (
            <ReactLoading type="spinningBubbles" color="#444" />
        );
    }
    else if (error) {
        return (
            <p>Something went wrong...</p>
        );
    }
    else {
        return (
            <>
            {props.isChat ? (
                <ChatScreen conversation={data.conversation.conversation}/>
            ) : (
                <ConversationScreen conversation={data.conversation.conversation}/>
            )}
            </>
        )
    }
}

export default Conversation;