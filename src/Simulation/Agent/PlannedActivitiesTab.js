import React from 'react';
import Activity from './Activity';
  
const PlannedActivitiesTab = (props) => {

    return (
        <div>
            {props.agent.plannedActivities.map((data, index) => {
                return (
                    <div  key={index}  className="border border-dark">
                        <Activity currentActivity={data} />
                    </div>
                );
            })}
        </div>
    );
}

export default PlannedActivitiesTab