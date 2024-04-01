import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AgentScreen = (props) => {

    return (
        <Tabs>
            <TabList>
                <Tab>General</Tab>
                <Tab>Description</Tab>
            </TabList>

            <TabPanel>
            <img src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.portraitFilename}`}
                        style={{height: "50%", width: "50%"}}
                        width={256}
                        height={384} />
            <div>
                {props.agent.description}
            </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
}

export default AgentScreen