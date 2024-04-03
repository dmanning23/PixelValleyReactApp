import React from 'react';
import GameWindowSize from '../../GameWindowSize';
import OverworldLocations from './OverworldLocations';
import OverworldCharacters from './OverworldCharacters';
import OverworldLabel from './OverworldLabel';

const OverworldBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    //Get teh location of the outside cahracters
    let currentY = 0
    if (props.scenario.locations.length >= 9) {
        currentY = gameWindowSize.height * 0.72
    }
    else {
        currentY = gameWindowSize.height * 0.6
    }

    //TODO: clean up css, don't use inline
    const divStyle = {
        position: 'relative'
    };

    const backgroundStyle = {
        position: 'absolute',
        zIndex: 1,
        //filter: 'grayscale(20%) brightness(45%) blur(2px)'
    };

    return (
        <div  style={divStyle}>
            <div>
                <img
                    src={`https://dyifmflum502e.cloudfront.net/${props.scenario.imageFilename}`}
                    width={gameWindowSize.width}
                    height={gameWindowSize.height}
                    style={backgroundStyle}>
                </img>
                <div className="d-flex justify-content-center container pt-4">
                    <OverworldLabel
                        scenario={props.scenario} />
                </div>
            </div>
            <OverworldLocations 
                scenario={props.scenario} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier}
                heightMultiplier={gameWindowSize.heightMultiplier} />
            <OverworldCharacters
                scenario={props.scenario} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier}
                heightMultiplier={gameWindowSize.heightMultiplier} 
                y={currentY}/>
        </div>
      );
}

export default OverworldBackground;