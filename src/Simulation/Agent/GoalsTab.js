import React from 'react';
  
const GoalsTab = (props) => {

    return (
        <div>
            {props.agent.goals.map((data, index) => {
                return (
                    <div className="border border-dark" key={index}>
                        <p>Goal: {data.title}</p>
                        <p>Time Frame: {data.timeFrame}</p>
                        <p>{data.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GoalsTab