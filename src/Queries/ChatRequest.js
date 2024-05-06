import { gql } from '@apollo/client'

export const CHAT_REQUEST = gql`
    mutation ChatRequest($scenarioId: ID!, $locationId: ID, $agentIds: [ID!]!)
    {
        chatRequest(
            scenarioId: $scenarioId
            locationId: $locationId
            agentIds: $agentIds) 
        {
            success
            errors
            conversation 
            {
                _id
                summary
                dialogue
                {
                    agentName
                    text
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
        }
    }`
