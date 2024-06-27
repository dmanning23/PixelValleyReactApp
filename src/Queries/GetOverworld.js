import { gql, useQuery } from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import OverworldBackground from '../Simulation/Overworld/OverworldBackground';
import { useParams } from 'react-router-dom';

const GET_OVERWORLD = gql`
    query Scenario($scenarioId: ID!) {
        scenario(id: $scenarioId)
        {
            success
            scenario
            {
                imageFilename
                name
                description
                currentDateTime
                outsideAgents
                {
                    _id
                    agentDescription
                    {
                        resizedIconFilename
                        portraitFilename
                    }
                    name
                    status
                    emoji
                    description
                }
                locations
                {
                    _id
                    resizedImageFilename
                    name
                    allAgents
                    {
                        _id
                        agentDescription
                        {
                            resizedChibiFilename
                        }
                        name
                        status
                        emoji
                    }
                }
                newspapers
                {
                    _id
                    name
                    description
                }
            }
        }
    }`

const Overworld = (props) => {

    let { id } = useParams();

    const { loading, error, data } = useQuery(GET_OVERWORLD, {
        variables: { scenarioId: id }
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
            <OverworldBackground scenario={data.scenario.scenario} />
        )
    }
}

export default Overworld;