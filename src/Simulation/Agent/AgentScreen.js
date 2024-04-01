import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GeneralTab from './GeneralTab';
import DescriptionTab from './DescriptionTab';

const AgentScreen = (props) => {

    return (
        <Tabs>
            <TabList>
                <Tab>General</Tab>
                <Tab>Description</Tab>
            </TabList>

            <TabPanel>
                <GeneralTab agent={props.agent}/>
            </TabPanel>
            <TabPanel>
                <DescriptionTab agent={props.agent}/>
            </TabPanel>
        </Tabs>
    );
}

export default AgentScreen