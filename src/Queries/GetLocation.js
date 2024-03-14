import {gql, useQuery} from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';
import InteriorBackground from '../Simulation/Interior/InteriorBackground';
import { useParams } from 'react-router-dom';

const GET_LOCATION = gql`
    query Location($locationId: ID!)
    {
        location(id: $locationId)
        {
            success
            location 
            {
                _id
                description
                resizedImageInteriorFilename
                name
                agents
                {
                    _id
                    agentDescription
                    {
                        iconFilename
                    }
                    name
                    status
                    emoji
                }
                locations
                {
                    _id
                    imageInteriorFilename
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
        },
    }`

const Location = (props) => {

    let { id } = useParams();

    const {loading, error, data} = useQuery(GET_LOCATION, {
        variables: {locationId: id}
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
                <InteriorBackground location={data.location.location}/>
            </div>
        )
    }
}

export default Location;