
const Activity = (props) => {
    return (
        <div>
            <p>Start: {props.currentActivity.startDateTime}</p>
            <p>Time Frame: {props.currentActivity.timeFrame}</p>
            <p>{props.currentActivity.description}</p>
        </div>
    );
}

export default Activity;