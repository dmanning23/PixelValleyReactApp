import {gql, useQuery} from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import OverworldBackground from '../Simulation/Overworld/OverworldBackground';

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
                    }
                    name
                    status
                    emoji
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
            }
        }
    }`

const Overworld = (props) => {
    const {loading, error, data} = useQuery(GET_OVERWORLD, {
        variables: {scenarioId: props.scenarioId}
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
                <OverworldBackground scenario={data.scenario.scenario}/>
            </div>
        )
    }
}

export default Overworld;