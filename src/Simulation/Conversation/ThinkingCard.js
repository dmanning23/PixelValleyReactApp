import React from 'react';
import ReactLoading from 'react-loading';

const ThinkingCard = (props) => {

    let border = 100;
    let left = border; // X position
    let top = props.height * 0.75; // Y position
    let width = props.width - (left * 2); // Width
    let height = props.height - top - (border / 2); // Height

    return (
        <div style={{ 
            border: '2px solid #fff', // Border color and width
            borderRadius: '10px', // Rounded corners
            padding: '20px', // Optional padding
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // 75% transparent white background
            position: 'absolute', // Positioning type
            left: `${left}px`, // X position
            top: `${top}px`, // Y position
            width: `${width}px`, // Width
            height: `${height}px`, // Height
            zIndex: 2
            }}>
            <ReactLoading type="spinningBubbles" color="#444" />
        </div>
    );
};

export default ThinkingCard;
