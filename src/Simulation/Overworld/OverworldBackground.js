import React from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import bg from "../../bg.png"
import GameWindowSize from '../../GameWindowSize';
import OverworldLocations from './OverworldLocations';

const OverworldBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    return (
        <Stage 
            width={gameWindowSize.width} 
            height={gameWindowSize.height}
            options={{ backgroundColor: 0xff00ff, antialias: true }}>
            <Sprite
                image={bg}
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
        
            <Container>
                <Text text="Hello World" anchor={{ x: 0, y: 0 }} />
            </Container>
        </Stage>
      );
}

export default OverworldBackground;