import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GeneralTab from './GeneralTab';

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
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
}

export default AgentScreen