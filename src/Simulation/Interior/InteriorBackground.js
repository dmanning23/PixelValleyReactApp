import React from 'react';
import GameWindowSize from '../../GameWindowSize';
import InteriorCharacters from './InteriorCharacters';

const InteriorBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    let currentY = gameWindowSize.height * 0.22

    const divStyle = {
        position: 'relative'
    };

    const backgroundStyle = {
        position: 'absolute',
        zIndex: 1
    };

    return (
        <div style={divStyle}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageInteriorFilename}`}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                style={backgroundStyle}>
            </img>
            <InteriorCharacters
                location={props.location} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier * 0.83}
                heightMultiplier={gameWindowSize.heightMultiplier * 0.83} 
                y={currentY}/>
        </div>
      );
}

export default InteriorBackground;