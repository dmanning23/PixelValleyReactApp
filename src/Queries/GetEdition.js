import { gql } from '@apollo/client'

export const GET_EDITION = gql`
    query Edition($editionId: ID!) {
        edition(id: $editionId)
        {
            edition
            {
                date
                articles
                {
                    headline
                    body
                }
            }
        }
    }`

