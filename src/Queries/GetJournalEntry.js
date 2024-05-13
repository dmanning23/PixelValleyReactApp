import { gql, useQuery } from '@apollo/client'
import React from 'react';
import ReactLoading from 'react-loading';

const GET_JOURNALENTRY = gql`
    query JournalEntry($journalEntryId: ID!) {
        journalEntry(id: $journalEntryId)
        {
            success
            journalEntry
            {
                text
                summary
                dateTime
            }
        }
    }`

const JournalEntry = (props) => {

    const { loading, error, data } = useQuery(GET_JOURNALENTRY, {
        variables: { journalEntryId: props.journalEntryId }
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
                <h4>{data.journalEntry.journalEntry.dateTime}</h4>
                <h3>{data.journalEntry.journalEntry.summary}</h3>
                <p>{data.journalEntry.journalEntry.text}</p>
            </div>
        )
    }
}

export default JournalEntry;