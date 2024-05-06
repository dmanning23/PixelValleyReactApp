import { gql } from '@apollo/client'

export const CHAT_RESPONSE = gql`
    mutation ChatResponse($conversationId: ID!, $playerQuestion: String)
    {
        chatResponse(
            conversationId: $conversationId
            playerQuestion: $playerQuestion)
        {
            success
            errors
            dialogue 
            {
                agentName
                text
            }
        }
    }`
