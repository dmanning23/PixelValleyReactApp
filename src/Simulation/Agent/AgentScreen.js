import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import GeneralTab from './GeneralTab';
import DescriptionTab from './DescriptionTab';
import GoalsTab from './GoalsTab';
import PlannedActivitiesTab from './PlannedActivitiesTab';

const AgentScreen = (props) => {

    return (

    <Tabs>
        <Tab eventKey="home" title="Home">
            <GeneralTab agent={props.agent}/>
        </Tab>
        <Tab eventKey="description" title="Description">
            <DescriptionTab agent={props.agent}/>
        </Tab>
        <Tab eventKey="goals" title="Goals">
            <GoalsTab agent={props.agent}/>
        </Tab>
        <Tab eventKey="plannedActivities" title="Tasks">
            <PlannedActivitiesTab agent={props.agent}/>
        </Tab>
    </Tabs>
    );
}

export default AgentScreen