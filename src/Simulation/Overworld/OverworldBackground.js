import React from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import GameWindowSize from '../../GameWindowSize';
import OverworldLocations from './OverworldLocations';
import OverworldCharacters from './OverworldCharacters';

const OverworldBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    //Get teh location of the outside cahracters
    let currentY = 0
    if (props.scenario.locations.length >= 9) {
        currentY = gameWindowSize.height * 0.8
    }
    else {
        currentY = gameWindowSize.height * 0.72
    }

    return (
        <Stage 
            width={gameWindowSize.width} 
            height={gameWindowSize.height}
            options={{ backgroundColor: 0xff00ff, antialias: true }}>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.scenario.imageFilename}`}
                x={gameWindowSize.width / 2}
                y={gameWindowSize.height / 2}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                anchor={{ x: 0.5, y: 0.5 }} />

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
        
            <Container>
                <Text text="Hello World" anchor={{ x: 0, y: 0 }} />
            </Container>
        </Stage>
      );
}

export default OverworldBackground;