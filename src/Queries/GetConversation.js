import {gql, useQuery} from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import ConversationBackground from '../Simulation/Conversation/ConversationBackground';
import { useParams } from 'react-router-dom';

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
            <div>
                <ConversationBackground conversation={data.conversation.conversation}/>
            </div>
        )
    }
}

export default Conversation;