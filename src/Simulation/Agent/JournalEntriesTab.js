import React from 'react';
import JournalEntryButton from './JournalEntryButton';

const JournalEntriesTab = (props) => {

    return (
        <div>
            {props.agent.journalEntries.map((data, index) => {
                return (
                    <div key={index} className="border border-dark">
                        <JournalEntryButton journalEntry={data} />
                    </div>
                );
            })}
        </div>
    );
}

export default JournalEntriesTab