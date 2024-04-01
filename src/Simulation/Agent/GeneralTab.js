import React from 'react';

const GeneralTab = (props) => {

    return (
        <div>
            <img src={`https://dyifmflum502e.cloudfront.net/${props.agent.agentDescription.portraitFilename}`}
                        style={{height: "50%", width: "50%"}}
                        width={256}
                        height={384} />
            <div>
                {props.agent.description}
            </div>
        </div>
    );
}

export default GeneralTab