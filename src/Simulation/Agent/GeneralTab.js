import React from 'react';
import Activity from './Activity';

const GeneralTab = (props) => {

    return (
        <div>
            <div>
                <img src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.portraitFilename}`}
                        style={{height: "50%", width: "50%"}}
                        width={256}
                        height={384} />
            </div>
            <div className="border border-dark">
                <h3>Status:</h3>
                <h3 style={{ padding:'4px'}}>{props.agent.emoji}</h3>
                <p className="text-light" style={{fontWeight: 600}}>{props.agent.status}</p>
            </div>
            <div className="border border-dark">
                <h3>Current Activity:</h3>
                <Activity currentActivity={props.agent.currentActivity}/>
            </div>
            <div>
                {props.agent.description}
            </div>
        </div>
    );
}

export default GeneralTab