import {gql, useQuery} from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import AgentScreen from '../Simulation/Agent/AgentScreen';

const GET_AGENT = gql`
    query Agent($agentId: ID!)
    {
        agent(id: $agentId)
        {
            success
            agent 
            {
                _id
                name
                age
                gender
                status
                emoji
                description
                agentDescription
                {
                    eyes
                    hair
                    clothing
                    distinguishingFeatures
                    portraitFilename
                    iconFilename
                    resizedIconFilename
                    chibiFilename
                    resizedChibiFilename
                }
                goals
                {
                    _id
                    title
                    timeFrame
                    description
                }
                plannedActivities
                {
                    _id
                    day
                    description
                    startDateTime
                    endDateTime
                    timeFrame
                    priority
                }
                inventory
                {
                    _id
                    name
                    description
                    emoji
                    status
                    canInteract
                    canBePickedUp
                    locationId
                }
                currentActivity
                {
                    description
                    timeFrame
                    startDateTime
                    endDateTime
                }
                conversations
                {
                    _id
                    summary
                }
            }
        },
    }`

const Agent = (props) => {

    const {loading, error, data} = useQuery(GET_AGENT, {
        variables: {agentId: props.agentId}
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
                <AgentScreen agent={data.agent.agent}/>
            </div>
        )
    }
}

export default Agent;