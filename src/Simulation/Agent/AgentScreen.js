import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import GeneralTab from './GeneralTab';
import DescriptionTab from './DescriptionTab';
import GoalsTab from './GoalsTab';

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
    </Tabs>
    );
}

export default AgentScreen