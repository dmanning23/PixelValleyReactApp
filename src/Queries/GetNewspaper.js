import { gql } from '@apollo/client'

export const GET_NEWSPAPER = gql`
    query Newspaper($newspaperId: ID!) {
        newspaper(id: $newspaperId)
        {
            newspaper
            {
                name
                description
                editions
                {
                    _id
                    date
                }
            }
        }
    }`

