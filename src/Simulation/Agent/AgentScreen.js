import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import GeneralTab from './GeneralTab';
import DescriptionTab from './DescriptionTab';
import GoalsTab from './GoalsTab';
import PlannedActivitiesTab from './PlannedActivitiesTab';
import ConversationTab from './ConversationTab';
import JournalEntriesTab from './JournalEntriesTab';

const AgentScreen = (props) => {

    return (

        <Tabs>
            <Tab eventKey="home" title="Home">
                <GeneralTab agent={props.agent} />
            </Tab>
            <Tab eventKey="description" title="Description">
                <DescriptionTab agent={props.agent} />
            </Tab>
            <Tab eventKey="goals" title="Goals">
                <GoalsTab agent={props.agent} />
            </Tab>
            <Tab eventKey="plannedActivities" title="Tasks">
                <PlannedActivitiesTab agent={props.agent} />
            </Tab>
            <Tab eventKey="conversations" title="Conversations">
                <ConversationTab agent={props.agent} />
            </Tab>
            <Tab eventKey="journalEntries" title="Journal">
                <JournalEntriesTab agent={props.agent} />
            </Tab>
        </Tabs>
    );
}

export default AgentScreen