import React from 'react';

const ChatCard = (props) => {

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
            <form onSubmit={props.handlePlayerText}>
                <label htmlFor="playerTextArea">Player:</label>
                <textarea id="playerTextArea" className="playerText"
                    style={{ 
                        width: "100%"
                    }}/>
                <button
                    type="button submit" 
                    className="btn btn-secondary btn-sm"
                    style={{ 
                        position: 'absolute', // Positioning type
                        right: `${border / 4}px`, // X position
                        bottom: `${border / 8}px`, // Y position
                        zIndex: 3
                    }}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default ChatCard;
