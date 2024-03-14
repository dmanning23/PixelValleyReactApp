import React from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import GameWindowSize from '../../GameWindowSize';

const InteriorBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    return (
        <Stage 
            width={gameWindowSize.width} 
            height={gameWindowSize.height}
            options={{ backgroundColor: 0xff00ff, antialias: true }}>
            <Sprite
                image={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageInteriorFilename}`}
                x={gameWindowSize.width / 2}
                y={gameWindowSize.height / 2}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                anchor={{ x: 0.5, y: 0.5 }} />

            <Container>
                <Text text="Hello World" anchor={{ x: 0, y: 0 }} />
            </Container>
        </Stage>
      );
}

export default InteriorBackground;